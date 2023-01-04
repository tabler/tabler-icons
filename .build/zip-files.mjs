import Zip from 'adm-zip'
import { HOME_DIR } from './helpers.mjs'
import { resolve } from 'path'
import fs from 'fs'

const p = JSON.parse(fs.readFileSync(resolve(HOME_DIR, 'package.json'), 'utf-8'))
const zip = new Zip()

zip.addLocalFile(resolve(HOME_DIR, `.github/og.png`), '.', 'tabler-icons.png')

zip.addLocalFolder(resolve(HOME_DIR, `packages/icons/icons/`), 'svg')
// zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-webfont/icons/`), 'webfont')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-png/icons/`), 'png')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-pdf/icons/`), 'pdf')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-eps/icons/`), 'eps')

zip.writeZip(resolve(HOME_DIR, `packages-zip/tabler-icons-${p.version}.zip`));
