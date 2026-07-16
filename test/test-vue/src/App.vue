<script setup lang="ts">
import { ref } from "vue"
import { IconAd, IconAdOff, IconAdFilled, IconHeartFilled } from '@tabler/icons-vue'

const active = ref(false)

const colors = ['#e64980', '#4dabf7', '#51cf66', '#ffd43b', '#845ef7']
const colorIndex = ref(0)
</script>

<template>
  <div class="App">
    <button type="button" class="toggle" aria-label="Toggle icon" :aria-pressed="active" @click="active = !active">
      <IconAdOff v-if="active" size="48" />
      <IconAd v-else size="48" />
    </button>
    <IconAd size="48" stroke="1" />
    <IconAdOff size="48" stroke="1.5" />
    <IconAdFilled size="48" stroke="2" />
    <button type="button" class="color-toggle" aria-label="Change color" @click="colorIndex = (colorIndex + 1) % colors.length">
      <IconHeartFilled size="48" :color="colors[colorIndex]" />
    </button>
  </div>
</template>

