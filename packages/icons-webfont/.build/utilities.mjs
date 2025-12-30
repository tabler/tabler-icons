import fsPromises from 'node:fs/promises';
import { createReadStream, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';
import SVGPathCommander, { parsePathString, pathToString } from 'svg-path-commander';
import { blankSquare, getAliases, getPackageJson } from '../../../.build/helpers.mjs';
import spo from 'svg-path-outline';
// Import canvas before paper-jsdom to ensure it's available for jsdom
// Use require for canvas to ensure it's loaded before jsdom initializes
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('canvas');
import paper from "paper-jsdom";
import { createCanvas } from '@napi-rs/canvas';
import crypto from 'crypto';
import { Eta } from 'eta';
import svg2ttf from "svg2ttf";
import ttf2woff from "ttf2woff";
import wawoff2 from "wawoff2";

// Create Eta instance
const eta = new Eta({ 
  autoEscape: false
});

// Get aliases
const aliases = getAliases(true)

const packageJson = getPackageJson()

// Template function compatible with lodash.template API
function template(templateString) {
  return function(data) {
    return eta.renderString(templateString, data);
  };
}

// Setup paper.js with @napi-rs/canvas
const canvas = createCanvas(1, 1);
paper.setup(canvas);

/**
 * @typedef {stream.Readable & { metadata?: { unicode: string[], name: string } }} Svgicons2svgfontStream
 */

/**
 *
 * @param name {string} name
 * @return {import('svgicons2svgfont').FileMetadata}
 */
function getMetadataFromSvgName(name) {
  // we process uUnicode-Name.svg
  const firstHyphen = name.indexOf('-');
  const unicode = name.slice(1, firstHyphen);
  const iconName = name.slice(firstHyphen + 1, -4);

  const unicodeChar = String.fromCodePoint(parseInt(unicode, 16));
  return {
    unicode: [unicodeChar],
    name: iconName,
  }
}

/**
 *
 * @param path {string} The directory contains SVG files
 * @return {Promise<Svgicons2svgfontStream[]>}
 */
export async function loadSvgFiles(path) {
  const svgFiles = await fsPromises.readdir(path).then(files => files.filter(file => file.endsWith('.svg')));
  svgFiles.sort();
  return svgFiles.map(file => {
    /** @type {Svgicons2svgfontStream} */
    const stream = createReadStream(`${path}/${file}`);
    stream.metadata = getMetadataFromSvgName(file);
    return stream;
  });
}

/**
 *
 * @param svgStreams {Svgicons2svgfontStream[]} SVG files
 * @return {Promise<string>}
 */
export async function buildSvgFont(svgStreams) {
  const { SVGIcons2SVGFontStream } = await import("svgicons2svgfont");
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: 'tabler-icons',
    normalize: true,
    fontHeight: 1000,
    descent: 100,
    ascent: 900,
    fixedWidth: false,
  });

  const fontStreamPromise = new Promise((resolve, reject) => {
    const buffers = [];
    fontStream.on('data', chunk => buffers.push(chunk));
    fontStream.on('finish', () => {
      resolve(buffers.join(''));
    });
    fontStream.on('error', reject);
  });

  svgStreams.forEach(stream => {
    fontStream.write(stream);
  });
  fontStream.end();

  return await fontStreamPromise;
}

// Function to calculate the end point of a segment
export function getEndPoint(segment, startPoint) {
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

// Function to remove XML/HTML comments from SVG
export function removeComments(svgBuffer) {
  // Remove all XML/HTML comments (<!-- ... -->)
  // Using non-greedy match to handle multiline comments
  svgBuffer = svgBuffer.replace(/<!--[\s\S]*?-->/g, '');

  svgBuffer = svgBuffer.replace(blankSquare, '')

  return svgBuffer;
}

// Function to split all paths in SVG into individual segments
export function splitPaths(svgBuffer) {
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
}

export function reorientPath(svgBuffer) {
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
}

export function offsetPath(svgBuffer, offset) {
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
}

export function calculateHash(content) {
  return crypto.createHash('sha1').update(content).digest("hex");
}

export async function generateFont(strokeName, type, DIR) {

  console.log(`Generating font for ${type === 'outline' ? `outline/${strokeName}` : `filled`}`);
  const svgFiles = await loadSvgFiles(path.join(DIR, `icons-${type === 'outline' ? `outlined/${strokeName}` : 'filled'}`));
  const svgFontFileSource = await buildSvgFont(svgFiles);
  const ttfFile = Buffer.from(svg2ttf(svgFontFileSource).buffer);
  const woffFile = Buffer.from(ttf2woff(ttfFile).buffer);
  const woff2File = await wawoff2.compress(ttfFile);

  const fileName = `tabler-icons${type === 'outline' ? (strokeName !== "400" ? `-${strokeName}` : '') : `-${type}`}`;

  // Ensure dist/fonts directory exists
  mkdirSync(path.join(DIR, 'dist/fonts'), { recursive: true });

  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.svg`), svgFontFileSource); // for debug
  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.ttf`), ttfFile);
  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.woff`), woffFile);
  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.woff2`), woff2File);

  const glyphs = svgFiles.map(f => ({
     ...f.metadata,
     unicodeHex: f.metadata.unicode && f.metadata.unicode[0] 
        ? f.metadata.unicode[0].codePointAt(0).toString(16) 
        : ''
  }))
     .sort(function (a, b) {
        return a.name.localeCompare(b.name)
     })

  // Convert aliases object to array of {from, to} objects
  const aliasesArray = aliases[type] ? Object.entries(aliases[type]).map(([from, to]) => ({ from, to })) : []

  const options = {
     name: `Tabler Icons ${type.charAt(0).toUpperCase() + type.slice(1)}`,
     fileName,
     glyphs,
     v: packageJson.version,
     aliases: aliasesArray
  }

  //scss
  const compiled = template(readFileSync(path.join(DIR, '.build/iconfont.scss')).toString())
  const resultSCSS = compiled(options)
  writeFileSync(path.join(DIR, `dist/${fileName}.scss`), resultSCSS)

  //html
  const compiledHtml = template(readFileSync(path.join(DIR, '.build/iconfont.html')).toString())
  const resultHtml = compiledHtml(options)
  writeFileSync(path.join(DIR, `dist/${fileName}.html`), resultHtml)
}

// Process icons with cache mechanism
export async function processIcons(files, dirname, type, DIR, strokeName = null, processContentFn = null) {
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

    const logPrefix = strokeName ? `${strokeName}/${fileName}` : `${type}/${fileName}`;
    console.log(`Writing to ${logPrefix}`);

    // Process content if processing function is provided
    if (processContentFn) {
      svgContent = processContentFn(svgContent);
    }

    // Prepare final content with hash
    const finalContent = svgContent.replace(/\n/g, ' ').trim();
    const hashString = `<!--!cache:${calculateHash(finalContent)}-->`;

    // Save file
    writeFileSync(filePath, finalContent + hashString, 'utf-8');

    processed++;
  }

  // Remove old files
  const globPattern = strokeName 
    ? path.join(DIR, `icons-outlined/${strokeName}/*.svg`)
    : path.join(DIR, `icons-filled/*.svg`);
  const existedFiles = (globSync(globPattern)).map(file => path.basename(file));
  existedFiles.forEach(file => {
    if (!filesList.has(file)) {
      console.log('Remove:', file);
      unlinkSync(path.join(dirname, file));
    }
  });

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  const logPrefix = strokeName ? `[${strokeName}]` : `[${type}]`;
  console.log(`\n${logPrefix} Done: ${processed} processed, ${cached} cached in ${totalTime}s`);

  return { processed, cached };
}
