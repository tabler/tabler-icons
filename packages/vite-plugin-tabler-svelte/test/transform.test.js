import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import tablerSvelte from '../index.js';
import { fixture, names } from './fixture.js';

test('rewrites exact installed exports, aliases and renamed bindings with source maps', async (t) => {
  const f = await fixture(t);
  for (const name of names) {
    const plugin = tablerSvelte();
    const code = `import { IconHeart as Heart, /* keep */ Icon123 } from '${name}';\nconsole.log(Heart, Icon123);`;
    const result = await plugin.transform.call(f.context, code, path.join(f.root, 'app.ts'));
    assert.match(result.code, new RegExp(`import Heart from "${name}/icons/heart"`));
    assert.match(
      result.code,
      /import Icon123 from "@tabler\/icons-svelte(?:-runes)?\/icons\/number-123"/,
    );
    assert.match(result.code, /\/\* keep \*\//);
    assert.ok(result.map.mappings);
    assert.equal(result.map.sourcesContent[0], code);
  }
});

test('rewrites Svelte instance/module TS scripts, never markup, comments or strings', async (t) => {
  const f = await fixture(t);
  const input = `<!-- import {IconHeart} from '@tabler/icons-svelte'; -->
<script context="module" lang="ts">import { Icon123 as Alias } from '@tabler/icons-svelte'; export const icon: typeof Alias = Alias;</script>
<script lang="ts">import { IconHeart } from '@tabler/icons-svelte-runes'; const text = "import { IconHeart } from '@tabler/icons-svelte'";</script>
<IconHeart/><p>{text}</p>`;
  const result = await tablerSvelte().transform.call(
    f.context,
    input,
    path.join(f.root, 'App.svelte'),
  );
  assert.match(result.code, /import Alias from "@tabler\/icons-svelte\/icons\/number-123"/);
  assert.match(result.code, /import IconHeart from "@tabler\/icons-svelte-runes\/icons\/heart"/);
  assert.ok(result.code.includes(input.split('\n')[0]));
  assert.match(result.code, /const text = "import \{ IconHeart \} from '@tabler\/icons-svelte'"/);
  assert.ok(result.map.mappings);
});

test('unsupported declarations remain byte-for-byte unchanged', async (t) => {
  const f = await fixture(t);
  const forms = [
    "import * as Icons from '@tabler/icons-svelte';",
    "import Default, { IconHeart } from '@tabler/icons-svelte';",
    "import { IconHeart, defaultAttributes } from '@tabler/icons-svelte';",
    "import { IconHeart, IconMissing } from '@tabler/icons-svelte';",
    "import type { IconHeart } from '@tabler/icons-svelte';",
    "import { IconHeart, type Icon } from '@tabler/icons-svelte';",
    "import {} from '@tabler/icons-svelte';",
    "import '@tabler/icons-svelte';",
    "import { IconHeart } from '@tabler/icons-svelte/icons';",
    "export { IconHeart } from '@tabler/icons-svelte';",
    "const x = import('@tabler/icons-svelte');",
    "const x = require('@tabler/icons-svelte');",
    "const x = `import { IconHeart } from '@tabler/icons-svelte'`;",
    "import { 'IconHeart' as Heart } from '@tabler/icons-svelte';",
    "import { IconHeart } from '@tabler/icons-svelte' with { type: 'json' };",
  ];
  for (const code of forms)
    assert.equal(
      await tablerSvelte().transform.call(f.context, code, path.join(f.root, 'app.ts')),
      null,
      code,
    );
  const code = "import { IconHeart } from '@tabler/icons-svelte';";
  for (const id of [
    'file.ts?raw',
    'file.ts?url',
    'file.css',
    '\0virtual.ts',
    'node_modules/lib/file.js',
  ]) {
    assert.equal(
      await tablerSvelte().transform.call(f.context, code, path.join(f.root, id)),
      null,
      id,
    );
  }
});

test('one unsupported declaration does not prevent another safe declaration', async (t) => {
  const f = await fixture(t);
  const unchanged = "import { icons } from '@tabler/icons-svelte';";
  const result = await tablerSvelte().transform.call(
    f.context,
    `${unchanged}\nimport { IconHeart } from '@tabler/icons-svelte';`,
    path.join(f.root, 'app.js'),
  );
  assert.ok(result.code.startsWith(unchanged));
  assert.match(result.code, /icons\/heart/);
});

test('unresolvable packages or subpaths fail closed; metadata cache invalidates', async (t) => {
  const f = await fixture(t);
  const plugin = tablerSvelte();
  const code = "import { Icon123 } from '@tabler/icons-svelte';";
  const id = path.join(f.root, 'app.js');
  assert.equal(
    await plugin.transform.call({ ...f.context, resolve: async () => null }, code, id),
    null,
  );
  assert.ok(await plugin.transform.call(f.context, code, id));
  await f.write('node_modules/@tabler/icons-svelte/dist/aliases.js', 'export {};');
  plugin.watchChange();
  assert.equal(await plugin.transform.call(f.context, code, id), null);
  const wrongSubpath = {
    ...f.context,
    resolve: async (s) =>
      s.includes('/icons/') ? { id: path.join(f.root, 'missing.svelte') } : f.context.resolve(s),
  };
  assert.equal(
    await plugin.transform.call(
      wrongSubpath,
      "import { IconHeart } from '@tabler/icons-svelte';",
      id,
    ),
    null,
  );
});

test('resolves cache-versioned metadata without loading the barrel through build hooks', async (t) => {
  const f = await fixture(t);
  const plugin = tablerSvelte();
  plugin.configResolved({
    plugins: [plugin],
    optimizeDeps: {},
    createResolver: () => async (source) => `${(await f.context.resolve(source)).id}?v=abc123`,
  });
  const result = await plugin.transform.call(
    {
      ...f.context,
      resolve() {
        throw new Error('Build resolution must not load metadata');
      },
    },
    "import { IconHeart as Heart } from '@tabler/icons-svelte';",
    path.join(f.root, 'app.js'),
  );
  assert.match(result.code, /import Heart from "@tabler\/icons-svelte\/icons\/heart"/);
});

test('requires safe scanner configuration and plugin ordering', () => {
  const p = tablerSvelte();
  assert.deepEqual(p.config().optimizeDeps.exclude, names);
  const config = { plugins: [p, { name: 'vite-plugin-svelte' }], optimizeDeps: {} };
  assert.doesNotThrow(() => p.configResolved(config));
  assert.throws(
    () => p.configResolved({ ...config, plugins: [...config.plugins].reverse() }),
    /before/,
  );
  for (const include of [names[0], `${names[1]}/icons/*`, `parent > ${names[0]}`]) {
    assert.throws(
      () => p.configResolved({ ...config, optimizeDeps: { include: [include] } }),
      /prebundling/,
    );
  }
});
