#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  type,
  name,
  namePascal,
  children
}) => `\
import createVueComponent from '../createVueComponent';
export default createVueComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${namePascal}';`

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`

buildJsIcons({
  name: 'icons-vue',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension: 'ts',
  indexFile: 'index.ts',
})

buildIconsList('icons-vue')
