import fs from 'fs';
import { fileURLToPath } from 'url';
import SVGPathCommander, { optimizePath, parsePathString, pathToString, splitPath } from 'svg-path-commander';
import { getAllIcons, getCompileOptions, getPackageDir, blankSquare, strokes } from '../../../.build/helpers.mjs'

import spo from 'svg-path-outline'

import { globSync } from 'glob';
import paper from "paper-jsdom-canvas";
import svgtofont from 'svgtofont';
import path from 'node:path';

paper.setup();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = globSync(path.join(__dirname, '../../../icons/outline/*.svg'));

// Function to calculate the end point of a segment
function getEndPoint(segment, startPoint) {
   const [command, ...params] = segment;
   const upperCommand = command.toUpperCase();

   switch (upperCommand) {
      case 'M':
         return [params[0], params[1]];
      case 'L':
         return [params[0], params[1]];
      case 'H':
         return [params[0], startPoint[1]];
      case 'V':
         return [startPoint[0], params[0]];
      case 'C':
         // Cubic Bezier: C x1 y1 x2 y2 x y
         return [params[4], params[5]];
      case 'S':
         // Smooth Cubic Bezier: S x2 y2 x y
         return [params[2], params[3]];
      case 'Q':
         // Quadratic Bezier: Q x1 y1 x y
         return [params[2], params[3]];
      case 'T':
         // Smooth Quadratic Bezier: T x y
         return [params[0], params[1]];
      case 'A':
         // Arc: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
         return [params[5], params[6]];
      case 'Z':
         return startPoint;
      default:
         return startPoint;
   }
}

// Function to split all paths in SVG into individual segments
const splitPaths = (svgBuffer) => {
   svgBuffer = svgBuffer.replaceAll(/<path([^>]*)d="([^"]*)"([^>]*)>/g, (match, p1, p2, p3) => {
      // Convert path to absolute format
      const absolutePath = new SVGPathCommander(p2).toAbsolute().toString();
      // Parse path string to PathArray
      const pathArray = parsePathString(absolutePath)

      if (!Array.isArray(pathArray) || pathArray.length === 0) {
         return match;
      }

      // Track current position and path start point
      let currentPoint = [0, 0];
      let pathStartPoint = [0, 0];
      const individualPaths = [];

      for (let i = 0; i < pathArray.length; i++) {
         const segment = pathArray[i];
         const [command] = segment;
         const upperCommand = command.toUpperCase();

         if (upperCommand === 'M') {
            // MoveTo command - update current position and path start
            currentPoint = [segment[1], segment[2]];
            pathStartPoint = currentPoint;

            // If there's a next segment, create a path from M to that segment
            if (i + 1 < pathArray.length) {
               const nextSegment = pathArray[i + 1];
               const newPath = pathToString([segment, nextSegment]);
               individualPaths.push(newPath);
               currentPoint = getEndPoint(nextSegment, currentPoint);
               i++; // Skip next segment as we've already processed it
            }
         } else if (upperCommand === 'Z') {
            // Close path - create a line back to start
            if (individualPaths.length > 0) {
               // Add Z to the last path if it doesn't already have it
               let lastPath = individualPaths[individualPaths.length - 1];
               if (!lastPath.trim().endsWith('Z') && !lastPath.trim().endsWith('z')) {
                  const lastPathArray = parsePathString(lastPath);
                  lastPathArray.push(['Z']);
                  lastPath = pathToString(lastPathArray);
                  individualPaths[individualPaths.length - 1] = lastPath;
               }
            }
            currentPoint = pathStartPoint;
         } else {
            // Any other command - create a new path starting with M
            const newPath = pathToString([
               ['M', currentPoint[0], currentPoint[1]],
               segment
            ]);
            individualPaths.push(newPath);
            currentPoint = getEndPoint(segment, currentPoint);
         }
      }

      // If we have multiple paths, create separate <path> elements
      if (individualPaths.length > 1) {
         const newPaths = individualPaths.map(path => {
            return `<path${p1}d="${path}"${p3}>`;
         });
         return newPaths.join('\n');
      } else if (individualPaths.length === 1) {
         // Even if only one path, return it (might be different from original)
         return `<path${p1}d="${individualPaths[0]}"${p3}>`;
      } else {
         // Fallback to original
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
      let newPath = spo(new SVGPathCommander(p1).toAbsolute().toString(), offset / 2 - 0.001, {
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

   for (const file of files) {
      let svgContent = fs.readFileSync(file, 'utf-8');
      const fileName = path.basename(file);
      const filePath = path.join(dirname, fileName);
      console.log(`Writing to ${strokeName}/${fileName}`);

      svgContent = splitPaths(svgContent);
      svgContent = offsetPath(svgContent, strokeWidth);
      svgContent = reorientPath(svgContent);

      fs.writeFileSync(filePath, svgContent);
   }

   await generateFont(strokeName);
}

