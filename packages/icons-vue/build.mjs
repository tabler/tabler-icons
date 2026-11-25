#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createVueComponent from '../createVueComponent';
export default /* @__PURE__ */ createVueComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

buildJsIcons({
  name: 'icons-vue',
  componentTemplate,
  extension: 'ts',
  dtsEntry: true,
});
