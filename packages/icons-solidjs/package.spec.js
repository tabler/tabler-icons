import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { basename, dirname, extname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const packageDirectory = import.meta.url.startsWith('file:')
  ? dirname(fileURLToPath(import.meta.url))
  : process.cwd();
const packageJson = JSON.parse(readFileSync(resolve(packageDirectory, 'package.json'), 'utf8'));

describe('package exports', () => {
  it('exposes the Solid source entry as JSX', () => {
    const solidEntry = packageJson.exports['.'].solid;

    expect(extname(solidEntry)).toBe('.jsx');
    expect(
      existsSync(resolve(packageDirectory, 'src', `${basename(solidEntry, '.jsx')}.tsx`)),
    ).toBe(true);
  });
});
