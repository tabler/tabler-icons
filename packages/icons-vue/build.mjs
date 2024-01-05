#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import createVueComponent from '../createVueComponent';
export default createVueComponent('${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${namePascal}';`

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`

buildIcons({
  name: 'icons-vue',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension: 'ts',
  indexFile: 'icons/index.ts',
})
