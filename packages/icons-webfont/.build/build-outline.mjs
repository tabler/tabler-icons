import outlineStroke from 'svg-outline-stroke'
import { asyncForEach, getCompileOptions, getPackageDir, HOME_DIR, readSvgs } from '../../../.build/helpers.mjs'
import fs from 'fs'
import { resolve } from 'path'

const DIR = getPackageDir('icons-webfont')

const buildOutline = async () => {
  let files = readSvgs()
  const compileOptions = getCompileOptions()

  const iconfontUnicode = JSON.parse(fs.readFileSync(resolve(HOME_DIR, 'tags.json'), 'utf-8'))

  await asyncForEach(files, async function({ name, contents }) {
    if (compileOptions.includeIcons.length === 0 || compileOptions.includeIcons.indexOf(name) >= 0) {

      if (iconfontUnicode[name]) {
        const unicode = iconfontUnicode[name].unicode
        await console.log('Stroke for:', name, unicode)

        contents = contents
            .replace('width="24"', 'width="1000"')
            .replace('height="24"', 'height="1000"')

        if (compileOptions.strokeWidth) {
          contents = contents
              .replace('stroke-width="2"', `stroke-width="${compileOptions.strokeWidth}"`)
        }

        await outlineStroke(contents, {
          optCurve: true,
          steps: 4,
          round: 0,
          centerHorizontally: true,
          fixedWidth: false,
          color: 'black'
        }).then(outlined => {
          if (unicode) {
            fs.writeFileSync(resolve(DIR, `icons-outlined/u${unicode.toUpperCase()}-${name}.svg`), outlined, 'utf-8')
          } else {
            fs.writeFileSync(resolve(DIR, `icons-outlined/${name}.svg`), outlined, 'utf-8')
          }
        }).catch(error => console.log(error))
      }
    }
  })
}

await buildOutline()
