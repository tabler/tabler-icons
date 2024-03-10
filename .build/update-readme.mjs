import { readFileSync, writeFileSync } from 'fs'
import { glob } from 'glob'
import { resolve } from 'path'
import { HOME_DIR, ICONS_SRC_DIR } from './helpers.mjs'

let count = glob.sync(resolve(ICONS_SRC_DIR, '**/*.svg')).length,
  outlineCount = glob.sync(resolve(ICONS_SRC_DIR, '**/outline/*.svg')).length,
  filledCount = glob.sync(resolve(ICONS_SRC_DIR, '**/filled/*.svg')).length

console.log('count', count);
console.log('filledCount', filledCount);
console.log('outlineCount', outlineCount);

const readmes = glob.sync(resolve(HOME_DIR, '{.,packages/*}/README.md'))

readmes.forEach(readme => {
  let fileData = readFileSync(readme).toString()

  fileData = fileData.replace(/<!--icons-count-->(.*?)<!--\/icons-count-->/, `<!--icons-count-->${count}<!--/icons-count-->`)
    .replace(/<!--icons-count-outline-->(.*?)<!--\/icons-count-outline-->/, `<!--icons-count-outline-->${outlineCount}<!--/icons-count-outline-->`)
    .replace(/<!--icons-count-filled-->(.*?)<!--\/icons-count-filled-->/, `<!--icons-count-filled-->${filledCount}<!--/icons-count-filled-->`)

  writeFileSync(readme, fileData)
})


