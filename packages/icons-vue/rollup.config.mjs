import { getRollupConfig } from '../../.build/build-icons.mjs'

export default getRollupConfig({
  name: 'icons-vue',
  globals: {
    vue: 'vue'
  },
  external: ['vue']
})
