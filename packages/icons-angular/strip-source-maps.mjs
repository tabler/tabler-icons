#!/usr/bin/env node

// ng-packagr always emits a source map for the FESM bundle. Like the other
// packages (see `.build/rollup-plugins.mjs`), Angular ships without it: the
// bundle is mostly generated icon data, and the map would be about 60% of the
// published package size.
import fs from 'fs';
import path from 'path';

const dir = 'dist/fesm2022';

for (const file of fs.readdirSync(dir)) {
  const filePath = path.join(dir, file);

  if (file.endsWith('.map')) {
    fs.rmSync(filePath);
  } else if (file.endsWith('.mjs')) {
    const code = fs.readFileSync(filePath, 'utf-8');

    fs.writeFileSync(filePath, code.replace(/\n\/\/# sourceMappingURL=.*\n?$/, '\n'));
  }
}
