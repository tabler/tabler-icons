<template>
  <table>
    <tr>
      <th>Icon name</th>
      <th>Usage</th>
      <th>Description</th>
      <th>Result</th>
    </tr>

    <tr>
      <td>code</td>
      <td>import code from "@tabler/icons/icons/code.svg" <b>{{'<img :src="code" alt="code">'}}</b></td>
      <td>Desired svg can be imported directly from @tabler/icons/svg</td>
      <td><img :src="code" alt="code"></td>
    </tr>

    <tr>
      <td>activity</td>
      <td>import tablerIcons from '@tabler/icons' <b>{{'tablerIcons.activity.toSvg()'}}</b></td>
      <td>tablerIcons object from @tabler/icons has data about every icon</td>
      <td><span v-html="tablerIcons.activity.toSvg()"/></td>
    </tr>  
    
    <tr>
      <td>abc</td>
      <td>import tablerIcons from '@tabler/icons' <b>{{`tablerIcons.abc.toSvg({style: 'color: red'})`}}</b></td>
      <td>Arguments can be passed to toSvg() function of TablerIcon</td>
      <td><span v-html="tablerIcons.abc.toSvg({style: 'color: red'})"/></td>
    </tr>    

  </table>  
</template>

<script lang="ts">
export default {
  name: 'Playground'
}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import tablerIcons from '@tabler/icons'
import code from "@tabler/icons/svg/code.svg"

onMounted(() => {
  console.log('tablerIcons.activity.toSvg(): ', tablerIcons.activity.toSvg())
  console.log('tablerIcons.activity: ', tablerIcons.activity)
})
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
