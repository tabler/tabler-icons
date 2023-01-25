import glob from 'glob'
import fs from 'fs'
import path from 'path'
import { ICONS_SRC_DIR } from './helpers.mjs'

let unicodes = []

glob(path.join(ICONS_SRC_DIR, '*.svg'), {}, function(er, files) {
  for (const i in files) {
    const file = files[i]

    let svgFile = fs.readFileSync(file).toString()
    const matches = svgFile.match(/\nunicode: "?([a-f0-9.]+)"?/i)

    if (matches[1]) {
      const unicode = matches[1]

      if (unicode && unicodes.indexOf(unicode) === -1) {
        unicodes.push(unicode)
      } else {
        throw new Error(`Unicode ${unicode} in icon ${file} already exists!`)
      }
    } else {
      throw new Error(`Icon ${file} don't have a unicode!`)
    }
  }
})


