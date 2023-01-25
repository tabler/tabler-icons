<script setup lang="ts">
import { ref } from "vue"
import { IconHeartFilled, IconHeart, IconMoodSmile } from '@tabler/icons-vue'

const active = ref(false)
</script>

<template>
  <a @click="active = !active">
    <IconHeartFilled v-if="active" size="48" />
    <IconHeart v-else size="48" />
  </a>
  <IconMoodSmile size="48" stroke="1" />
  <IconMoodSmile size="48" stroke="1.5" />
  <IconMoodSmile size="48" stroke="2" />
</template>

