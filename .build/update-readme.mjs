import { readFileSync, writeFileSync } from 'fs'
import glob from 'glob'
import { resolve } from 'path'
import { HOME_DIR } from './helpers.mjs'

let fileData = readFileSync(resolve(HOME_DIR, 'README.md')).toString(),
    count = glob.sync(resolve(HOME_DIR, 'icons/*.svg')).length

console.log('count', count);

fileData = fileData.replace(/<!--icons-count-->(.*?)<!--\/icons-count-->/, `<!--icons-count-->${count}<!--/icons-count-->`)

writeFileSync(resolve(HOME_DIR, 'README.md'), fileData)
