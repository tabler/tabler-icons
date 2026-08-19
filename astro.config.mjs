import path from 'node:path';
import { defineConfig } from 'astro/config';

const root = process.cwd();
const iconsDir = path.join(root, 'icons');

// The icon loaders read `icons/` straight from disk, so Vite has no import
// edge to follow and would keep serving a stale module after an icon changes.
// Watch the directory ourselves and drop the loaders from the SSR graph.
const dataModules = [
  path.join(root, 'src', 'data', 'icons.js'),
  path.join(root, 'src', 'data', 'grouped-icons.js'),
];

function watchIcons() {
  return {
    name: 'tabler:watch-icons',
    apply: 'serve',
    configureServer(server) {
      server.watcher.add(iconsDir);

      const graphs = [server.environments?.ssr?.moduleGraph, server.moduleGraph].filter(Boolean);

      const reload = (file) => {
        if (!file.startsWith(iconsDir + path.sep) || !file.endsWith('.svg')) return;

        for (const graph of graphs) {
          for (const id of dataModules) {
            const mod = graph.getModuleById(id);
            if (mod) graph.invalidateModule(mod);
          }
        }

        (server.hot ?? server.ws).send({ type: 'full-reload' });
      };

      server.watcher.on('add', reload);
      server.watcher.on('change', reload);
      server.watcher.on('unlink', reload);
    },
  };
}

// Internal preview site for browsing the icon set. Output stays in `_site`
// so the existing `pnpm run preview` link in the release chain keeps working.
export default defineConfig({
  outDir: './_site',
  build: {
    assets: '_assets',
    // Keep the stylesheet as its own file instead of inlining it into every page.
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [watchIcons()],
  },
});
