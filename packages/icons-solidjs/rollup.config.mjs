import { getRollupConfig } from '../../.build/build-icons.mjs'
import pkg from './package.json' assert { type: "json" }

export default getRollupConfig({
  name: 'icons-solidjs',
  globals: {
    'solid-js': 'solid-js',
    'solid-js/h': 'solid-js/h',
    '@tabler/icons': 'icons'
  },
  external: ['solid-js', 'solid-js/h', '@tabler/icons'],
  pkg
})
