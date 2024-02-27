import fs from 'fs'
import { createScreenshot } from './helpers.mjs'
import { ICONS_SRC_DIR } from './helpers.mjs'
import path from 'path'

const icon = 'ghost',
  strokes = ['.25', '.5', '.75', '1', '1.25', '1.5', '1.75', '2', '2.25', '2.5', '2.25'],
  svgFileContent = fs.readFileSync(path.join(ICONS_SRC_DIR, `outline/${icon}.svg`), 'utf-8'),
  padding = 16,
  paddingOuter = 3,
  iconSize = 56,
  width = 830,
  height = iconSize + paddingOuter * 2

let svgContentSymbols = '',
  svgContentIcons = '',
  x = paddingOuter

strokes.forEach(function (stroke) {
  let svgFileContentStroked = createSvgSymbol(svgFileContent, `icon-${stroke}`, stroke)

  svgFileContent
    .replace('<svg', `<symbol id="icon-${stroke}"`)
    .replace(' width="24" height="24"', '')
    .replace(' stroke-width="2"', ` stroke-width="${stroke}"`)
    .replace('</svg>', '</symbol>')
    .replace(/\n\s+/g, ' ')
    .replace(/<!--(.*?)-->/gis, '')

  svgContentSymbols += `\t${svgFileContentStroked}\n`
  svgContentIcons += `\t<use xlink:href="#icon-${stroke}" x="${x}" y="${paddingOuter}" width="${iconSize}" height="${iconSize}" />\n`

  x += padding + iconSize
})

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #354052"><rect x="0" y="0" width="${width}" height="${height}" fill="#fff"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`
const svgContentDark = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #ffffff"><rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`

fs.writeFileSync('.github/icons-stroke.svg', svgContent)
fs.writeFileSync('.github/icons-stroke-dark.svg', svgContentDark)
await createScreenshot('.github/icons-stroke.svg')
await createScreenshot('.github/icons-stroke-dark.svg')
