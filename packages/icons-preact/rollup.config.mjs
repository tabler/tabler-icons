import { getRollupConfig } from '../../.build/build-icons.mjs'
import pkg from './package.json' assert { type: "json" }

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
