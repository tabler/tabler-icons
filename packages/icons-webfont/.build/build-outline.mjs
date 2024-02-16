import outlineStroke from 'svg-outline-stroke'
import { asyncForEach, getCompileOptions, getPackageDir, HOME_DIR, readSvgs } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve, basename } from 'path'
import crypto from 'crypto'
import { glob } from 'glob'
import { execSync } from 'child_process'

const DIR = getPackageDir('icons-webfont')

const buildOutline = async () => {
  let files = readSvgs(),
    filesList = []

  const compileOptions = getCompileOptions(),
    iconfontUnicode = JSON.parse(fs.readFileSync(resolve(HOME_DIR, 'tags.json'), 'utf-8'))

  await asyncForEach(files, async function ({ name, contents }) {
    if (compileOptions.includeIcons.length === 0 || compileOptions.includeIcons.indexOf(name) >= 0) {

      if (iconfontUnicode[name]) {
        const unicode = iconfontUnicode[name].unicode
        console.log('Stroke for:', name, unicode)

        let filename = `${name}.svg`
        if (unicode) {
          filename = `u${unicode.toUpperCase()}-${name}.svg`
        }

        filesList.push(filename)

        contents = contents
          .replace('width="24"', 'width="1000"')
          .replace('height="24"', 'height="1000"')

        if (compileOptions.strokeWidth) {
          contents = contents
            .replace('stroke-width="2"', `stroke-width="${compileOptions.strokeWidth}"`)
        }

        const cachedFilename = `u${unicode.toUpperCase()}-${name}.svg`;

        if (unicode && fs.existsSync(resolve(DIR, `icons-outlined/${cachedFilename}`))) {
          // Get content
          let cachedContent = fs.readFileSync(resolve(DIR, `icons-outlined/${cachedFilename}`), 'utf-8')

          // Get hash
          let cachedHash = '';
          cachedContent = cachedContent.replace(/<!--\!cache:([a-z0-9]+)-->/, function (m, hash) {
            cachedHash = hash;
            return '';
          })

          // Check hash
          if (crypto.createHash('sha1').update(cachedContent).digest("hex") === cachedHash) {
            console.log('Cached stroke for:', name, unicode)
            return true;
          }
        }

        await outlineStroke(contents, {
          optCurve: true,
          steps: 4,
          round: 0,
          centerHorizontally: true,
          fixedWidth: false,
          color: 'black'
        }).then(outlined => {
          filesList[filename]

          // Save file
          fs.writeFileSync(resolve(DIR, `icons-outlined/${filename}`), outlined, 'utf-8')

          // Fix outline
          execSync(`fontforge -lang=py -script .build/fix-outline.py icons-outlined/${filename}`)
          execSync(`svgo icons-outlined/${filename}`)

          // Add hash
          const fixedFileContent = fs
            .readFileSync(resolve(DIR, `icons-outlined/${filename}`), 'utf-8')
            .replace(/\n/g, ' ')
            .trim(),
            hashString = `<!--!cache:${crypto.createHash('sha1').update(fixedFileContent).digest("hex")}-->`

          // Save file
          fs.writeFileSync(
            resolve(DIR, `icons-outlined/${filename}`),
            fixedFileContent + hashString,
            'utf-8'
          )
        }).catch(error => console.log(error))
      }
    }
  })

  // Remove old files
  const existedFiles = (await glob(resolve(DIR, `icons-outlined/*.svg`))).map(file => basename(file))

  existedFiles.forEach(file => {
    if (filesList.indexOf(file) === -1) {
      console.log('Remove:', file)
      fs.unlinkSync(resolve(DIR, `icons-outlined/${file}`))
    }
  })

  console.log('Done')
}

await buildOutline()
