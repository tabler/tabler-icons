import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { basename } from 'path'

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

// Generate markdown comment with list of added icons
function generateIconsComment(icons) {
  if (icons.length === 0) {
    return ''
  }

  // Group icons by type (outline/filled)
  const outlineIcons = icons.filter(icon => icon.startsWith('outline/')).map(icon => icon.replace('outline/', ''))
  const filledIcons = icons.filter(icon => icon.startsWith('filled/')).map(icon => icon.replace('filled/', ''))

  let markdown = `## 📦 Added Icons\n\n`
  markdown += `This PR adds **${icons.length}** new icon${icons.length > 1 ? 's' : ''}.\n\n`

  if (outlineIcons.length > 0) {
    markdown += `### Outline Icons (${outlineIcons.length})\n\n`
    outlineIcons.forEach(icon => {
      markdown += `- \`${icon}\`\n`
    })
    markdown += `\n`
  }

  if (filledIcons.length > 0) {
    markdown += `### Filled Icons (${filledIcons.length})\n\n`
    filledIcons.forEach(icon => {
      markdown += `- \`${icon}\`\n`
    })
    markdown += `\n`
  }

  return markdown
}

const addedIcons = getAddedIconsFromMain()

if (addedIcons.length > 0) {
  const comment = generateIconsComment(addedIcons)
  writeFileSync('./comment-icons.md', comment, 'utf-8')
  console.log(`Generated comment for ${addedIcons.length} icon(s)`)
} else {
  // Create empty file or exit
  writeFileSync('./comment-icons.md', '', 'utf-8')
  process.exit(0)
}

