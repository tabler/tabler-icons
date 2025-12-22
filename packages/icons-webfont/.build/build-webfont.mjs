import { mkdirSync, writeFileSync, unlinkSync, readFileSync } from 'fs';
import path from 'node:path';
import { getAliases, getAllIcons, getPackageDir, getPackageJson, strokes } from '../../../.build/helpers.mjs';
import { calculateHash, generateFont, offsetPath, removeComments, reorientPath, splitPaths } from './utilities.mjs';
import { globSync } from 'glob';

const DIR = getPackageDir('icons-webfont')
const packageJson = getPackageJson()

const outlineFiles = getAllIcons(true).outline;
const filledFiles = getAllIcons(true).filled;
const aliases = getAliases(true)

// Generate outline icons
for await (const [strokeName, strokeWidth] of Object.entries(strokes)) {
   const dirname = path.join(DIR, 'icons-outlined', strokeName);
   mkdirSync(dirname, { recursive: true });

   let processed = 0;
   let cached = 0;
   const startTime = Date.now();

   const filesList = new Set(outlineFiles
      .filter(({ unicode }) => unicode)
      .map(({ name, unicode }) => `u${unicode.toUpperCase()}-${name}.svg`)
   );

   for (const file of outlineFiles) {
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

   await generateFont(strokeName, 'outline', DIR, packageJson, aliases);
}

// Generate filled icons
const dirname = path.join(DIR, 'icons-filled');
mkdirSync(dirname, { recursive: true });

let processed = 0;
let cached = 0;
const startTime = Date.now();

for (const file of filledFiles) {
   const { name, content, unicode } = file;
   if (!unicode) continue;

   let svgContent = content;
   const fileName = `u${unicode.toUpperCase()}-${name}`;
   const filePath = path.join(dirname, `${fileName}.svg`);

   // Save file
   writeFileSync(filePath, svgContent, 'utf-8');

   processed++;
}

const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`\n[filled] Done: ${processed} processed, ${cached} cached in ${totalTime}s`);

await generateFont('filled', 'filled', DIR, packageJson, aliases);