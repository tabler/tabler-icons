import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { basename, dirname, extname, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import packageJson from './package.json';

describe('package exports', () => {
  it('exposes the Solid source entry as JSX', () => {
    const solidEntry = packageJson.exports['.'].solid;

    expect(extname(solidEntry)).toBe('.jsx');
    const packageDirectory = dirname(fileURLToPath(import.meta.url));
    expect(
      existsSync(resolve(packageDirectory, 'src', `${basename(solidEntry, '.jsx')}.tsx`)),
    ).toBe(true);
  });
});
