import path from 'node:path';
import { getAllIcons, getPackageDir, strokes } from '../../../.build/helpers.mjs';
import { generateFont, offsetPath, processIcons, removeComments, reorientPath, splitPaths } from './utilities.mjs';

const DIR = getPackageDir('icons-webfont')

const outlineFiles = getAllIcons(true).outline;
const filledFiles = getAllIcons(true).filled;

// Generate outline icons
for await (const [strokeName, strokeWidth] of Object.entries(strokes)) {
   const dirname = path.join(DIR, 'icons-outlined', strokeName);
   
   await processIcons(
      outlineFiles,
      dirname,
      'outline',
      DIR,
      strokeName,
      (svgContent) => {
         svgContent = removeComments(svgContent);
         svgContent = splitPaths(svgContent);
         svgContent = offsetPath(svgContent, strokeWidth);
         svgContent = reorientPath(svgContent);
         return svgContent;
      }
   );

   await generateFont(strokeName, 'outline', DIR);
}

// Generate filled icons
const filledDirname = path.join(DIR, 'icons-filled');
await processIcons(filledFiles, filledDirname, 'filled', DIR);
await generateFont('filled', 'filled', DIR);