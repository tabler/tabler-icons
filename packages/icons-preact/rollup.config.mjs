import { getRollupConfig } from '../../.build/build-icons.mjs'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default getRollupConfig({
  name: 'icons-preact',
  globals: {
    preact: 'preact',
    'prop-types': 'PropTypes',
    '@tabler/icons': 'icons'
  },
  external: ['preact', 'prop-types', '@tabler/icons'],
  pkg
})
