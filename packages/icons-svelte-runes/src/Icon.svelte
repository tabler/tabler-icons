<script lang="ts">
  import defaultAttributes from './defaultAttributes';
  import type { IconNode } from './types';
  import type { Snippet } from 'svelte';

  interface Props {
    type: 'outline' | 'filled';
    name: string;
    color?: string;
    size?: number | string;
    stroke?: number | string;
    iconNode: IconNode;
    class?: string;
    children?: Snippet;
    [key: string]: any; // For rest props
  }

  let {
    type,
    name,
    color = 'currentColor',
    size = 24,
    stroke = 2,
    iconNode,
    class: className = '',
    children,
    ...restProps
  }: Props = $props();

  // Derive the fill/stroke attributes based on type
  const typeAttributes = $derived(
    type === 'filled' ? { fill: color } : { 'stroke-width': stroke, stroke: color },
  );

  // Derive the full class name
  const fullClassName = $derived(`tabler-icon tabler-icon-${name} ${className}`);
</script>

<svg
  {...defaultAttributes[type]}
  {...restProps}
  width={size}
  height={size}
  class={fullClassName}
  {...typeAttributes}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
  {#if children}
    {@render children()}
  {/if}
</svg>
