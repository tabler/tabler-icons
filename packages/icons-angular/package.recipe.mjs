/**
 * Package descriptor of `@tabler/icons-angular`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

const componentTemplate = ({ type, name, namePascal, children }) => {
  const nodes = JSON.stringify(Array.isArray(children) ? children : [children]);

  return `import { TablerIcon } from '../types';

const ${namePascal}: TablerIcon = {
  name: '${name}',
  type: '${type}',
  nodes: ${nodes}
};

export default ${namePascal};`;
};

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-angular',
  layout: 'angular',
  componentTemplate,
};
