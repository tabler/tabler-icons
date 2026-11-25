/**
 * Package descriptor of `@tabler/icons-react-native`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createReactNativeComponent from '../createReactNativeComponent';
export default /* @__PURE__ */ createReactNativeComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-react-native',
  layout: 'react-native',
  componentTemplate,
};
