#!/usr/bin/env node

import {
  buildJsIcons,
  buildIconsList,
  buildIconsDynamicImport,
} from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createReactComponent from '../createReactComponent';
import { IconNode } from '../types';

export const __iconNode: IconNode = ${JSON.stringify(children)}

const Icon${namePascal} = createReactComponent('${type}', '${name}', '${namePascal}', __iconNode);

export default Icon${namePascal};`;

const indexItemTemplate = ({ name, namePascal }) =>
  `export { default as Icon${namePascal} } from './Icon${namePascal}';`;

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
