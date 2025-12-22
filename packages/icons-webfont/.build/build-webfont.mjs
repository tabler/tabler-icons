import path from 'node:path';
import { getAliases, getAllIcons, getPackageDir, getPackageJson, strokes } from '../../../.build/helpers.mjs';
import { generateFont, offsetPath, processIcons, removeComments, reorientPath, splitPaths } from './utilities.mjs';

const DIR = getPackageDir('icons-webfont')
const packageJson = getPackageJson()

const outlineFiles = getAllIcons(true).outline;
const filledFiles = getAllIcons(true).filled;
const aliases = getAliases(true)

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

   await generateFont(strokeName, 'outline', DIR, packageJson, aliases);
}

// Generate filled icons
const filledDirname = path.join(DIR, 'icons-filled');
await processIcons(filledFiles, filledDirname, 'filled', DIR);
await generateFont('filled', 'filled', DIR, packageJson, aliases);