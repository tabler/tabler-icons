import { exec } from 'child_process'
import { asyncForEach, readSvgs } from '../../.build/helpers.mjs'

let svgFiles = readSvgs()

await asyncForEach(svgFiles, async function(file, i) {
  const distPath = `./icons/${file.name}.png`

  process.stdout.write(`Building ${i}/${svgFiles.length}: ${file.name.padEnd(42)}\r`)

  await new Promise((resolve, reject) => {
    exec(`rsvg-convert -h 240 ${file.path} > ${distPath}`, (error, stdout, stderr) => {
      error ? reject() : resolve()
    })
  })
})
