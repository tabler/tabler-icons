import { globSync } from 'glob'
import { GITHUB_DIR, generateIconsPreview, ICONS_SRC_DIR, asyncForEach } from './helpers.mjs'
import path from 'path'

const types = {
  '-outline': 'outline',
  '-filled': 'filled',
  '': '**'
}

asyncForEach(Object.entries(types), async ([type, dir]) => {
  const files = globSync(path.join(ICONS_SRC_DIR, `${dir}/*.svg`)).sort((a, b) => path.basename(a).localeCompare(path.basename(b)))

  await generateIconsPreview(files, path.join(GITHUB_DIR, `preview/icons${type}.svg`), {
    retina: false,
    stroke: 1.5
  })
  
  await generateIconsPreview(files, path.join(GITHUB_DIR, `preview/icons${type}-dark.svg`), {
    color: '#ffffff',
    background: 'transparent',
    retina: false,
    stroke: 1.5
  })
})
