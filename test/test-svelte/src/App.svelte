<script lang="ts">
  import IconAd from "@tabler/icons-svelte/IconAd.svelte";
  import IconAdOff from "@tabler/icons-svelte/IconAdOff.svelte";
  import IconAdFilled from "@tabler/icons-svelte/IconAdFilled.svelte";
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
