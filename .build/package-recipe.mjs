/**
 * Package recipe: the shared way a framework package is produced from its
 * package descriptor (`packages/<name>/package.recipe.mjs`), from generated
 * sources to published bundles, and the `exports` map it must declare. See
 * GLOSSARY.md.
 *
 * A package descriptor holds only what differs between framework packages:
 *
 * @typedef {object} PackageDescriptor
 * @property {string} name package directory name inside `packages/`, e.g.
 *   `icons-react`
 * @property {(icon: object) => string} componentTemplate source of a single
 *   icon module (see `buildJsIcons`)
 * @property {'pascal' | 'kebab'} [moduleNaming] file names of the icon
 *   modules, and so of the `icons/*` subpaths: `IconArrowLeft` or `arrow-left`
 * @property {boolean} [key] add a `key` attribute to every icon node
 * @property {boolean} [pascalCase] rename `stroke-width` to `strokeWidth` in
 *   icon nodes
 * @property {Array<string | RegExp>} external imports left to the consumer,
 *   e.g. the framework itself
 * @property {string} iconDts declarations of a single icon module, behind
 *   `icons/*`; `./<entry>.js` stands for the main declaration bundle
 * @property {string} [iconsNamespaceCost] what referencing the deprecated
 *   `icons` namespace costs, in the deprecation message
 */
import fs from 'fs';
import path from 'path';
import dts from 'rollup-plugin-dts';
import { buildJsIcons } from './build-icons.mjs';
import { getRollupConfig, iconsDts } from './rollup-plugins.mjs';

const PACKAGES_DIR = path.resolve(import.meta.dirname, '../packages');

const entryName = ({ name }) => `tabler-${name}`;

/**
 * Generate the sources of the package: icon modules, icons index, aliases,
 * icons list, dynamic imports and the stand-in the declarations are built
 * from.
 *
 * @param {PackageDescriptor} descriptor
 */
export const generateSources = ({ name, componentTemplate, moduleNaming, key, pascalCase }) =>
  buildJsIcons({
    name,
    componentTemplate,
    extension: 'ts',
    moduleNaming,
    key,
    pascalCase,
    dtsEntry: true,
  });

/**
 * The `exports` map the package must declare. The root keeps resolving to
 * CommonJS in Node (see adr/0001-package-root-resolves-to-cjs-in-node.md).
 *
 * @param {PackageDescriptor} descriptor
 */
export const expectedExports = (descriptor) => {
  const entry = entryName(descriptor);
  const icon = { types: './dist/icon.d.mts', default: './dist/esm/icons/*.mjs' };

  return {
    '.': {
      types: `./dist/${entry}.d.ts`,
      module: `./dist/esm/${entry}.mjs`,
      node: `./dist/cjs/${entry}.cjs`,
      import: `./dist/esm/${entry}.mjs`,
      default: `./dist/cjs/${entry}.cjs`,
    },
    './icons/*': icon,
    './icons-list': { types: './dist/icons-list.d.mts', default: './dist/esm/icons-list.mjs' },
    './dynamic-imports': {
      types: './dist/dynamic-imports.d.mts',
      default: './dist/esm/dynamic-imports.mjs',
    },
    './dist/esm/icons/*.mjs': icon,
    './dist/*': './dist/*',
    './package.json': './package.json',
  };
};

/**
 * Declarations of the subpath entries, and the `@deprecated` tags of the
 * namespaces re-exported from the main entry. `export * as` cannot carry
 * JSDoc through the declaration bundle, so the tags are added to the bundled
 * namespaces.
 *
 * @param {PackageDescriptor} descriptor
 */
const subpathsDts = ({ name, moduleNaming = 'pascal', iconDts, iconsNamespaceCost }) => {
  const pkgName = `@tabler/${name}`;
  const iconName = moduleNaming === 'pascal' ? '<IconName>' : '<icon-name>';
  const files = {
    'icon.d.mts': iconDts,
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
  const deprecatedNamespaces = {
    index: `Referencing \`icons\` ${iconsNamespaceCost ?? 'pulls every icon into the bundle'}. Import icons by name, from \`${pkgName}/icons/${iconName}\`, or load them by name with \`${pkgName}/dynamic-imports\`. Will be removed from the main entry in the next major version.`,
    iconsList: `Import the list from \`${pkgName}/icons-list\` instead. Will be removed from the main entry in the next major version.`,
  };

  return {
    name: 'subpaths-dts',
    renderChunk(code) {
      for (const [namespace, message] of Object.entries(deprecatedNamespaces)) {
        const declaration = `declare namespace ${namespace} {`;
        if (!code.includes(declaration)) {
          this.error(`Namespace "${namespace}" not found in the declaration bundle`);
        }
        code = code.replace(declaration, `/** @deprecated ${message} */\n${declaration}`);
      }
      return { code, map: null };
    },
    generateBundle() {
      for (const [fileName, source] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source });
      }
    },
  };
};

/**
 * Rollup configuration of the package: the declaration bundle with the
 * subpath declarations, the CommonJS bundle, the per-module ES build and the
 * dynamic imports.
 *
 * @param {PackageDescriptor} descriptor
 */
export const rollupConfig = (descriptor) => {
  const { name, external } = descriptor;
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(PACKAGES_DIR, name, 'package.json'), 'utf-8'),
  );
  const entry = entryName(descriptor);
  const inputs = [`./src/${entry}.ts`];

  const bundles = [
    { format: 'cjs', extension: 'cjs', inputs, external },
    { format: 'esm', extension: 'mjs', preserveModules: true, inputs, external },
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

  return [
    {
      input: inputs[0],
      output: [{ file: `dist/${entry}.d.ts`, format: 'es' }],
      external,
      plugins: [
        iconsDts(),
        dts({ compilerOptions: { preserveSymlinks: false } }),
        subpathsDts(descriptor),
      ],
    },
    ...getRollupConfig(pkg, entry, bundles, {}),
  ];
};
