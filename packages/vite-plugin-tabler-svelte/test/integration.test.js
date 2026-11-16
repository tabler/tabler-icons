import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import { compile as compile5 } from 'svelte/compiler';
import { compile as compile4 } from 'svelte4/compiler';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tablerSvelte from '../index.js';
import { fixture, names } from './fixture.js';

// A small compiler adapter isolates the Vite 5–8 hook/scanner contract from
// framework-plugin peer ranges. Vite 8 additionally runs the official plugin.
function compiler(legacy) {
  return {
    name: 'vite-plugin-svelte:test-compiler',
    enforce: 'pre',
    transform(code, id, options) {
      if (!id.endsWith('.svelte')) return;
      const result = (legacy ? compile4 : compile5)(code, {
        filename: id,
        generate: options?.ssr ? (legacy ? 'ssr' : 'server') : legacy ? 'dom' : 'client',
        ...(legacy ? { hydratable: true } : {}),
      });
      return { code: result.js.code, map: result.js.map };
    },
  };
}

for (const version of ['vite5', 'vite6', 'vite7', 'vite']) {
  for (const legacy of [true, false]) {
    test(`${version}: ${legacy ? 'Svelte 4' : 'Svelte 5 runes'} scan, dev, build, SSR and hydration`, async (t) => {
      const vite = await import(version);
      const f = await fixture(t, legacy);
      const name = names[legacy ? 0 : 1];
      const rootImports = `import { IconHeart as Heart, Icon123 as Numeric } from '${name}';`;
      const directImports = `import Heart from "${name}/icons/heart";\nimport Numeric from "${name}/icons/number-123";`;
      const app = (imports) =>
        `<script>${imports} let size = ${legacy ? '24' : '$state(24)'};</script><Heart {size}/><Numeric {size}/><button ${legacy ? 'on:click' : 'onclick'}={() => size = 48}>Resize</button>`;
      await f.write('App.svelte', app(rootImports));
      await f.write(
        'index.html',
        '<div id="app"></div><script type="module" src="/main.js"></script>',
      );
      await f.write(
        'main.js',
        legacy
          ? "import App from './App.svelte'; new App({ target: document.getElementById('app'), hydrate: true });"
          : "import { hydrate } from 'svelte'; import App from './App.svelte'; hydrate(App, {target: document.getElementById('app')});",
      );
      await f.write(
        'ssr.js',
        legacy
          ? "import App from './App.svelte'; export const renderApp = () => App.render().html;"
          : "import {render} from 'svelte/server'; import App from './App.svelte'; export const renderApp = () => render(App).body;",
      );
      const loaded = new Set();
      function config(enabled) {
        return {
          root: f.root,
          configFile: false,
          logLevel: 'silent',
          resolve: { conditions: ['svelte', 'browser', 'module', 'development|production'] },
          plugins: [
            ...(enabled ? [tablerSvelte()] : []),
            version === 'vite' && !legacy ? svelte({ configFile: false }) : compiler(legacy),
            {
              name: 'record-modules',
              load(id) {
                loaded.add(id.split('?')[0].replaceAll('\\', '/'));
              },
            },
          ],
          optimizeDeps: { exclude: ['unrelated-dependency'] },
          server: {
            // Explicit requests below avoid racing speculative work during close().
            preTransformRequests: false,
            host: '127.0.0.1',
            port: 0,
            fs: { allow: [f.root, path.resolve('node_modules')] },
          },
          ssr: { noExternal: [name] },
          build: { write: false, minify: false },
        };
      }
      const resolved = await vite.resolveConfig(config(true), 'serve');
      assert.ok(resolved.optimizeDeps.exclude.includes('unrelated-dependency'));
      const metadata = await vite.optimizeDeps(resolved, true);
      assert.ok(
        !Object.keys(metadata.optimized).some((key) => names.some((n) => key.startsWith(n))),
        'scanner must not prebundle either barrel or subpaths',
      );
      const server = await vite.createServer(config(true));
      let html;
      try {
        await server.listen();
        const response = await fetch(`${server.resolvedUrls.local[0]}App.svelte`);
        assert.equal(response.status, 200);
        const transformed = await response.text();
        assert.match(transformed, /icons\/heart\.svelte/);
        assert.match(transformed, /icons\/number-123\.svelte/);
        const { renderApp } = await server.ssrLoadModule('/ssr.js');
        html = renderApp();
        assert.equal((html.match(/<svg\b/g) || []).length, 2);
        assert.ok(
          ![...loaded].some((id) => id.endsWith('/dist/index.js') || id.endsWith('/unused.svelte')),
          'dev and SSR must not load the barrel/unused icon',
        );
      } finally {
        await server.close();
      }
      loaded.clear();
      const optimized = await vite.build(config(true));
      const output = Array.isArray(optimized) ? optimized[0].output : optimized.output;
      const js = output.find((o) => o.type === 'chunk').code;
      assert.ok(
        ![...loaded].some((id) => id.endsWith('/dist/index.js') || id.endsWith('/unused.svelte')),
        'production must not load the barrel/unused icon',
      );
      assert.equal([...loaded].filter((id) => /\/dist\/icons\/[^/]+\.svelte$/.test(id)).length, 2);

      const dom = new JSDOM(`<div id="app">${html}</div>`, {
        runScripts: 'outside-only',
        pretendToBeVisual: true,
        url: 'http://localhost/',
      });
      try {
        const before = dom.window.document.querySelector('svg');
        dom.window.eval(js);
        await new Promise((resolve) => setTimeout(resolve, 20));
        assert.equal(dom.window.document.querySelector('svg'), before, 'hydration reuses SSR SVG');
        assert.equal(dom.window.document.querySelectorAll('svg').length, 2);
        dom.window.document.querySelector('button').click();
        await new Promise((resolve) => setTimeout(resolve, 20));
        assert.ok(
          [...dom.window.document.querySelectorAll('svg')].every(
            (svg) => svg.getAttribute('width') === '48',
          ),
        );
      } finally {
        dom.window.close();
      }
      await f.write('App.svelte', app(directImports));
      const direct = await vite.build(config(false));
      const directOutput = Array.isArray(direct) ? direct[0].output : direct.output;
      assert.equal(
        js,
        directOutput.find((o) => o.type === 'chunk').code,
        'rewrite must emit the same bundle as handwritten direct imports',
      );
    });
  }
}
