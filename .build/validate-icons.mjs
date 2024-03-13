import { globSync } from 'glob'
import fs from 'fs'
import { basename } from 'path'
import { HOME_DIR, ICONS_SRC_DIR, iconTemplate, parseMatter, types, getArgvs } from './helpers.mjs'
import { join } from 'path'

let error = false

const outlineIconsNames = globSync(join(ICONS_SRC_DIR, 'outline/*.svg')).map(i => basename(i, '.svg')).sort(),
  filledIconsNames = globSync(join(ICONS_SRC_DIR, 'filled/*.svg')).map(i => basename(i, '.svg')).sort(),
  argvs = getArgvs(),
  aliases = JSON.parse(fs.readFileSync(join(HOME_DIR, 'aliases.json'), 'utf-8'));

let unicodes = []

const duplicateExists = (arr) => {
  return new Set(arr).size !== arr.length
}

const getIconName = (icon) => {
  //return last two parts of the path
  return icon.split('/').slice(-2).join('/')
}

types.forEach(type => {
  const icons = globSync(join(ICONS_SRC_DIR, type, '*.svg')).sort()

  icons.forEach((icon) => {
    const iconContent = fs.readFileSync(icon, 'utf-8'),
      iconName = getIconName(icon)

    if (!iconContent.includes(iconTemplate(type))) {
      console.log(`⛔️ Icon \`${iconName}\` is not properly formatted`)
      error = true
    }

    if (!iconContent.includes('<!--') || !iconContent.includes('-->')) {
      console.log(`⛔️ Icon \`${iconName}\` has no metadata`)
      error = true
    }

    try {
      const { data } = parseMatter(icon)

      if (data.unicode) {
        if (unicodes.indexOf(data.unicode) !== -1) {
          console.log(`⛔️ Icon \`${iconName}\` has duplicate unicode \`${data.unicode}\``)
          error = true
        }

        if (data.unicode.length !== 4) {
          console.log(`⛔️ Icon \`${iconName}\` has invalid unicode \`${data.unicode}\``)
          error = true
        }

        // check duplicates in tags
        if (duplicateExists(data.tags || [])) {
          console.log(`⛔️ Icon \`${iconName}\` has duplicate tags`)
          error = true
        }

        unicodes.push(data.unicode)
      } else if (argvs.hard) {
        console.log(`⛔️ Icon \`${iconName}\` has no unicode`)
        error = true
      }

      if (argvs.hard && !data.version) {
        console.log(`⛔️ Icon \`${iconName}\` has no version`)
        error = true
      }
    } catch (e) {
      console.log(`⛔️ Icon \`${iconName}\` has invalid metadata`)
      error = true
    }
  })

  filledIconsNames.forEach((icon) => {
    const iconName = getIconName(icon)

    if (outlineIconsNames.indexOf(icon) === -1) {
      console.log(`⛔️ Icon \`${iconName}\` exists in filled version but doesn't exists in outline`)
      error = true
    }
  })
})

// check aliases
Object.entries(aliases).forEach(([type, replacers]) => {
  Object.entries(replacers).forEach(([from, to]) => {
    if (!fs.existsSync(join(ICONS_SRC_DIR, type, `${to}.svg`))) {
      console.log(`⛔️ Alias \`${type}/${from}\` for \`${type}/${to}\` doesn't exists`)
      error = true
    }
  })
})

if (error) {
  process.exit(1)
} else {
  console.log('✅ All icons are valid!')
  process.exit(0)
}
