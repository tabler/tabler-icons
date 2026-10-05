import cp from 'child_process';
import { printChangelog } from './helpers.mjs';

cp.exec('git status', function (err, ret) {
  const newIcons = [...ret.matchAll(/new file:\s+icons\/([a-z0-9-/]+)\.svg/g)].map((m) => m[1]);

  const modifiedIcons = [...ret.matchAll(/modified:\s+icons\/([a-z0-9-/]+)\.svg/g)]
    .map((m) => m[1])
    .filter((icon) => !newIcons.includes(icon));

  const renamedIcons = [
    ...ret.matchAll(/renamed:\s+icons\/([a-z0-9-/]+).svg -> icons\/([a-z0-9-/]+).svg/g),
  ].map((m) => [m[1], m[2]]);

  printChangelog(newIcons, modifiedIcons, renamedIcons);
});
