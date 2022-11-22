import { getRollupConfig } from '../../.build/build-icons.mjs'
import pkg from './package.json' assert { type: "json" }

export default getRollupConfig({
  name: 'icons-preact',
  globals: {
    preact: 'preact',
    'prop-types': 'PropTypes'
  },
  external: ['preact', 'prop-types'],
  pkg
})
