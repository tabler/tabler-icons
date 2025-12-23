import fs from 'fs'
import { getAllIcons } from '../../.build/helpers.mjs'

const icons = getAllIcons(true)

fs.mkdirSync('dist', { recursive: true })

const buildSprite = () => {

  Object.entries(icons).forEach(([type, iconsInCategory]) => {
    let svgContent = ''
    console.log(`Building ${type} sprite...`)

    iconsInCategory.forEach(icon => {

      console.log(`Adding ${icon.name}...`)
      const svgFileContent = icon.content
        .replace(/<svg[^>]+>/g, '')
        .replace(/<\/svg>/g, '')
        .replace(/\n+/g, '')
        .replace(/>\s+</g, '><')
        .replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', '')
        .trim()

      svgContent += `<symbol id="tabler-${type == 'outline' ? '' : `${type}-`}${icon.name}" viewBox="0 0 24 24" fill="${type == 'outline' ? 'none' : 'currentColor'}" stroke="${type == 'outline' ? 'currentColor' : 'none'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
    })

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" id="tabler-icons${type == 'outline' ? '' : `-${type}`}"><defs>${svgContent}</defs></svg>`

    fs.writeFileSync(`dist/tabler-sprite${type == 'outline' ? '' : `-${type}`}.svg`, svg)

    if (type == 'outline') {
      fs.writeFileSync(`dist/tabler-sprite-nostroke.svg`, svg.replace(/stroke-width="2"\s/g, ''))
    }
  })
}

buildSprite()
