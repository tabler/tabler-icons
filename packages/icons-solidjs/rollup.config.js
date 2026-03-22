import withSolid from 'rollup-preset-solid';

export default withSolid({
  input: 'src/tabler-icons-solidjs.ts',
  targets: ['esm', 'cjs'],
  printInstructions: false,
});
