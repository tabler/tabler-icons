import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import template from 'lodash.template'
import { getPackageDir, getPackageJson, getAliases, types, asyncForEach, toPascalCase, strokes } from '../../../.build/helpers.mjs'
// import {buildSvgFont, loadSvgFiles} from "./build-utilities.mjs";
// import svg2ttf from "svg2ttf";
// import ttf2woff from "ttf2woff";
// import wawoff2 from "wawoff2";

import svgtofont from 'svgtofont';
import path from 'node:path';

const DIR = getPackageDir('icons-webfont')

const aliases = getAliases(true)

mkdirSync(`${DIR}/dist/fonts`, { recursive: true })

for (const strokeName in strokes) {
  await asyncForEach(types, async type => {
    if (type === 'filled') return

    console.log(`Building ${strokeName} webfont for ${type} icons`)

    // const svgFiles = await loadSvgFiles(`icons-outlined/${strokeName}/${type}`);
    // const svgFontFileSource = await buildSvgFont(svgFiles);
    // const ttfFile = Buffer.from(svg2ttf(svgFontFileSource).buffer);
    // const woffFile = Buffer.from(ttf2woff(ttfFile).buffer);
    // const woff2File = await wawoff2.compress(ttfFile);

    // const fileName = `tabler-icons${strokeName !== "400" ? `-${strokeName}` : ''}${type !== 'all' ? `-${type}` : ''}`;

    svgtofont({
      src: path.resolve(process.cwd(), `icons-outlined/${strokeName}/${type}`), // svg path, only searches one level, not recursive
      dist: path.resolve(process.cwd(), `dist/fonts`), // output path
      fontName: `tabler-icons${strokeName !== "400" ? `-${strokeName}` : ''}`, // font name
      css: true, // Create CSS files.
      startUnicode: 0xea01, // unicode start number
      svgicons2svgfont: {
        fontHeight: 1000,
        normalize: true
      },
      // website = null, no demo html files
      website: {
        title: "tabler-webfont",
        version: "1.0.0",
        meta: {
          description: "Tabler Webfont",
          keywords: "tabler-webfont,TTF,EOT,WOFF,WOFF2,SVG"
        },
        description: ``,
        // Add a Github corner to your website
        // Like: https://github.com/uiwjs/react-github-corners
        corners: {
          url: 'https://github.com/tabler/tabler-icons',
          width: 62, // default: 60
          height: 62, // default: 60
          bgColor: '#dc3545' // default: '#151513'
        },
        links: [
        ],
        footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE">open-sourced</a>)`
      }
    }).then(() => {
      console.log('done!');
    });

    //writeFileSync(`${DIR}/dist/fonts/${fileName}.svg`, svgFontFileSource); // for debug
    // writeFileSync(`${DIR}/dist/fonts/${fileName}.ttf`, ttfFile);
    // writeFileSync(`${DIR}/dist/fonts/${fileName}.woff`, woffFile);
    // writeFileSync(`${DIR}/dist/fonts/${fileName}.woff2`, woff2File);

    // const glyphs = svgFiles.map(f => f.metadata)
    //   .sort(function (a, b) {
    //     return a.name.localeCompare(b.name)
    //   })

    // const options = {
    //   name: `Tabler Icons${type !== 'all' ? ` ${toPascalCase(type)}` : ''}`,
    //   fileName,
    //   glyphs,
    //   v: p.version,
    //   aliases: (type === 'all' ? getAlliasesFlat() : aliases[type]) || {}
    // }

    // //scss
    // const compiled = template(readFileSync(`${DIR}/.build/iconfont.scss`).toString())
    // const resultSCSS = compiled(options)
    // writeFileSync(`${DIR}/dist/${fileName}.scss`, resultSCSS)

    // //html
    // const compiledHtml = template(readFileSync(`${DIR}/.build/iconfont.html`).toString())
    // const resultHtml = compiledHtml(options)
    // writeFileSync(`${DIR}/dist/${fileName}.html`, resultHtml)
  })
}
