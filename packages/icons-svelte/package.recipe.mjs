/**
 * Package descriptor of `@tabler/icons-svelte` (Svelte 4): what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

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

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-svelte',
  layout: 'svelte',
  componentTemplate,
};
