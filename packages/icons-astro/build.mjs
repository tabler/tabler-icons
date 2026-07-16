#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  type,
  name,
  namePascal,
  children
}) => `\
import createTablerIcon from '../createTablerIcon';
import type { AstroComponent } from '../types';

/**
 * @component @name Icon${namePascal}
 * @description Tabler SVG icon component, renders SVG Element with children.
 *
 * @param {import('../types').IconProps} props - Tabler icons props and any valid SVG attribute
 * @returns {any} Astro Component
 */
const Icon${namePascal} = createTablerIcon('${name}', ${JSON.stringify(children)}, '${type}') as AstroComponent;

export default Icon${namePascal};`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as Icon${namePascal} } from './${name}';`

const aliasTemplate = ({ fromPascal, to }) => `export { default as Icon${fromPascal} } from './icons/${to}';\n`

buildJsIcons({
  name: 'icons-astro',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  key: false,
  extension: 'ts',
  indexFile: 'index.ts',
  pascalName: false
})

buildIconsList('icons-astro')
