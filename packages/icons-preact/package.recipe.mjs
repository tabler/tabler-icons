/**
 * Package descriptor of `@tabler/icons-preact`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createPreactComponent from '../createPreactComponent';
export default /* @__PURE__ */ createPreactComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-preact',
  componentTemplate,
  pascalCase: true,
  external: ['preact'],
  iconDts: `\
import type { Icon as TablerIcon } from './tabler-icons-preact.js';

declare const Icon: TablerIcon;
export default Icon;
`,
};
