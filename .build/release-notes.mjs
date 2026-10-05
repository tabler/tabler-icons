// Prints the notes of the current release, published as a single GitHub
// release for all packages: the preview image of the new icons followed by the
// changes from the changelogs of every package for this version. An entry
// shared by several packages is listed once, "Updated dependencies" entries are
// left out.
//
//   --ref <git ref>  ref the image is loaded from (default: the `v<version>` tag)
//   --image-only     print just the image
import { existsSync, readFileSync } from 'fs';
import { globSync } from 'glob';
import { dirname, resolve } from 'path';
import { GITHUB_DIR, PACKAGES_DIR, getArgvs } from './helpers.mjs';

const MAIN_PACKAGE = '@tabler/icons';
const CHANGE_TYPES = ['Major', 'Minor', 'Patch'];

const { version } = JSON.parse(readFileSync(resolve(PACKAGES_DIR, 'icons/package.json'), 'utf-8'));
const argvs = getArgvs();
const repo = process.env.GITHUB_REPOSITORY || 'tabler/tabler-icons';
const ref = argvs.ref || `v${version}`;

const image = `tabler-icons-${version}@2x.png`;

if (existsSync(resolve(GITHUB_DIR, image))) {
  console.log(
    `<img width="584" src="https://raw.githubusercontent.com/${repo}/${ref}/.github/${image}" />\n`,
  );
}

if (!argvs['image-only']) {
  const escapedVersion = version.replace(/\./g, '\\.');

  // { [type]: Map<entry, packages[]> } in the order the entries first appear,
  // starting with the main package
  const changes = Object.fromEntries(CHANGE_TYPES.map((type) => [type, new Map()]));

  const packages = globSync(resolve(PACKAGES_DIR, '*/CHANGELOG.md'))
    .map((changelogPath) => ({
      name: JSON.parse(readFileSync(resolve(dirname(changelogPath), 'package.json'), 'utf-8')).name,
      changelog: readFileSync(changelogPath, 'utf-8'),
    }))
    .sort((a, b) => (a.name === MAIN_PACKAGE ? -1 : b.name === MAIN_PACKAGE ? 1 : 0));

  packages.forEach(({ name, changelog }) => {
    const [, section = ''] =
      changelog.match(
        new RegExp(`^## ${escapedVersion}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'),
      ) || [];

    CHANGE_TYPES.forEach((type) => {
      const [, list = ''] =
        section.match(
          new RegExp(`^### ${type} Changes\\n([\\s\\S]*?)(?=^### |(?![\\s\\S]))`, 'm'),
        ) || [];

      // Top-level list items, together with their indented continuation lines
      list
        .split(/^(?=- )/m)
        .map((entry) => entry.trim())
        .filter((entry) => entry.startsWith('- ') && !entry.startsWith('- Updated dependencies'))
        .forEach((entry) => {
          changes[type].set(entry, [...(changes[type].get(entry) || []), name]);
        });
    });
  });

  CHANGE_TYPES.forEach((type) => {
    if (changes[type].size === 0) {
      return;
    }

    console.log(`### ${type} Changes\n`);

    changes[type].forEach((names, entry) => {
      // Entries of the main package (icons) need no label
      const label = names.includes(MAIN_PACKAGE)
        ? ''
        : `${[...names]
            .sort()
            .map((name) => `\`${name}\``)
            .join(', ')}: `;

      console.log(entry.replace(/^- /, `- ${label}`));
    });

    console.log('');
  });
}
