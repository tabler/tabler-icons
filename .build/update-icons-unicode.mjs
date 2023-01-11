import glob from 'glob'
import fs from 'fs'
import path from 'path'
import { ICONS_SRC_DIR } from './helpers.mjs'

const getMaxUnicode = () => {
  const files = glob.sync(path.join(ICONS_SRC_DIR, '*.svg'))
  let maxUnicode = 0

  files.forEach(function(file) {
    const svgFile = fs.readFileSync(file).toString()

    svgFile.replace(/unicode: "([a-f0-9.]+)"/i, function(m, unicode) {
      const newUnicode = parseInt(unicode, 16)

      if (newUnicode) {
        maxUnicode = Math.max(maxUnicode, newUnicode)
      }
    })
  })

  return maxUnicode
}

let maxUnicode = getMaxUnicode()

glob(path.join(ICONS_SRC_DIR, '*.svg'), {}, function(er, files) {
  for (const i in files) {
    const file = files[i]

    let svgFile = fs.readFileSync(file).toString()

    if (!svgFile.match(/\nunicode: "?([a-f0-9.]+)"?/i)) {
      maxUnicode++
      const unicode = maxUnicode.toString(16)

      if (unicode) {
        svgFile = svgFile.replace(/---\n<svg>/i, function(m) {
          return `unicode: "${unicode}"\n${m}`
        })

        console.log(`Add unicode "${unicode}" to "${file}"`)
        fs.writeFileSync(file, svgFile)
      }
    }
  }
})
