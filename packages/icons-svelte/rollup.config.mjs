import { getRollupConfig } from '../../.build/build-icons.mjs'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default getRollupConfig({
  name: 'icons-svelte',
  pluginSvelte: true,
  globals: {
    svelte: 'svelte',
    '@tabler/icons': 'icons'
  },
  external: ['svelte', '@tabler/icons'],
  pkg
})
