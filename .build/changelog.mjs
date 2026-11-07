import cp from 'child_process';
import { getPackageJson, printChangelog } from './helpers.mjs';

// Release tags carry a `v` prefix (`v3.50.0`); accept either form from the env.
const p = getPackageJson(),
  version = process.env.LATEST_VERSION || p.version,
  tag = version.startsWith('v') ? version : `v${version}`;

cp.execFile('git', ['diff', tag, 'HEAD', '--name-status', './icons'], function (err, ret) {
  if (err) {
    console.error(`Cannot diff against ${tag}: ${err.message}`);
    process.exit(1);
  }

  const newIcons = [...ret.matchAll(/A\s+icons\/([a-z0-9-/]+)\.svg/g)].map((m) => m[1]);

  const modifiedIcons = [...ret.matchAll(/M\s+icons\/([a-z0-9-/]+)\.svg/g)]
    .map((m) => m[1])
    .filter((icon) => !newIcons.includes(icon));

  const renamedIcons = [
    ...ret.matchAll(/R[0-9]+\s+icons\/([a-z0-9-/]+)\.svg\s+icons\/([a-z0-9-/]+)\.svg/g),
  ].map((m) => [m[1], m[2]]);

  printChangelog(newIcons, modifiedIcons, renamedIcons, true);
});
