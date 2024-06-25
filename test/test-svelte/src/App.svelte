<script lang="ts">
  import IconAd from "@tabler/icons-svelte/icons/ad";
  import IconAdOff from "@tabler/icons-svelte/icons/ad-off";
  import { IconAdFilled } from "@tabler/icons-svelte";
  let active = false;
</script>

<main>
  <button on:click={() => (active = !active)}>
    {#if active}
      <IconAdOff size={48} />
    {:else}
      <IconAd size={48} />
    {/if}
  </button>
  <IconAd size={48} stroke={1} />
  <IconAdOff size={48} stroke={1.5} />
  <IconAdFilled size={48} stroke={2} />
</main>
