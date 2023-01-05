import { getRollupConfig } from '../../.build/build-icons.mjs'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default getRollupConfig({
  name: 'icons-solidjs',
  globals: {
    'solid-js': 'solid-js',
    'solid-js/h': 'solid-js/h'
  },
  external: ['solid-js', 'solid-js/h'],
  pkg
})
