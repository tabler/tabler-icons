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

// Get GitHub raw file URL for icon
function getIconRawUrl(iconPath) {
  const repo = process.env.GITHUB_REPOSITORY || 'tabler/tabler-icons'
  const ref = process.env.GITHUB_HEAD_REF || process.env.GITHUB_SHA || 'main'
  return `https://raw.githubusercontent.com/${repo}/${ref}/icons/${iconPath}`
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
    const rawUrl = getIconRawUrl(iconPath)
    
    // Use GitHub raw file URL - GitHub Comments support external image URLs
    markdown += `| <img src="${rawUrl}" width="24" height="24" alt="${iconName}" /> | \`${iconName}\` |\n`
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

