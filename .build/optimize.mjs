import { globSync } from 'glob'
import { readFileSync, writeFileSync } from 'fs'
import { join, basename } from 'path'
import { optimizePath, ICONS_SRC_DIR, iconTemplate, types } from './helpers.mjs'

types.forEach(type => {
  const files = globSync(join(ICONS_SRC_DIR, type, '*.svg'))

  files.forEach(function (file, i) {
    console.log(`Optimize ${basename(file)}`);

    // Read files
    let svgFile = readFileSync(file),
      svgFileContent = svgFile.toString()

    // Optimize SVG
    svgFileContent = svgFileContent.replace(/><\/(polyline|line|rect|circle|path|ellipse)>/g, '/>')
      .replace(/rx="([^"]+)"\s+ry="\1"/g, 'rx="$1"')
      .replace(/<path stroke="red" stroke-width="\.1"([^>]+)?\/>/g, '')
      .replace(/<path[^>]+d="M0 0h24v24h-24z"[^>]+\/>/g, '')
      .replace(/\s?\/>/g, ' />')
      .replace(/\n\s*<(line|circle|path|polyline|rect|ellipse)/g, '\n  <$1')
      // .replace(/polyline points="([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s([0-9.]+)"/g, 'line x1="$1" y1="$2" x2="$3" y2="$4"')
      .replace(/<line x1="([^"]+)" y1="([^"]+)" x2="([^"]+)" y2="([^"]+)"\s*\/>/g, function (f, x1, y1, x2, y2) {
        return `<path d="M${x1} ${y1}L${x2} ${y2}" />`
      })
      .replace(/<circle cx="([^"]+)" cy="([^"]+)" r="([^"]+)"([^>]*)?\/>/g, function (f, cx, cy, r, attrs) {
        return `<path d="M ${cx - r} ${cy}a ${r} ${r} 0 1 0 ${r * 2} 0a ${r} ${r} 0 1 0 ${r * -2} 0"${attrs}/>`
      })
      .replace(/<ellipse cx="([^"]+)" cy="([^"]+)" rx="([^"]+)"\s+\/>/g, function (f, cx, cy, rx) {
        return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx}" />`
      })
      .replace(/<ellipse cx="([^"]+)" cy="([^"]+)" rx="([^"]+)" ry="([^"]+)"\s+\/>/g, function (f, cx, cy, rx, ry) {
        return `<path d="M${cx} ${cy}m -${rx} 0a${rx} ${ry} 0 1 0 ${rx * 2} 0a ${rx} ${ry} 0 1 0 -${rx * 2} 0" />`
      })
      .replace(/<rect width="([^"]+)" height="([^"]+)" x="([^"]+)" y="([^"]+)"(.*)?\/>/g, function (f, width, height, x, y, attrs) {
        return `<rect x="${x}" y="${y}" width="${width}" height="${height}"${attrs} />`
      })
      .replace(/<rect x="([^"]+)" y="([^"]+)" rx="([^"]+)" width="([^"]+)" height="([^"]+)"\s+\/>/g, function (f, x, y, rx, width, height) {
        return `<rect x="${x}" y="${y}" width="${height}" height="${height}" rx="${rx}" />`
      })
      .replace(/<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)" rx="([^"]+)"\s+\/>/g, function (f, x, y, width, height, rx) {
        return `<path d="M ${x} ${y}m 0 ${rx}a${rx} ${rx} 0 0 1 ${rx} ${-rx}h${width - rx * 2}a${rx} ${rx} 0 0 1 ${rx} ${rx}v${height - rx * 2}a${rx} ${rx} 0 0 1 ${-rx} ${rx}h${-width + rx * 2}a${rx} ${rx} 0 0 1 ${-rx} ${-rx}Z" />`
      })
      .replace(/<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"\s+\/>/g, function (f, x, y, width, height) {
        return `<path d="M ${x} ${y}h${width}v${height}h${-width}Z" />`
      })
      .replace(/<polyline points="([^"]+)\s?"\s+\/>/g, function (f, points) {
        const path = points.split(' ').reduce(
          (accumulator, currentValue, currentIndex) => `${accumulator}${currentIndex % 2 === 0 ? (currentIndex === 0 ? 'M' : 'L') : ''}${currentValue} `,
          ''
        )
        return `<path d="${path}" />`
      })
      .replace(/<path d="([^"]+)"/g, function (f, r1) {
        r1 = optimizePath(r1)

        return `<path d="${r1}"`
      })
      .replace(/<path\s+d="([^"]+)"/g, function (f, d) {
        const d2 = d
          .replace(/m0 0/g, (f, m) => ``)
          .replace(/ 0\./g, ' .')
          .replace(/ -0\./g, ' -.')
          .replace(/([amcvhslAMCVHLS]) /g, '$1')

        return `<path d="${d2}"`
      })
      .replace(/d="m/g, 'd="M')
      .replace(/([Aa])\s?([0-9.]+)[\s,]([0-9.]+)[\s,]([0-9.]+)[\s,]?([0-1])[\s,]?([0-1])[\s,]?(-?[0-9.]+)[\s,]?(-?[0-9.]+)/gi, '$1$2 $3 $4 $5 $6 $7 $8')
      .replace(/<path[^>]*d=["']([^"']*?)a([\d.]+)\s+([\d.]+)\s([01])\s([01])\s([01]+)\s([0-9.-]+)\s([0-9.-]+)a\2\s+\3\s+([01])\s+([01])\s([01]+)\s([0-9.-]+)\s([0-9.-]+)z([^"']*?)["']\s+\/>/g, function (match, d, rx, ry, flag1, flag2, extra1, x1, y1, flag3, flag4, extra2, x2, y2, afterZ) {
        return `<path d="${d}a${rx} ${ry} ${flag1} ${flag2} ${extra1} ${x1} ${y1}a${rx} ${ry} ${flag3} ${flag4} ${extra2} ${x2} ${y2}${afterZ}" />`
      })
      .replace(/<path[^>]*d=["']([^"']*?)M([0-9.-]+)\s([0-9.-]+)m([0-9.-]+)\s([0-9.-]+)([^"']*?)["'](.*)?\/>/g, function (match, d, x1, y1, x2, y2, afterM, attrs) {
        return `<path d="${d}M${Number(x1) + Number(x2)} ${Number(y1) + Number(y2)}${afterM}"${attrs} />`
      })
      .replace(/\n\s+\n+/g, '\n')
      .replace(/<path d="([^"]+)"/g, function (f, d) {
        const d2 = d
          .replace(/v0/g, (f, v) => ``)
          .replace(/h0/g, (f, h) => ``)

        return `<path d="${d2}"`
      })

    // Add icon template
    svgFileContent = svgFileContent.replace(/<svg[^>]+>/, iconTemplate(type))

    // Remove stroke and fill
    if (file.match(/\/filled\//)) {
      svgFileContent = svgFileContent
        .replace(/stroke-width="0" fill="currentColor"/gm, '')
        .replace('stroke-width="2"', '')
        .replace('stroke-linecap="round"', '')
        .replace('stroke-linejoin="round"', '')
        .replace('stroke="currentColor"', '')
        .replace('fill="none"', 'fill="currentColor"')
        .replace(/^\s*[\r\n]/gm, '')
        .replace(/\s{2,}\//g, ' /')
    }

    // Add comment if not exists
    if (!svgFileContent.includes('<!--')) {
      svgFileContent = '<!--\n-->\n' + svgFileContent
    }

    svgFileContent = svgFileContent.replace(/tags: \[([^]+)\]/, (m, tags) => {
      tags = [...new Set(tags.split(',').map(t => t.trim()))].filter(t => t).join(', ')

      return `tags: [${tags}]`
    })

    // Write files
    if (svgFile.toString() !== svgFileContent) {
      writeFileSync(file, svgFileContent)
    }
  })
})
