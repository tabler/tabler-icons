import { getRollupConfig } from '../../.build/build-icons.mjs'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default getRollupConfig({
  name: 'icons-vue',
  globals: {
    vue: 'vue',
    '@tabler/icons': 'icons'
  },
  external: ['vue', '@tabler/icons'],
  pkg
})
