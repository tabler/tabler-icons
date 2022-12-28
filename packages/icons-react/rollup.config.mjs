import { getRollupConfig } from '../../.build/build-icons.mjs'
import pkg from './package.json' assert { type: "json" }

export default getRollupConfig({
  name: 'icons-react',
  globals: {
    react: 'react',
    'prop-types': 'PropTypes',
    '@tabler/icons': 'icons'
  },
  external: ['react', 'prop-types', '@tabler/icons'],
  pkg
})
