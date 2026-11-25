/**
 * Package descriptor of `@tabler/icons-solidjs`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createSolidComponent from '../createSolidComponent';
export default /* @__PURE__ */ createSolidComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-solidjs',
  layout: 'solid',
  componentTemplate,
};
