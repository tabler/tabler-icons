import { globSync } from 'glob'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { ICONS_SRC_DIR, getMaxUnicode, getPackageJson } from './helpers.mjs'

const pkg = getPackageJson(),
  newVersion = process.env.NEW_VERSION || pkg.version

const files = globSync(path.join(ICONS_SRC_DIR, '**/*.svg'))

let maxUnicode = getMaxUnicode()

files.forEach(function (file) {
  let svgFile = readFileSync(file).toString()

  // Add unicode to svg files
  if (!svgFile.match(/\nunicode: "?([a-f0-9.]+)"?/i)) {
    maxUnicode++
    const unicode = maxUnicode.toString(16)

    if (unicode) {
      svgFile = svgFile.replace(/-->\s?\n<svg/i, function (m) {
        return `unicode: "${unicode}"\n${m}`
      })

      console.log(`Add unicode "${unicode}" to "${file}"`)
      writeFileSync(file, svgFile, 'utf8')
    }
  }

  if (newVersion) {
    // Add version to svg files
    if (!svgFile.match(/\nversion: "?([a-f0-9.]+)"?/i)) {
      const minorVersion = newVersion.split('.').slice(0, 2).join('.')

      console.log(svgFile);

      svgFile = svgFile.replace(/-->\s?\n<svg/i, function (m) {
        return `version: "${minorVersion}"\n${m}`
      })

      console.log(svgFile);

      console.log(`Add version "${minorVersion}" to "${file}"`)
      writeFileSync(file, svgFile, 'utf8')
    }
  }
})
