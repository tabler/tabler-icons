import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import path, { resolve, basename } from 'path';
import { fileURLToPath } from 'url';
import { execFile, execFileSync, execSync } from 'child_process';
import { promisify } from 'util';
import { availableParallelism } from 'os';
import svgParse from 'parse-svg-path';
import svgpath from 'svgpath';
import { parseSync } from 'svgson';
import { optimize } from 'svgo';
import minimist from 'minimist';
import matter from 'gray-matter';
import { globSync } from 'glob';
import slash from 'slash';

const execFileAsync = promisify(execFile);

export const strokes = {
  200: 1,
  300: 1.5,
  400: 2,
};

export const categories = [
  'Animals',
  'Arrows',
  'Badges',
  'Brand',
  'Buildings',
  'Charts',
  'Communication',
  'Computers',
  'Currencies',
  'Database',
  'Design',
  'Development',
  'Devices',
  'Document',
  'E-commerce',
  'Electrical',
  'Extensions',
  'Food',
  'Games',
  'Gender',
  'Gestures',
  'Health',
  'Laundry',
  'Letters',
  'Logic',
  'Map',
  'Math',
  'Media',
  'Mood',
  'Nature',
  'Numbers',
  'Photography',
  'Shapes',
  'Sport',
  'Symbols',
  'System',
  'Text',
  'Vehicles',
  'Version control',
  'Weather',
  'Zodiac',
];

export const iconTemplate = (type) =>
  type === 'outline'
    ? `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>`
    : `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
>`;

export const blankSquare = '<path stroke="none" d="M0 0h24v24H0z" fill="none" />';

export const types = ['outline', 'filled'];

export const getCurrentDirPath = () => {
  return path.dirname(fileURLToPath(import.meta.url));
};

export const HOME_DIR = resolve(getCurrentDirPath(), '..');

export const ICONS_SRC_DIR = resolve(HOME_DIR, 'icons');
export const PACKAGES_DIR = resolve(HOME_DIR, 'packages');
export const GITHUB_DIR = resolve(HOME_DIR, '.github');

export const parseMatter = (icon) => {
  const { data, content } = matter.read(icon, { delimiters: ['<!--', '-->'] });

  return { data, content };
};

const getSvgContent = (svg, type, name) => {
  return svg
    .replace(/<svg([^>]+)>/, (m, m1) => {
      return `<svg${m1}  class="icon icon-tabler icons-tabler-${type} icon-tabler-${name}"\n>\n  ${blankSquare}`;
    })
    .trim();
};

const typeSuffix = (type) => (type !== 'outline' ? `-${type}` : '');

/**
 * Icon name as used outside of the `icons/<type>` directories: outline icons
 * keep their name, other types get the type as a suffix (`heart-filled`)
 */
export const getIconName = (name, type) => `${name}${typeSuffix(type)}`;

// Source files are read and parsed once per process — a single package build
// asks for the icons several times
let iconFilesCache;

const getIconFiles = () => {
  if (!iconFilesCache) {
    const limit = process.env['ICONS_LIMIT'] ? parseInt(process.env['ICONS_LIMIT'], 10) : Infinity;

    iconFilesCache = Object.fromEntries(
      types.map((type) => [
        type,
        globSync(slash(path.join(ICONS_SRC_DIR, `${type}/*.svg`)))
          .sort((a, b) => a.localeCompare(b))
          .slice(0, limit)
          .map((file) => ({ file, name: basename(file, '.svg'), ...parseMatter(file) })),
      ]),
    );
  }

  return iconFilesCache;
};

export const getAllIcons = (withContent = false, withObject = false) => {
  const icons = {};

  for (const [type, files] of Object.entries(getIconFiles())) {
    icons[type] = files.map(({ file, name, data, content }) => ({
      name,
      namePascal: toPascalCase(name),
      path: file,
      category: data.category || '',
      tags: data.tags || [],
      version: data.version || '',
      unicode: data.unicode || '',
      ...(withContent ? { content: getSvgContent(content, type, name) } : {}),
      ...(withObject ? { obj: parseSync(content.replace(blankSquare, '')) } : {}),
    }));
  }

  return icons;
};

/**
 * Icons first released in `version`, i.e. those whose `version` frontmatter is
 * its minor part (`3.49` for `3.49.0`). Patch releases never add icons.
 *
 * @param {string} version
 */
export const getIconsReleasedIn = (version) =>
  Object.entries(getAllIcons()).flatMap(([type, icons]) =>
    icons
      .filter((icon) => icon.version && `${icon.version}.0` === version)
      .map((icon) => ({ ...icon, type })),
  );

export const getAllIconsMerged = (withContent = false, withObject = false) => {
  const allIcons = getAllIcons(withContent, withObject);

  const getStyle = (icon) => ({
    version: icon.version,
    unicode: icon.unicode,
    ...(withContent ? { content: icon.content } : {}),
    ...(withObject ? { obj: icon.obj } : {}),
  });

  const icons = {};
  allIcons.outline.forEach((icon) => {
    icons[icon.name] = {
      name: icon.name,
      category: icon.category,
      tags: icon.tags,
      styles: {
        outline: getStyle(icon),
      },
    };
  });

  allIcons.filled.forEach((icon) => {
    if (icons[icon.name]) {
      icons[icon.name].styles.filled = getStyle(icon);
    }
  });

  return icons;
};

export const getArgvs = () => {
  return minimist(process.argv.slice(2));
};

export const getPackageDir = (packageName) => {
  return `${PACKAGES_DIR}/${packageName}`;
};

/**
 * Return project package.json
 * @returns {any}
 */
export const getPackageJson = () => {
  return JSON.parse(readFileSync(resolve(HOME_DIR, 'package.json'), 'utf-8'));
};

/**
 * Aliases whose target icon exists
 *
 * @param grouped when true, return `{ [type]: { [alias]: name } }`; otherwise
 *   a flat `{ [alias]: name }` map using suffixed icon names (see `getIconName`)
 * @returns {Record<string, any>}
 */
export const getAliases = (grouped = false) => {
  const allAliases = JSON.parse(readFileSync(resolve(HOME_DIR, 'aliases.json'), 'utf-8'));
  const allIcons = getAllIcons();
  const aliases = {};

  types.forEach((type) => {
    const icons = new Set(allIcons[type].map((i) => i.name));
    const target = grouped ? (aliases[type] = {}) : aliases;

    for (const [from, to] of Object.entries(allAliases[type])) {
      if (icons.has(to)) {
        target[grouped ? from : getIconName(from, type)] = grouped ? to : getIconName(to, type);
      }
    }
  });

  return aliases;
};

/**
 * Convert string to CamelCase
 * @param string
 * @returns {*}
 */
export const toCamelCase = (string) => {
  return string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
};

export const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

export const optimizePath = function (path) {
  let transformed = svgpath(path).rel().round(3).toString();

  return svgParse(transformed)
    .map(function (a) {
      return a.join(' ');
    })
    .join('');
};

const CLOSE_PATH_EPSILON = 0.001;

// Outline icons must not contain the closepath command. `z` draws a straight
// line back to the subpath start, so it can only be dropped when the path
// already ends there — otherwise it is replaced with an explicit line to keep
// the geometry identical (with round caps/joins both render the same).
export const removeClosePath = (d) => {
  // `segments` is not part of svgpath's public typings
  /** @type {ReturnType<typeof svgpath> & { segments: any[][] }} */
  const path = /** @type {any} */ (svgpath(d).abs().unshort());

  let cx = 0,
    cy = 0,
    sx = 0,
    sy = 0;
  const segments = [];

  path.segments.forEach((segment) => {
    const [command, ...args] = segment;

    if (command === 'Z') {
      if (Math.abs(cx - sx) > CLOSE_PATH_EPSILON || Math.abs(cy - sy) > CLOSE_PATH_EPSILON) {
        segments.push(['L', sx, sy]);
      }
      cx = sx;
      cy = sy;
      return;
    }

    if (command === 'M') {
      sx = args[0];
      sy = args[1];
    }

    if (command === 'H') {
      cx = args[0];
    } else if (command === 'V') {
      cy = args[0];
    } else {
      cx = args[args.length - 2];
      cy = args[args.length - 1];
    }

    segments.push(segment);
  });

  path.segments = segments;
  return path.toString();
};

export const optimizeSVG = (data) => {
  return optimize(data, {
    js2svg: {
      indent: 2,
      pretty: true,
    },
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            mergePaths: false,
            // never turn a trailing line back into a closepath — outline
            // icons must not contain `z` (see removeClosePath above)
            convertPathData: {
              convertToZ: false,
            },
          },
        },
      },
    ],
  }).data;
};

export const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export const isRsvgConvertAvailable = () => {
  try {
    execSync('command -v rsvg-convert', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
};

export const createScreenshot = (filePath, retina = true) => {
  if (!isRsvgConvertAvailable()) {
    console.log(`\nWarning: rsvg-convert not found. Skipping screenshot of ${filePath}.`);
    return;
  }

  const convert = (zoom, suffix) =>
    execFileSync('rsvg-convert', [
      '-x',
      zoom,
      '-y',
      zoom,
      filePath,
      '-o',
      filePath.replace('.svg', `${suffix}.png`),
    ]);

  convert('2', '');

  if (retina) {
    convert('4', '@2x');
  }
};

export const createSvgSymbol = (svg, name, stroke) => {
  return svg
    .replace('<svg', `<symbol id="${name}"`)
    .replace(' width="24" height="24"', '')
    .replace(' stroke-width="2"', ` stroke-width="${stroke}"`)
    .replace('</svg>', '</symbol>')
    .replace(/\n\s+/g, ' ')
    .replace(/<!--(.*?)-->/gis, '')
    .trim();
};

export const generateIconsPreview = async function (
  files,
  destFile,
  {
    columnsCount = 19,
    paddingOuter = 7,
    color = '#354052',
    background = '#fff',
    png = true,
    stroke = 2,
    retina = true,
  } = {},
) {
  const padding = 20,
    iconSize = 24;

  const iconsCount = files.length,
    rowsCount = Math.ceil(iconsCount / columnsCount),
    width = columnsCount * (iconSize + padding) + 2 * paddingOuter - padding,
    height = rowsCount * (iconSize + padding) + 2 * paddingOuter - padding;

  let svgContentSymbols = '',
    svgContentIcons = '',
    x = paddingOuter,
    y = paddingOuter;

  files.forEach(function (file, i) {
    const name = file.replace(/^(.*)\/([^/]+)\/([^.]+).svg$/g, '$2-$3');

    let svgFile = readFileSync(file),
      svgFileContent = svgFile.toString();

    svgFileContent = createSvgSymbol(svgFileContent, name, stroke);

    svgContentSymbols += `\t${svgFileContent}\n`;
    svgContentIcons += `\t<use xlink:href="#${name}" x="${x}" y="${y}" width="${iconSize}" height="${iconSize}" />\n`;

    x += padding + iconSize;

    if (i % columnsCount === columnsCount - 1) {
      x = paddingOuter;
      y += padding + iconSize;
    }
  });

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: ${color}"><rect x="0" y="0" width="${width}" height="${height}" fill="${background}"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`;

  console.log(destFile);

  writeFileSync(destFile, svgContent);

  if (png) {
    await createScreenshot(destFile, retina);
  }
};

export const printChangelog = function (newIcons, modifiedIcons, renamedIcons, pretty = false) {
  const plural = (items) => (items.length > 1 ? 's' : '');
  const list = (items) => items.map((icon) => `\`${icon}\``).join(', ');

  if (newIcons.length > 0) {
    if (pretty) {
      console.log(`### ${newIcons.length} new icon${plural(newIcons)}:\n`);

      newIcons.forEach((icon) => {
        console.log(`- \`${icon}\``);
      });
    } else {
      console.log(`${newIcons.length} new icon${plural(newIcons)}: ${list(newIcons)}`);
    }

    console.log('');
  }

  if (modifiedIcons.length > 0) {
    console.log(`Fixed icon${plural(modifiedIcons)}: ${list(modifiedIcons)}`);
    console.log('');
  }

  if (renamedIcons.length > 0) {
    console.log(`Renamed icons: `);

    renamedIcons.forEach(([from, to]) => {
      console.log(`- \`${from}\` renamed to \`${to}\``);
    });
  }

  console.log('');
};

export const convertIconsToImages = async (dir, extension, size = 240) => {
  if (!isRsvgConvertAvailable()) {
    console.log(`\nWarning: rsvg-convert not found. Skipping ${extension} conversion.`);
    return;
  }

  const jobs = [];
  for (const [type, icons] of Object.entries(getAllIcons())) {
    mkdirSync(path.join(dir, type), { recursive: true });

    for (const icon of icons) {
      jobs.push({ src: icon.path, dest: path.join(dir, type, `${icon.name}.${extension}`) });
    }
  }

  // Each conversion is a separate `rsvg-convert` process, so run as many at a
  // time as there are CPUs instead of one after another.
  let next = 0;
  const worker = async () => {
    while (next < jobs.length) {
      const { src, dest } = jobs[next++];

      try {
        await execFileAsync('rsvg-convert', ['-f', extension, '-h', String(size), src, '-o', dest]);
      } catch (error) {
        // stop the other workers from starting new conversions
        next = jobs.length;
        throw error;
      }
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(availableParallelism(), jobs.length) }, () => worker()),
  );
};

export const getMaxUnicode = () => {
  const files = globSync(path.join(ICONS_SRC_DIR, '**/*.svg'));
  let maxUnicode = 0;

  files.forEach((file) => {
    const match = readFileSync(file, 'utf-8').match(/unicode: "([a-f0-9.]+)"/i);
    const unicode = match ? parseInt(match[1], 16) : 0;

    if (unicode) {
      maxUnicode = Math.max(maxUnicode, unicode);
    }
  });

  console.log(`Max unicode: ${maxUnicode}`);

  return maxUnicode;
};
