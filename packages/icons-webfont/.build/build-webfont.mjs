import { webfont } from "webfont";
import * as fs from 'fs'
import template from 'lodash.template'
import { getPackageDir, getPackageJson, getAliases, types, asyncForEach } from '../../../.build/helpers.mjs'

const formats = ['ttf', 'woff', 'woff2']
const p = getPackageJson()
const DIR = getPackageDir('icons-webfont')
const fontHeight = 1000

const aliases = getAliases(true)

fs.mkdirSync(`${DIR}/dist/fonts`, { recursive: true })

asyncForEach(types, async type => {
  console.log(`Building webfont for ${type} icons`)

  await webfont({
    files: `icons-outlined/${type}/*.svg`,
    fontName: 'tabler-icons',
    prependUnicode: true,
    formats,
    normalize: true,
    fontHeight,
    descent: 100,
    ascent: 900,
    fixedWidth: false
  })
    .then((result) => {
      formats.forEach(format => {
        fs.writeFileSync(`${DIR}/dist/fonts/tabler-icons${type !== 'outline' ? `-${type}` : ''}.${format}`, result[format])
      })

      const glyphs = result.glyphsData
        .map(icon => icon.metadata)
        .sort(function (a, b) {
          return ('' + a.name).localeCompare(b.name)
        })

      console.log(aliases[type])
      const options = {
        fileName: 'tabler-icons',
        glyphs,
        v: p.version,
        aliases: aliases[type] || {}
      }

      //scss
      const compiled = template(fs.readFileSync(`${DIR}/.build/iconfont.scss`).toString())
      const resultSCSS = compiled(options)
      fs.writeFileSync(`${DIR}/dist/tabler-icons${type !== 'outline' ? `-${type}` : ''}.scss`, resultSCSS)

      //html
      const compiledHtml = template(fs.readFileSync(`${DIR}/.build/iconfont.html`).toString())
      const resultHtml = compiledHtml(options)
      fs.writeFileSync(`${DIR}/dist/tabler-icons${type !== 'outline' ? `-${type}` : ''}.html`, resultHtml)
    })
    .catch((error) => {
      throw error;
    });
})
