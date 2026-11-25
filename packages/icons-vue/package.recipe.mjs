/**
 * Package descriptor of `@tabler/icons-vue`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createVueComponent from '../createVueComponent';
export default /* @__PURE__ */ createVueComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-vue',
  componentTemplate,
  external: ['vue'],
  iconDts: `\
import type { Icon as TablerIcon } from './tabler-icons-vue.js';

declare const Icon: TablerIcon;
export default Icon;
`,
};
