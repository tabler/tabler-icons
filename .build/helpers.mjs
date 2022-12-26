import fs from 'fs'
import path, { resolve } from 'path'
import { fileURLToPath } from 'url'
import svgParse from 'parse-svg-path'
import svgpath from 'svgpath'

export const getCurrentDirPath = (currentPath) => {
  return path.dirname(fileURLToPath(currentPath));
}

export const ICONS_SRC_DIR = resolve(getCurrentDirPath(import.meta.url), '../src/_icons')

export const ICONS_DIR = resolve(getCurrentDirPath(import.meta.url), '../icons')

export const HOME_DIR = resolve(getCurrentDirPath(import.meta.url), '..')


/**
 * Reads SVGs from directory
 *
 * @param directory
 * @returns {string[]}
 */
export const readSvgDirectory = (directory) => {
  return fs.readdirSync(directory).filter((file) => path.extname(file) === '.svg')
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
