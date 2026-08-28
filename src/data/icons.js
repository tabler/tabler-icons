import path from 'node:path';
import matter from 'gray-matter';
import { globSync } from 'glob';

// Astro runs with the project root as cwd; the icon set lives at <root>/icons.
const iconsDir = path.join(process.cwd(), 'icons');

export const icons = (function () {
  const types = ['outline', 'filled'];

  return types.map((type) => {
    const p = path.join(iconsDir, type, '*.svg');

    const icons = globSync(p)
      .map((icon) => {
        const { data, content } = matter.read(icon, { delims: ['<!--', '-->'] });

        return {
          name: path.basename(icon, '.svg'),
          data,
          content,
        };
      })
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

    console.log(`Found ${icons.length} ${type} icons`);

    return {
      type,
      icons,
    };
  });
})();
