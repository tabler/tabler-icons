import fs from 'fs'
import glob from 'glob'
import { resolve, basename } from 'path'
import { HOME_DIR, optimizeSVG } from './helpers.mjs'


const files = glob.sync(resolve(HOME_DIR, './new/*.svg'))

files.forEach(function(file, i) {
  let fileData = fs.readFileSync(file).toString(),
      filename = basename(file, '.svg')

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
      .replace(/clip-rule="evenodd"/g, '')
      .replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, '')
      .replace(/<path d="M0 0h24v24H0z"\/>"/g, '')
      .replace(/<path stroke="red" stroke-width=".1" d="[^"]+"\s?\/>/g, '')
      .replace(/<path[^>]*fill-opacity=".1"[^>]*\/>/g, '')
      .replace(/<path[^>]*stroke="red"[^>]*\/>/gs, '')
      .replace(/<circle[^>]*stroke="red"[^>]*\/>/gs, '')
      .replace(/<path[^>]*fill="red"[^>]*\/>/gs, '')
      .replace(/<g[^>]*stroke="red"[^>]*>.*?<\/g>/gs, '')
      .replace(/<svg\s+>/gs, '<svg>')

  fileData = optimizeSVG(fileData)

  if (filename.match(/\-filled$/)) {
    fileData = fileData
        .replace(/\/>/g, ' stroke-width="0" fill="currentColor" />')
  }

  fileData = fileData.replace(/<svg>/g, '---\n---\n<svg>')

  if (fs.existsSync(`./src/_icons/${filename}.svg`)) {
    const newFileData = fs.readFileSync(`./src/_icons/${filename}.svg`).toString()
    const m = newFileData.match(/(---.*---)/gms)

    if (m) {
      fileData = fileData.replace('---\n---', m[0])
    }
  } else if (filename.match(/\-filled$/)) {
    fileData = fileData
        .replace(/---\n---/g, '---\ncategory: Filled\n---')
  } else if (filename.match(/brand\-/)) {
    fileData = fileData
        .replace(/---\n---/g, '---\ncategory: Brand\n---')
  }

  fs.writeFileSync(`./src/_icons/${filename}.svg`, fileData)
})
