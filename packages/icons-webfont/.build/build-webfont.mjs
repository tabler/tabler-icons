import * as fs from 'node:fs'
import template from 'lodash.template'
import { getPackageDir, getPackageJson, getAliases, types, asyncForEach, toPascalCase } from '../../../.build/helpers.mjs'
import {buildSvgFont, loadSvgFiles} from "./build-utilities.mjs";
import svg2ttf from "svg2ttf";
import ttf2woff from "ttf2woff";
import wawoff2 from "wawoff2";

const p = getPackageJson()
const DIR = getPackageDir('icons-webfont')

const strokes = {
  200: 1,
  300: 1.5,
  400: 2,
}

const aliases = getAliases(true)

fs.mkdirSync(`${DIR}/dist/fonts`, { recursive: true })

types.push('all')

const getAlliasesFlat = () => {
  let allAliases = {}

  Object.entries(aliases).forEach(([type, aliases]) => {
    Object.entries(aliases).forEach(([from, to]) => {
      allAliases[`${from}${type !== 'outline' ? `-${type}` : ''}`] = `${to}${type !== 'outline' ? `-${type}` : ''}`
    })
  })

  return allAliases
}

for (const strokeName in strokes) {
  asyncForEach(types, async type => {
    console.log(`Building ${strokeName} webfont for ${type} icons`)

    const svgFiles = await loadSvgFiles(`icons-outlined/${strokeName}/${type}`);
    const svgFontFileSource = await buildSvgFont(svgFiles);
    const ttfFile = Buffer.from(svg2ttf(svgFontFileSource).buffer);
    const woffFile = Buffer.from(ttf2woff(ttfFile).buffer);
    const woff2File = await wawoff2.compress(ttfFile);

    const fileName = `tabler-icons${strokeName !== "400" ? `-${strokeName}` : ''}${type !== 'all' ? `-${type}` : ''}`;
    //fs.writeFileSync(`${DIR}/dist/fonts/${fileName}.svg`, svgFontFileSource); // for debug
    fs.writeFileSync(`${DIR}/dist/fonts/${fileName}.ttf`, ttfFile);
    fs.writeFileSync(`${DIR}/dist/fonts/${fileName}.woff`, woffFile);
    fs.writeFileSync(`${DIR}/dist/fonts/${fileName}.woff2`, woff2File);

    const glyphs = svgFiles.map(f => f.metadata)
      .sort(function (a, b) {
        return a.name.localeCompare(b.name)
      })

    const options = {
      name: `Tabler Icons${type !== 'all' ? ` ${toPascalCase(type)}` : ''}`,
      fileName,
      glyphs,
      v: p.version,
      aliases: (type === 'all' ? getAlliasesFlat() : aliases[type]) || {}
    }

    //scss
    const compiled = template(fs.readFileSync(`${DIR}/.build/iconfont.scss`).toString())
    const resultSCSS = compiled(options)
    fs.writeFileSync(`${DIR}/dist/${fileName}.scss`, resultSCSS)

    //html
    const compiledHtml = template(fs.readFileSync(`${DIR}/.build/iconfont.html`).toString())
    const resultHtml = compiledHtml(options)
    fs.writeFileSync(`${DIR}/dist/${fileName}.html`, resultHtml)
  })
}
