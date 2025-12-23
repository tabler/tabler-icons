import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { basename, join } from 'path'
import { ICONS_SRC_DIR } from './helpers.mjs'

// Check icon files added relative to main branch (for PR)
function getAddedIconsFromMain() {
  try {
    const output = execSync('git diff origin/main...HEAD --name-status', { encoding: 'utf-8' })
    const addedIcons = []

    output.split('\n').forEach(line => {
      if (line.startsWith('A\t')) {
        const filePath = line.substring(2)
        // Filter only SVG files from icons/outline/ or icons/filled/ directories
        if (filePath.match(/^icons\/(outline|filled)\/.+\.svg$/)) {
          const iconPath = filePath.replace(/^icons\//, '')
          addedIcons.push(iconPath)
        }
      }
    })

    return addedIcons
  } catch (error) {
    // Fallback: check relative to HEAD if origin/main doesn't exist
    try {
      const output = execSync('git diff --diff-filter=A --name-only', { encoding: 'utf-8' })
      const addedIcons = []

      output.split('\n').forEach(filePath => {
        if (filePath && filePath.match(/^icons\/(outline|filled)\/.+\.svg$/)) {
          const iconPath = filePath.replace(/^icons\//, '')
          addedIcons.push(iconPath)
        }
      })

      return addedIcons
    } catch {
      return []
    }
  }
}

// Extract SVG content from file (remove metadata comments)
function getSVGContent(iconPath) {
  try {
    const content = readFileSync(join(ICONS_SRC_DIR, iconPath), 'utf-8')
    // Remove metadata comments (<!-- ... -->)
    const svgContent = content.replace(/<!--[\s\S]*?-->/g, '').trim()
    return svgContent
  } catch (error) {
    return null
  }
}

// Convert SVG to base64 data URI
function svgToBase64(svgContent) {
  try {
    const base64 = Buffer.from(svgContent, 'utf-8').toString('base64')
    return `data:image/svg+xml;base64,${base64}`
  } catch (error) {
    return null
  }
}

// Generate markdown table for icons
function generateIconsTable(icons, type) {
  if (icons.length === 0) {
    return ''
  }

  const typeName = type === 'outline' ? 'Outline' : 'Filled'
  let markdown = `### ${typeName} Icons (${icons.length})\n\n`
  markdown += `| Icon | Name |\n`
  markdown += `|------|------|\n`
  
  icons.forEach(iconPath => {
    const iconName = basename(iconPath, '.svg')
    const svgContent = getSVGContent(iconPath)
    
    if (svgContent) {
      // Convert SVG to base64 and use img tag
      const base64DataUri = svgToBase64(svgContent)
      if (base64DataUri) {
        markdown += `| <img src="${base64DataUri}" width="120" height="120" /> | \`${iconName}\` |\n`
      } else {
        markdown += `| ❌ | \`${iconName}\` |\n`
      }
    } else {
      markdown += `| ❌ | \`${iconName}\` |\n`
    }
  })
  markdown += `\n`

  return markdown
}

// Generate markdown comment with table of added icons
function generateIconsComment(icons) {
  if (icons.length === 0) {
    return ''
  }

  // Group icons by type (outline/filled) with full paths
  const outlineIcons = icons.filter(icon => icon.startsWith('outline/'))
  const filledIcons = icons.filter(icon => icon.startsWith('filled/'))

  let markdown = `## 📦 Added Icons\n\n`
  markdown += `This PR adds **${icons.length}** new icon${icons.length > 1 ? 's' : ''}.\n\n`

  markdown += generateIconsTable(outlineIcons, 'outline')
  markdown += generateIconsTable(filledIcons, 'filled')

  return markdown
}

const addedIcons = getAddedIconsFromMain()

if (addedIcons.length > 0) {
  const comment = generateIconsComment(addedIcons)
  console.log(comment)
} else {
  process.exit(0)
}

