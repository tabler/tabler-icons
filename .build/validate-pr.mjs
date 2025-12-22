import { execSync } from 'child_process'
import { basename } from 'path'
import { parseMatter, ICONS_SRC_DIR } from './helpers.mjs'
import { join } from 'path'

// Check icon files added relative to main branch (for PR)
function getAddedIconsFromMain() {
   try {
      const output = execSync('git diff origin/main...HEAD --name-status', { encoding: 'utf-8' })
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

function validateIcons(icons) {

   for (const icon of icons) {
      const iconPath = join(ICONS_SRC_DIR, icon)

      try {
         const { data, content } = parseMatter(iconPath)

         if (data.unicode) {
            console.log(`⛔️ Icon \`${icon}\` has unicode, but should not have it`)
         }

         if (data.version) {
            console.log(`⛔️ Icon \`${icon}\` has version, but should not have it`)
         }

         if (!icon.match(/^[a-z0-9-]+$/)) {
            console.log(`⛔️ Icon \`${icon}\` has invalid name`)
         }

         // check if filled icon hasnt category
         if (icon.match(/^filled\//) && data.category) {
            console.log(`⛔️ Icon \`${icon}\` has category, but should not have it`)
         }

         // check if filled icon has tags
         if (icon.match(/^filled\//) && data.tags) {
            console.log(`⛔️ Icon \`${icon}\` has tags, but should not have it`)
         }
      } catch (error) {
         console.log(`⛔️ Icon \`${icon}\` has invalid metadata`)
      }
   }
}

const addedIcons = getAddedIconsFromMain()

if (addedIcons.length > 0) {
   validateIcons(addedIcons)
   process.exit(0)
} else {
   process.exit(0)
}
