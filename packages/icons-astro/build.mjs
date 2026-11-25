#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createTablerIcon from '../createTablerIcon';
import type { AstroComponent } from '../types';

/**
 * @component @name Icon${namePascal}
 * @description Tabler SVG icon component, renders SVG Element with children.
 *
 * @param {import('../types').IconProps} props - Tabler icons props and any valid SVG attribute
 * @returns {any} Astro Component
 */
const Icon${namePascal} = /* @__PURE__ */ createTablerIcon('${name}', ${JSON.stringify(children)}, '${type}') as AstroComponent;

export default Icon${namePascal};`;

buildJsIcons({
  name: 'icons-astro',
  componentTemplate,
  extension: 'ts',
  moduleNaming: 'kebab',
  key: false,
  dtsEntry: true,
});
