<script lang="ts">
  import defaultAttributes from "./defaultAttributes";
  import type { IconNode } from "./types";

  export let type: "outline" | "filled";
  export let name: string;
  export let color: string = "currentColor";
  export let size: number | string = 24;
  export let strokeWidth: number | string = 2;
  export let iconNode: IconNode;
</script>

<svg
  {...defaultAttributes[type]}
  {...$$restProps}
  width={size}
  height={size}
  stroke={color}
  stroke-width={strokeWidth}
  class={`tabler-icon tabler-icon-${name} ${$$props.class ?? ""}`}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
  <slot />
</svg>
