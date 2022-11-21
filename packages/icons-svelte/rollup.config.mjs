import { getRollupConfig } from '../../.build/build-icons.mjs'

export default getRollupConfig({
  name: 'icons-svelte',
  pluginSvelte: true,
  globals: {
    svelte: 'svelte',
  },
  external: ['svelte'],
})
