#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  type,
  name,
  namePascal,
  children
}) => `\
import createPreactComponent from '../createPreactComponent';
export default createPreactComponent('${type}', '${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${namePascal}';`

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`

buildJsIcons({
  name: 'icons-preact',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  pascalCase: true,
  indexFile: 'index.ts',
  extension: 'ts'
})

buildIconsList('icons-preact')
