import path from 'node:path';
import matter from 'gray-matter';
import { globSync } from 'glob';

// Astro runs with the project root as cwd; the icon set lives at <root>/icons.
const iconsDir = path.join(process.cwd(), 'icons');

export const groupedIcons = (function () {
  const outlineIcons = globSync(path.join(iconsDir, 'outline', '*.svg')).sort((a, b) =>
    path.basename(a).localeCompare(path.basename(b))
  );
  const filledIcons = globSync(path.join(iconsDir, 'filled', '*.svg')).sort((a, b) =>
    path.basename(a).localeCompare(path.basename(b))
  );

  const icons = {};
  outlineIcons.forEach((icon) => {
    const name = path.basename(icon, '.svg'),
      { data, content } = matter.read(icon, { delims: ['<!--', '-->'] });

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
          content: content.replace(
            /(<svg[^>]+>)/,
            `$1\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`
          ),
        },
      },
    };
  });

  filledIcons.forEach((icon) => {
    const name = path.basename(icon, '.svg'),
      { data, content } = matter.read(icon, { delims: ['<!--', '-->'] });

    if (icons[name]) {
      icons[name].styles.filled = {
        version: data.version || '',
        unicode: data.unicode || '',
        content: content.replace(
          /(<svg[^>]+>)/,
          `$1\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`
        ),
      };
    }
  });

  return Object.values(icons);
})();
