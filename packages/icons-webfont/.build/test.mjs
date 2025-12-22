import fs from 'fs';
import { fileURLToPath } from 'url';
import { getAllIcons, getCompileOptions, getPackageDir, strokes } from '../../../.build/helpers.mjs'
import { getEndPoint, removeComments, splitPaths, reorientPath, offsetPath, calculateHash } from './build-utilities.mjs';
import svgtofont from 'svgtofont';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = getAllIcons(true).outline;

const generateFont = async (strokeName) => {
   await svgtofont({
      src: path.resolve(process.cwd(), "icons-outlined", strokeName), // svg path, only searches one level, not recursive
      dist: path.resolve(process.cwd(), "dist/fonts", strokeName), // output path
      fontName: "tabler-icons", // font name
      css: true, // Create CSS files.
      startUnicode: 0xea01, // unicode start number
      svgicons2svgfont: {
         fontHeight: 1000,
         normalize: true
      },
      // website = null, no demo html files
      website: {
         title: "Tabler Icons",
         version: "1.0.0",
         meta: {
            description: "Tabler Webfont",
            keywords: "tabler-webfont,TTF,EOT,WOFF,WOFF2,SVG"
         },
         description: ``,
         corners: {
            url: 'https://github.com/tabler/tabler-icons',
            width: 62, // default: 60
            height: 62, // default: 60
            bgColor: '#dc3545' // default: '#151513'
         },
         links: [
         ],
         footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/tabler/tabler-icons">open-sourced</a>)`
      }
   }).then(() => {
      console.log('done!');
   });;
}

for await (const [strokeName, strokeWidth] of Object.entries(strokes)) {
   const dirname = path.join(__dirname, '../icons-outlined', strokeName);
   fs.mkdirSync(dirname, { recursive: true });

   let processed = 0;
   let cached = 0;
   const total = files.length;
   const startTime = Date.now();

   for (const file of files) {
      let svgContent = file.content;
      const fileName = file.name;
      const filePath = path.join(dirname, `${fileName}.svg`);

      // Check cache (try/catch faster than existsSync + readFileSync)
      try {
         const cachedContent = fs.readFileSync(filePath, 'utf-8');
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
      fs.writeFileSync(filePath, finalContent + hashString, 'utf-8');

      processed++;
   }

   const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
   console.log(`\n[${strokeName}] Done: ${processed} processed, ${cached} cached in ${totalTime}s`);

   await generateFont(strokeName);
}

