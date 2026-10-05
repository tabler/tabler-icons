import {
  generateIconsPreview,
  getIconsReleasedIn,
  getPackageJson,
  GITHUB_DIR,
} from './helpers.mjs';
import path from 'path';

const p = getPackageJson();

const version = process.env.NEW_VERSION || `${p.version}`;

if (version) {
  const newIcons = getIconsReleasedIn(version);

  newIcons.forEach((icon) => {
    console.log(
      `Add icon "${icon.type}/${icon.name}" vith version "${icon.version}" to new icons list`,
    );
  });

  if (newIcons.length > 0) {
    await generateIconsPreview(
      newIcons.map((icon) => icon.path),
      path.join(GITHUB_DIR, `tabler-icons-${version}.svg`),
      {
        columnsCount: 6,
        paddingOuter: 24,
      },
    );
  }
}
