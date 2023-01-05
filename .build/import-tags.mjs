import fs from 'fs'
import csv from 'csv-parser'
import { join } from 'path'
import { HOME_DIR } from './helpers.mjs'


fs.createReadStream(join(HOME_DIR, '_import.tsv')).pipe(csv({
  headers: false,
  separator: '\t'
})).on('data', (row) => {
  console.log(row[1], row[2])

  const filename = join(HOME_DIR, `src/_icons/${row[1]}.svg`)

  if(row[2].length) {
    let data = fs.readFileSync(filename).toString()
    data = data.replace(/(---[\s\S]+?---)/, function(m, headerContent) {

      headerContent = headerContent.replace(/tags: .*\n/, '')
      headerContent = headerContent.replace(/---/, `---\ntags: [${row[2]}]`)

      return headerContent
    })

    fs.writeFileSync(filename, data)
  }

}).on('end', () => {
  console.log('CSV file successfully processed')
})
