import { globSync } from 'glob'
import fs from 'fs'
import path, { basename } from 'path'
import { ICONS_SRC_DIR, iconTemplate } from './helpers.mjs'
import { join } from 'path'
import matter from 'gray-matter'

let error = false

const allIcons = globSync(join(ICONS_SRC_DIR, '**/*.svg')),
  outlineIconsNames = globSync(join(ICONS_SRC_DIR, 'outline/*.svg')).map(i => basename(i, '.svg')),
  filledIconsNames = globSync(join(ICONS_SRC_DIR, 'outline/*.svg')).map(i => basename(i, '.svg'));

allIcons.forEach((icon) => {
  const iconContent = fs.readFileSync(icon, 'utf-8')

  if(!iconContent.includes(iconTemplate)) {
    console.log(`Icon ${icon} is not properly formatted`)
    error = true
  }

  if (!iconContent.includes('<!--') || !iconContent.includes('-->')) {
    console.log(`Icon ${icon} has no metadata`)
    error = true
  }

  try {
    matter(iconContent, { delims: ['<!--', '-->'] })
  } catch (e) {
    console.log(`Icon ${icon} has invalid metadata`)
    error = true
  }
})

outlineIconsNames.forEach((icon) => {
  if (filledIconsNames.indexOf(icon) == -1) {
    console.log(`Icon ${icon} exists in filled version but doesn't exists in outline`)
    error = true
  }
})

if(error) {
  process.exit(1)
} else {
  console.log('All icons are valid')
  process.exit(0)
}
