import fsPromises from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import {SVGIcons2SVGFontStream} from "svgicons2svgfont";

/**
 * @typedef {stream.Readable & { metadata?: import('svgicons2svgfont').FileMetadata }} Svgicons2svgfontStream
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
