import { globSync } from 'glob'
import fs from 'fs'
import path from 'path'
import { ICONS_SRC_DIR, getMaxUnicode, getArgvs, getPackageJson } from './helpers.mjs'

const argv = getArgvs(),
  pkg = getPackageJson(),
  newVersion = argv['new-version'] || pkg.version

const files = globSync(path.join(ICONS_SRC_DIR, '**/*.svg'))

let maxUnicode = getMaxUnicode()

files.forEach(function (file) {
  let svgFile = fs.readFileSync(file).toString()

  // Add unicode to svg files
  if (!svgFile.match(/\nunicode: "?([a-f0-9.]+)"?/i)) {
    maxUnicode++
    const unicode = maxUnicode.toString(16)

    if (unicode) {
      svgFile = svgFile.replace(/-->\n<svg/i, function (m) {
        return `unicode: "${unicode}"\n${m}`
      })

      console.log(`Add unicode "${unicode}" to "${file}"`)
      fs.writeFileSync(file, svgFile, 'utf8')
    }
  }

  if (newVersion) {
    // Add version to svg files
    if (!svgFile.match(/\nversion: "?([a-f0-9.]+)"?/i)) {
      const minorVersion = newVersion.split('.').slice(0, 2).join('.')

      svgFile = svgFile.replace(/-->\n<svg/i, function (m) {
        return `version: "${minorVersion}"\n${m}`
      })

      console.log(`Add version "${minorVersion}" to "${file}"`)
      fs.writeFileSync(file, svgFile, 'utf8')
    }
  }
})
