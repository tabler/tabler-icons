<script lang="ts">
  import IconAd from "@tabler/icons-svelte/icons/ad";
  import IconAdOff from "@tabler/icons-svelte/icons/ad-off";
  import { IconAdFilled, IconHeartFilled } from "@tabler/icons-svelte";
  let active = false;

  const colors = ['#e64980', '#4dabf7', '#51cf66', '#ffd43b', '#845ef7'];
  let colorIndex = 0;
</script>

<div class="App">
  <button type="button" class="toggle" aria-label="Toggle icon" aria-pressed={active} on:click={() => (active = !active)}>
    {#if active}
      <IconAdOff size={48} />
    {:else}
      <IconAd size={48} />
    {/if}
  </button>
  <IconAd size={48} stroke={1} />
  <IconAdOff size={48} stroke={1.5} />
  <IconAdFilled size={48} stroke={2} />
  <button type="button" class="color-toggle" aria-label="Change color" on:click={() => (colorIndex = (colorIndex + 1) % colors.length)}>
    <IconHeartFilled size={48} color={colors[colorIndex]} />
  </button>
</div>
