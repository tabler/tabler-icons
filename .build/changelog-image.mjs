import { generateIconsPreview, getAllIcons, getPackageJson, GITHUB_DIR } from './helpers.mjs'
import path from 'path'

const p = getPackageJson()

const version = process.env.NEW_VERSION || `${p.version}`

if (version) {
  const icons = getAllIcons()

  let newIcons = []
  Object.entries(icons).forEach(([type, icons]) => {
    icons.forEach(icon => {
      if (icon.version) {
        if (`${icon.version}.0` === version) {
          console.log(`Add icon "${type}/${icon.name}" vith version "${icon.version}" to new icons list`)
          newIcons.push(icon.path)
        }
      }
    })
  })

  if (newIcons.length > 0) {
    generateIconsPreview(newIcons, path.join(GITHUB_DIR, `tabler-icons-${version}.svg`), {
      columnsCount: 6,
      paddingOuter: 24
    })
  }
}
