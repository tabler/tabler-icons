#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, namePascal, children }) => `\
import createReactNativeComponent from '../createReactNativeComponent';
export default /* @__PURE__ */ createReactNativeComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

buildJsIcons({
  name: 'icons-react-native',
  componentTemplate,
  extension: 'ts',
  pascalCase: true,
  dtsEntry: true,
  dynamicImports: false,
});
