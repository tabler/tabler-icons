import fs from 'fs'
import { getAllIcons } from '../../.build/helpers.mjs'

const icons = getAllIcons(true)

const buildSprite = () => {
  let svgContent = ''
  Object.entries(icons).forEach(([type, iconsInCategory]) => {
    iconsInCategory.forEach(icon => {
      const svgFileContent = icon.content
        .replace(/<svg[^>]+>/g, '')
        .replace(/<\/svg>/g, '')
        .replace(/\n+/g, '')
        .replace(/>\s+</g, '><')
        .trim()

      svgContent += `<symbol id="tabler-${type == 'outline' ? '' : `${type}-`}${icon.name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
    })
  })

  let svg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${svgContent}</defs></svg>`

  fs.mkdirSync('dist', { recursive: true })
  fs.writeFileSync('dist/tabler-sprite.svg', svg)
  fs.writeFileSync('dist/tabler-sprite-nostroke.svg', svg.replace(/stroke-width="2"\s/g, ''))
}

buildSprite()
