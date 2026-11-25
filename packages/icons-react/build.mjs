#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

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
const Icon${namePascal} = /* @__PURE__ */ createReactComponent('${type}', '${name}', '${namePascal}', __iconNode);

export default Icon${namePascal};`;
};

buildJsIcons({
  name: 'icons-react',
  componentTemplate,
  extension: 'ts',
  pascalCase: true,
  dtsEntry: true,
});
