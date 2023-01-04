import fs from 'fs'
import path, { resolve, basename } from 'path'
import { fileURLToPath } from 'url'
import svgParse from 'parse-svg-path'
import svgpath from 'svgpath'

import cheerio from 'cheerio';
import { minify } from 'html-minifier';
import { parseSync } from 'svgson'
import { optimize } from 'svgo'

const getCurrentDirPath = () => {
  return path.dirname(fileURLToPath(import.meta.url));
}

export const HOME_DIR = resolve(getCurrentDirPath(), '..')

export const ICONS_SRC_DIR = resolve(HOME_DIR, 'src/_icons')
export const ICONS_DIR = resolve(HOME_DIR, 'icons')
export const PACKAGES_DIR = resolve(HOME_DIR, '../packages')


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
        contents = readSvg(svgFile, ICONS_DIR),
        path = resolve(ICONS_DIR, svgFile),
        obj = parseSync(contents);

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
  }).join(' ')
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
