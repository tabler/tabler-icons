import fs from 'fs'
import { join } from 'path'
import { HOME_DIR } from './helpers.mjs'



const data = JSON.parse(fs.readFileSync(join(HOME_DIR, 'new/tags.json'), 'utf-8'))

for (const [key, tags] of Object.entries(data)) {

  const filename = join(HOME_DIR, `src/_icons/${key}.svg`)

  if (key && tags.length) {
    let data = fs.readFileSync(filename).toString()
    data = data.replace(/(---[\s\S]+?---)/, function(m, headerContent) {

      headerContent = headerContent.replace(/tags: .*\n/, '')
      headerContent = headerContent.replace(/---/, `---\ntags: [${tags.join(', ')}]`)

      return headerContent
    })

    console.log(`Updating ${key} with tags: ${tags.join(', ')}`)
    fs.writeFileSync(filename, data)
  }
}

console.log('CSV file successfully processed')
