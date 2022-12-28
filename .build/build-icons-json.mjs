import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { extname, join } from 'path';

import { buildIconsObject, HOME_DIR, ICONS_DIR } from './helpers.mjs'

const OUT_FILE = join(HOME_DIR, 'packages/icons/dist/icons.json');

console.log(`Building ${OUT_FILE}...`);

const svgFiles = readdirSync(ICONS_DIR)
  .filter(file => extname(file) === '.svg');

const getSvg = svgFile => readFileSync(join(ICONS_DIR, svgFile));

const icons = buildIconsObject(svgFiles, getSvg);

writeFileSync(OUT_FILE, JSON.stringify(icons));
