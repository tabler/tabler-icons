// Guards that @tabler/icons-react keeps rendering inside React Server Components.
//
// Run via run.mjs, which sandboxes the built package and passes
// `--conditions=react-server` — how bundlers resolve modules for the RSC graph.
// Under that condition React exposes a reduced API: `createContext` and
// `useContext` do not exist.
//
// Why this guard exists: lucide-react v1 added a context-based provider whose
// module called `createContext()` at import time. Every icon imported that
// module, so no icon could be used in an RSC environment at all
// (lucide-icons/lucide#4200). A `"use client"` directive did not save them,
// because bundlers drop directives when pre-bundling a dependency.
//
// Both published entries are checked. The package has no `exports` map, so Node
// resolves the bare specifier to `main` (CJS) while bundlers follow `module`
// (ESM) — and it is the bundler path that actually feeds the RSC graph. Testing
// only the bare specifier would leave the ESM bundle unguarded.

import assert from 'node:assert/strict';
import test from 'node:test';

// React reads NODE_ENV when it initialises; production keeps the Flight payload
// free of debug rows so it can be parsed. This has to happen before React is
// loaded, which is why everything below is a dynamic import.
process.env.NODE_ENV = 'production';

const React = await import('react');
const { renderToReadableStream } = await import('react-server-dom-webpack/server.edge');

const ENTRIES = {
  'bare specifier (CJS via "main")': '@tabler/icons-react',
  'ESM bundle (what bundlers load)': '@tabler/icons-react/dist/esm/tabler-icons-react.mjs',
};

/** Render through the real RSC renderer and return the root element's props. */
async function renderInRSC(element) {
  const payload = await new Response(renderToReadableStream(element, {})).text();
  const root = payload.split('\n').find((line) => line.startsWith('0:'));
  assert.ok(root, `no root row in Flight payload:\n${payload}`);

  // A host element serialises as ["$", tag, key, props].
  const [marker, tag, , props] = JSON.parse(root.slice(2));
  assert.equal(marker, '$');
  assert.equal(tag, 'svg');
  return props;
}

/** ICONS_LIMIT changes which icons are generated, so pick whatever is there. */
function anyIcon(icons) {
  const name = Object.keys(icons)
    .filter((key) => /^Icon[A-Z]/.test(key))
    .sort()[0];
  assert.ok(name, 'the package exported no Icon* components');
  return [name, icons[name]];
}

test('the react-server build of React really is missing client-only APIs', () => {
  // If this ever starts failing, React changed and the rest of this file's
  // reasoning needs revisiting — that is worth knowing loudly.
  assert.equal(typeof React.createContext, 'undefined');
  assert.equal(typeof React.useContext, 'undefined');

  // These are available, and the icon runtime is allowed to use them.
  assert.equal(typeof React.forwardRef, 'function');
  assert.equal(typeof React.createElement, 'function');
  assert.equal(typeof React.useId, 'function');
});

for (const [label, specifier] of Object.entries(ENTRIES)) {
  test(`${label}: imports under the react-server condition`, async () => {
    // The lucide failure mode: importing the entry throws before anything renders.
    const icons = await import(specifier);
    assert.equal(typeof icons.createReactComponent, 'function');
    assert.ok(anyIcon(icons)[1], 'icon export is not usable');
  });

  test(`${label}: an icon renders in a Server Component with default attributes`, async () => {
    const icons = await import(specifier);
    const [name, Icon] = anyIcon(icons);
    const props = await renderInRSC(React.createElement(Icon));

    assert.equal(props.width, 24, `${name} rendered with an unexpected width`);
    assert.equal(props.height, 24);
    assert.match(props.className, /(^|\s)tabler-icon(\s|$)/);
  });

  test(`${label}: an icon renders in a Server Component with props applied`, async () => {
    const icons = await import(specifier);
    const [, Icon] = anyIcon(icons);
    const props = await renderInRSC(
      React.createElement(Icon, { size: 48, color: 'red', className: 'ui-icon' }),
    );

    assert.equal(props.width, 48);
    assert.equal(props.height, 48);
    assert.match(props.className, /(^|\s)ui-icon(\s|$)/);
  });
}
