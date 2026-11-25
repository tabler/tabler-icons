/**
 * Package descriptor of `@tabler/icons-svelte-runes` (Svelte 5): what the package recipe
 * (.build/package-recipe.mjs) needs to know about this framework package.
 */

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

/** @type {import('../../.build/package-recipe.mjs').PackageDescriptor} */
export default {
  name: 'icons-svelte-runes',
  layout: 'svelte',
  componentTemplate,
};
