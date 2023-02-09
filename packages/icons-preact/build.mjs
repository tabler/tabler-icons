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
}) => `export { default as ${namePascal} } from './icons/${namePascal}';`

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
  indexTypeTemplate,
  pascalCase: true
})
