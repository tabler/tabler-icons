import glob from 'glob'
import { generateIconsPreview } from './helpers.mjs'

glob('icons/*.svg', {}, async function (er, files) {
  files = files.filter(file =>
    !file.endsWith('-filled.svg')
    && !file.endsWith('-off.svg')
    && !file.startsWith('icons/number-')
    && !file.startsWith('icons/letter-')
  );

  files = files.sort(() => Math.random() - 0.5)

  files = files.slice(0, 500)

  await generateIconsPreview(files, 'random-icons.svg', {
    background: 'transparent',
    columnsCount: 25,
    png: false
  })
})
