import { getRollupConfig } from '../../.build/build-icons.mjs'

export default getRollupConfig({
  name: 'icons-preact',
  globals: {
    preact: 'preact',
    'prop-types': 'PropTypes'
  },
  external: ['preact', 'prop-types'],
})
