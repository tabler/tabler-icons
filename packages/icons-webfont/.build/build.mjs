import { execa } from 'execa';

const args = process.argv.slice(2).map((arg) => `"${arg}"`)

await execa('pnpm', ['run', 'copy'], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:prepare', ...args], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:outline', ...args], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:webfont', ...args], {
  stdout: process.stdout,
  stderr: process.stderr,
});
await execa('pnpm', ['run', 'build:css', ...args], {
  stdout: process.stdout,
  stderr: process.stderr,
});
