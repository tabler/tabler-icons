#!/usr/bin/env node

// Runs rsc.test.mjs against a sandboxed copy of the built @tabler/icons-react.
//
// The sandbox exists to control which React the package resolves. In the pnpm
// workspace, `node_modules/@tabler/icons-react` is a symlink, so Node resolves
// `react` from packages/icons-react/node_modules — which holds the React 18
// pinned in the catalog. React 18 has no usable react-server build; it throws
// "This entry point is not yet supported outside of experimental channels".
// RSC needs React 19.
//
// Copying the built package into .sandbox/node_modules/@tabler/icons-react
// makes it a real directory, so `react` resolves upward to this package's own
// React 19. It also means the test exercises the published artifact — package.json
// exports and dist output — rather than the source tree.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const pkgDir = path.resolve(root, '../../packages/icons-react');
const sandbox = path.join(root, '.sandbox');
const target = path.join(sandbox, 'node_modules', '@tabler', 'icons-react');

const dist = path.join(pkgDir, 'dist');
if (!fs.existsSync(dist)) {
  console.error(`@tabler/icons-react is not built (missing ${dist}).\nRun: pnpm --filter @tabler/icons-react build`);
  process.exit(1);
}

fs.rmSync(sandbox, { recursive: true, force: true });
fs.mkdirSync(target, { recursive: true });

// Only what resolution needs: the manifest and the build output.
fs.copyFileSync(path.join(pkgDir, 'package.json'), path.join(target, 'package.json'));
fs.cpSync(dist, path.join(target, 'dist'), { recursive: true });

// The test has to live inside the sandbox so that its own module resolution
// starts there and walks up into this package's node_modules.
fs.copyFileSync(path.join(root, 'rsc.test.mjs'), path.join(sandbox, 'rsc.test.mjs'));

let failed = false;
try {
  execFileSync(
    process.execPath,
    ['--conditions=react-server', '--test', 'rsc.test.mjs'],
    { cwd: sandbox, stdio: 'inherit' },
  );
} catch {
  failed = true;
}

fs.rmSync(sandbox, { recursive: true, force: true });
process.exit(failed ? 1 : 0);
