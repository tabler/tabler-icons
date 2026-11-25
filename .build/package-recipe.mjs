/**
 * Package recipe: the shared way every framework package is produced from its
 * package descriptor (`packages/<name>/package.recipe.mjs`): the sources it
 * generates, the `exports` map it must declare and, for the default package
 * layout, its rollup configuration. See GLOSSARY.md.
 *
 * What differs between the published shapes of the packages is a package
 * layout (`LAYOUTS` below); a package descriptor picks one and holds only
 * what differs between packages of the same layout.
 *
 * @typedef {object} PackageDescriptor
 * @property {string} name package directory name inside `packages/`, e.g.
 *   `icons-react`
 * @property {keyof typeof LAYOUTS} [layout] package layout, `default` when
 *   omitted
 * @property {(icon: object) => string} componentTemplate source of a single
 *   icon module (see `buildJsIcons`)
 * @property {'pascal' | 'kebab'} [moduleNaming] file names of the icon
 *   modules, and so of the `icons/*` subpaths: `IconArrowLeft` or `arrow-left`
 * @property {boolean} [key] add a `key` attribute to every icon node
 * @property {boolean} [pascalCase] rename `stroke-width` to `strokeWidth` in
 *   icon nodes
 * @property {Array<string | RegExp>} [external] default layout: imports left
 *   to the consumer, e.g. the framework itself
 * @property {string} [iconDts] default layout: declarations of a single icon
 *   module, behind `icons/*`; `./<entry>.js` stands for the main declaration
 *   bundle
 */
import fs from 'fs';
import path from 'path';
import dts from 'rollup-plugin-dts';
import { buildJsIcons } from './build-icons.mjs';
import { getRollupConfig, iconsDts, iconsListDts, subpathsDts } from './rollup-plugins.mjs';

const PACKAGES_DIR = path.resolve(import.meta.dirname, '../packages');

const entryName = ({ name }) => `tabler-${name}`;

/** An `exports` condition object with the same targets under two conditions. */
const both = (types, js) => ({ types, default: js });

/**
 * Package layouts: the published shapes framework packages come in. Each
 * gives the `buildJsIcons` options it fixes and the `exports` map it
 * declares (for an entry name like `tabler-icons-react`).
 */
const LAYOUTS = {
  /**
   * React, Preact, Vue, Astro: one CommonJS bundle, per-module ES build, one
   * shared declaration for the `icons/*` subpaths. The root keeps resolving
   * to CommonJS in Node (see adr/0001-package-root-resolves-to-cjs-in-node.md).
   */
  default: {
    sources: { dtsEntry: true },
    exports: (entry) => {
      const icon = both('./dist/icon.d.mts', './dist/esm/icons/*.mjs');
      return {
        '.': {
          types: `./dist/${entry}.d.ts`,
          module: `./dist/esm/${entry}.mjs`,
          node: `./dist/cjs/${entry}.cjs`,
          import: `./dist/esm/${entry}.mjs`,
          default: `./dist/cjs/${entry}.cjs`,
        },
        './icons/*': icon,
        './icons-list': both('./dist/icons-list.d.mts', './dist/esm/icons-list.mjs'),
        './dynamic-imports': both('./dist/dynamic-imports.d.mts', './dist/esm/dynamic-imports.mjs'),
        './dist/esm/icons/*.mjs': icon,
        './dist/*': './dist/*',
        './package.json': './package.json',
      };
    },
  },

  /** Svelte 4 and Svelte 5: `.svelte` components shipped as source. */
  svelte: {
    sources: {
      extension: 'svelte',
      moduleNaming: 'kebab',
      importExtension: true,
      key: false,
      dynamicImports: false,
    },
    exports: (entry) => {
      const root = {
        types: `./dist/${entry}.d.ts`,
        svelte: `./dist/${entry}.js`,
        default: `./dist/${entry}.js`,
      };
      return {
        '.': root,
        './icons': root,
        './icons-list': both('./dist/icons-list.d.ts', './dist/icons-list.js'),
        './icons/*': {
          types: './dist/icons/*.svelte.d.ts',
          svelte: './dist/icons/*.svelte',
          default: './dist/icons/*.svelte',
        },
      };
    },
  },

  /** Solid: JSX source for Solid's compiler, plus ES and CommonJS bundles. */
  solid: {
    sources: { key: false, dynamicImports: false },
    exports: (entry) => {
      const types = `./dist/types/${entry}.d.ts`;
      const esm = both(types, `./dist/esm/${entry}.js`);
      const cjs = both(types, `./dist/cjs/${entry}.cjs`);
      return {
        '.': {
          solid: `./dist/source/${entry}.jsx`,
          import: esm,
          browser: esm,
          require: cjs,
          node: cjs,
        },
      };
    },
  },

  /**
   * React Native: CommonJS and ES builds per module, with declarations for
   * both (see adr/0002-react-native-has-its-own-bundling.md).
   */
  'react-native': {
    sources: { pascalCase: true, dtsEntry: true, dynamicImports: false },
    exports: (entry) => ({
      '.': {
        require: both(`./dist/cjs/${entry}.d.cts`, `./dist/cjs/${entry}.cjs`),
        import: both(`./dist/${entry}.d.ts`, `./dist/esm/${entry}.mjs`),
      },
      './icons-list': {
        require: both('./dist/cjs/icons-list.d.cts', './dist/cjs/icons-list.cjs'),
        import: both('./dist/icons-list.d.ts', './dist/esm/icons-list.mjs'),
      },
      './*': {
        require: both('./dist/cjs/icons/*.d.cts', './dist/cjs/icons/*.cjs'),
        import: both('./dist/icons/*.d.ts', './dist/esm/icons/*.mjs'),
      },
    }),
  },

  /** Angular: an Angular Package Format build, without an `exports` map. */
  angular: {
    sources: { pascalCase: true, iconsList: false, dynamicImports: false },
    exports: () => undefined,
  },
};

const layoutOf = ({ layout = 'default' }) => {
  if (!LAYOUTS[layout]) {
    throw new Error(`Unknown package layout "${layout}"`);
  }
  return LAYOUTS[layout];
};

/**
 * Generate the sources of the package: icon modules, icons index, aliases
 * and, depending on the layout, the icons list, the dynamic imports and the
 * stand-in the declarations are built from.
 *
 * @param {PackageDescriptor} descriptor
 */
export const generateSources = (descriptor) => {
  const { name, componentTemplate, moduleNaming, key, pascalCase } = descriptor;
  const perPackage = Object.fromEntries(
    Object.entries({ moduleNaming, key, pascalCase }).filter(([, value]) => value !== undefined),
  );

  buildJsIcons({
    name,
    componentTemplate,
    extension: 'ts',
    ...layoutOf(descriptor).sources,
    ...perPackage,
  });
};

/**
 * The `exports` map the package must declare; `undefined` for a layout
 * without one.
 *
 * @param {PackageDescriptor} descriptor
 */
export const expectedExports = (descriptor) => layoutOf(descriptor).exports(entryName(descriptor));

/**
 * Declarations of the subpath entries and deprecation messages of the
 * namespaces re-exported from the main entry.
 *
 * @param {PackageDescriptor} descriptor
 */
const subpaths = ({ name, moduleNaming = 'pascal', iconDts }) => {
  const pkgName = `@tabler/${name}`;
  const iconName = moduleNaming === 'pascal' ? '<IconName>' : '<icon-name>';

  return subpathsDts({
    deprecatedNamespaces: {
      index: `Referencing \`icons\` pulls every icon into the bundle. Import icons by name, from \`${pkgName}/icons/${iconName}\`, or load them by name with \`${pkgName}/dynamic-imports\`. Will be removed from the main entry in the next major version.`,
      iconsList: `Import the list from \`${pkgName}/icons-list\` instead. Will be removed from the main entry in the next major version.`,
    },
    files: {
      'icon.d.mts': iconDts,
      'icons-list.d.mts': iconsListDts,
      'dynamic-imports.d.mts': `\
/** Lazy loaders of the icon modules, keyed by icon name (see \`icons-list\`). */
declare const dynamicImports: Record<string, () => Promise<typeof import('./icon.mjs')>>;
export default dynamicImports;
`,
    },
  });
};

/**
 * Rollup configuration of a package of the default layout: the declaration
 * bundle with the subpath declarations, the CommonJS bundle, the per-module
 * ES build and the dynamic imports. The other layouts are bundled by their
 * framework's own tooling.
 *
 * @param {PackageDescriptor} descriptor
 */
export const rollupConfig = (descriptor) => {
  if ((descriptor.layout ?? 'default') !== 'default') {
    throw new Error(`rollupConfig builds the default layout only, not "${descriptor.layout}"`);
  }
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
        subpaths(descriptor),
      ],
    },
    ...getRollupConfig(pkg, entry, bundles, {}),
  ];
};
