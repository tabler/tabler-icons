import cp from 'child_process';
import { getPackageJson, printChangelog } from './helpers.mjs';

const p = getPackageJson(),
  version = process.env.LATEST_VERSION || `${p.version}`;

if (version) {
  cp.exec(`git diff ${version} HEAD --name-status ./icons`, function (err, ret) {
    const newIcons = [...ret.matchAll(/A\s+icons\/([a-z0-9-/]+)\.svg/g)].map((m) => m[1]);

    const modifiedIcons = [...ret.matchAll(/M\s+icons\/([a-z0-9-/]+)\.svg/g)]
      .map((m) => m[1])
      .filter((icon) => !newIcons.includes(icon));

    const renamedIcons = [
      ...ret.matchAll(/R[0-9]+\s+icons\/([a-z0-9-/]+)\.svg\s+icons\/([a-z0-9-/]+).svg/g),
    ].map((m) => [m[1], m[2]]);

    printChangelog(newIcons, modifiedIcons, renamedIcons, true);
  });
}
