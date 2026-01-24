<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import defaultAttributes from './defaultAttributes';
  import type { IconNode } from './types';
  import type { Snippet } from 'svelte';

  type Props = {
    type: 'outline' | 'filled';
    name: string;
    color: string;
    size: number | string;
    stroke: number | string;
    iconNode: IconNode;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<SVGElement>;

  const {
    type,
    name,
    color = 'currentColor',
    size = 24,
    stroke = 2,
    iconNode,
    class: className,
    children,
    ...restProps
  }: Props = $props();
</script>

<svg
  {...defaultAttributes[type]}
  {...restProps}
  width={size}
  height={size}
  class={`tabler-icon tabler-icon-${name} ${className}`}
  {...type === 'filled'
    ? {
        fill: color,
      }
    : {
        'stroke-width': stroke,
        stroke: color,
      }}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
  {@render children?.()}
</svg>
