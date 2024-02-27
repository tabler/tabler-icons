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
import matter from 'gray-matter'
import { globSync } from 'glob'
import { exec } from 'child_process'

export const iconTemplate = (type) => type === 'outline' ? `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>` : `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>`

export const blankSquare = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>'

export const types = ['outline', 'filled']

export const getCurrentDirPath = () => {
  return path.dirname(fileURLToPath(import.meta.url));
}

export const HOME_DIR = resolve(getCurrentDirPath(), '..')

export const ICONS_SRC_DIR = resolve(HOME_DIR, 'icons')
export const PACKAGES_DIR = resolve(HOME_DIR, 'packages')
export const GITHUB_DIR = resolve(HOME_DIR, '.github')

export const parseMatter = (icon) => {
  const { data, content } = matter.read(icon, { delims: ['<!--', '-->'] })

  return { data, content }
}

const getSvgContent = (svg, type, name) => {
  return svg
    .replace(/<svg([^>]+)>/, (m, m1) => {
      return `<svg${m1}  class="icon icon-tabler icons-tabler-${type} icon-tabler-${name}"\n>\n  ${blankSquare}`
    })
    .trim()
}

export const getAllIcons = (withContent = false, withObject = false) => {
  let icons = {}
  const limit = process.env['ICONS_LIMIT'] || Infinity;

  types.forEach(type => {
    icons[type] = globSync(path.join(ICONS_SRC_DIR, `${type}/*.svg`))
      .slice(0, limit)
      .sort()
      .map(i => {
        const { data, content } = parseMatter(i),
          name = basename(i, '.svg')

        return {
          name,
          namePascal: toPascalCase(`icon ${name}`),
          path: i,
          category: data.category || '',
          tags: data.tags || [],
          version: data.version || '',
          unicode: data.unicode || '',
          ...(withContent ? { content: getSvgContent(content, type, name) } : {}),
          ...(withObject ? { obj: parseSync(content.replace(blankSquare, '')) } : {})
        }
      })
      .sort()
  })

  return icons
}

export const getAllIconsMerged = (withContent = false, withObject = false) => {
  const allIcons = getAllIcons(true)

  const icons = {};
  allIcons.outline.forEach(icon => {
    icons[icon.name] = {
      name: icon.name,
      category: icon.category || '',
      tags: icon.tags || [],
      styles: {
        outline: {
          version: icon.version || '',
          unicode: icon.unicode || '',
          ...(withContent ? { content: icon.content } : {}),
          ...(withObject ? { obj: icon.obj } : {})
        }
      }
    }
  })

  allIcons.filled.forEach(icon => {
    if (icons[icon.name]) {
      icons[icon.name].styles.filled = {
        version: icon.version || '',
        unicode: icon.unicode || '',
        ...(withContent ? { content: icon.content } : {}),
        ...(withObject ? { obj: icon.obj } : {})
      }
    }
  })

  return icons;
}

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

export const getAliases = (groupped = false) => {
  const allAliases = JSON.parse(fs.readFileSync(resolve(HOME_DIR, 'aliases.json'), 'utf-8'));
  const allIcons = getAllIcons()

  if (groupped) {
    let aliases = [];
    types.forEach(type => {
      const icons = allIcons[type].map(i => i.name);

      aliases[type] = {};

      for (const [key, value] of Object.entries(allAliases[type])) {
        if (icons.includes(value)) {
          aliases[type][key] = value;
        }
      }
    });

    return aliases
  } else {
    let aliases = [];
    types.forEach(type => {
      const icons = allIcons[type].map(i => i.name);

      for (const [key, value] of Object.entries(allAliases[type])) {
        if (icons.includes(value)) {
          aliases[`${key}${type !== 'outline' ? `-${type}` : ''}`] = `${value}${type !== 'outline' ? `-${type}` : ''}`;
        }
      }
    });

    return aliases
  }
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

export const addFloats = function (n1, n2) {
  return Math.round((parseFloat(n1) + parseFloat(n2)) * 1000) / 1000
}

export const optimizePath = function (path) {
  let transformed = svgpath(path).rel().round(3).toString()

  return svgParse(transformed).map(function (a) {
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

export const createScreenshot = (filePath, retina = true) => {
  cp.execSync(`rsvg-convert -x 2 -y 2 ${filePath} > ${filePath.replace('.svg', '.png')}`)

  if (retina) {
    cp.execSync(`rsvg-convert -x 4 -y 4 ${filePath} > ${filePath.replace('.svg', '@2x.png')}`)
  }
}

export const createSvgSymbol = (svg, name, stroke) => {
  return svg.replace('<svg', `<symbol id="${name}"`)
    .replace(' width="24" height="24"', '')
    .replace(' stroke-width="2"', ` stroke-width="${stroke}"`)
    .replace('</svg>', '</symbol>')
    .replace(/\n\s+/g, ' ')
    .replace(/<!--(.*?)-->/gis, '')
    .trim()
}

export const generateIconsPreview = async function (files, destFile, {
  columnsCount = 19,
  paddingOuter = 7,
  color = '#354052',
  background = '#fff',
  png = true,
  stroke = 2,
  retina = true
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

  files.forEach(function (file, i) {
    const name = file.replace(/^(.*)\/([^\/]+)\/([^.]+).svg$/g, '$2-$3');

    let svgFile = fs.readFileSync(file),
      svgFileContent = svgFile.toString()

    svgFileContent = createSvgSymbol(svgFileContent, name, stroke)

    svgContentSymbols += `\t${svgFileContent}\n`
    svgContentIcons += `\t<use xlink:href="#${name}" x="${x}" y="${y}" width="${iconSize}" height="${iconSize}" />\n`

    x += padding + iconSize

    if (i % columnsCount === columnsCount - 1) {
      x = paddingOuter
      y += padding + iconSize
    }
  })

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: ${color}"><rect x="0" y="0" width="${width}" height="${height}" fill="${background}"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`

  console.log(destFile)

  fs.writeFileSync(destFile, svgContent)

  if (png) {
    await createScreenshot(destFile, retina)
  }
}


export const printChangelog = function (newIcons, modifiedIcons, renamedIcons, pretty = false) {
  if (newIcons.length > 0) {
    if (pretty) {
      console.log(`### ${newIcons.length} new icon${newIcons.length > 1 ? 's' : ''}:\n`)

      newIcons.forEach(function (icon, i) {
        console.log(`- \`${icon}\``)
      })
    } else {
      let str = ''
      str += `${newIcons.length} new icon${newIcons.length > 1 ? 's' : ''}: `

      newIcons.forEach(function (icon, i) {
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
    str += `Fixed icon${modifiedIcons.length > 1 ? 's' : ''}: `

    modifiedIcons.forEach(function (icon, i) {
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

    renamedIcons.forEach(function (icon, i) {
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
        tempOptions.includeCategories.forEach(function (category) {
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
        compileOptions.includeIcons = compileOptions.includeIcons.filter(function (icon) {
          return tempOptions.excludeIcons.indexOf(icon) === -1
        })
      }

      if (typeof tempOptions.excludeOffIcons !== 'undefined' && tempOptions.excludeOffIcons) {
        // Exclude `*-off` icons
        compileOptions.includeIcons = compileOptions.includeIcons.filter(function (icon) {
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


export const convertIconsToImages = async (dir, extension, size = 240) => {
  const icons = getAllIcons()

  await asyncForEach(Object.entries(icons), async function ([type, svgFiles]) {
    fs.mkdirSync(path.join(dir, `./${type}`), { recursive: true })

    await asyncForEach(svgFiles, async function (file, i) {
      const distPath = path.join(dir, `./${type}/${file.name}.${extension}`)

      process.stdout.write(`Building \`icons/${extension}\` ${type} ${i}/${svgFiles.length}: ${file.name.padEnd(42)}\r`)

      await new Promise((resolve, reject) => {
        exec(`rsvg-convert -f ${extension} -h ${size} ${file.path} > ${distPath}`, (error) => {
          error ? reject() : resolve()
        })
      })
    })
  })
}


export const getMaxUnicode = () => {
  const files = globSync(path.join(ICONS_SRC_DIR, '**/*.svg'))
  let maxUnicode = 0

  files.forEach(function (file) {
    const svgFile = fs.readFileSync(file).toString()

    svgFile.replace(/unicode: "([a-f0-9.]+)"/i, function (m, unicode) {
      const newUnicode = parseInt(unicode, 16)

      if (newUnicode) {
        maxUnicode = Math.max(maxUnicode, newUnicode)
      }
    })
  })

  console.log(`Max unicode: ${maxUnicode}`)

  return maxUnicode
}
