import { globSync } from 'glob'
import fs from 'fs'
import path from 'path'
import { ICONS_SRC_DIR, iconTemplate } from './helpers.mjs'
import { join } from 'path'

const icons = globSync(join(ICONS_SRC_DIR, '**/*.svg'))

icons.forEach((icon) => {
  let iconContent = fs.readFileSync(icon, 'utf-8')

  iconContent = iconContent.replace(/<svg[^>]+>/, iconTemplate)

  if(!iconContent.includes('<!--')) {
    iconContent = '<!--\n-->\n' + iconContent
  }

  fs.writeFileSync(icon, iconContent)
})

