#!/usr/bin/env node

import { buildIcons } from '../../.build/build-icons.mjs'

const componentTemplate = ({
  name,
  children,
  stringify
}) => {
  return `\
<script lang="ts">
import Icon from '../Icon.svelte';
const iconNode = ${JSON.stringify(children)};
</script>
<Icon name="${name}" {...$$props} iconNode={iconNode}>
  <slot/>
</Icon>
`;
};

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './icons/${namePascal}.svelte';`

const typeDefinitionsTemplate = () => `/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />
import { SvelteComponentTyped } from "svelte";

interface IconProps extends Partial<svelte.JSX.SVGProps<SVGSVGElement>> {
  color?: string
  size?: number,
  stroke?: number,
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
  pretty: false,
  key: false
})
