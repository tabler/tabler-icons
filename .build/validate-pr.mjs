import { execSync } from 'child_process'
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
               const iconName = basename(filePath, '.svg')
               addedIcons.push(iconName)
            }
         }
      })

      return addedIcons
   } catch (error) {
      return []
   }
}

const addedIcons = getAddedIconsFromMain()

if (addedIcons.length > 0) {
   console.log('Added icons:', addedIcons)
} else {
   process.exit(0)
}
