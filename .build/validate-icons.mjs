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

    if (iconContent.includes('M0 0h24v24H0z')) {
      console.log(`⛔️ Icon \`${iconName}\` contains empty rectangle path \`M0 0h24v24H0z\``)
      error = true
    }

    // Check for SVG elements that should be converted to path
    const invalidElements = ['<circle', '<rect', '<ellipse', '<line', '<polygon', '<polyline']
    const foundInvalidElements = invalidElements.filter(el => iconContent.includes(el))
    if (foundInvalidElements.length > 0) {
      console.log(`⛔️ Icon \`${iconName}\` contains elements that should be converted to path: ${foundInvalidElements.join(', ')}`)
      error = true
    }

    // Check for rectangle paths that end with 'z' (should not have closing 'z')
    // Rectangle paths should have two arc commands next to each other with the same size (rx and ry)
    const rectanglePathRegex = /<path[^>]*d=["']([^"']*?)a([\d.]+)\s+([\d.]+)\s+[01]\s+[01]\s([0-9.-]+)\s([0-9.-]+)\s[0-9.-]+a\2\s+\3\s+[01]\s+[01]\s[0-9.-]+\s([0-9.-]+)\s([0-9.-]+)z([^"']*?)["']\s+\/>/g
    if (rectanglePathRegex.test(iconContent)) {
      console.log(`⛔️ Icon \`${iconName}\` contains rectangle path that ends with 'z' (should not have closing 'z')`)
      error = true
    }

    try {
      const { data } = parseMatter(icon)

      if (data.unicode) {
        if (unicodes.indexOf(data.unicode) !== -1) {
          console.log(`⛔️ Icon \`${iconName}\` has duplicate unicode \`${data.unicode}\``)
          error = true
        }

        if (data.unicode.length !== 4 && data.unicode.length !== 5) {
          console.log(`⛔️ Icon \`${iconName}\` has invalid unicode \`${data.unicode}\``)
          error = true
        }

        unicodes.push(data.unicode)
      } else if (argvs.hard) {
        console.log(`⛔️ Icon \`${iconName}\` has no unicode`)
        error = true
      }

      // check duplicates in tags
      if (duplicateExists(data.tags || [])) {
        console.log(`⛔️ Icon \`${iconName}\` has duplicate tags`)
        error = true
      }

      if (argvs.hard && !data.version) {
        console.log(`⛔️ Icon \`${iconName}\` has no version`)
        error = true
      }

      if (type === 'filled' && data.category) {
        console.log(`⛔️ Icon \`${iconName}\` has category in filled version`)
        error = true
      }

      if (type === 'filled' && data.tags) {
        console.log(`⛔️ Icon \`${iconName}\` has tags in filled version`)
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
