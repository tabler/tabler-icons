import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';

export const names = ['@tabler/icons-svelte', '@tabler/icons-svelte-runes'];
const require = createRequire(import.meta.url);

export async function fixture(t, legacy = false) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'tabler-svelte-'));
  t.after(async () => {
    if (!path.resolve(root).startsWith(path.join(os.tmpdir(), 'tabler-svelte-')))
      throw Error('Unsafe fixture cleanup');
    await fs.rm(root, { recursive: true, force: true });
  });
  async function write(file, content) {
    const target = path.join(root, file);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, content);
    return target;
  }
  await write(
    'package.json',
    JSON.stringify({
      type: 'module',
      dependencies: Object.fromEntries([
        ...names.map((n) => [n, '1.0.0']),
        ['svelte', legacy ? '4.2.20' : '5.57.1'],
      ]),
    }),
  );
  await fs.mkdir(path.join(root, 'node_modules'), { recursive: true });
  await fs.symlink(
    path.dirname(require.resolve(`${legacy ? 'svelte4' : 'svelte'}/package.json`)),
    path.join(root, 'node_modules/svelte'),
    'junction',
  );
  for (const name of names) {
    const dir = `node_modules/${name}`;
    await write(
      `${dir}/package.json`,
      JSON.stringify({
        name,
        version: '1.0.0',
        type: 'module',
        sideEffects: false,
        peerDependencies: { svelte: name.endsWith('runes') ? '^5.0.0' : '^4.0.0 || ^5.0.0' },
        exports: {
          '.': { svelte: './dist/index.js', default: './dist/index.js' },
          './icons/*': { svelte: './dist/icons/*.svelte', default: './dist/icons/*.svelte' },
        },
      }),
    );
    await write(
      `${dir}/dist/index.js`,
      "export * from './icons/index.js';\nexport * from './aliases.js';\nexport * as icons from './icons/index.js';\nexport const defaultAttributes = {};\n",
    );
    await write(
      `${dir}/dist/icons/index.js`,
      ['heart', 'number-123', 'unused']
        .map(
          (n, i) =>
            `export { default as ${['IconHeart', 'IconNumber123', 'IconUnused'][i]} } from './${n}.svelte';`,
        )
        .join('\n'),
    );
    await write(
      `${dir}/dist/aliases.js`,
      "export { default as Icon123 } from './icons/number-123.svelte';",
    );
    for (const icon of ['heart', 'number-123', 'unused']) {
      await write(
        `${dir}/dist/icons/${icon}.svelte`,
        `<script>${name.endsWith('runes') ? 'let {size = 24} = $props();' : 'export let size = 24;'}</script><svg width={size} data-icon="${icon}"><path d="M0 0h24v24z" /></svg>`,
      );
    }
  }
  const resolve = async (source) => {
    for (const name of names) {
      if (source === name) return { id: path.join(root, `node_modules/${name}/dist/index.js`) };
      if (source.startsWith(`${name}/icons/`))
        return {
          id: path.join(
            root,
            `node_modules/${name}/dist/icons/${source.slice(name.length + 7)}.svelte`,
          ),
        };
    }
    return null;
  };
  return { root, write, context: { resolve, addWatchFile() {} } };
}
