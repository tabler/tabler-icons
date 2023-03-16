import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const svgFiles = fs.readdirSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './svg'))
  .filter((file) => path.extname(file) === '.svg')
  .map(svgFile => {
    const name = path.basename(svgFile, '.svg'),
        contents = fs.readFileSync(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './svg'), svgFile), 'utf-8').trim().replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', '')

    return {
      name,
      contents
    };
  });

// Build sprites
(() => {
  let svgContent = ''
  svgFiles.forEach(function(file, i) {
    const svgFileContent = file.contents.replace(/<svg[^>]+>/g, '').replace(/<\/svg>/g, '').replace(/\n+/g, '').replace(/>\s+</g, '><').trim()
    svgContent += `<symbol id="tabler-${file.name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
  })

  let svg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${svgContent}</defs></svg>` 

  fs.writeFileSync('./src/tabler-sprite.svg', svg)
  fs.writeFileSync('./src/tabler-sprite-nostroke.svg', svg.replace(/stroke-width="2"\s/g, ''))
})();

// Buiuld nodes
(() => {
  const iconNodes = svgFiles.reduce((acc, { name, contents }) => {
    var lines = contents.split('\n');
    lines.splice(0,1);
    var trimmedContent = lines.join('\n').replace('</svg>', '').replace(/(\r\n|\n|\r)/gm, '').replace(/(\s){2,}/g, '');

    acc[name] = trimmedContent;

    return acc;
  }, {});

  const iconNodesStringified = JSON.stringify(iconNodes, null, 2);   

  fs.writeFileSync(`./src/tabler-nodes.json`, iconNodesStringified);
})();

