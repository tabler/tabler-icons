#!/usr/bin/env node

// Type-checks @tabler/icons-react's published declarations against every
// supported @types/react major.
//
// Why this exists: `IconNode` was defined as `keyof ReactSVG`, and `ReactSVG`
// was removed in @types/react 19. That shipped, because nothing ever type-checked
// the package against anything but the single pinned version in devDependencies.
//
// Each major is installed under an alias (@types/react-16 … @types/react-19) so
// no reinstall is needed between runs — the version is selected by rewriting
// `paths` and `typeRoots` in a generated tsconfig.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

// Drive the matrix off devDependencies so adding a major is a one-line change.
const aliases = Object.keys(pkg.devDependencies)
  .filter((name) => /^@types\/react-\d+$/.test(name))
  .sort((a, b) => Number(a.split('-').pop()) - Number(b.split('-').pop()));

if (aliases.length === 0) {
  console.error('No @types/react-<major> aliases found in devDependencies.');
  process.exit(1);
}

const generatedConfig = path.join(root, 'tsconfig.generated.json');
const failures = [];

for (const alias of aliases) {
  const typesDir = path.join(root, 'node_modules', alias);

  if (!fs.existsSync(typesDir)) {
    failures.push({ alias, version: '(not installed)', output: `Missing ${typesDir}. Run pnpm install.` });
    console.log(`✗ ${alias.padEnd(20)} not installed`);
    continue;
  }

  const { version } = JSON.parse(fs.readFileSync(path.join(typesDir, 'package.json'), 'utf8'));

  fs.writeFileSync(
    generatedConfig,
    JSON.stringify(
      {
        extends: './tsconfig.json',
        compilerOptions: {
          // Point every `react` type reference at the alias under test, and stop
          // TypeScript from auto-including the unaliased @types/react as well.
          paths: {
            react: [`./node_modules/${alias}`],
            'react/*': [`./node_modules/${alias}/*`],
          },
          typeRoots: [`./node_modules/${alias}/..`],
          types: [],
        },
      },
      null,
      2,
    ),
  );

  let output = '';
  let ok = true;
  try {
    execFileSync('npx', ['tsc', '-p', generatedConfig], { cwd: root, stdio: 'pipe' });
  } catch (error) {
    ok = false;
    output = `${error.stdout ?? ''}${error.stderr ?? ''}`.trim();
  }

  console.log(`${ok ? '✓' : '✗'} @types/react ${version}`);
  if (!ok) failures.push({ alias, version, output });
}

fs.rmSync(generatedConfig, { force: true });

if (failures.length > 0) {
  console.error(`\n${failures.length} of ${aliases.length} @types/react versions failed:\n`);
  for (const { alias, version, output } of failures) {
    console.error(`── ${alias} (${version}) ──`);
    console.error(output);
    console.error('');
  }
  process.exit(1);
}

console.log(`\nAll ${aliases.length} @types/react versions type-check cleanly.`);
