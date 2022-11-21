import { getRollupConfig } from '../../.build/build-icons.mjs'

export default getRollupConfig({
  name: 'icons-react',
  globals: {
    react: 'react',
    'prop-types': 'PropTypes'
  },
  external: ['react', 'prop-types'],
})
