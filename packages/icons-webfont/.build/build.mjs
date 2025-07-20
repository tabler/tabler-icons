import { execa } from 'execa';

const args = process.argv.slice(2)

await execa('pnpm', ['run', 'copy'], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:prepare'], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:outline', ...args], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:webfont'], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:css'], {
  stdout: process.stdout,
  stderr: process.stderr,
});
