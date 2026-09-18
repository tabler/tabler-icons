import fsPromises from 'node:fs/promises';
import { createReadStream, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';
import { blankSquare, getAliases, getPackageJson } from '../../../.build/helpers.mjs';
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

// Function to remove XML/HTML comments from SVG
export function removeComments(svgBuffer) {
  // Remove all XML/HTML comments (<!-- ... -->)
  // Using non-greedy match to handle multiline comments
  svgBuffer = svgBuffer.replace(/<!--[\s\S]*?-->/g, '');

  svgBuffer = svgBuffer.replace(blankSquare, '')

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
