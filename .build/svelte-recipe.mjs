/**
 * Package recipe of the Svelte framework packages (`@tabler/icons-svelte` for
 * Svelte 4, `@tabler/icons-svelte-runes` for Svelte 5): the icon sources they
 * generate and the `exports` map they must declare. Their bundles are built by
 * `svelte-package`, so this recipe has no rollup part. See GLOSSARY.md.
 *
 * @typedef {object} SvelteDescriptor
 * @property {string} name package directory name inside `packages/`, e.g.
 *   `icons-svelte`
 * @property {(icon: object) => string} componentTemplate source of a single
 *   icon component (see `buildJsIcons`)
 */
import { buildJsIcons } from './build-icons.mjs';

/**
 * Generate the sources of the package: one `.svelte` component per icon,
 * named after the icon (`arrow-left.svelte`), the icons index, aliases and
 * icons list.
 *
 * @param {SvelteDescriptor} descriptor
 */
export const generateSources = ({ name, componentTemplate }) =>
  buildJsIcons({
    name,
    componentTemplate,
    extension: 'svelte',
    moduleNaming: 'kebab',
    importExtension: true,
    key: false,
    dynamicImports: false,
  });

/**
 * The `exports` map the package must declare.
 *
 * @param {SvelteDescriptor} descriptor
 */
export const expectedExports = ({ name }) => {
  const root = {
    types: `./dist/tabler-${name}.d.ts`,
    svelte: `./dist/tabler-${name}.js`,
    default: `./dist/tabler-${name}.js`,
  };

  return {
    '.': root,
    './icons': root,
    './icons-list': { types: './dist/icons-list.d.ts', default: './dist/icons-list.js' },
    './icons/*': {
      types: './dist/icons/*.svelte.d.ts',
      svelte: './dist/icons/*.svelte',
      default: './dist/icons/*.svelte',
    },
  };
};
