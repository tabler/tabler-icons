#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import createReactComponent from '../createReactComponent';
export default createReactComponent('${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${namePascal}';`

const aliasTemplate = ({ fromPascal, toPascal }) => `export { default as Icon${fromPascal} } from './icons/Icon${toPascal}';\n`

buildIcons({
  name: 'icons-react',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  indexFile: 'icons/index.ts',
  pascalCase: true,
  extension: 'ts'
})
