#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  children,
  stringify
}) => {
  const iconChildNodes = children.map(([name, attributes]) => ({ name, attributes, children: [] }));
  const iconChildrenHTML = iconChildNodes.map(stringify).join('\n  ');
  return `\
<script>
import Icon from '../Icon.svelte';
</script>
<Icon name="${name}" {...$$props} >
  ${iconChildrenHTML}
  <slot/>
</Icon>
`;
};

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${name}.svelte';`

const typeDefinitionsTemplate = () => `/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />
import { SvelteComponentTyped } from "svelte";

interface IconProps extends Partial<svelte.JSX.SVGProps<SVGSVGElement>> {
  color?: string
  size?: number,
  strokeWidth?: number,
  class?: string
}

interface IconEvents {
  [evt: string]: CustomEvent<any>;
}

export type Icon = SvelteComponentTyped<IconProps, IconEvents, {}>

// Generated icons`

const indexTypeTemplate = ({
  namePascal
}) => `export declare class ${namePascal} extends SvelteComponentTyped<IconProps, IconEvents, {}> {}`


buildIcons({
  name: 'icons-svelte',
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  extension: 'svelte',
  pretty: false
})
