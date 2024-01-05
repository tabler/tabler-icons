import { glob } from 'glob'
import fs from 'fs'
import { resolve, join, basename } from 'path'
import { ICONS_SRC_DIR } from './helpers.mjs'

// const extensions = ['heart', 'star', 'off', 'bolt', 'cancel', 'check', 'cog', 'dollar', 'dot', 'eco', 'edit', 'x', 'plus', 'minus', 'shield', 'up', 'down', 'move', 'link', 'ribbon', 'question', 'exclamation', '2', '3', 'code', 'pause', 'pin', 'search', 'share', 'hand', 'infinity', 'ai']
const extensions = ['off']

extensions.forEach(function (extension) {

  glob.sync(join(ICONS_SRC_DIR, `*-${extension}.svg`)).forEach(function (file, i) {
    const fileOriginal = file.replace(`-${extension}.svg`, '.svg')

    if (fs.existsSync(fileOriginal)) {
      const dataOriginal = fs.readFileSync(fileOriginal).toString()

      const categoryOriginal = dataOriginal.match(/category: ([a-zA-Z-]+)/),
        tagsOriginal = dataOriginal.match(/tags: (\[.*?\])/)

      if (categoryOriginal || tagsOriginal) {

        let data = fs.readFileSync(file).toString()
        data = data.replace(/(---[\s\S]+?---)/, function (m, headerContent) {
          console.log('categoryOriginal', fileOriginal, categoryOriginal && categoryOriginal[1], tagsOriginal && tagsOriginal[1])

          if (categoryOriginal) {
            headerContent = headerContent.replace(/category: .*\n/, '')
            headerContent = headerContent.replace(/---/, `---\ncategory: ${categoryOriginal[1]}`)
          }

          if (tagsOriginal) {
            headerContent = headerContent.replace(/tags: .*\n/, '')
            headerContent = headerContent.replace(/---/, `---\ntags: ${tagsOriginal[1]}`)
          }

          return headerContent
        })

        fs.writeFileSync(file, data)
      }
    }
  })
})
