import withSolid from 'rollup-preset-solid';

const config = withSolid({
  // The .tsx extension makes the Solid source condition emit JSX for Vite to compile.
  input: 'src/tabler-icons-solidjs.tsx',
  targets: ['esm', 'cjs'],
  printInstructions: false,
});

// The preset always emits source maps; like the other packages, Solid ships
// without them (see `.build/rollup-plugins.mjs`). The package is `type: module`,
// so the CommonJS bundle needs the `.cjs` extension or Node parses it as ESM.
config.output = config.output.map((output) => ({
  ...output,
  sourcemap: false,
  ...(output.format === 'cjs'
    ? { entryFileNames: '[name].cjs', chunkFileNames: '[name]-[hash].cjs' }
    : {}),
}));

export default config;
