import glob from 'glob'
import { basename, resolve } from 'path'
import { exec } from 'child_process'
import { asyncForEach, HOME_DIR } from '../../.build/helpers.mjs'

let files = glob.sync(resolve(HOME_DIR, './icons/*.svg'))

await asyncForEach(files, async function(file, i) {
  let name = basename(file, '.svg')

  const filePath = resolve(HOME_DIR, file),
      distPath = `./icons/${name}.pdf`

  console.log('name', name, filePath, distPath)

  await new Promise((resolve, reject) => {
    exec(`rsvg-convert -f pdf -h 240 ${filePath} > ${distPath}`, (error, stdout, stderr) => {
     error ? reject() : resolve()
    })
  })
})
