#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  namePascal,
}) => `\
import { ${namePascal} as _Icon } from '@tabler/icons';
import createPreactComponent from '../createPreactComponent';
export default createPreactComponent(_Icon.name, _Icon.node);`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${name}';`

const typeDefinitionsTemplate = () => `/// <reference types="preact" />
import { JSX, RefObject } from 'preact'

interface TablerIconsProps extends Partial<Omit<JSX.SVGAttributes, "ref" | "size">> {
  key?: string | number;
  ref?: string | ((component: any) => any) | RefObject<any>;
  color?: string
  size?: string | number
}

// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare const ${namePascal}: (props: TablerIconsProps) => JSX.Element;`


buildIcons({
  name: 'icons-preact',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate
})
