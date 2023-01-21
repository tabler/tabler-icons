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






//*********************************************************************************************

// gulp.task('iconfont-prepare', (cb) => {
//   cp.exec('mkdir -p icons-outlined/ && rm -fd ./icons-outlined/* && mkdir -p && rm -fd ./iconfont/*', () => {
//     cb()
//   })
// })

// gulp.task('iconfont-clean', (cb) => {
//   cp.exec('rm -rf ./icons-outlined', () => {
//     cb()
//   })
// })

// gulp.task('iconfont-svg-outline', (cb) => {
//
//   cp.exec('mkdir -p icons-outlined/ && rm -fd ./icons-outlined/*', async () => {
//     let files = glob.sync('./icons/*.svg')
//
//     const iconfontUnicode = require('./tags.json')
//
//     await asyncForEach(files, async function(file) {
//
//       const name = path.basename(file, '.svg')
//
//       if (compileOptions.includeIcons.length === 0 || compileOptions.includeIcons.indexOf(name) >= 0) {
//
//         const unicode = iconfontUnicode[name].unicode
//         await console.log('Stroke for:', file, unicode)
//
//         let strokedSVG = fs.readFileSync(file).toString()
//
//         strokedSVG = strokedSVG.replace('width="24"', 'width="1000"').replace('height="24"', 'height="1000"')
//
//         if (compileOptions.strokeWidth) {
//           strokedSVG = strokedSVG.replace('stroke-width="2"', `stroke-width="${compileOptions.strokeWidth}"`)
//         }
//
//         await outlineStroke(strokedSVG, {
//           optCurve: false,
//           steps: 4,
//           round: 0,
//           centerHorizontally: true,
//           fixedWidth: true,
//           color: 'black'
//         }).then(outlined => {
//           if (unicode) {
//             fs.writeFileSync(`icons-outlined/u${unicode.toUpperCase()}-${name}.svg`, outlined)
//           } else {
//             fs.writeFileSync(`icons-outlined/${name}.svg`, outlined)
//           }
//         }).catch(error => console.log(error))
//       }
//     })
//
//     cb()
//   })
// })

// gulp.task('iconfont-optimize', () => {
//   return gulp.src('icons-outlined/*').pipe(svgo()).pipe(gulp.dest('icons-outlined'))
// })
//
// gulp.task('iconfont-fix-outline', (cb) => {
//
// })
//
// gulp.task('iconfont', () => {
//   return gulp.src(['icons-outlined/*.svg']).pipe(iconfont({
//     fontName: 'tabler-icons',
//     prependUnicode: true,
//     formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
//     normalize: true,
//     fontHeight: 1000,
//     descent: 100,
//     ascent: 986.5
//   })).on('glyphs', function(glyphs, options) {
//     //sort glypht
//     glyphs = glyphs.sort(function(a, b) {
//       return ('' + a.name).localeCompare(b.name)
//     })
//
//     //css
//     options['glyphs'] = glyphs
//     options['v'] = p.version
//
//     const compiled = template(fs.readFileSync('.build/iconfont.scss').toString())
//     const result = compiled(options)
//
//     fs.writeFileSync('iconfont/tabler-icons.scss', result)
//
//     //html
//     const compiledHtml = template(fs.readFileSync('.build/iconfont.html').toString())
//     const resultHtml = compiledHtml(options)
//
//     fs.writeFileSync('iconfont/tabler-icons.html', resultHtml)
//   }).pipe(gulp.dest('iconfont/fonts'))
// })
//
// gulp.task('iconfont-css', (cb) => {
//   sass.render({
//     file: 'iconfont/tabler-icons.scss',
//     outputStyle: 'expanded'
//   }, function(err, result) {
//     fs.writeFileSync('iconfont/tabler-icons.css', result.css)
//
//     const cleanOutput = new cleanCSS({}).minify(result.css)
//     fs.writeFileSync('iconfont/tabler-icons.min.css', cleanOutput.styles)
//
//     cb()
//   })
// })
//
//
//
// gulp.task('build-iconfont',
//     gulp.series('iconfont-prepare', 'iconfont-svg-outline', 'iconfont-fix-outline', 'iconfont-optimize', 'iconfont', 'iconfont-css', 'iconfont-clean'))

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

gulp.task('build',
    gulp.series(/*'optsetVersionsimize', 'update-icons-version', 'update-icons-unicode', 'build-jekyll',*/ 'build-copy', 'icons-sprite', /*'svg-to-react', 'build-react',*/
        'icons-preview', 'svg-to-png', 'build-iconfont', 'changelog-image', 'build-zip'/*, 'update-readme'*/))



gulp.task('import', gulp.series((cb) => {


  cb()
}, 'optimize'))
