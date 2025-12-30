import { globSync } from 'glob'
import fs from 'fs'
import { basename } from 'path'
import { HOME_DIR, ICONS_SRC_DIR, iconTemplate, parseMatter, types, getArgvs, categories } from './helpers.mjs'
import { join } from 'path'
import { execSync } from 'child_process'

let error = false

const outlineIconsNames = globSync(join(ICONS_SRC_DIR, 'outline/*.svg')).map(i => basename(i, '.svg')).sort(),
  filledIconsNames = globSync(join(ICONS_SRC_DIR, 'filled/*.svg')).map(i => basename(i, '.svg')).sort(),
  argvs = getArgvs(),
  aliases = JSON.parse(fs.readFileSync(join(HOME_DIR, 'aliases.json'), 'utf-8'));

let unicodes = []

// Validate that only .svg files exist in icons/filled and icons/outline directories
types.forEach(type => {
  const dirPath = join(ICONS_SRC_DIR, type)
  const files = fs.readdirSync(dirPath)
  
  files.forEach(file => {
    // Ignore .DS_Store (macOS system file)
    if (file === '.DS_Store') {
      return
    }
    
    if (!file.endsWith('.svg')) {
      console.log(`⛔️ Directory \`icons/${type}\` contains non-SVG file: \`${file}\``)
      error = true
    }
  })
})

const duplicateExists = (arr) => {
  return new Set(arr).size !== arr.length
}

const getIconName = (icon) => {
  //return last two parts of the path
  return icon.split('/').slice(-2).join('/')
}

function getAddedIconsFromMain() {
  try {
    // Use BASE_SHA or BASE_REF from environment, fallback to origin/main
    const baseRef = process.env.BASE_SHA || process.env.BASE_REF || 'origin/main'
    const output = execSync(`git diff ${baseRef}...HEAD --name-status`, { encoding: 'utf-8' })
    const addedIcons = []

    output.split('\n').forEach(line => {
      if (line.startsWith('A\t')) {
        const filePath = line.substring(2)
        // Filter only SVG files from icons/outline/ or icons/filled/ directories
        if (filePath.match(/^icons\/((outline|filled)\/.+\.svg)$/)) {
          // add icon without icons/ prefix
          addedIcons.push(filePath.replace(/^icons\//, ''))
        }
      }
    })

    return addedIcons
  } catch (error) {
    return []
  }
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

    // Check for path with 'z' followed by h/v/H/V command (invalid pattern)
    const invalidZCommandRegex = /<path[^>]*d=["']([^"']*?)z[hvHV]([^"']*?)["']\s+\/>/g
    if (invalidZCommandRegex.test(iconContent)) {
      console.log(`⛔️ Icon \`${iconName}\` contains path with 'z' followed by h/v/H/V command (invalid pattern)`)
      error = true
    }

    // Check for path with 'm' (relative move) after 'M' (absolute move)
    const invalidMAfterMRegex = /<path[^>]*d=["']([^"']*?)M[0-9.-]\s[0-9.-]*?m([^"']*?)["']/g
    if (invalidMAfterMRegex.test(iconContent)) {
      console.log(`⛔️ Icon \`${iconName}\` contains path with 'm' (relative move) after 'M' (absolute move)`)
      error = true
    }

    // Check for path with 'Z' (uppercase) - disallow Z from path
    if (type === 'outline') {
      const invalidZRegex = /<path[^>]*d=["'][^"']*Z[^"']*["']\s+\/>/gi
      if (invalidZRegex.test(iconContent)) {
        console.log(`⛔️ Icon \`${iconName}\` contains path with 'Z'`)
        error = true
      }
    }

    // Check for empty path d=""
    const emptyPathRegex = /<path[^>]*d=["']\s*["']/g
    if (emptyPathRegex.test(iconContent)) {
      console.log(`⛔️ Icon \`${iconName}\` contains empty path d=""`)
      error = true
    }

    // Check for v0 or h0 (forbidden, but v0.1, h0.5 etc. are allowed)
    const forbiddenV0H0Regex = /<path[^>]*d="[^"']*[hv]0(?!\.\d)[^"']*"/g
    if (forbiddenV0H0Regex.test(iconContent)) {
      console.log(`⛔️ Icon \`${iconName}\` contains forbidden v0 or h0`)
      error = true
    }

    // Check for path with only M command (empty path)
    const onlyMRegex = /<path[^>]*d=["']\s*[Mm][\s0-9.-]+\s*["']/g
    if (onlyMRegex.test(iconContent)) {
      console.log(`⛔️ Icon \`${iconName}\` contains path with only M command (empty path)`)
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

const addedIcons = getAddedIconsFromMain()

for (const icon of addedIcons) {
  const iconPath = join(ICONS_SRC_DIR, icon)

  try {
    const { data, content } = parseMatter(iconPath)

    if (data.unicode) {
      console.log(`⛔️ Icon \`${icon}\` has unicode, but should not have it`)
      error = true
    }

    if (data.version) {
      console.log(`⛔️ New icon \`${icon}\` has version, but should not have it`)
      error = true
    }

    if (!icon.match(/^(outline|filled)\/[a-z0-9-]+\.svg$/)) {
      console.log(`⛔️ New icon \`${icon}\` has invalid name`)
      error = true
    }

    // check if outline icon has category
    if (icon.match(/^outline\//) ) {
      if(!data.category) {
        console.log(`⛔️ New outline icon \`${icon}\` has no category`)
        error = true
      } else if (!categories.includes(data.category)) {
        console.log(`⛔️ New outline icon \`${icon}\` has invalid category \`${data.category}\`. Valid categories are: ${categories.join(', ')}`)
        error = true
      }
    } else {
      if (icon.match(/^filled\//) && data.category) {
        console.log(`⛔️ New filled icon \`${icon}\` has category, but should not have it`)
        error = true
      }
    }
  } catch (error) {
    console.log(`⛔️ New icon \`${icon}\` has invalid metadata`)
    error = true
  }
}

if (error) {
  process.exit(1)
} else {
  console.log('✅ All icons are valid!')
  process.exit(0)
}
