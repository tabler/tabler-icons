import fs from 'fs'
import { createDirectory, readSvgs } from '../../.build/helpers.mjs'

const svgFiles = readSvgs()

const buildSprite = () => {
  let svgContent = ''
  svgFiles.forEach(function(file, i) {
    const svgFileContent = file.contents.replace(/<svg[^>]+>/g, '').replace(/<\/svg>/g, '').replace(/\n+/g, '').replace(/>\s+</g, '><').trim()
    svgContent += `<symbol id="tabler-${file.name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
  })

  let svg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${svgContent}</defs></svg>`

  fs.writeFileSync('tabler-sprite.svg', svg)
  fs.writeFileSync('tabler-sprite-nostroke.svg', svg.replace(/stroke-width="2"\s/g, ''))
}

const buildJS = () => {
  createDirectory('./lib')
  createDirectory('./lib/icons')

  let indexContent = ''
  svgFiles.forEach((file) => {
    indexContent += `export { default as ${file.namePascal}} from './icons/${file.name}.js';\n`;

    const exportString = `export default \`${file.contents}\`;\n`;
    fs.writeFileSync(`./lib/icons/${file.name}.js`, exportString);
  });

  fs.writeFileSync(`./lib/index.js`, indexContent);
}

const buildNodes = () => {
  const iconNodes = svgFiles.reduce((acc, { name, obj }) => {
    acc[name] = obj.children.map(({ name, attributes }) => [name, attributes]);

    return acc;
  }, {});

  const iconNodesStringified = JSON.stringify(iconNodes, null, 2);

  fs.writeFileSync(`./tabler-nodes.json`, iconNodesStringified);
}

buildSprite()
buildJS()
buildNodes()
