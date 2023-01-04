import { getRollupConfig } from '../../.build/build-icons.mjs'
import fs from 'fs'
import svelteConfig from './svelte.config.mjs';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default getRollupConfig({
  name: 'icons-svelte',
  pluginSvelte: true,
  globals: {
    svelte: 'svelte'
  },
  external: ['svelte'],
  svelteConfig,
  pkg
})
