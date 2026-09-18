import withSolid from 'rollup-preset-solid';

export default withSolid({
  // The .tsx extension makes the Solid source condition emit JSX for Vite to compile.
  input: 'src/tabler-icons-solidjs.tsx',
  targets: ['esm', 'cjs'],
  printInstructions: false,
});
