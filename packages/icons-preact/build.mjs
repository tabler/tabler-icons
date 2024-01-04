#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import createPreactComponent from '../createPreactComponent';
export default createPreactComponent('${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${namePascal}';`

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`

buildIcons({
  name: 'icons-preact',
  componentTemplate,
  indexItemTemplate,
  // typeDefinitionsTemplate,
  // indexTypeTemplate,
  aliasTemplate,
  pascalCase: true,
  indexFile: 'icons/index.ts',
  extension: 'ts'
})
