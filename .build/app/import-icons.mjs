import { getIcons } from '../helpers.mjs'
import fs from 'fs'
import path from 'path'
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url)),
    file = path.join(__dirname, './data/icons.json'),
    icons = getIcons()

fs.writeFileSync(file, JSON.stringify(icons))
