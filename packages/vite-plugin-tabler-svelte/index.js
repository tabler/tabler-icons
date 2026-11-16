import { readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { parse } from '@babel/parser';
import MagicString from 'magic-string';
import { preprocess } from 'svelte/compiler';

const packages = ['@tabler/icons-svelte', '@tabler/icons-svelte-runes'];
const pluginName = 'vite-plugin-tabler-svelte';

// Vite versions using esbuild append a cache key to excluded dependencies.
const metadataPath = (id) => id.replace(/\?v=[a-f0-9]+$/, '');

/**
 * Read only the published export metadata, never the icon components.
 * This preserves aliases and numeric/acronym names without guessing kebab case.
 * @param {string} entry
 * @param {(file: string) => void} watch
 */
async function readIcons(entry, watch) {
  const directory = path.dirname(entry);
  const icons = new Map();
  const visited = new Set();
  async function visit(file) {
    if (visited.has(file)) return;
    visited.add(file);
    watch(file);
    const ast = parse(await readFile(file, 'utf8'), { sourceType: 'module' });
    for (const node of ast.program.body) {
      if (node.type === 'ExportAllDeclaration') {
        const target = path.resolve(path.dirname(file), node.source.value);
        if (
          [path.join(directory, 'icons/index.js'), path.join(directory, 'aliases.js')].includes(
            target,
          )
        ) {
          await visit(target);
        }
      } else if (node.type === 'ExportNamedDeclaration' && node.source) {
        const target = path.resolve(path.dirname(file), node.source.value);
        if (
          path.dirname(target) !== path.join(directory, 'icons') ||
          !/^[a-z0-9-]+\.svelte$/.test(path.basename(target))
        )
          continue;
        for (const specifier of node.specifiers) {
          if (
            specifier.type === 'ExportSpecifier' &&
            specifier.local.type === 'Identifier' &&
            specifier.local.name === 'default' &&
            specifier.exported.type === 'Identifier' &&
            specifier.exported.name.startsWith('Icon')
          ) {
            icons.set(specifier.exported.name, target);
          }
        }
      }
    }
  }
  try {
    await visit(entry);
  } catch {
    // An unfamiliar package layout must retain the original import semantics.
    return new Map();
  }
  return icons;
}

/** @returns {import('vite').Plugin} */
export default function tablerSvelte() {
  /** @type {ReturnType<import('vite').ResolvedConfig['createResolver']>} */
  let resolveMetadata;
  /** @type {Map<string, Promise<Map<string, string>>>} */
  const indexes = new Map();

  return {
    name: pluginName,
    enforce: 'pre',
    config() {
      // Vite's dependency scanner reads source before transform hooks. Exclusion
      // applies to the root AND its subpaths, avoiding a stale barrel prebundle.
      return { optimizeDeps: { exclude: [...packages] } };
    },
    configResolved(config) {
      // Resolve metadata without invoking build plugins that eagerly load barrels.
      resolveMetadata = config.createResolver?.();
      const ownIndex = config.plugins.findIndex((p) => p.name === pluginName);
      const svelteIndex = config.plugins.findIndex((p) => p.name.startsWith('vite-plugin-svelte'));
      if (svelteIndex !== -1 && svelteIndex < ownIndex) {
        throw new Error(`${pluginName}: place tablerSvelte() before svelte() or sveltekit().`);
      }
      for (const include of config.optimizeDeps.include || []) {
        const dependency = include.split('>').at(-1).trim();
        if (packages.some((name) => dependency === name || dependency.startsWith(`${name}/`))) {
          throw new Error(
            `${pluginName}: remove ${include} from optimizeDeps.include; Tabler packages must be excluded from prebundling.`,
          );
        }
      }
    },
    buildStart() {
      indexes.clear();
    },
    watchChange() {
      indexes.clear();
    },
    async transform(code, id) {
      if (
        id.includes('\0') ||
        id.includes('?') ||
        /[/\\]node_modules[/\\]/.test(id) ||
        !/\.(?:svelte|[cm]?[jt]sx?)$/.test(id) ||
        !packages.some((name) => code.includes(name))
      )
        return null;
      let changed = false;
      const rewrite = async (source, typescript, jsx = false) => {
        let ast;
        try {
          ast = parse(source, {
            sourceType: 'module',
            plugins: [...(typescript ? ['typescript'] : []), ...(jsx ? ['jsx'] : [])],
          });
        } catch {
          return undefined;
        }
        const output = new MagicString(source);
        for (const node of ast.program.body) {
          if (
            node.type !== 'ImportDeclaration' ||
            !packages.includes(node.source.value) ||
            node.importKind === 'type' ||
            node.importKind === 'typeof' ||
            !node.specifiers.length ||
            node.attributes?.length ||
            node.assertions?.length
          )
            continue;
          if (
            !node.specifiers.every(
              (s) =>
                s.type === 'ImportSpecifier' &&
                s.imported.type === 'Identifier' &&
                s.importKind !== 'type' &&
                s.importKind !== 'typeof',
            )
          )
            continue;
          const resolve = async (source) => {
            if (!resolveMetadata) return this.resolve(source, id, { skipSelf: true });
            const resolvedId = await resolveMetadata(source, id);
            return resolvedId ? { id: resolvedId } : null;
          };
          const resolved = await resolve(node.source.value);
          if (
            !resolved ||
            resolved.external ||
            resolved.id.includes('\0') ||
            metadataPath(resolved.id).includes('?')
          )
            continue;
          const entry = metadataPath(resolved.id);
          if (!indexes.has(entry))
            indexes.set(
              entry,
              readIcons(entry, (file) => this.addWatchFile(file)),
            );
          const icons = await indexes.get(entry);
          const replacements = [];
          for (const specifier of node.specifiers) {
            // Narrowed by the all-specifiers check above; repeat for JS type checking.
            if (specifier.type !== 'ImportSpecifier' || specifier.imported.type !== 'Identifier')
              break;
            const target = icons.get(specifier.imported.name);
            if (!target) break;
            const subpath = `${node.source.value}/icons/${path.basename(target, '.svelte')}`;
            const direct = await resolve(subpath);
            if (!direct || direct.external) break;
            try {
              if ((await realpath(metadataPath(direct.id))) !== (await realpath(target))) break;
            } catch {
              break;
            }
            replacements.push(`import ${specifier.local.name} from ${JSON.stringify(subpath)};`);
          }
          // All-or-nothing per declaration: mixed utilities, types, unknown names,
          // namespace/default imports and unavailable subpaths remain untouched.
          if (replacements.length !== node.specifiers.length) continue;
          const comments = (ast.comments || [])
            .filter((c) => c.start >= node.start && c.end <= node.end)
            .map((c) => source.slice(c.start, c.end));
          output.overwrite(node.start, node.end, [...comments, ...replacements].join('\n'));
        }
        if (!output.hasChanged()) return undefined;
        changed = true;
        return {
          code: output.toString(),
          map: output.generateMap({ hires: true, source: id, includeContent: true }),
        };
      };
      if (id.endsWith('.svelte')) {
        const result = await preprocess(
          code,
          {
            script: ({ content, attributes }) => {
              if (
                attributes.src ||
                (attributes.lang && !['js', 'ts', 'typescript'].includes(attributes.lang))
              )
                return;
              return rewrite(content, ['ts', 'typescript'].includes(attributes.lang));
            },
          },
          { filename: id },
        );
        return changed ? { code: result.code, map: result.map } : null;
      }
      return (await rewrite(code, /\.[cm]?tsx?$/.test(id), /\.[jt]sx$/.test(id))) || null;
    },
  };
}
