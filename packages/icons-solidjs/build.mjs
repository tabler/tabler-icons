#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import { ${namePascal} as _Icon } from '@tabler/icons';
import createSolidComponent from '../createSolidComponent';
export default createSolidComponent(_Icon.name, _Icon.node);`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${name}';`

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
