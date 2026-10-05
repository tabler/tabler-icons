// Runs after `changeset version` (see the `version-packages` script) on the
// "Version Packages" branch: brings everything outside of the workspace
// packages to the version Changesets picked and generates the preview image
// of the icons released in it.
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { HOME_DIR, PACKAGES_DIR, getIconsReleasedIn } from './helpers.mjs';

const { version } = JSON.parse(readFileSync(resolve(PACKAGES_DIR, 'icons/package.json'), 'utf-8'));

console.log(`Preparing release ${version}`);

// The root package.json is not a workspace package, Changesets leaves it alone
const rootPackagePath = resolve(HOME_DIR, 'package.json');
const rootPackage = JSON.parse(readFileSync(rootPackagePath, 'utf-8'));
rootPackage.version = version;
writeFileSync(rootPackagePath, `${JSON.stringify(rootPackage, null, 2)}\n`);

const run = (script) =>
  execSync(`pnpm run ${script}`, {
    cwd: HOME_DIR,
    stdio: 'inherit',
    env: { ...process.env, NEW_VERSION: version },
  });

// Same steps as the `build` script, minus building the packages: icons added
// since the last release get their `unicode` and `version` here
run('validate');
run('update');
run('validate --hard');
run('optimize');
run('changelog-image');
run('update-readme');

// List the new icons in the changelog of @tabler/icons, right below the
// heading Changesets wrote for this version
const newIcons = getIconsReleasedIn(version);
const changelogPath = resolve(PACKAGES_DIR, 'icons/CHANGELOG.md');

if (newIcons.length > 0 && existsSync(changelogPath)) {
  const changelog = readFileSync(changelogPath, 'utf-8');
  const plural = newIcons.length > 1 ? 's' : '';
  const section =
    `### ${newIcons.length} new icon${plural}\n\n` +
    newIcons.map((icon) => `- \`${icon.type}/${icon.name}\``).join('\n');

  if (!changelog.includes(section)) {
    writeFileSync(
      changelogPath,
      changelog.replace(`## ${version}\n`, (heading) => `${heading}\n${section}\n`),
    );
  }
}
