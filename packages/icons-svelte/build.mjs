#!/usr/bin/env node

import { buildJsIcons } from '../../.build/build-icons.mjs';

const componentTemplate = ({ type, name, children }) => {
  return `\
<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

type $$Props = IconProps;

const iconNode: IconNode = ${JSON.stringify(children)};
</script>
<Icon type="${type}" name="${name}" {...$$props} iconNode={iconNode}>
  <slot/>
</Icon>
`;
};

buildJsIcons({
  name: 'icons-svelte',
  componentTemplate,
  extension: 'svelte',
  moduleNaming: 'kebab',
  importExtension: true,
  key: false,
  dynamicImports: false,
});
