import { webfont } from "webfont";
import * as fs from 'fs'
import template from 'lodash.template'
import { getPackageDir, getPackageJson, PACKAGES_DIR } from '../../../.build/helpers.mjs'

const formats = ['ttf', 'eot', 'woff', 'woff2']
const p = getPackageJson()
const DIR = getPackageDir('icons-webfont')
const fontHeight = 1000

webfont({
  files: 'icons-outlined/*.svg',
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
        fs.writeFileSync(`${PACKAGES_DIR}/icons-webfont/fonts/tabler-icons.${format}`, result[format])
      })

      const glyphs = result.glyphsData
          .map(icon => icon.metadata)
          .sort(function(a, b) {
        return ('' + a.name).localeCompare(b.name)
      })

      let options = {
        fileName: 'tabler-icons',
        glyphs,
        v: p.version
      }

      //scss
      const compiled = template(fs.readFileSync(`${DIR}/.build/iconfont.scss`).toString())
      const resultSCSS = compiled(options)
      fs.writeFileSync(`${DIR}/tabler-icons.scss`, resultSCSS)

      //html
      const compiledHtml = template(fs.readFileSync(`${DIR}/.build/iconfont.html`).toString())
      const resultHtml = compiledHtml(options)
      fs.writeFileSync(`${DIR}/tabler-icons.html`, resultHtml)
    })
    .catch((error) => {
      throw error;
    });
