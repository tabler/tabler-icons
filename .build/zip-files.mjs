import Zip from 'adm-zip'
import { getPackageJson, HOME_DIR } from './helpers.mjs'
import { resolve } from 'path'

const p = getPackageJson()
const zip = new Zip()

zip.addLocalFile(resolve(HOME_DIR, `.github/og.png`), '.', 'tabler-icons.png')

zip.addLocalFolder(resolve(HOME_DIR, `packages/icons/icons/`), 'svg')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-png/icons/`), 'png')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-pdf/icons/`), 'pdf')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-eps/icons/`), 'eps')
zip.addLocalFolder(resolve(HOME_DIR, `packages/icons-webfont/fonts`), 'webfont/fonts')
zip.addLocalFile(resolve(HOME_DIR, `packages/icons-webfont/tabler-icons.html`), 'webfont')
zip.addLocalFile(resolve(HOME_DIR, `packages/icons-webfont/tabler-icons.scss`), 'webfont')
zip.addLocalFile(resolve(HOME_DIR, `packages/icons-webfont/tabler-icons.css`), 'webfont')
zip.addLocalFile(resolve(HOME_DIR, `packages/icons-webfont/tabler-icons.min.css`), 'webfont')

zip.writeZip(resolve(HOME_DIR, `packages-zip/tabler-icons-${p.version}.zip`));
