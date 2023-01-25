import { generateIconsPreview, getArgvs, getPackageJson, HOME_DIR } from './helpers.mjs'
import * as fs from 'fs'

const argv = getArgvs(),
    p = getPackageJson()

const version = argv['new-version'] || `${p.version}`

if (version) {
  const icons = JSON.parse(fs.readFileSync(`${HOME_DIR}/tags.json`))

  const newIcons = Object
      .entries(icons)
      .filter(([name, value]) => {
        return `${value.version}.0` === version
      })
      .map(([name, value]) => {
        return `./icons/${name}.svg`
      })

  if (newIcons.length > 0) {
    generateIconsPreview(newIcons, `.github/tabler-icons-${version}.svg`, {
      columnsCount: 6,
      paddingOuter: 24
    })
  }
}
