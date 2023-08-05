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
}) => `export { default as ${namePascal} } from './icons/${namePascal}';`

const typeDefinitionsTemplate = () => `import { SVGAttributes, FunctionalComponent } from 'vue';
declare module '@tabler/icons-vue'

// Create interface extending SVGAttributes
export interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number
  strokeWidth?: number | string
}

// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare const ${namePascal}: (props: SVGProps) => FunctionalComponent<SVGProps>;`


buildIcons({
  name: 'icons-vue',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate
})
