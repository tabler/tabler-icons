#!/usr/bin/env node

import {
  buildJsIcons,
  buildIconsList,
  buildIconsDynamicImport,
} from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children, svg }) => {
  const svgBase64 = Buffer.from(svg).toString('base64');
  return `\
import createReactComponent from '../createReactComponent';
import { IconNode } from '../types';

export const __iconNode: IconNode = ${JSON.stringify(children)}

/**
 * Icon${namePascal}
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://tabler.io/icons/icon/${name}
 * @see https://docs.tabler.io/icons/libraries/react - Documentation
 *
 */
const Icon${namePascal} = createReactComponent('${type}', '${name}', '${namePascal}', __iconNode);

export default Icon${namePascal};`;
};

const indexItemTemplate = ({ name, namePascal, svg }) => {
  const svgBase64 = Buffer.from(svg).toString('base64');
  return `\
/**
 * Icon${namePascal}
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://tabler.io/icons/icon/${name}
 * @see https://docs.tabler.io/icons/libraries/react - Documentation
 *
 */
export { default as Icon${namePascal} } from './Icon${namePascal}';`;
};

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
