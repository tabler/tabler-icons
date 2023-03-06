import fs from 'fs'
import csv from 'csv-parser'
import { join } from 'path'
import { HOME_DIR } from './helpers.mjs'


fs.createReadStream(join(HOME_DIR, '_import.tsv')).pipe(csv({
  headers: false,
  separator: '\t'
})).on('data', (row) => {
  console.log(row[2], row[3])

  const filename = join(HOME_DIR, `src/_icons/${row[2]}.svg`)

  if(row[3].length) {
    let data = fs.readFileSync(filename).toString()
    data = data.replace(/(---[\s\S]+?---)/, function(m, headerContent) {

      headerContent = headerContent.replace(/tags: .*\n/, '')
      headerContent = headerContent.replace(/---/, `---\ntags: [${row[3]}]`)

      return headerContent
    })

    fs.writeFileSync(filename, data)
  }

}).on('end', () => {
  console.log('CSV file successfully processed')
})
