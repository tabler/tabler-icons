<script setup lang="ts">
import { ref } from "vue"
import { IconAd, IconAdOff, IconAdFilled } from '@tabler/icons-vue'

const active = ref(false)
</script>

<template>
  <a @click="active = !active">
    <IconAdOff v-if="active" size="48" />
    <IconAd v-else size="48" />
  </a>
  <IconAd size="48" stroke="1" />
  <IconAdOff size="48" stroke="1.5" />
  <IconAdFilled size="48" stroke="2" />
</template>

