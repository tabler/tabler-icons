import cp from 'child_process'
import { generateIconsPreview, getArgvs, getPackageJson } from './helpers.mjs'

const argv = getArgvs(),
    p = getPackageJson()

const version = argv['latest-version'] || `${p.version}`,
    newVersion = argv['new-version'] || `${p.version}`

if (version) {
  cp.exec(`git diff v${version} HEAD --name-status --diff-filter=A src/_icons`, function(err, ret) {

    let newIcons = []

    ret.replace(/[A]\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
      newIcons.push(fileName)
    })

    newIcons = newIcons.map(function(icon) {
      return `./icons/${icon}.svg`
    })

    if (newIcons.length > 0) {
      generateIconsPreview(newIcons, `.github/tabler-icons-${newVersion}.svg`, {
        columnsCount: 6,
        paddingOuter: 24
      })
    }
  })
}
