# Changesets

Every pull request that should end up in a release adds a changeset:

```bash
pnpm changeset
```

All `@tabler/icons*` packages are released together with the same version (a
`fixed` group). Pick the packages the change affects, usually as a `patch`.

New icons do not need a changeset: icons that do not have a `version` in their
frontmatter yet are listed in a changeset generated when the release is
prepared (`.build/release-changeset.mjs`). Any new icon therefore opens the
release pull request on its own and makes it a minor release.

On every push to `main` the Release workflow opens (or updates) a "Version
Packages" pull request. Its description starts with a preview image of the icons
that will be released, i.e. icons that do not have a `version` in their
frontmatter yet. Merging that pull request publishes the packages to npm and
creates the `vX.Y.Z` GitHub release.

See https://changesets.dev for the full documentation.
