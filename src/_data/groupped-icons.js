const matter = require('gray-matter');
const path = require('path');
const { globSync } = require('glob');

module.exports = (function () {
  const outlineIcons = globSync(path.join(__dirname, '../../icons', `outline/*.svg`)).sort((a, b) => path.basename(a).localeCompare(path.basename(b)))
  const filledIcons = globSync(path.join(__dirname, '../../icons', `filled/*.svg`)).sort((a, b) => path.basename(a).localeCompare(path.basename(b)))

  const icons = {};
  outlineIcons.forEach(icon => {
    const name = path.basename(icon, ".svg"),
      { data, content } = matter.read(icon, { delims: ['<!--', '-->'] })

    icons[name] = {
      name: name,
      data: {
        category: data.category || '',
        tags: data.tags || [],
      },
      styles: {
        outline: {
          version: data.version || '',
          unicode: data.unicode || '',
          content: content.replace(/(<svg[^>]+>)/, `$1\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`)
        }
      }
    }
  })

  filledIcons.forEach(icon => {
    const name = path.basename(icon, ".svg"),
      { data, content } = matter.read(icon, { delims: ['<!--', '-->'] })

    if (icons[name]) {
      icons[name].styles.filled = {
        version: data.version || '',
        unicode: data.unicode || '',
        content: content.replace(/(<svg[^>]+>)/, `$1\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`)
      }
    }
  })

  return Object.values(icons);
})();
