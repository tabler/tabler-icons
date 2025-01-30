import outlineStroke from 'svg-outline-stroke'
import { asyncForEach, getAllIcons, getCompileOptions, getPackageDir, HOME_DIR } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve, basename } from 'path'
import crypto from 'crypto'
import { glob } from 'glob'
import { execa } from 'execa'

const DIR = getPackageDir('icons-webfont')

const strokes = {
  200: 1,
  300: 1.5,
  400: 2,
}

const args = process.argv.slice(2)
const debug = args.some(arg => arg === '--debug')

const buildOutline = async () => {
  let filesList = {}
  const icons = getAllIcons(true)

  const compileOptions = getCompileOptions()

  for (const strokeName in strokes) {
    const stroke = strokes[strokeName]

    await asyncForEach(Object.entries(icons), async ([type, icons]) => {
      fs.mkdirSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/new`), { recursive: true })
      filesList[type] = []

      console.log('Start generating strokes for:', strokeName, type)

      const iconsCount = icons.length;
      const iconsCountChars = iconsCount.toString().length;

      await asyncForEach(icons, async function ({ name, unicode, content }, i) {
        if (!debug) {
          process.stdout.clearLine()
          process.stdout.write(`\r[${(i + 1).toString().padStart(iconsCountChars, ' ')} / ${iconsCount}] ${name}`)
        }

        if (compileOptions.includeIcons.length === 0 || compileOptions.includeIcons.indexOf(name) >= 0) {

          if (unicode) {
            if (debug) console.log(`Stroke ${strokeName} for:`, name, unicode)

            let filename = `${name}.svg`
            if (unicode) {
              filename = `u${unicode.toUpperCase()}-${name}.svg`
            }

            filesList[type].push(filename)

            content = content
              .replace('width="24"', 'width="1000"')
              .replace('height="24"', 'height="1000"')

            content = content
              .replace('stroke-width="2"', `stroke-width="${stroke}"`)

            const cachedFilename = `u${unicode.toUpperCase()}-${name}.svg`;

            if (unicode && fs.existsSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${cachedFilename}`))) {
              // Get content
              let cachedContent = fs.readFileSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${cachedFilename}`), 'utf-8')

              // Get hash
              let cachedHash = '';
              cachedContent = cachedContent.replace(/<!--\!cache:([a-z0-9]+)-->/, function (m, hash) {
                cachedHash = hash;
                return '';
              })

              // Check hash
              if (crypto.createHash('sha1').update(cachedContent).digest("hex") === cachedHash) {
                if (debug) console.log('Use cached (optimized) stroke for:', name, unicode)
                return true;
              }
            }

            if (unicode && fs.existsSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/new/${cachedFilename}`))) {
              if (debug) console.log('Use cached (not optimized) stroke for:', name, unicode)
              return true;
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
              fs.writeFileSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/new/${filename}`), outlined, 'utf-8')
              if (debug) console.log('Created unoptimized stroke for:', name, unicode)
            }).catch(error => console.log(error))
          }
        }
      })

      if (!debug) process.stdout.write('\n')

      console.log('Finish generating strokes for:', strokeName, type)

      // Process for new files
      // Fix outline
      if (
        fs.existsSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/new`)) &&
        (await glob(resolve(DIR, `icons-outlined/${strokeName}/${type}/new/*.svg`))).length > 0
      ) {
        console.log('Fix outline using FontForge...')
        await execa('fontforge', ['-quiet', '-lang=py', '-script', '.build/fix-outline.py', resolve(DIR, `icons-outlined/${strokeName}/${type}/new`)], {
          stdout: debug ? process.stdout : null,
          stderr: process.stderr,
        });
        console.log('Optimizing SVG files using svgo...')
        await execa('pnpm', ['dlx', 'svgo', resolve(DIR, `icons-outlined/${strokeName}/${type}/new`)], {
          stdout: debug ? process.stdout : null,
          stderr: process.stderr,
        });
        // Add hash
        console.log('Adding hash to SVG files...')
        await asyncForEach((await glob(resolve(DIR, `icons-outlined/${strokeName}/${type}/new/*.svg`))), async (dir) => {
          const filename = basename(dir)
          const fixedFileContent = fs
            .readFileSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/new/${filename}`), 'utf-8')
            .replace(/\n/g, ' ')
            .trim();
          const hashString = `<!--!cache:${crypto.createHash('sha1').update(fixedFileContent).digest("hex")}-->`
          // Save file
          fs.writeFileSync(
            resolve(DIR, `icons-outlined/${strokeName}/${type}/${filename}`),
            fixedFileContent + hashString,
            'utf-8'
          )
        })
      }

      // Remove unoptimized files directory
      console.log('Remove unoptimized files directory...')
      await execa('rm', ['-rf', resolve(DIR, `icons-outlined/${strokeName}/${type}/new`)]);

      // Remove old files
      console.log('Remove old files...')
      const existedFiles = (await glob(resolve(DIR, `icons-outlined/${strokeName}/${type}/*.svg`))).map(file => basename(file))
      existedFiles.forEach(file => {
        if (filesList[type].indexOf(file) === -1) {
          console.log('Remove:', file)
          fs.unlinkSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${file}`))
        }
      })

      // Copy icons from firs to all directory
      console.log('Copy icons from firs to all directory...')
      fs.mkdirSync(resolve(DIR, `icons-outlined/${strokeName}/all`), { recursive: true })

      await asyncForEach(icons, async function ({ name, unicode }) {
        const iconName = `u${unicode.toUpperCase()}-${name}`

        if (debug) console.log(`Check ${iconName} for copy`)

        if (fs.existsSync(resolve(DIR, `icons-outlined/${strokeName}/${type}/${iconName}.svg`))) {
          // Copy file
          if (debug) console.log(`Copy ${iconName} to all directory`)

          fs.copyFileSync(
            resolve(DIR, `icons-outlined/${strokeName}/${type}/${iconName}.svg`),
            resolve(DIR, `icons-outlined/${strokeName}/all/${iconName}${type !== 'outline' ? `-${type}` : ''}.svg`)
          )
        }
      })
    })
  }

  console.log('Done')
}

await buildOutline()
