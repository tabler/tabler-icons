import path from 'node:path';
import { outlineSvg } from 'unstroke';
import { getAllIcons, getPackageDir, strokes } from '../../../.build/helpers.mjs';
import { generateFont, processIcons, removeComments } from './utilities.mjs';

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
      (svgContent) => outlineSvg(removeComments(svgContent), {
         strokeWidth,
         fill: 'black',
         onWarning: (warning) => console.warn(`[${strokeName}] ${warning.message}`),
      })
   );

   await generateFont(strokeName, 'outline', DIR);
}

// Generate filled icons
const filledDirname = path.join(DIR, 'icons-filled');
await processIcons(filledFiles, filledDirname, 'filled', DIR);
await generateFont('filled', 'filled', DIR);
