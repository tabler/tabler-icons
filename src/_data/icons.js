const matter = require('gray-matter');
const path = require('path');
const fs = require('fs');
const { globSync } = require('glob');

module.exports = (function () {
  const types = ['outline', 'filled']

  return types.map(type => {
    const p = path.join(__dirname, `../../icons/**/*.svg`);

    const icons = globSync(p).map((icon) => {
      const data = matter.read(icon, { delims: ['<!--', '-->'] })

      console.log(data)

      return {
        slug: path.basename(icon, ".svg"),
        ...data
      }
    }).sort((a, b) => {
      return a.slug.localeCompare(b.slug);
    });

    return {
      type,
      icons
    }
  })
})();
