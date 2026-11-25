#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, children }) => {
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

buildJsIcons({
  name: 'icons-svelte-runes',
  componentTemplate,
  extension: 'svelte',
  moduleNaming: 'kebab',
  importExtension: true,
  key: false,
  dynamicImports: false,
});
