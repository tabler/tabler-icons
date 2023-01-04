#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  namePascal,
  children
}) => `\
import { ${namePascal} as _Icon } from '@tabler/icons';
import createReactComponent from '../createReactComponent';
export default createReactComponent(_Icon.name, _Icon.node);`;

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${name}';`

const typeDefinitionsTemplate = () => `/// <reference types="react" />
import { SVGAttributes } from 'react'

declare module '@tabler/icons-react'

// Create interface extending SVGProps
export interface TablerIconsProps extends Partial<React.SVGProps<SVGSVGElement>> {
    size?: string | number
}

export declare const createReactComponent: (iconName: string, iconNode: any[]) => (props: TablerIconsProps) => JSX.Element;

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
  indexTypeTemplate
})
