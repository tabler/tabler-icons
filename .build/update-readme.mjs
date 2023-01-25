import { readFileSync, writeFileSync } from 'fs'
import glob from 'glob'
import { resolve } from 'path'
import { HOME_DIR } from './helpers.mjs'

let count = glob.sync(resolve(HOME_DIR, 'icons/*.svg')).length

console.log('count', count);

const readmes = glob.sync(resolve(HOME_DIR, '{.,packages/*}/README.md'))

readmes.forEach(readme => {
  let fileData = readFileSync(readme).toString()

  fileData = fileData.replace(/<!--icons-count-->(.*?)<!--\/icons-count-->/, `<!--icons-count-->${count}<!--/icons-count-->`)

  writeFileSync(readme, fileData)
})


