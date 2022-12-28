import { getRollupConfig } from '../../.build/build-icons.mjs'
import pkg from './package.json' assert { type: "json" }

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
