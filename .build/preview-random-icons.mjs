import { globSync } from 'glob'
import { ICONS_SRC_DIR, generateIconsPreview, GITHUB_DIR } from './helpers.mjs'
import path from 'path'

let files = globSync(path.join(ICONS_SRC_DIR, 'outline/*.svg'))

files = files.filter(file =>
  !file.endsWith('-filled.svg')
  && !file.endsWith('-off.svg')
  && !file.includes('number-')
  && !file.includes('letter-')
  && !file.includes('loader')
  && !file.includes('small')
);

files = files.sort(() => Math.random() - 0.5)

files = files.slice(0, 500)

await generateIconsPreview(files, path.join(GITHUB_DIR, 'preview/random-icons.svg'), {
  background: 'transparent',
  columnsCount: 25,
  stroke: 1.5
})
