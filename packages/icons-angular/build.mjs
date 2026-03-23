import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => {
  const nodes = JSON.stringify(Array.isArray(children) ? children : [children]);

  return `import { TablerIcon } from '../types';

const ${namePascal}: TablerIcon = {
  name: '${name}',
  type: '${type}',
  nodes: ${nodes}
};

export default ${namePascal};`
};

const indexItemTemplate = ({
                             _,
                             namePascal
                           }) => `export { default as Icon${namePascal} } from './Icon${namePascal}';`;

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`;

buildJsIcons({
  name: 'icons-angular',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  indexFile: 'index.ts',
  pascalCase: true,
  extension: 'ts',
  pretty: false
});
