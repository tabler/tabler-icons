// Runs before `changeset version` (see the `version-packages` script). Icons
// are added without changesets, so the ones not released yet (no `version` in
// their frontmatter) get a generated changeset: it makes the release a minor one
// and lists the icons in the changelog.
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { HOME_DIR, getAllIcons } from './helpers.mjs';

const newIcons = Object.entries(getAllIcons()).flatMap(([type, icons]) =>
  icons.filter((icon) => !icon.version).map((icon) => `${type}/${icon.name}`),
);

if (newIcons.length > 0) {
  const plural = newIcons.length > 1 ? 's' : '';

  writeFileSync(
    resolve(HOME_DIR, '.changeset/new-icons.md'),
    `---\n'@tabler/icons': minor\n---\n\n` +
      `${newIcons.length} new icon${plural}\n\n` +
      newIcons.map((icon) => `- \`${icon}\``).join('\n') +
      '\n',
  );

  console.log(`Added a changeset for ${newIcons.length} new icon${plural}`);
}
