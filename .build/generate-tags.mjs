import { ICONS_SRC_DIR, HOME_DIR, parseMatter } from './helpers.mjs'
import { globSync } from 'glob'
import path from 'path'
import fs from 'fs'

const outlineIcons = globSync(path.join(ICONS_SRC_DIR, `outline/*.svg`)).sort((a, b) => path.basename(a).localeCompare(path.basename(b)))
const filledIcons = globSync(path.join(ICONS_SRC_DIR, `filled/*.svg`)).sort((a, b) => path.basename(a).localeCompare(path.basename(b)))


const tags = {};
outlineIcons.forEach(icon => {
  const name = path.basename(icon, ".svg"),
    { data } = parseMatter(icon)

  tags[name] = {
    name: name,
    category: data.category || '',
    tags: data.tags || [],
    styles: {
      outline: {
        version: data.version || '',
        unicode: data.unicode || '',
      }
    }
  }
})

filledIcons.forEach(icon => {
  const name = path.basename(icon, ".svg"),
    { data } = parseMatter(icon)

  if (tags[name]) {
    tags[name].styles.filled = {
      version: data.version || '',
      unicode: data.unicode || '',
    }
  }
})

fs.writeFileSync(path.join(HOME_DIR, 'icons.json'), JSON.stringify(tags, null, 2))
