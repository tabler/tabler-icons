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
}) => `export { default as ${namePascal} } from './icons/${namePascal}';`

const typeDefinitionsTemplate = () => `/// <reference types="react" />
import { SVGAttributes } from 'react'

declare module '@tabler/icons-react'

// Create interface extending SVGProps
export interface TablerIconsProps extends Partial<Omit<React.SVGProps<SVGSVGElement>, 'stroke'>> {
    size?: string | number,
    stroke?: string | number
}

export declare const createReactComponent: (iconName: string, iconNamePascal: string, iconNode: any[]) => (props: TablerIconsProps) => JSX.Element;

export type Icon = React.FC<TablerIconsProps>;

// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare const ${namePascal}: (props: TablerIconsProps) => JSX.Element;`


buildIcons({
  name: 'icons-react',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  pascalCase: true
})
