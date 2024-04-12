import { buildJsIcons } from '../../.build/build-icons.mjs';
import prettier from '@prettier/sync';

const componentTemplate = ({ type, name, namePascal, children }) => {
  const nodes = JSON.stringify(Array.isArray(children) ? children : [children]);

  return prettier.format(
    `import { TablerIcon } from '../types';

    const ${namePascal}: TablerIcon = {
      name: '${name}',
      type: '${type}',
      nodes: ${nodes}
    };

    export default ${namePascal};`,
    { singleQuote: true, printWidth: 120, parser: 'typescript' });
};

const indexItemTemplate = ({
                             _,
                             namePascal
                           }) => `export { default as ${namePascal}} from './${namePascal}';`;

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal}} from './icons/Icon${toPascal}';\n`;

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
