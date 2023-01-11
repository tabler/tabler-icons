// const gulp = require('gulp'),
//     cp = require('child_process'),
//     glob = require('glob'),
//     fs = require('fs'),
//     path = require('path'),
//     p = require('./package.json'),
//     csv = require('csv-parser'),
//     zip = require('gulp-zip'),
//     svgo = require('gulp-svgo'),
//     { optimize } = require('svgo'),
//     outlineStroke = require('svg-outline-stroke'),
//     iconfont = require('gulp-iconfont'),
//     template = require('lodash.template'),
//     sass = require('node-sass'),
//     cleanCSS = require('clean-css'),
//     argv = require('minimist')(process.argv.slice(2)),
//     svgr = require('@svgr/core').default

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

gulp.task('icons-preview', (cb) => {

})

gulp.task('icons-stroke', gulp.series((cb) => {


  cb()
}))

gulp.task('changelog-commit', (cb) => {

})

gulp.task('changelog', (cb) => {

})

gulp.task('changelog-image', (cb) => {

})

// gulp.task('svg-to-png', gulp.series('clean-png', async (cb) => {
//   let files = glob.sync('./icons/*.svg')
//
//   await asyncForEach(files, async function(file, i) {
//     let name = path.basename(file, '.svg')
//
//     console.log('name', name)
//
//     await svgToPng(file, `icons-png/${name}.png`)
//   })
//
//   cb()
// }))

// gulp.task('clean-react', (cb) => {
//   cp.exec('rm -fd ./icons-react/* && mkdir icons-react/icons-js', () => {
//     cb()
//   })
// })

// gulp.task('svg-to-react', gulp.series('clean-react', async (cb) => {
//   let files = glob.sync('./icons/*.svg')
//
//   const camelize = function(str) {
//     str = str.replace(/-/g, ' ')
//
//     return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
//       return word.toUpperCase()
//     }).replace(/\s+/g, '')
//   }
//
//   const componentName = function(file) {
//     file = path.basename(file, '.svg')
//     file = camelize(`Icon ${file}`)
//
//     return file
//   }
//
//   const optimizeSvgCode = function(svgCode) {
//     return svgCode.replace('<path stroke="none" d="M0 0h24v24H0z"/>', '')
//   }
//
//   let indexCode = '',
//       indexDCode = `import { FC, SVGAttributes } from 'react';\n\ntype TablerIconProps = Omit<SVGAttributes<SVGElement>, 'color' | 'stroke'> & {\n  color?: SVGAttributes<SVGElement>['stroke'];\n  size?: SVGAttributes<SVGElement>['width'];\n  stroke?: SVGAttributes<SVGElement>['strokeWidth'];\n}\n\ntype TablerIcon = FC<TablerIconProps>;\n\n`
//
//   await asyncForEach(files, async function(file) {
//     const svgCode = optimizeSvgCode(fs.readFileSync(file).toString()),
//         fileName = path.basename(file, '.svg') + '.js',
//         iconComponentName = componentName(file)
//
//     await svgr(svgCode, {
//       icon: false,
//       svgProps: { width: '{size}', height: '{size}', strokeWidth: '{stroke}', stroke: '{color}' },
//       template: require('./.build/svgr-template')
//     }, { componentName: iconComponentName }).then(jsCode => {
//       fs.writeFileSync('icons-react/icons-js/' + fileName, jsCode)
//       indexCode += `export { default as ${iconComponentName} } from './icons-js/${fileName}';\n`
//       indexDCode += `export const ${iconComponentName}: TablerIcon;\n`
//     })
//
//     fs.writeFileSync('icons-react/index.js', indexCode)
//     fs.writeFileSync('icons-react/index.d.ts', indexDCode)
//   })
//
//   cb()
// }))





// gulp.task('build-react', (cb) => {
//   cp.exec('npm run build-react', () => {
//     cb()
//   })
// })

gulp.task('build',
    gulp.series(/*'optsetVersionsimize', 'update-icons-version', 'update-icons-unicode', 'build-jekyll',*/ 'build-copy', 'icons-sprite', /*'svg-to-react', 'build-react',*/
        'icons-preview', 'svg-to-png', 'build-iconfont', 'changelog-image', 'build-zip'/*, 'update-readme'*/))



gulp.task('import', gulp.series((cb) => {


  cb()
}, 'optimize'))
