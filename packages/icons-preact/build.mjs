#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createPreactComponent from '../createPreactComponent';
export default /* @__PURE__ */ createPreactComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

buildJsIcons({
  name: 'icons-preact',
  componentTemplate,
  extension: 'ts',
  pascalCase: true,
  dtsEntry: true,
});
