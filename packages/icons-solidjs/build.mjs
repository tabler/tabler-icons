#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import createSolidComponent from '../createSolidComponent';
export default createSolidComponent('${name}', '${namePascal}', ${JSON.stringify(children)});`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${namePascal}';`

const typeDefinitionsTemplate = () => `/// <reference types="solid-js" />
import { JSX } from 'solid-js'
interface TablerIconsProps extends Partial<JSX.IntrinsicElements & JSX.SvgSVGAttributes<SVGSVGElement>> {
  key?: string | number;
  ref?: string | ((component: any) => any);
  color?: string
  size?: string | number
  strokeWidth?: string | number
  class?: string
}
// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare const ${namePascal}: (props: TablerIconsProps) => JSX.Element;`


buildIcons({
  name: 'icons-solidjs',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  key: false
})
