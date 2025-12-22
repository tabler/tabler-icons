import { mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import path from 'node:path';
import template from 'lodash.template';
import svg2ttf from "svg2ttf";
import ttf2woff from "ttf2woff";
import wawoff2 from "wawoff2";
import { getAliases, getAllIcons, getPackageDir, getPackageJson, strokes } from '../../../.build/helpers.mjs';
import { buildSvgFont, calculateHash, loadSvgFiles, offsetPath, removeComments, reorientPath, splitPaths } from './build-utilities.mjs';
import { globSync } from 'glob';

const DIR = getPackageDir('icons-webfont')
const packageJson = getPackageJson()

const files = getAllIcons(true).outline;
const aliases = getAliases(true)

const generateFont = async (strokeName) => {
   const svgFiles = await loadSvgFiles(`icons-outlined/${strokeName}/`);
   const svgFontFileSource = await buildSvgFont(svgFiles);
   const ttfFile = Buffer.from(svg2ttf(svgFontFileSource).buffer);
   const woffFile = Buffer.from(ttf2woff(ttfFile).buffer);
   const woff2File = await wawoff2.compress(ttfFile);

   const fileName = `tabler-icons${strokeName !== "400" ? `-${strokeName}` : ''}`;

   // Ensure dist/fonts directory exists
   mkdirSync(`${DIR}/dist/fonts`, { recursive: true });

   writeFileSync(`${DIR}/dist/fonts/${fileName}.svg`, svgFontFileSource); // for debug
   writeFileSync(`${DIR}/dist/fonts/${fileName}.ttf`, ttfFile);
   writeFileSync(`${DIR}/dist/fonts/${fileName}.woff`, woffFile);
   writeFileSync(`${DIR}/dist/fonts/${fileName}.woff2`, woff2File);

   const glyphs = svgFiles.map(f => f.metadata)
      .sort(function (a, b) {
         return a.name.localeCompare(b.name)
      })

   const options = {
      name: `Tabler Icons Outline`,
      fileName,
      glyphs,
      v: packageJson.version,
      aliases: aliases.outline
   }

   //scss
   const compiled = template(readFileSync(`${DIR}/.build/iconfont.scss`).toString())
   const resultSCSS = compiled(options)
   writeFileSync(`${DIR}/dist/${fileName}.scss`, resultSCSS)

   //html
   const compiledHtml = template(readFileSync(`${DIR}/.build/iconfont.html`).toString())
   const resultHtml = compiledHtml(options)
   writeFileSync(`${DIR}/dist/${fileName}.html`, resultHtml)
}

for await (const [strokeName, strokeWidth] of Object.entries(strokes)) {
   const dirname = path.join(DIR, 'icons-outlined', strokeName);
   mkdirSync(dirname, { recursive: true });

   let processed = 0;
   let cached = 0;
   const startTime = Date.now();

   const filesList = new Set(files
      .filter(({ unicode }) => unicode)
      .map(({ name, unicode }) => `u${unicode.toUpperCase()}-${name}.svg`)
   );

   for (const file of files) {
      const { name, content, unicode } = file;
      if (!unicode) continue;

      let svgContent = content;
      const fileName = `u${unicode.toUpperCase()}-${name}`;
      const filePath = path.join(dirname, `${fileName}.svg`);

      // Check cache (try/catch faster than existsSync + readFileSync)
      try {
         const cachedContent = readFileSync(filePath, 'utf-8');
         let cachedHash = '';
         const contentWithoutHash = cachedContent.replace(/<!--\!cache:([a-z0-9]+)-->/, (m, hash) => {
            cachedHash = hash;
            return '';
         });

         if (cachedHash && calculateHash(contentWithoutHash) === cachedHash) {
            cached++;
            continue;
         }
      } catch (e) {
         // File doesn't exist, will be created
      }

      console.log(`Writing to ${strokeName}/${fileName}`);

      svgContent = removeComments(svgContent);
      svgContent = splitPaths(svgContent);
      svgContent = offsetPath(svgContent, strokeWidth);
      svgContent = reorientPath(svgContent);

      // Prepare final content with hash
      const finalContent = svgContent.replace(/\n/g, ' ').trim();
      const hashString = `<!--!cache:${calculateHash(finalContent)}-->`;

      // Save file
      writeFileSync(filePath, finalContent + hashString, 'utf-8');

      processed++;
   }

   // Remove old files
   const existedFiles = (globSync(path.join(DIR, `icons-outlined/${strokeName}/*.svg`))).map(file => path.basename(file))
   existedFiles.forEach(file => {
      if (!filesList.has(file)) {
         console.log('Remove:', file)
         unlinkSync(path.join(DIR, `icons-outlined/${strokeName}/${file}`))
      }
   })

   const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
   console.log(`\n[${strokeName}] Done: ${processed} processed, ${cached} cached in ${totalTime}s`);

   await generateFont(strokeName);
}

