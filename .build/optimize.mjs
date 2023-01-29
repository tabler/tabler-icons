import glob from 'glob'
import { readFileSync, writeFileSync } from 'fs'
import { join, basename } from 'path'
import { optimizePath, ICONS_SRC_DIR } from './helpers.mjs'


glob(join(ICONS_SRC_DIR, '*.svg'), {}, function(er, files) {

  files.forEach(function(file, i) {
    console.log(`Optimize ${basename(file)}`);

    let svgFile = readFileSync(file),
        svgFileContent = svgFile.toString()

    svgFileContent = svgFileContent.replace(/><\/(polyline|line|rect|circle|path|ellipse)>/g, '/>')
        .replace(/rx="([^"]+)"\s+ry="\1"/g, 'rx="$1"')
        .replace(/<path stroke="red" stroke-width="\.1"([^>]+)?\/>/g, '')
        .replace(/\s?\/>/g, ' />')
        .replace(/\n\s*<(line|circle|path|polyline|rect|ellipse)/g, '\n  <$1')
        // .replace(/polyline points="([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s([0-9.]+)"/g, 'line x1="$1" y1="$2" x2="$3" y2="$4"')
        .replace(/<line x1="([^"]+)" y1="([^"]+)" x2="([^"]+)" y2="([^"]+)"\s*\/>/g, function(f, x1, y1, x2, y2) {
          return `<path d="M${x1} ${y1}L${x2} ${y2}" />`
        })
        .replace(/<circle cx="([^"]+)" cy="([^"]+)" r="([^"]+)"\s+\/>/g, function(f, cx, cy, r) {
          return `<path d="M ${cx} ${cy}m -${r} 0a ${r} ${r} 0 1 0 ${r * 2} 0a ${r} ${r} 0 1 0 ${r * -2} 0" />`
        })
        .replace(/<ellipse cx="([^"]+)" cy="([^"]+)" rx="([^"]+)"\s+\/>/g, function(f, cx, cy, rx) {
          return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx}" />`
        })
        .replace(/<ellipse cx="([^"]+)" cy="([^"]+)" rx="([^"]+)" ry="([^"]+)"\s+\/>/g, function(f, cx, cy, rx, ry) {
          return `<path d="M${cx} ${cy}m -${rx} 0a${rx} ${ry} 0 1 0 ${rx * 2} 0a ${rx} ${ry} 0 1 0 -${rx * 2} 0" />`
        })
        .replace(/<rect width="([^"]+)" height="([^"]+)" x="([^"]+)" y="([^"]+)" rx="([^"]+)"\s+\/>/g, function(f, width, height, x, y, rx) {
          return `<rect x="${x}" y="${y}" width="${height}" height="${height}" rx="${rx}" />`
        })
        .replace(/<rect x="([^"]+)" y="([^"]+)" rx="([^"]+)" width="([^"]+)" height="([^"]+)"\s+\/>/g, function(f, x, y, rx, width, height) {
          return `<rect x="${x}" y="${y}" width="${height}" height="${height}" rx="${rx}" />`
        })
        .replace(/<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)" rx="([^"]+)"\s+\/>/g, function(f, x, y, width, height, rx) {
          return `<path d="M ${x} ${y}m 0 ${rx}a${rx} ${rx} 0 0 1 ${rx} ${-rx}h${width - rx * 2}a${rx} ${rx} 0 0 1 ${rx} ${rx}v${height - rx * 2}a${rx} ${rx} 0 0 1 ${-rx} ${rx}h${-width + rx * 2}a${rx} ${rx} 0 0 1 ${-rx} ${-rx}Z" />`
        })
        .replace(/<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"\s+\/>/g, function(f, x, y, width, height) {
          return `<path d="M ${x} ${y}h${width}v${height}h${-width}Z" />`
        })
        .replace(/<polyline points="([^"]+)\s?"\s+\/>/g, function(f, points) {
          const path = points.split(' ').reduce(
              (accumulator, currentValue, currentIndex) => `${accumulator}${currentIndex % 2 === 0 ? (currentIndex === 0 ? 'M' : 'L') : ''}${currentValue} `,
              ''
          )
          return `<path d="${path}" />`
        })
        .replace(/<path\s+d="([^"]+)"/g, function(f, d) {

          const d2 = d
              .replace(/([0-9]+)+\.00[1-6]/g, (f, m) => `${m}`)
              .replace(/([0-9]+)+\.99[4-9]/g, (f, m) => `${parseInt(m) + 1}`)
              .replace(/\.99[4-9]/g, (f, m) => `1`)
              .replace(/-\.00[1-6]/g, (f, m) => `0`)
              .replace(/\.00[1-6]/g, (f, m) => `0`)
              .replace(/m0 0/g, (f, m) => ``)

          return `<path d="${d2}"`
        })
        // .replace(/(?<=M[^"]+)"\s+\/>[\n\s\t]+<path d="M(?=([^"]+)"\s+\/>)/g, function() {
        //    return `M`
        // })
        .replace(/<path d="([^"]+)"/g, function(f, r1) {
          r1 = optimizePath(r1)

          return `<path d="${r1}"`
        })
        .replace(/d="m/g, 'd="M')
        .replace(/([Aa])\s?([0-9.]+)[\s,]([0-9.]+)[\s,]([0-9.]+)[\s,]?([0-1])[\s,]?([0-1])[\s,]?(-?[0-9.]+)[\s,]?(-?[0-9.]+)/gi, '$1$2 $3 $4 $5 $6 $7 $8')
        .replace(/\n\s+\n+/g, '\n')
        .replace(/<path d="M([0-9.]*) ([0-9.]*)l\s?([-0-9.]*) ([-0-9.]*)"/g, function(f, r1, r2, r3, r4) {
          return `<line x1="${r1}" y1="${r2}" x2="${addFloats(r1, r3)}" y2="${addFloats(r2, r4)}"`
        })
        .replace(/<path d="M([0-9.]*) ([0-9.]*)v\s?([-0-9.]*)"/g, function(f, r1, r2, r3) {
          return `<line x1="${r1}" y1="${r2}" x2="${r1}" y2="${addFloats(r2, r3)}"`
        })
        .replace(/<path d="M([0-9.]*) ([0-9.]*)h\s?([-0-9.]*)"/g, function(f, r1, r2, r3) {
          return `<line x1="${r1}" y1="${r2}" x2="${addFloats(r1, r3)}" y2="${r2}"`
        })
        .replace(/<path d="([^"]+)"/g, function(f, r1) {
          r1 = r1.replace(/ -0\./g, ' -.').replace(/ 0\./g, ' .').replace(/\s([a-z])/gi, '$1').replace(/([a-z])\s/gi, '$1')
          return `<path d="${r1}"`
        })

    if (!svgFileContent.match(/<svg>[\n\t\s]*<path d="([^"]+)"( fill="currentColor")? \/>[\n\t\s]*<\/svg>/)) {
      console.log(`Fix ${file}!`);
    }

    if (svgFile.toString() !== svgFileContent) {
      writeFileSync(file, svgFileContent)
    }
  })
})
