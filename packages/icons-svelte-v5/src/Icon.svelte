<script lang="ts">
  import defaultAttributes from './defaultAttributes.js';
  import type { IconProps } from './types.js';

  const {
    name,
    type = 'outline',
    color = 'currentColor',
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    children,
    ...props
  }: IconProps = $props();

  console.log(JSON.stringify(props));
</script>

<svg
  {...defaultAttributes[type]}
  {...props}
  width={size}
  height={size}
  {...(
    type === 'filled' ?
      { fill: color } :
      {
        'stroke-width': absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        stroke: color,
      }
      )
    }
  class={[`tabler-icon tabler-icon-${name}`, props.class].filter(Boolean).join(' ')}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element
      this={tag}
      {...attrs}
    />
  {/each}
  {@render children?.()}
</svg>
