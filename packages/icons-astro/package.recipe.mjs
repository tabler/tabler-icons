/**
 * Package descriptor of `@tabler/icons-astro`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createTablerIcon from '../createTablerIcon';
import type { AstroComponent } from '../types';

/**
 * @component @name Icon${namePascal}
 * @description Tabler SVG icon component, renders SVG Element with children.
 *
 * @param {import('../types').IconProps} props - Tabler icons props and any valid SVG attribute
 * @returns {any} Astro Component
 */
const Icon${namePascal} = /* @__PURE__ */ createTablerIcon('${name}', ${JSON.stringify(children)}, '${type}') as AstroComponent;

export default Icon${namePascal};`;

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-astro',
  componentTemplate,
  moduleNaming: 'kebab',
  key: false,
  // Astro's runtime helpers are resolved by the consumer's Astro/Vite
  // pipeline via the `astro` peer dependency.
  external: [/^astro(\/|$)/],
  iconsNamespaceCost: 'loads every icon',
  iconDts: `\
import type { AstroComponent } from './tabler-icons-astro.js';

declare const Icon: AstroComponent;
export default Icon;
`,
};
