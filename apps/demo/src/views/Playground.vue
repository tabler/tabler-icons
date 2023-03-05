<template>
  {{ data.title }}
  <img :src="code" alt="code">
</template>

<script lang="ts">
export default {
  name: 'Playground'
}
</script>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
//import tablerIcons from '@tabler/icons'
import code from "@tabler/icons/icons/code.svg"

const data = reactive({
  title: 'Playground'
})

onMounted(() => {
  //console.log(tablerIcons.icons.activity.toSvg())
})
</script>
