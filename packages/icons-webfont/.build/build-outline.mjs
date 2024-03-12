import outlineStroke from 'svg-outline-stroke'
import { asyncForEach, getAllIcons, getCompileOptions, getPackageDir, HOME_DIR } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve, basename } from 'path'
import crypto from 'crypto'
import { glob } from 'glob'
import { execSync } from 'child_process'

const DIR = getPackageDir('icons-webfont')

const buildOutline = async () => {
  let filesList = {}
  const icons = getAllIcons(true)

  const compileOptions = getCompileOptions()

  await asyncForEach(Object.entries(icons), async ([type, icons]) => {
    fs.mkdirSync(resolve(DIR, `icons-outlined/${type}`), { recursive: true })
    filesList[type] = []

    await asyncForEach(icons, async function ({ name, content, unicode }) {
      console.log(type, name);

      if (compileOptions.includeIcons.length === 0 || compileOptions.includeIcons.indexOf(name) >= 0) {

        if (unicode) {
          console.log('Stroke for:', name, unicode)

          let filename = `${name}.svg`
          if (unicode) {
            filename = `u${unicode.toUpperCase()}-${name}.svg`
          }

          filesList[type].push(filename)

          content = content
            .replace('width="24"', 'width="1000"')
            .replace('height="24"', 'height="1000"')

          if (compileOptions.strokeWidth) {
            content = content
              .replace('stroke-width="2"', `stroke-width="${compileOptions.strokeWidth}"`)
          }

          const cachedFilename = `u${unicode.toUpperCase()}-${name}.svg`;

          if (unicode && fs.existsSync(resolve(DIR, `icons-outlined/${type}/${cachedFilename}`))) {
            // Get content
            let cachedContent = fs.readFileSync(resolve(DIR, `icons-outlined/${type}/${cachedFilename}`), 'utf-8')

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

          await outlineStroke(content, {
            optCurve: true,
            steps: 4,
            round: 0,
            centerHorizontally: true,
            fixedWidth: false,
            color: 'black'
          }).then(outlined => {
            // Save file
            fs.writeFileSync(resolve(DIR, `icons-outlined/${type}/${filename}`), outlined, 'utf-8')

            // Fix outline
            execSync(`fontforge -lang=py -script .build/fix-outline.py icons-outlined/${type}/${filename}`).toString()
            execSync(`svgo icons-outlined/${type}/${filename}`).toString()

            // Add hash
            const fixedFileContent = fs
              .readFileSync(resolve(DIR, `icons-outlined/${type}/${filename}`), 'utf-8')
              .replace(/\n/g, ' ')
              .trim(),
              hashString = `<!--!cache:${crypto.createHash('sha1').update(fixedFileContent).digest("hex")}-->`

            // Save file
            fs.writeFileSync(
              resolve(DIR, `icons-outlined/${type}/${filename}`),
              fixedFileContent + hashString,
              'utf-8'
            )
          }).catch(error => console.log(error))
        }
      }
    })
  })

  // Remove old files
  await asyncForEach(Object.entries(icons), async ([type, icons]) => {
    const existedFiles = (await glob(resolve(DIR, `icons-outlined/${type}/*.svg`))).map(file => basename(file))
    existedFiles.forEach(file => {
      if (filesList[type].indexOf(file) === -1) {
        console.log('Remove:', file)
        fs.unlinkSync(resolve(DIR, `icons-outlined/${type}/${file}`))
      }
    })
  })

  // Copy icons from firs to all directory
  await asyncForEach(Object.entries(icons), async ([type, icons]) => {
    fs.mkdirSync(resolve(DIR, `icons-outlined/all`), { recursive: true })

    await asyncForEach(icons, async function ({ name, unicode }) {
      const iconName = `u${unicode.toUpperCase()}-${name}`

      if (fs.existsSync(resolve(DIR, `icons-outlined/${type}/${iconName}.svg`))) {
        // Copy file
        console.log(`Copy ${iconName} to all directory`)

        fs.copyFileSync(
          resolve(DIR, `icons-outlined/${type}/${iconName}.svg`),
          resolve(DIR, `icons-outlined/all/${iconName}${type !== 'outline' ? `-${type}` : ''}.svg`)
        )
      }
    })
  })

  console.log('Done')
}

await buildOutline()
