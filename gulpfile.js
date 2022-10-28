const gulp = require('gulp'),
    cp = require('child_process'),
    glob = require('glob'),
    fs = require('fs'),
    path = require('path'),
    p = require('./package.json'),
    csv = require('csv-parser'),
    zip = require('gulp-zip'),
    svgo = require('gulp-svgo'),
    { optimize } = require('svgo'),
    outlineStroke = require('svg-outline-stroke'),
    iconfont = require('gulp-iconfont'),
    template = require('lodash.template'),
    sass = require('node-sass'),
    cleanCSS = require('clean-css'),
    argv = require('minimist')(process.argv.slice(2)),
    svgParse = require('parse-svg-path'),
    svgpath = require('svgpath'),
    svgr = require('@svgr/core').default

const compileOptions = {
  includeIcons: [],
  strokeWidth: null,
  fontForge: 'fontforge'
}

if (fs.existsSync('./compile-options.json')) {
  try {
    const tempOptions = require('./compile-options.json')
    if (typeof tempOptions !== 'object') {
      throw 'Compile options file does not contain an json object'
    }

    if (typeof tempOptions.includeIcons !== 'undefined') {
      if (!Array.isArray(tempOptions.includeIcons)) {
        throw 'property inludeIcons is not an array'
      }
      compileOptions.includeIcons = tempOptions.includeIcons
    }

    if (typeof tempOptions.includeCategories !== 'undefined') {
      if (typeof tempOptions.includeCategories === 'string') {
        tempOptions.includeCategories = tempOptions.includeCategories.split(' ')
      }
      if (!Array.isArray(tempOptions.includeCategories)) {
        throw 'property includeCategories is not an array or string'
      }
      const tags = Object.entries(require('./tags.json'))
      tempOptions.includeCategories.forEach(function(category) {
        category = category.charAt(0).toUpperCase() + category.slice(1)
        for (const [icon, data] of tags) {
          if (data.category === category && compileOptions.includeIcons.indexOf(icon) === -1) {
            compileOptions.includeIcons.push(icon)
          }
        }
      })
    }

    if (typeof tempOptions.excludeIcons !== 'undefined') {
      if (!Array.isArray(tempOptions.excludeIcons)) {
        throw 'property excludeIcons is not an array'
      }
      compileOptions.includeIcons = compileOptions.includeIcons.filter(function(icon) {
        return tempOptions.excludeIcons.indexOf(icon) === -1
      })
    }

    if (typeof tempOptions.excludeOffIcons !== 'undefined' && tempOptions.excludeOffIcons) {
      // Exclude `*-off` icons
      compileOptions.includeIcons = compileOptions.includeIcons.filter(function(icon) {
        return !icon.endsWith('-off')
      })
    }

    if (typeof tempOptions.strokeWidth !== 'undefined') {
      if (typeof tempOptions.strokeWidth !== 'string' && typeof tempOptions.strokeWidth !== 'number') {
        throw 'property strokeWidth is not a string or number'
      }
      compileOptions.strokeWidth = tempOptions.strokeWidth.toString()
    }

    if (typeof tempOptions.fontForge !== 'undefined') {
      if (typeof tempOptions.fontForge !== 'string') {
        throw 'property fontForge is not a string'
      }
      compileOptions.fontForge = tempOptions.fontForge
    }

  } catch (error) {
    throw `Error reading compile-options.json: ${error}`
  }

}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const svgToPng = async (filePath, destination) => {
  filePath = path.join(__dirname, filePath)

  await new Promise((resolve, reject) => {
    cp.exec(`rsvg-convert -h 240 ${filePath} > ${destination}`, (error, stdout, stderr) => {
      error ? reject() : resolve()
    })
  })
}

const createScreenshot = async (filePath) => {
  await cp.exec(`rsvg-convert -x 2 -y 2 ${filePath} > ${filePath.replace('.svg', '.png')}`)
  await cp.exec(`rsvg-convert -x 4 -y 4 ${filePath} > ${filePath.replace('.svg', '@2x.png')}`)
}

const printChangelog = function(newIcons, modifiedIcons, renamedIcons, pretty = false) {
  if (newIcons.length > 0) {
    if (pretty) {
      console.log(`### ${newIcons.length} new icons:`)

      newIcons.forEach(function(icon, i) {
        console.log(`- \`${icon}\``)
      })
    } else {
      let str = ''
      str += `${newIcons.length} new icons: `

      newIcons.forEach(function(icon, i) {
        str += `\`${icon}\``

        if ((i + 1) <= newIcons.length - 1) {
          str += ', '
        }
      })

      console.log(str)
    }

    console.log('')
  }

  if (modifiedIcons.length > 0) {
    let str = ''
    str += `Fixed icons: `

    modifiedIcons.forEach(function(icon, i) {
      str += `\`${icon}\``

      if ((i + 1) <= modifiedIcons.length - 1) {
        str += ', '
      }
    })

    console.log(str)
    console.log('')
  }

  if (renamedIcons.length > 0) {
    console.log(`Renamed icons: `)

    renamedIcons.forEach(function(icon, i) {
      console.log(`- \`${icon[0]}\` renamed to \`${icon[1]}\``)
    })
  }
}

const generateIconsPreview = function(files, destFile, cb, {
  columnsCount = 19,
  paddingOuter = 7,
  color = '#354052',
  background = '#fff'
} = {}) {

  const padding = 20,
      iconSize = 24

  const iconsCount = files.length,
      rowsCount = Math.ceil(iconsCount / columnsCount),
      width = columnsCount * (iconSize + padding) + 2 * paddingOuter - padding,
      height = rowsCount * (iconSize + padding) + 2 * paddingOuter - padding

  let svgContentSymbols = '',
      svgContentIcons = '',
      x = paddingOuter,
      y = paddingOuter

  files.forEach(function(file, i) {
    let name = path.basename(file, '.svg')

    let svgFile = fs.readFileSync(file),
        svgFileContent = svgFile.toString()

    svgFileContent = svgFileContent.replace('<svg xmlns="http://www.w3.org/2000/svg"', `<symbol id="${name}"`)
        .replace(' width="24" height="24"', '')
        .replace('</svg>', '</symbol>')
        .replace(/\n\s+/g, '')

    svgContentSymbols += `\t${svgFileContent}\n`
    svgContentIcons += `\t<use xlink:href="#${name}" x="${x}" y="${y}" width="${iconSize}" height="${iconSize}" />\n`

    x += padding + iconSize

    if (i % columnsCount === columnsCount - 1) {
      x = paddingOuter
      y += padding + iconSize
    }
  })

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: ${color}"><rect x="0" y="0" width="${width}" height="${height}" fill="${background}"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`

  fs.writeFileSync(destFile, svgContent)
  createScreenshot(destFile)

  cb()
}

//*********************************************************************************************

gulp.task('iconfont-prepare', (cb) => {
  cp.exec('mkdir -p icons-outlined/ && rm -fd ./icons-outlined/* && mkdir -p && rm -fd ./iconfont/*', () => {
    cb()
  })
})

gulp.task('iconfont-clean', (cb) => {
  cp.exec('rm -rf ./icons-outlined', () => {
    cb()
  })
})

gulp.task('iconfont-svg-outline', (cb) => {

  cp.exec('mkdir -p icons-outlined/ && rm -fd ./icons-outlined/*', async () => {
    let files = glob.sync('./icons/*.svg')

    const iconfontUnicode = require('./tags.json')

    await asyncForEach(files, async function(file) {

      const name = path.basename(file, '.svg')

      if (compileOptions.includeIcons.length === 0 || compileOptions.includeIcons.indexOf(name) >= 0) {

        const unicode = iconfontUnicode[name].unicode
        await console.log('Stroke for:', file, unicode)

        let strokedSVG = fs.readFileSync(file).toString()

        strokedSVG = strokedSVG.replace('width="24"', 'width="1000"').replace('height="24"', 'height="1000"')

        if (compileOptions.strokeWidth) {
          strokedSVG = strokedSVG.replace('stroke-width="2"', `stroke-width="${compileOptions.strokeWidth}"`)
        }

        await outlineStroke(strokedSVG, {
          optCurve: false,
          steps: 4,
          round: 0,
          centerHorizontally: true,
          fixedWidth: true,
          color: 'black'
        }).then(outlined => {
          if (unicode) {
            fs.writeFileSync(`icons-outlined/u${unicode.toUpperCase()}-${name}.svg`, outlined)
          } else {
            fs.writeFileSync(`icons-outlined/${name}.svg`, outlined)
          }
        }).catch(error => console.log(error))
      }
    })

    cb()
  })
})

gulp.task('iconfont-optimize', () => {
  return gulp.src('icons-outlined/*').pipe(svgo()).pipe(gulp.dest('icons-outlined'))
})

gulp.task('iconfont-fix-outline', (cb) => {
  var fontForge = compileOptions.fontForge

  // correct svg outline directions in a child process using fontforge
  const generate = cp.spawn(fontForge, ['-lang=py', '-script', './fix-outline.py'], { stdio: 'inherit' })
  generate.on('close', function(code) {
    console.log(`Correcting svg outline directions exited with code ${code}`)
    if (!code) {
      cb()
    }
  })
})

gulp.task('iconfont', () => {
  return gulp.src(['icons-outlined/*.svg']).pipe(iconfont({
    fontName: 'tabler-icons',
    prependUnicode: true,
    formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
    normalize: true,
    fontHeight: 1000,
    descent: 100,
    ascent: 986.5
  })).on('glyphs', function(glyphs, options) {
    //sort glypht
    glyphs = glyphs.sort(function(a, b) {
      return ('' + a.name).localeCompare(b.name)
    })

    //css
    options['glyphs'] = glyphs
    options['v'] = p.version

    const compiled = template(fs.readFileSync('.build/iconfont.scss').toString())
    const result = compiled(options)

    fs.writeFileSync('iconfont/tabler-icons.scss', result)

    //html
    const compiledHtml = template(fs.readFileSync('.build/iconfont.html').toString())
    const resultHtml = compiledHtml(options)

    fs.writeFileSync('iconfont/tabler-icons.html', resultHtml)
  }).pipe(gulp.dest('iconfont/fonts'))
})

gulp.task('iconfont-css', (cb) => {
  sass.render({
    file: 'iconfont/tabler-icons.scss',
    outputStyle: 'expanded'
  }, function(err, result) {
    fs.writeFileSync('iconfont/tabler-icons.css', result.css)

    const cleanOutput = new cleanCSS({}).minify(result.css)
    fs.writeFileSync('iconfont/tabler-icons.min.css', cleanOutput.styles)

    cb()
  })
})

const getMaxUnicode = () => {
  const path = 'src/_icons/*.svg'
  const files = glob.sync(path)
  let maxUnicode = 0

  files.forEach(function(file) {
    const svgFile = fs.readFileSync(file).toString()

    svgFile.replace(/unicode: "([a-f0-9.]+)"/i, function(m, unicode) {
      const newUnicode = parseInt(unicode, 16)

      if (newUnicode) {
        maxUnicode = Math.max(maxUnicode, newUnicode)
      }
    })
  })

  return maxUnicode
}

gulp.task('update-icons-unicode', (cb) => {
  let maxUnicode = getMaxUnicode()

  glob('./src/_icons/*.svg', {}, function(er, files) {
    for (const i in files) {
      const file = files[i]

      let svgFile = fs.readFileSync(file).toString()

      if (!svgFile.match(/\nunicode: "?([a-f0-9.]+)"?/i)) {
        maxUnicode++
        const unicode = maxUnicode.toString(16)

        if (unicode) {
          svgFile = svgFile.replace(/---\n<svg>/i, function(m) {
            return `unicode: "${unicode}"\n${m}`
          })

          console.log(`Add unicode "${unicode}" to "${file}"`)
          fs.writeFileSync(file, svgFile)
        }
      } else {
        console.log(`File ${file} already has unicode`)
      }
    }

    cb()
  })
})

gulp.task('build-iconfont',
    gulp.series('iconfont-prepare', 'iconfont-svg-outline', 'iconfont-fix-outline', 'iconfont-optimize', 'iconfont', 'iconfont-css', 'iconfont-clean'))

gulp.task('build-zip', () => {
  const version = p.version

  return gulp.src('{icons/**/*,icons-png/**/*,icons-react/**/*,iconfont/**/*,tabler-sprite.svg,tabler-sprite-nostroke.svg}')
      .pipe(zip(`tabler-icons-${version}.zip`))
      .pipe(gulp.dest('packages-zip'))
})

gulp.task('build-jekyll', (cb) => {
  const jekyll = cp.spawn('bundle', ['exec', 'jekyll', 'build'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      JEKYLL_ENV: 'production'
    }
  })
  jekyll.on('close', function(code) {
    console.log(`Jekyll build exited with code ${code}`)
    if (!code) {
      cb()
    }
  })
})

gulp.task('build-copy', (cb) => {
  cp.exec('mkdir -p icons/ && rm -fd ./icons/* && cp ./_site/icons/* ./icons && cp ./_site/tags.json .', () => {
    cb()
  })
})

gulp.task('clean-png', (cb) => {
  cp.exec('rm -fd ./icons-png/*', () => {
    cb()
  })
})

gulp.task('icons-sprite', (cb) => {
  glob('_site/icons/*.svg', {}, function(er, files) {

    let svgContent = ''

    files.forEach(function(file, i) {
      let name = path.basename(file, '.svg'),
          svgFile = fs.readFileSync(file),
          svgFileContent = svgFile.toString()

      svgFileContent = svgFileContent.replace(/<svg[^>]+>/g, '').replace(/<\/svg>/g, '').replace(/\n+/g, '').replace(/>\s+</g, '><').trim()

      svgContent += `<symbol id="tabler-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
    })

    let svg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${svgContent}</defs></svg>`

    fs.writeFileSync('tabler-sprite.svg', svg)
    fs.writeFileSync('tabler-sprite-nostroke.svg', svg.replace(/stroke-width="2"\s/g, ''))
    cb()
  })
})

gulp.task('icons-preview', (cb) => {
  glob('icons/*.svg', {}, function(er, files) {
    generateIconsPreview(files, '.github/icons.svg', cb)
    generateIconsPreview(files, '.github/icons-dark.svg', cb, {
      color: '#ffffff',
      background: 'transparent'
    })
  })
})

gulp.task('icons-stroke', gulp.series((cb) => {

  const icon = 'disabled',
      strokes = ['.5', '1', '1.5', '2', '2.75'],
      svgFileContent = fs.readFileSync(`icons/${icon}.svg`).toString(),
      padding = 16,
      paddingOuter = 3,
      iconSize = 32,
      width = 914,
      height = iconSize + paddingOuter * 2

  let svgContentSymbols = '',
      svgContentIcons = '',
      x = paddingOuter

  strokes.forEach(function(stroke) {
    let svgFileContentStroked = svgFileContent.replace('<svg xmlns="http://www.w3.org/2000/svg"', `<symbol id="icon-${stroke}"`)
        .replace(' width="24" height="24"', '')
        .replace(' stroke-width="2"', ` stroke-width="${stroke}"`)
        .replace('</svg>', '</symbol>')
        .replace(/\n\s+/g, '')

    svgContentSymbols += `\t${svgFileContentStroked}\n`
    svgContentIcons += `\t<use xlink:href="#icon-${stroke}" x="${x}" y="${paddingOuter}" width="${iconSize}" height="${iconSize}" />\n`

    x += padding + iconSize
  })

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #354052"><rect x="0" y="0" width="${width}" height="${height}" fill="#fff"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`
  const svgContentDark = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #ffffff"><rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`

  fs.writeFileSync('.github/icons-stroke.svg', svgContent)
  fs.writeFileSync('.github/icons-stroke-dark.svg', svgContentDark)
  createScreenshot('.github/icons-stroke.svg')
  createScreenshot('.github/icons-stroke-dark.svg')
  cb()
}))

gulp.task('optimize', (cb) => {
  const addFloats = function(n1, n2) {
    return Math.round((parseFloat(n1) + parseFloat(n2)) * 1000) / 1000
  }

  const optimizePath = function(path) {
    let transformed = svgpath(path).rel().round(3).toString()

    return svgParse(transformed).map(function(a) {
      return a.join(' ')
    }).join(' ')
  }

  glob('src/_icons/*.svg', {}, function(er, files) {

    files.forEach(function(file, i) {
      let svgFile = fs.readFileSync(file),
          svgFileContent = svgFile.toString()

      svgFileContent = svgFileContent.replace(/><\/(polyline|line|rect|circle|path|ellipse)>/g, '/>')
          .replace(/rx="([^"]+)"\s+ry="\1"/g, 'rx="$1"')
          .replace(/<path stroke="red" stroke-width="\.1"([^>]+)?\/>/g, '')
          .replace(/\s?\/>/g, ' />')
          .replace(/\n\s*<(line|circle|path|polyline|rect|ellipse)/g, '\n  <$1')
          .replace(/polyline points="([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s([0-9.]+)"/g, 'line x1="$1" y1="$2" x2="$3" y2="$4"')
          // .replace(/<line x1="([^"]+)" y1="([^"]+)" x2="([^"]+)" y2="([^"]+)"\s*\/>/g, function(f, x1, y1, x2, y2) {
          //   return `<path d="M${x1} ${y1}L${x2} ${y2}" />`
          // })
          // .replace(/<circle cx="([^"]+)" cy="([^"]+)" r="([^"]+)"\s+\/>/g, function(f, cx, cy, r) {
          //   return `<path d="M ${cx} ${cy}m -${r}, 0a ${r},${r} 0 1,0 ${r * 2},0a ${r},${r} 0 1,0 ${r * -2},0" />`
          // })
          // .replace(/<ellipse cx="([^"]+)" cy="([^"]+)" rx="([^"]+)" ry="([^"]+)"\s+\/>/g, function(f, rx, cx, ry, cy) {
          //   return `<path d="M ${cx - rx} ${cy}a${rx}, ${ry} 0 1,0 ${rx * 2},0a ${rx},${ry} 0 1,0 -${rx * 2},0" />`
          // })
          // .replace(/(?<=M[^"]+)"\s+\/>[\n\s\t]+<path d="M/g, function() {
          //   return `M`
          // })
          .replace(/<path d="([^"]+)"/g, function(f, r1) {
            r1 = optimizePath(r1)

            return `<path d="${r1}"`
          })
          .replace(/d="m/g, 'd="M')
          .replace(/([Aa])\s?([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s?([0-1])\s?([0-1])\s?(-?[0-9.]+)\s?(-?[0-9.]+)/gi, '$1$2 $3 $4 $5 $6 $7 $8')
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

      if (svgFile.toString() !== svgFileContent) {
        fs.writeFileSync(file, svgFileContent)
      }
    })

    cb()
  })
})

gulp.task('changelog-commit', (cb) => {
  cp.exec('git status', function(err, ret) {
    let newIcons = [], modifiedIcons = [], renamedIcons = []

    ret.replace(/new file:\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
      newIcons.push(fileName)
    })

    ret.replace(/modified:\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
      modifiedIcons.push(fileName)
    })

    ret.replace(/renamed:\s+src\/_icons\/([a-z0-9-]+).svg -> src\/_icons\/([a-z0-9-]+).svg/g, function(m, fileNameBefore, fileNameAfter) {
      renamedIcons.push([fileNameBefore, fileNameAfter])
    })

    modifiedIcons = modifiedIcons.filter(function(el) {
      return newIcons.indexOf(el) < 0
    })

    printChangelog(newIcons, modifiedIcons, renamedIcons)

    cb()
  })
})

gulp.task('changelog', (cb) => {
  const version = `v${p.version}`

  if (version) {
    cp.exec(`git diff ${version} HEAD --name-status`, function(err, ret) {

      let newIcons = [], modifiedIcons = [], renamedIcons = []

      ret.replace(/A\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
        newIcons.push(fileName)
      })

      ret.replace(/M\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
        modifiedIcons.push(fileName)
      })

      ret.replace(/R[0-9]+\s+src\/_icons\/([a-z0-9-]+)\.svg\s+src\/_icons\/([a-z0-9-]+).svg/g, function(m, fileNameBefore, fileNameAfter) {
        renamedIcons.push([fileNameBefore, fileNameAfter])
      })

      modifiedIcons = modifiedIcons.filter(function(el) {
        return newIcons.indexOf(el) < 0
      })

      printChangelog(newIcons, modifiedIcons, renamedIcons, true)

      cb()
    })
  }
})

gulp.task('changelog-image', (cb) => {
  const version = argv['latest-version'] || `${p.version}`,
      newVersion = argv['new-version'] || `${p.version}`

  if (version) {
    cp.exec(`git diff v${version} HEAD --name-status`, function(err, ret) {

      let newIcons = []

      ret.replace(/[A]\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
        newIcons.push(fileName)
      })

      newIcons = newIcons.map(function(icon) {
        return `./icons/${icon}.svg`
      })

      if (newIcons.length > 0) {
        generateIconsPreview(newIcons, `.github/tabler-icons-${newVersion}.svg`, cb, {
          columnsCount: 6,
          paddingOuter: 24
        })
      } else {
        cb()
      }
    })
  } else {
    cb()
  }
})

gulp.task('svg-to-png', gulp.series('clean-png', async (cb) => {
  let files = glob.sync('./icons/*.svg')

  await asyncForEach(files, async function(file, i) {
    let name = path.basename(file, '.svg')

    console.log('name', name)

    await svgToPng(file, `icons-png/${name}.png`)
  })

  cb()
}))

gulp.task('clean-react', (cb) => {
  cp.exec('rm -fd ./icons-react/* && mkdir icons-react/icons-js', () => {
    cb()
  })
})

gulp.task('svg-to-react', gulp.series('clean-react', async (cb) => {
  let files = glob.sync('./icons/*.svg')

  const camelize = function(str) {
    str = str.replace(/-/g, ' ')

    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return word.toUpperCase()
    }).replace(/\s+/g, '')
  }

  const componentName = function(file) {
    file = path.basename(file, '.svg')
    file = camelize(`Icon ${file}`)

    return file
  }

  const optimizeSvgCode = function(svgCode) {
    return svgCode.replace('<path stroke="none" d="M0 0h24v24H0z"/>', '')
  }

  let indexCode = '',
      indexDCode = `import { FC, SVGAttributes } from 'react';\n\ntype TablerIconProps = Omit<SVGAttributes<SVGElement>, 'color' | 'stroke'> & {\n  color?: SVGAttributes<SVGElement>['stroke'];\n  size?: SVGAttributes<SVGElement>['width'];\n  stroke?: SVGAttributes<SVGElement>['strokeWidth'];\n}\n\ntype TablerIcon = FC<TablerIconProps>;\n\n`

  await asyncForEach(files, async function(file) {
    const svgCode = optimizeSvgCode(fs.readFileSync(file).toString()),
        fileName = path.basename(file, '.svg') + '.js',
        iconComponentName = componentName(file)

    await svgr(svgCode, {
      icon: false,
      svgProps: { width: '{size}', height: '{size}', strokeWidth: '{stroke}', stroke: '{color}' },
      template: require('./.build/svgr-template')
    }, { componentName: iconComponentName }).then(jsCode => {
      fs.writeFileSync('icons-react/icons-js/' + fileName, jsCode)
      indexCode += `export { default as ${iconComponentName} } from './icons-js/${fileName}';\n`
      indexDCode += `export const ${iconComponentName}: TablerIcon;\n`
    })

    fs.writeFileSync('icons-react/index.js', indexCode)
    fs.writeFileSync('icons-react/index.d.ts', indexDCode)
  })

  cb()
}))

const setVersions = function(version, files) {
  for (const i in files) {
    const file = files[i]

    if (fs.existsSync(`src/_icons/${file}.svg`)) {
      let svgFile = fs.readFileSync(`src/_icons/${file}.svg`).toString()

      if (!svgFile.match(/version: ([0-9.]+)/i)) {
        svgFile = svgFile.replace(/---\n<svg>/i, function(m) {
          return `version: "${version}"\n${m}`
        })

        fs.writeFileSync(`src/_icons/${file}.svg`, svgFile)
      } else {
        console.log(`File ${file} already has version`)
      }

    } else {
      console.log(`File ${file} doesn't exists`)
    }
  }
}

gulp.task('update-icons-version', (cb) => {

  const version = argv['latest-version'] || `${p.version}`,
      newVersion = argv['new-version'] || `${p.version}`

  if (version) {
    cp.exec(`grep -RiL "version: " ./src/_icons/*.svg`, function(err, ret) {

      let newIcons = []

      ret.replace(/src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
        newIcons.push(fileName)
      })

      if (newIcons.length) {
        setVersions(newVersion.replace(/\.0$/, ''), newIcons)
      }
    })
  }

  cb()
})

gulp.task('import-categories', (cb) => {
  let files = glob.sync('./src/_icons/*-off.svg')

  files.forEach(function(file, i) {
    const fileOriginal = file.replace(/\-off.svg$/, '.svg')

    if (fs.existsSync(fileOriginal)) {
      const dataOriginal = fs.readFileSync(fileOriginal).toString()

      const categoryOriginal = dataOriginal.match(/category: ([a-zA-Z-]+)/),
          tagsOriginal = dataOriginal.match(/tags: (\[.*?\])/)

      if (categoryOriginal || tagsOriginal) {

        let data = fs.readFileSync(file).toString()
        data = data.replace(/(---[\s\S]+?---)/, function(m, headerContent) {
          console.log('categoryOriginal', fileOriginal, categoryOriginal && categoryOriginal[1], tagsOriginal && tagsOriginal[1])

          if (categoryOriginal) {
            headerContent = headerContent.replace(/category: .*\n/, '')
            headerContent = headerContent.replace(/---/, `---\ncategory: ${categoryOriginal[1]}`)
          }

          if (tagsOriginal) {
            headerContent = headerContent.replace(/tags: .*\n/, '')
            headerContent = headerContent.replace(/---/, `---\ntags: ${tagsOriginal[1]}`)
          }

          return headerContent
        })

        fs.writeFileSync(file, data)
      }
    }
  })

  cb()
})

gulp.task('import-tags', (cb) => {
  fs.createReadStream('./_import.tsv').pipe(csv({
    headers: false,
    separator: '\t'
  })).on('data', (row) => {
    console.log(row[1], row[2])

    const filename = `src/_icons/${row[1]}.svg`

    if(row[2].length) {
      let data = fs.readFileSync(filename).toString()
      data = data.replace(/(---[\s\S]+?---)/, function(m, headerContent) {

        headerContent = headerContent.replace(/tags: .*\n/, '')
        headerContent = headerContent.replace(/---/, `---\ntags: [${row[2]}]`)

        return headerContent
      })

      fs.writeFileSync(filename, data)
    }

  }).on('end', () => {
    console.log('CSV file successfully processed')
  })
  cb()
})

gulp.task('update-readme', (cb) => {
  let fileData = fs.readFileSync('README.md').toString(),
      count = glob.sync('./icons/*.svg').length

  fileData = fileData.replace(/<!--icons-count-->(.*?)<!--\/icons-count-->/, `<!--icons-count-->${count}<!--/icons-count-->`)

  fs.writeFileSync('README.md', fileData)

  cb()
})

gulp.task('build-react', (cb) => {
  cp.exec('npm run build-react', () => {
    cb()
  })
})

gulp.task('build',
    gulp.series('optimize', 'update-icons-version', 'update-icons-unicode', 'build-jekyll', 'build-copy', 'icons-sprite', 'svg-to-react', 'build-react',
        'icons-preview', 'svg-to-png', 'build-iconfont', 'changelog-image', 'build-zip', 'update-readme'))

const optimizeSVG = (data) => {
  return optimize(data, {
    js2svg: {
      indent: 2,
      pretty: true
    },
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            mergePaths: false
          }
        }
      }]
  }).data
}

gulp.task('import', gulp.series((cb) => {
  if (fs.existsSync('./new/Artboard.svg')) {
    fs.unlinkSync('rm ./new/Artboard.svg')
  }

  const files = glob.sync('./new/*.svg')

  files.forEach(function(file, i) {
    let fileData = fs.readFileSync(file).toString(),
        filename = path.basename(file, '.svg')

    console.log(filename)

    fileData = optimizeSVG(fileData)

    if (fileData.match(/transform="/)) {
      throw new Error(`File ${file} has \`transform\` in code!!`)
    }

    if (filename.match(/\s/)) {
      throw new Error(`File ${file} has space in name!!`)
    }

    fileData = fileData.replace(/---/g, '')
        .replace(/fill="none"/g, '')
        .replace(/fill="#D8D8D8"/gi, '')
        .replace(/fill-rule="evenodd"/g, '')
        .replace(/stroke-linecap="round"/g, '')
        .replace(/stroke-linejoin="round"/g, '')
        .replace(/viewBox="0 0 24 24"/g, '')
        .replace(/stroke="#000000"/g, '')
        .replace(/stroke="#000"/g, '')
        .replace(/stroke-width="2"/g, '')
        .replace(/width="24"/g, '')
        .replace(/width="24px"/g, '')
        .replace(/height="24"/g, '')
        .replace(/height="24px"/g, '')
        .replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, '')
        .replace(/<path d="M0 0h24v24H0z"\/>"/g, '')
        .replace(/<path stroke="red" stroke-width=".1" d="[^"]+"\s?\/>/g, '')
        .replace(/<path[^>]*stroke="red"[^>]*\/>/gs, '')
        .replace(/<circle[^>]*stroke="red"[^>]*\/>/gs, '')
        .replace(/<g[^>]*stroke="red"[^>]*>.*?<\/g>/gs, '')

    fileData = optimizeSVG(fileData)

    fileData = fileData.replace(/<svg>/g, '---\n---\n<svg>')

    if (fs.existsSync(`./src/_icons/${filename}.svg`)) {
      const newFileData = fs.readFileSync(`./src/_icons/${filename}.svg`).toString()
      const m = newFileData.match(/(---.*---)/gms)

      if (m) {
        fileData = fileData.replace('---\n---', m[0])
      }
    }

    fs.writeFileSync(`./src/_icons/${filename}.svg`, fileData)
  })

  cb()
}, 'optimize'))
