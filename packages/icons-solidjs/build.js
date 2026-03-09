#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs';

const childrenToInnerSvg = (children) =>
  children
    .map(([tag, attrs]) => {
      const attrStr = Object.entries(attrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ');
      return `<${tag} ${attrStr} />`;
    })
    .join('');

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createSolidComponent from '../createSolidComponent';
export default createSolidComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(childrenToInnerSvg(children))});`;

const indexItemTemplate = ({ name, namePascal }) =>
  `export { default as Icon${namePascal} } from './Icon${namePascal}';`;

const aliasTemplate = ({ fromPascal, toPascal }) =>
  `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`;

buildJsIcons({
  name: 'icons-solidjs',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  key: false,
  extension: 'ts',
  indexFile: 'index.ts',
});

buildIconsList('icons-solidjs');
