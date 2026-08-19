import withSolid from 'rollup-preset-solid';

const config = withSolid({
  input: 'src/tabler-icons-solidjs.tsx',
  targets: ['esm', 'cjs'],
  printInstructions: false,
});

// rollup-preset-solid@3 rewrites local imports in .tsx to .jsx, but helper
// modules here are plain .ts files (defaultAttributes, types).
config.plugins = config.plugins.filter(
  (plugin) => plugin.name !== 'fix-import-extensions',
);

export default config;
