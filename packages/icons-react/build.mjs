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

// The root barrel re-exports each alias from its own standalone module (below)
// rather than straight from the canonical icon, so the alias module stays in the
// rollup `preserveModules` graph and is emitted for deep/wildcard imports.
const aliasTemplate = ({ fromPascal }) =>
  `export { default as Icon${fromPascal} } from './icons/Icon${fromPascal}';\n`;

// Standalone alias module, e.g. src/icons/IconArrowLeftAlt.ts -> re-exports IconArrowLeft.
const aliasFileTemplate = ({ toPascal }) =>
  `export { default, __iconNode } from './Icon${toPascal}';\n`;

buildJsIcons({
  name: 'icons-react',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  aliasFileTemplate,
  indexFile: 'index.ts',
  pascalCase: true,
  extension: 'ts',
});

buildIconsList('icons-react');

buildIconsDynamicImport('icons-react');
