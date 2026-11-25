/**
 * Package descriptor of `@tabler/icons-react`: what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

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

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-react',
  layout: 'default',
  componentTemplate,
  pascalCase: true,
  external: ['react'],
  iconDts: `\
import type { IconNode, TablerIcon } from './tabler-icons-react.js';

export declare const __iconNode: IconNode;
declare const Icon: TablerIcon;
export default Icon;
`,
};
