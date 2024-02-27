const matter = require('gray-matter');
const path = require('path');
const { globSync } = require('glob');

module.exports = (function () {
  const types = ['outline', 'filled']

  return types.map(type => {
    const p = path.join(__dirname, `../../icons/${type}/*.svg`);

    const icons = globSync(p).map((icon) => {
      const { data, content } = matter.read(icon, { delims: ['<!--', '-->'] })

      return {
        name: path.basename(icon, ".svg"),
        data,
        content
      }
    }).sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    console.log(`Found ${icons.length} ${type} icons`);

    return {
      type,
      icons
    }
  })
})();
