import fs from 'fs'
import { readSvgs } from '../../.build/helpers.mjs'

const svgFiles = readSvgs()

const buildSprite = () => {
  let svgContent = ''
  svgFiles.forEach(function (file, i) {
    const svgFileContent = file.contents.replace(/<svg[^>]+>/g, '').replace(/<\/svg>/g, '').replace(/\n+/g, '').replace(/>\s+</g, '><').trim()
    svgContent += `<symbol id="tabler-${file.name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
  })

  let svg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${svgContent}</defs></svg>`

  fs.writeFileSync('tabler-sprite.svg', svg)
  fs.writeFileSync('tabler-sprite-nostroke.svg', svg.replace(/stroke-width="2"\s/g, ''))
}

buildSprite()
