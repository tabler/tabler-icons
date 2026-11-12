import fs from 'fs';
import { getRollupConfig, iconsDts } from '../../.build/rollup-plugins.mjs';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const outputFileName = 'tabler-icons-astro';
const inputs = ['./src/tabler-icons-astro.ts'];

// Astro's runtime helpers stay external — they are resolved by the
// consumer's Astro/Vite pipeline via the `astro` peer dependency.
const external = [/^astro(\/|$)/];

const bundles = [
  {
    format: 'cjs',
    extension: 'cjs',
    inputs,
    external,
  },
  {
    format: 'esm',
    inputs,
    preserveModules: true,
    extension: 'mjs',
    external,
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    inputs: ['./src/dynamic-imports.ts'],
    external: [...external, /src\/icons/],
    // The icon modules are built by the bundle above; point the imports at
    // its output instead of the `.ts` sources.
    paths: (id) => id.replace(/^.*\/src\/icons\/(.+)\.ts$/, './icons/$1.mjs'),
  },
];

/**
 * Declarations for the subpath entries of the `exports` map. Every icon module
 * has the same shape, so the per-icon subpaths
 * (`@tabler/icons-astro/icons/home`) all resolve to the one `icon.d.mts`
 * instead of shipping a declaration per icon.
 */
const subpathDts = {
  'icon.d.mts': `\
import type { AstroComponent } from './${outputFileName}.js';

declare const Icon: AstroComponent;
export default Icon;
`,
  'icons-list.d.mts': `\
/** Names of all icons, e.g. \`home\` or \`home-filled\`. */
declare const iconsList: string[];
export default iconsList;
`,
  'dynamic-imports.d.mts': `\
/** Lazy loaders of the icon modules, keyed by icon name (see \`icons-list\`). */
declare const dynamicImports: Record<string, () => Promise<typeof import('./icon.mjs')>>;
export default dynamicImports;
`,
};

/**
 * The namespaces re-exported from the main entry are deprecated in favour of
 * the subpath entries. `export * as` cannot carry JSDoc through the
 * declaration bundle, so the tag is added to the bundled namespaces.
 */
const deprecatedNamespaces = {
  index:
    'Referencing `icons` loads every icon. Import icons by name, from `@tabler/icons-astro/icons/<icon-name>`, or load them by name with `@tabler/icons-astro/dynamic-imports`. Will be removed from the main entry in the next major version.',
  iconsList:
    'Import the list from `@tabler/icons-astro/icons-list` instead. Will be removed from the main entry in the next major version.',
};

const subpathsDts = () => ({
  name: 'subpaths-dts',
  renderChunk(code) {
    for (const [name, message] of Object.entries(deprecatedNamespaces)) {
      const declaration = `declare namespace ${name} {`;
      if (!code.includes(declaration)) {
        this.error(`Namespace "${name}" not found in the declaration bundle`);
      }
      code = code.replace(declaration, `/** @deprecated ${message} */\n${declaration}`);
    }
    return { code, map: null };
  },
  generateBundle() {
    for (const [fileName, source] of Object.entries(subpathDts)) {
      this.emitFile({ type: 'asset', fileName, source });
    }
  },
});

export default [
  {
    input: inputs[0],
    external,
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [iconsDts(), dts(), subpathsDts()],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {}),
];
