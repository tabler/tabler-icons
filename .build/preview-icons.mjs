import glob from 'glob'
import { generateIconsPreview } from './helpers.mjs'

glob('icons/*.svg', {}, async function(er, files) {
  await generateIconsPreview(files, '.github/icons.svg')
  await generateIconsPreview(files, '.github/icons-dark.svg', {
    color: '#ffffff',
    background: 'transparent'
  })
})
