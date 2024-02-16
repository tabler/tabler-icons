import { globSync } from 'glob'
import fs from 'fs'
import { basename } from 'path'
import { ICONS_SRC_DIR, iconTemplate, parseMatter, types } from './helpers.mjs'
import { join } from 'path'

let error = false

const outlineIconsNames = globSync(join(ICONS_SRC_DIR, 'outline/*.svg')).map(i => basename(i, '.svg')),
  filledIconsNames = globSync(join(ICONS_SRC_DIR, 'filled/*.svg')).map(i => basename(i, '.svg'));

let unicodes = []

const duplicateExists = (arr) => {
  return new Set(arr).size !== arr.length
}

types.forEach(type => {
  const icons = globSync(join(ICONS_SRC_DIR, type, '*.svg'))


  icons.forEach((icon) => {
    const iconContent = fs.readFileSync(icon, 'utf-8')

    if (!iconContent.includes(iconTemplate(type))) {
      console.log(`Icon ${icon} is not properly formatted`)
      error = true
    }

    if (!iconContent.includes('<!--') || !iconContent.includes('-->')) {
      console.log(`Icon ${icon} has no metadata`)
      error = true
    }

    try {
      const { data } = parseMatter(icon)

      if (data.unicode) {
        if (unicodes.indexOf(data.unicode) !== -1) {
          console.log(`Icon ${icon} has duplicate unicode "${data.unicode}"`)
          error = true
        }

        if (data.unicode.length !== 4) {
          console.log(`Icon ${icon} has invalid unicode "${data.unicode}"`)
          error = true
        }

        // check duplicates in tags
        if (duplicateExists(data.tags || [])) {
          console.log(`Icon ${icon} has duplicate tags`)
          error = true
        }

        unicodes.push(data.unicode)
      }
    } catch (e) {
      console.log(`Icon ${icon} has invalid metadata`)
      error = true
    }
  })

  filledIconsNames.forEach((icon) => {
    if (outlineIconsNames.indexOf(icon) === -1) {
      console.log(`Icon ${icon} exists in filled version but doesn't exists in outline`)
      error = true
    }
  })

  if (error) {
    process.exit(1)
  } else {
    console.log('All icons are valid')
    process.exit(0)
  }
})
