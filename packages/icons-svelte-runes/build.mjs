#!/usr/bin/env node

import { buildJsIcons, buildIconsList } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, children, stringify }) => {
  return `\
<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';
import type { Snippet } from 'svelte';

interface Props extends IconProps {
  children?: Snippet;
}

let { children, ...props }: Props = $props();

const iconNode: IconNode = ${JSON.stringify(children)};
</script>
<Icon type="${type}" name="${name}" {...props} iconNode={iconNode} {children} />
`;
};

const aliasTemplate = ({ fromPascal, to }) =>
  `export { default as Icon${fromPascal} } from './icons/${to}.svelte';\n`;

const indexItemTemplate = ({ name, namePascal }) =>
  `export { default as Icon${namePascal} } from './${name}.svelte';`;

buildJsIcons({
  name: 'icons-svelte-runes',
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension: 'svelte',
  key: false,
  indexFile: 'index.ts',
  pascalName: false,
});

buildIconsList('icons-svelte-runes');
