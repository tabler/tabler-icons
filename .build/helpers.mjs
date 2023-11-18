import fs from 'fs'
import path, { resolve, basename } from 'path'
import { fileURLToPath } from 'url'
import svgParse from 'parse-svg-path'
import svgpath from 'svgpath'
import cheerio from 'cheerio';
import { minify } from 'html-minifier';
import { parseSync } from 'svgson'
import { optimize } from 'svgo'
import cp from 'child_process'
import minimist from 'minimist'

export const getCurrentDirPath = () => {
  return path.dirname(fileURLToPath(import.meta.url));
}

export const HOME_DIR = resolve(getCurrentDirPath(), '..')

export const ICONS_SRC_DIR = resolve(HOME_DIR, 'src/_icons')
export const ICONS_DIR = resolve(HOME_DIR, 'icons')
export const PACKAGES_DIR = resolve(HOME_DIR, 'packages')

export const getArgvs = () => {
  return minimist(process.argv.slice(2))
}

export const getPackageDir = (packageName) => {
  return `${PACKAGES_DIR}/${packageName}`
}

/**
 * Return project package.json
 * @returns {any}
 */
export const getPackageJson = () => {
  return JSON.parse(fs.readFileSync(resolve(HOME_DIR, 'package.json'), 'utf-8'))
}

/**
 * Reads SVGs from directory
 *
 * @param directory
 * @returns {string[]}
 */
export const readSvgDirectory = (directory) => {
  return fs.readdirSync(directory).filter((file) => path.extname(file) === '.svg')
}

export const readSvgs = () => {
  const svgFiles = readSvgDirectory(ICONS_DIR)

  return svgFiles.map(svgFile => {
    const name = basename(svgFile, '.svg'),
        namePascal = toPascalCase(`icon ${name}`),
        contents = readSvg(svgFile, ICONS_DIR).trim(),
        path = resolve(ICONS_DIR, svgFile),
        obj = parseSync(contents.replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', ''));

    return {
      name,
      namePascal,
      contents,
      obj,
      path
    };
  });
}

/**
 * Read SVG
 *
 * @param fileName
 * @param directory
 * @returns {string}
 */
export const readSvg = (fileName, directory) => {
  return fs.readFileSync(path.join(directory, fileName), 'utf-8')
}

/**
 * Create directory if not exists
 * @param dir
 */
export const createDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

/**
 * Get SVG name
 * @param fileName
 * @returns {string}
 */
export const getSvgName = (fileName) => {
  return path.basename(fileName, '.svg')
}

/**
 * Convert string to CamelCase
 * @param string
 * @returns {*}
 */
export const toCamelCase = (string) => {
  return string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase())
}

export const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}



export const addFloats = function(n1, n2) {
  return Math.round((parseFloat(n1) + parseFloat(n2)) * 1000) / 1000
}

export const optimizePath = function(path) {
  let transformed = svgpath(path).rel().round(3).toString()

  return svgParse(transformed).map(function(a) {
    return a.join(' ')
  }).join('')
}

export const optimizeSVG = (data) => {
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

export function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
      .map(svgFile => {
        const name = path.basename(svgFile, '.svg');
        const svg = getSvg(svgFile);
        const contents = getSvgContents(svg);
        return { name, contents };
      })
      .reduce((icons, icon) => {
        icons[icon.name] = icon.contents;
        return icons;
      }, {});
}

function getSvgContents(svg) {
  const $ = cheerio.load(svg);
  return minify($('svg').html(), { collapseWhitespace: true });
}

export const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export const createScreenshot = async (filePath) => {
  await cp.exec(`rsvg-convert -x 2 -y 2 ${filePath} > ${filePath.replace('.svg', '.png')}`)
  await cp.exec(`rsvg-convert -x 4 -y 4 ${filePath} > ${filePath.replace('.svg', '@2x.png')}`)
}

export const generateIconsPreview = async function(files, destFile, {
  columnsCount = 19,
  paddingOuter = 7,
  color = '#354052',
  background = '#fff',
  png = true
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
  
  if (png) {
    await createScreenshot(destFile)
  }
}


export const printChangelog = function(newIcons, modifiedIcons, renamedIcons, pretty = false) {
  if (newIcons.length > 0) {
    if (pretty) {
      console.log(`### ${newIcons.length} new icons:\n`)

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


export const getCompileOptions = () => {
  const compileOptions = {
    includeIcons: [],
    strokeWidth: null,
    fontForge: 'fontforge'
  }

  if (fs.existsSync('../compile-options.json')) {
    try {
      const tempOptions = JSON.parse(fs.readFileSync('../compile-options.json').toString())

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

  return compileOptions
}
