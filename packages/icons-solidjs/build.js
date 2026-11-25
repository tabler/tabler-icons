#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createSolidComponent from '../createSolidComponent';
export default /* @__PURE__ */ createSolidComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

buildJsIcons({
  name: 'icons-solidjs',
  componentTemplate,
  extension: 'ts',
  key: false,
  dynamicImports: false,
});
