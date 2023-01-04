import glob from 'glob'
import { basename, resolve } from 'path'
import { exec } from 'child_process'
import { asyncForEach, HOME_DIR } from '../../.build/helpers.mjs'

let svgFiles = glob.sync(resolve(HOME_DIR, './icons/*.svg'))

await asyncForEach(svgFiles, async function(file, i) {
  let svgName = basename(file, '.svg')

  const filePath = resolve(HOME_DIR, file),
      distPath = `./dist/${svgName}.pdf`

  process.stdout.write(`Building ${i}/${svgFiles.length}: ${svgName.padEnd(42)}\r`)

  await new Promise((resolve, reject) => {
    exec(`rsvg-convert -f pdf -h 240 ${filePath} > ${distPath}`, (error, stdout, stderr) => {
     error ? reject() : resolve()
    })
  })
})
