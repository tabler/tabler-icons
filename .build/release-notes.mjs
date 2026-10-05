// Prints the notes of the current release: the preview image of the new icons
// followed by the section of the @tabler/icons changelog for this version.
//
//   --ref <git ref>  ref the image is loaded from (default: the `v<version>` tag)
//   --image-only     print just the image
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { GITHUB_DIR, PACKAGES_DIR, getArgvs } from './helpers.mjs';

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
  const changelogPath = resolve(PACKAGES_DIR, 'icons/CHANGELOG.md');
  const changelog = existsSync(changelogPath) ? readFileSync(changelogPath, 'utf-8') : '';
  const [, section = ''] =
    changelog.match(
      new RegExp(`^## ${version.replace(/\./g, '\\.')}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'),
    ) || [];

  console.log(section.trim());
}
