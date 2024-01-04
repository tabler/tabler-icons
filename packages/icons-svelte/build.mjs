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
import type { IconNode, IconProps } from '../types.js';

type $$Props = IconProps;

const iconNode: IconNode = ${JSON.stringify(children)};
</script>
<Icon name="${name}" {...$$props} iconNode={iconNode}>
  <slot/>
</Icon>
`;
};

const indexItemTemplate = ({
  name,
  namePascal
}) => `export { default as ${namePascal} } from './${name}.svelte';`

buildIcons({
  name: 'icons-svelte',
  componentTemplate,
  indexItemTemplate,
  extension: 'svelte',
  pretty: false,
  key: false,
  indexFile: 'icons/index.ts',
  pascalName: false,
})
