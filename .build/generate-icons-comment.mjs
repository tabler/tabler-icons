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

  // Generate table for outline icons
  if (outlineIcons.length > 0) {
    markdown += `### Outline Icons (${outlineIcons.length})\n\n`
    markdown += `| Icon | Name |\n`
    markdown += `|------|------|\n`
    
    outlineIcons.forEach(iconPath => {
      const iconName = basename(iconPath, '.svg')
      const svgContent = getSVGContent(iconPath)
      
      if (svgContent) {
        // Use inline SVG - GitHub supports HTML in markdown
        // Escape pipe characters in SVG to avoid breaking table
        const escapedSvg = svgContent.replace(/\|/g, '&#124;').replaceAll('\n', '')
        markdown += `| ${escapedSvg} | \`${iconName}\` |\n`
      } else {
        markdown += `| ❌ | \`${iconName}\` |\n`
      }
    })
    markdown += `\n`
  }

  // Generate table for filled icons
  if (filledIcons.length > 0) {
    markdown += `### Filled Icons (${filledIcons.length})\n\n`
    markdown += `| Icon | Name |\n`
    markdown += `|------|------|\n`
    
    filledIcons.forEach(iconPath => {
      const iconName = basename(iconPath, '.svg')
      const svgContent = getSVGContent(iconPath)
      
      if (svgContent) {
        // Use inline SVG - GitHub supports HTML in markdown
        // Escape pipe characters in SVG to avoid breaking table
        const escapedSvg = svgContent.replace(/\|/g, '&#124;').replaceAll('\n', '')
        markdown += `| ${escapedSvg} | \`${iconName}\` |\n`
      } else {
        markdown += `| ❌ | \`${iconName}\` |\n`
      }
    })
    markdown += `\n`
  }

  return markdown
}

const addedIcons = getAddedIconsFromMain()

if (addedIcons.length > 0) {
  const comment = generateIconsComment(addedIcons)
  console.log(comment)
} else {
  process.exit(0)
}

