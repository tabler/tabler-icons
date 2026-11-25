import { buildJsIcons } from '../../.build/build-icons.mjs';

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

buildJsIcons({
  name: 'icons-angular',
  componentTemplate,
  extension: 'ts',
  pascalCase: true,
  iconsList: false,
  dynamicImports: false,
});
