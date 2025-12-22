import fs from 'fs';
import { fileURLToPath } from 'url';
import SVGPathCommander, { optimizePath, parsePathString, pathToString, splitPath } from 'svg-path-commander';
import spo from 'svg-path-outline'

import { globSync } from 'glob';
import paper from "paper-jsdom-canvas";
import svgtofont from 'svgtofont';
import path from 'node:path';

paper.setup();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = globSync(path.join(__dirname, '../../../icons/outline/*.svg'));
const offset = .5;

// Function to split all paths in SVG
const splitPaths = (svgBuffer) => {
   svgBuffer = svgBuffer.replaceAll(/<path([^>]*)d="([^"]*)"([^>]*)>/g, (match, p1, p2, p3) => {
      const absolutePath = new SVGPathCommander(p2).toAbsolute().toString();

      const absolutePathArray = new SVGPathCommander(absolutePath).toAbsolute().toString()
      // Parse path string to PathArray
      const pathArray = parsePathString(absolutePathArray)
      // Split path array into individual paths
      const splitPathsArray = splitPath(pathArray)
      // Convert each path array back to string
      const individualPaths = splitPathsArray.map(pathArray => pathToString(pathArray))

      // If path was split, create separate <path> elements
      if (individualPaths.length > 1) {
         // Get attributes from original path (except d)
         // match is e.g. '<path fill="none" stroke="currentColor" d="M10 20L10 10"'
         // Remove '<path ' and 'd="..."' to get only attributes
         let pathAttributes = match.replace(/<path\s*/, '').replace(/\s*d="[^"]*"/, '').trim();

         // If there are any attributes, add space before d
         if (pathAttributes) {
            pathAttributes = pathAttributes + ' ';
         }

         // Create separate path elements for each path
         const newPaths = individualPaths.map(path => {
            return `<path${p1}d="${path}"${p3}>`;
         });

         return newPaths.join('\n');
      } else {
         // If not split, return original path
         return match;
      }
   });

   return svgBuffer;
};

const reorientPath = (svgBuffer) => {
   let result = svgBuffer;

   const pathRegex = /<path.*?d="([^"]+)"/g;
   const matches = [...svgBuffer.matchAll(pathRegex)];
   for (const match of matches) {
      const originalPath = match[1];
      const compoundPath = new paper.CompoundPath(originalPath);
      const newPath = compoundPath.reorient(false, false).pathData;
      result = result.replace(originalPath, newPath);
   }
   return result;
};

const offsetPath = (svgBuffer, offset) => {
   svgBuffer = svgBuffer.replaceAll(/<path[^>]*d="([^"]*)"/g, (match, p1) => {
      let newPath = spo(new SVGPathCommander(p1).toAbsolute().toString(), offset - 0.001, {
         inside: true,
         outside: true,
         joints: 0
      });

      return `<path d="${newPath}"`
   })

   svgBuffer = svgBuffer.replaceAll(/stroke="[^"]*"/g, 'stroke="none"')
   svgBuffer = svgBuffer.replaceAll(/fill="[^"]*"/g, 'fill="black"')

   return svgBuffer;
};

const generateFont = () => {
   svgtofont({
      src: path.resolve(process.cwd(), "icons-outlined"), // svg path, only searches one level, not recursive
      dist: path.resolve(process.cwd(), "dist/fonts"), // output path
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

for (const file of files) {
   console.log(`Processing ${file}`);
   let svgContent = fs.readFileSync(file, 'utf-8');

   svgContent = splitPaths(svgContent);
   svgContent = offsetPath(svgContent, offset);
   svgContent = reorientPath(svgContent);

   fs.writeFileSync(path.join(__dirname, '../icons-outlined', path.basename(file)), svgContent);
}

generateFont();