<script>
  import defaultAttributes from './defaultAttributes'
  export let name
  export let color = 'currentColor'
  export let size = 24
  export let stroke = 2
  export let iconNode
</script>

<svg
  {...defaultAttributes}
  {...$$restProps}
  width={size}
  height={size}
  stroke={color}
  stroke-width={stroke}
  class={`tabler-icon tabler-icon-${name} ${$$props.class ?? ''}`}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs}/>
  {/each}
  <slot />
</svg>
