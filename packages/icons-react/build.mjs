#!/usr/bin/env node

import {
  buildJsIcons,
  buildIconsList,
  buildIconsDynamicImport,
} from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createReactComponent from '../createReactComponent';
export default createReactComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({ name, namePascal }) =>
  `export { default as ${namePascal} } from './${namePascal}';`;

const aliasTemplate = ({ fromPascal, toPascal }) =>
  `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`;

buildJsIcons({
  name: 'icons-react',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  indexFile: 'index.ts',
  pascalCase: true,
  extension: 'ts',
});

buildIconsList('icons-react');

buildIconsDynamicImport('icons-react');
