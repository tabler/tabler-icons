# Security Policy

## Supported versions

Security fixes are released only for the latest major version of the `@tabler/icons*` packages.

| Version | Supported |
| ------- | --------- |
| 3.x     | ✅        |
| < 3.0   | ❌        |

Fixes are shipped in a regular release, so please make sure you are on the latest 3.x version before reporting.

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions or pull requests.**

Use GitHub's private vulnerability reporting instead:

1. Go to the [Security tab](https://github.com/tabler/tabler-icons/security) of this repository.
2. Click **Report a vulnerability**.
3. Fill in the form with as much detail as you can.

A good report includes:

- the affected package(s) and version(s),
- a description of the issue and its impact,
- steps to reproduce or a minimal proof of concept,
- a suggested fix, if you have one.

## Scope

In scope:

- malicious or unsafe content in distributed SVG, font, sprite or other icon files (scripts, event handlers, external references),
- XSS or injection in the framework packages (React, Vue, Svelte, Angular, Astro, Preact, SolidJS, React Native), e.g. through props passed to the DOM,
- supply chain integrity: a compromised package on npm, a mismatch between a tagged release and the published artifact, vulnerabilities in this repository's GitHub Actions workflows,
- vulnerabilities in build scripts that affect the published artifacts.

Out of scope:

- vulnerabilities in development dependencies that are not part of the published packages (these are handled by Dependabot),
- the tabler.io website and other Tabler projects – please report those in their own repositories,
- issues caused by an application rendering untrusted SVG or HTML on its own,
- reports from automated scanners without a demonstrated impact.

## What to expect

- We will acknowledge your report within **5 business days**.
- We will give you an initial assessment within **10 business days**.
- We will keep you informed while we work on a fix and coordinate the disclosure date with you.
- Once the fix is released, we will publish a security advisory and credit you, unless you prefer to stay anonymous.

Tabler Icons is an open source project maintained by a small team and does not run a bug bounty program.
