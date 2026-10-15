import fsPromises from 'node:fs/promises';
import { createReadStream, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';
import { blankSquare, getAliases, getAllIcons, getPackageJson } from '../../../.build/helpers.mjs';
import crypto from 'crypto';
import { Eta } from 'eta';
import svg2ttf from 'svg2ttf';
import ttf2woff from 'ttf2woff';
import wawoff2 from 'wawoff2';

// Create Eta instance
const eta = new Eta({
  autoEscape: false,
});

// Get aliases
const aliases = getAliases(true);

const packageJson = getPackageJson();

// Most downloaded icons on tabler.io. They go into one `core` chunk so a typical
// page only needs that file; the rest is split by category.
const coreIcons = new Set(
  JSON.parse(readFileSync(new URL('./core-icons.json', import.meta.url), 'utf-8')),
);

// Filled icons have no category of their own, so use the outline one.
const categories = Object.fromEntries(
  getAllIcons().outline.map(({ name, category }) => [name, category]),
);

// Categories bigger than this are split into several chunks.
const MAX_CHUNK_SIZE = 256;

// Template function compatible with lodash.template API
function template(templateString) {
  return function (data) {
    return eta.renderString(templateString, data);
  };
}

/**
 * @typedef {import('node:stream').Readable & { metadata?: { unicode: string[], name: string } }} Svgicons2svgfontStream
 */

/**
 *
 * @param name {string} name
 * @return {{ unicode: string[], name: string }}
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
  };
}

/**
 *
 * @param path {string} The directory contains SVG files
 * @param filter {(metadata: { unicode: string[], name: string }) => boolean} Which icons to load
 * @return {Promise<Svgicons2svgfontStream[]>}
 */
export async function loadSvgFiles(path, filter = () => true) {
  const svgFiles = await fsPromises
    .readdir(path)
    .then((files) => files.filter((file) => file.endsWith('.svg')));
  svgFiles.sort();
  return svgFiles
    .filter((file) => filter(getMetadataFromSvgName(file)))
    .map((file) => {
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
  const { SVGIcons2SVGFontStream } = await import('svgicons2svgfont');
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
    fontStream.on('data', (chunk) => buffers.push(chunk));
    fontStream.on('finish', () => {
      resolve(buffers.join(''));
    });
    fontStream.on('error', reject);
  });

  svgStreams.forEach((stream) => {
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

  svgBuffer = svgBuffer.replace(blankSquare, '');

  return svgBuffer;
}

// svg2ttf stamps fonts with the current time by default, which makes every
// build produce different binaries. Use a fixed timestamp (overridable with
// SOURCE_DATE_EPOCH) so identical icons give identical font files.
const FONT_TIMESTAMP = process.env.SOURCE_DATE_EPOCH || 0;

export function calculateHash(content) {
  return crypto.createHash('sha1').update(content).digest('hex');
}

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

/**
 * Split glyphs into the `core` chunk and the rest. With `byCategory` the rest is
 * split into one chunk per category, with big categories cut into parts of at
 * most MAX_CHUNK_SIZE consecutive codepoints.
 * Without it the rest is a single chunk. The core chunk is never split.
 *
 * @param glyphs {{ name: string, unicode: string[] }[]}
 * @param byCategory {boolean}
 * @return {{ name: string, names: Set<string>, codepoints: number[] }[]}
 */
export function getChunks(glyphs, byCategory = true) {
  const groups = { core: [] };
  for (const glyph of glyphs) {
    const group = coreIcons.has(glyph.name)
      ? 'core'
      : byCategory
        ? slugify(categories[glyph.name] || 'other')
        : 'rest';
    (groups[group] ||= []).push(glyph);
  }

  return Object.entries(groups).flatMap(([name, list]) => {
    if (!list.length) return [];
    list.sort((a, b) => a.unicode[0].codePointAt(0) - b.unicode[0].codePointAt(0));
    const parts = byCategory && name !== 'core' ? Math.ceil(list.length / MAX_CHUNK_SIZE) : 1;
    return Array.from({ length: parts }, (_, i) => {
      const part = list.slice(
        Math.floor((i * list.length) / parts),
        Math.floor(((i + 1) * list.length) / parts),
      );
      return {
        name: parts > 1 ? `${name}-${i + 1}` : name,
        names: new Set(part.map((glyph) => glyph.name)),
        codepoints: part.map((glyph) => glyph.unicode[0].codePointAt(0)),
      };
    });
  });
}

/**
 * Turn codepoints into a `unicode-range` value, merging consecutive ones.
 *
 * @param codepoints {number[]} sorted codepoints
 * @return {string}
 */
export function toUnicodeRange(codepoints) {
  const ranges = [];
  for (const codepoint of codepoints) {
    const last = ranges.at(-1);
    if (last && codepoint === last[1] + 1) last[1] = codepoint;
    else ranges.push([codepoint, codepoint]);
  }
  const hex = (codepoint) => codepoint.toString(16).toUpperCase();
  return ranges
    .map(([from, to]) => (from === to ? `U+${hex(from)}` : `U+${hex(from)}-${hex(to)}`))
    .join(', ');
}

async function buildWoff2(svgFiles) {
  const svgFont = await buildSvgFont(svgFiles);
  return wawoff2.compress(Buffer.from(svg2ttf(svgFont, { ts: FONT_TIMESTAMP }).buffer));
}

export async function generateFont(strokeName, type, DIR) {
  console.log(`Generating font for ${type === 'outline' ? `outline/${strokeName}` : `filled`}`);
  const svgDir = path.join(
    DIR,
    `icons-${type === 'outline' ? `outlined/${strokeName}` : 'filled'}`,
  );
  const svgFiles = await loadSvgFiles(svgDir);
  const svgFontFileSource = await buildSvgFont(svgFiles);
  const ttfFile = Buffer.from(svg2ttf(svgFontFileSource, { ts: FONT_TIMESTAMP }).buffer);
  const woffFile = Buffer.from(ttf2woff(ttfFile).buffer);
  const woff2File = await wawoff2.compress(ttfFile);

  const fileName = `tabler-icons${type === 'outline' ? (strokeName !== '400' ? `-${strokeName}` : '') : `-${type}`}`;

  // Ensure the output directories exist
  mkdirSync(path.join(DIR, 'dist/fonts'), { recursive: true });
  mkdirSync(path.join(DIR, 'fonts'), { recursive: true });

  // The intermediate SVG font is kept for debugging only. It goes to `fonts/`
  // (git-ignored, not published) because the CSS does not reference it and it
  // would make up most of the package size.
  writeFileSync(path.join(DIR, `fonts/${fileName}.svg`), svgFontFileSource);
  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.ttf`), ttfFile);
  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.woff`), woffFile);
  writeFileSync(path.join(DIR, `dist/fonts/${fileName}.woff2`), woff2File);

  // Chunks for the split @font-face. Each file is loaded only when the page
  // shows a glyph from its unicode-range. The filled font is small enough that
  // per-category chunks would mostly be overhead, so it is only core + rest.
  const chunks = [];
  for (const chunk of getChunks(
    svgFiles.map((f) => f.metadata),
    type === 'outline',
  )) {
    const chunkFile = await buildWoff2(
      await loadSvgFiles(svgDir, ({ name }) => chunk.names.has(name)),
    );
    const chunkFileName = `${fileName}.${chunk.name}`;
    writeFileSync(path.join(DIR, `dist/fonts/${chunkFileName}.woff2`), chunkFile);
    chunks.push({
      fileName: chunkFileName,
      hash: calculateHash(chunkFile).slice(0, 8),
      unicodeRange: toUnicodeRange(chunk.codepoints),
    });
  }

  const glyphs = svgFiles
    .map((f) => ({
      ...f.metadata,
      unicodeHex:
        f.metadata.unicode && f.metadata.unicode[0]
          ? f.metadata.unicode[0].codePointAt(0).toString(16)
          : '',
    }))
    .sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

  // Convert aliases object to array of {from, to} objects
  const aliasesArray = aliases[type]
    ? Object.entries(aliases[type]).map(([from, to]) => ({ from, to }))
    : [];

  const options = {
    name: `Tabler Icons ${type.charAt(0).toUpperCase() + type.slice(1)}`,
    fileName,
    glyphs,
    v: packageJson.version,
    aliases: aliasesArray,
    chunks,
  };

  //scss
  const compiled = template(readFileSync(path.join(DIR, '.build/iconfont.scss')).toString());
  const resultSCSS = compiled(options);
  writeFileSync(path.join(DIR, `dist/${fileName}.scss`), resultSCSS);

  //html
  const compiledHtml = template(readFileSync(path.join(DIR, '.build/iconfont.html')).toString());
  const resultHtml = compiledHtml(options);
  writeFileSync(path.join(DIR, `dist/${fileName}.html`), resultHtml);
}

// Process icons with cache mechanism
export async function processIcons(
  files,
  dirname,
  type,
  DIR,
  strokeName = null,
  processContentFn = null,
) {
  mkdirSync(dirname, { recursive: true });

  let processed = 0;
  let cached = 0;
  const startTime = Date.now();

  const filesList = new Set(
    files
      .filter(({ unicode }) => unicode)
      .map(({ name, unicode }) => `u${unicode.toUpperCase()}-${name}.svg`),
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
      const contentWithoutHash = cachedContent.replace(/<!--!cache:([a-z0-9]+)-->/, (m, hash) => {
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
  const existedFiles = globSync(globPattern).map((file) => path.basename(file));
  existedFiles.forEach((file) => {
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
