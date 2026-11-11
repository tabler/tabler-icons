---
name: generate-changeset
description: >-
  Creates a Tabler Icons changeset file in `.changeset/` from the current code
  changes. Use this skill for every changeset in this repo — when the user asks
  for a changeset, version bump, release note, or changelog entry, and also on
  your own whenever a change under `packages/` or to an existing icon in
  `icons/` is about to be committed or opened as a PR. Never hand-write the
  file instead.
metadata:
  internal: true
---

# Generate changeset

Create one `.changeset/<name>.md` file per logical change. Ground package selection and bump level in **actual git output**—not guesses.

## 1. Inspect the change

From the repository root, determine scope:

- **Uncommitted work:** `git status -sb`, `git diff`, `git diff --cached`
- **Branch work (base: `main`):** `git diff origin/main...HEAD --stat`, then targeted `git diff origin/main...HEAD -- <paths>`

If the user points at specific files or a feature, read those diffs first.

## 2. Map paths to packages

| Path | Package |
|------|---------|
| `packages/icons-<name>/` | `@tabler/icons-<name>` (`icons-react`, `icons-vue`, `icons-webfont`, …) |
| `packages/icons/` | `@tabler/icons` |
| `icons/outline/`, `icons/filled/` — an **existing** icon redrawn, fixed, renamed or retagged | `@tabler/icons` |
| `icons/outline/`, `icons/filled/` — a **new** icon (no `version` in its frontmatter) | **No changeset** — `.build/release-changeset.mjs` generates `new-icons.md` when the release is prepared |
| `aliases.json` | `@tabler/icons` |
| `.build/` | The packages whose published output changes; none if the output is identical |
| Root tooling (`.github/`, `turbo.json`, `src/`, `docs/`, lockfile only) | **No changeset** unless it changes what a published package contains |

Include **every affected package** in the frontmatter. Omit packages with no relevant changes.

All `@tabler/icons*` packages are a `fixed` group: they are always released with the same version. Still list only the packages the change touches — the entry is printed in the changelog of each listed package, and it must be true there.

## 3. Choose bump level (per package)

| Level | When |
|-------|------|
| **patch** | Bug fixes, redrawn or retagged icons, build and packaging fixes, dependency updates, type fixes |
| **minor** | New capabilities a user can opt into: a new entry point or export, a new prop or option, a new package |
| **major** | Breaking changes. Do not write one — changes to the packages must be additive. If the honest bump is `major`, stop and ask the user |

When unsure between patch and minor: prefer **patch** for fixes; prefer **minor** for new user-facing capabilities.

## 4. Write the description

A changeset is one line in a changelog. It is not a summary of the work.

- **One sentence, 130 characters or fewer**, including backticks. This is the limit to write to.
- **160 characters is a hard ceiling.** Go over 130 only when a shorter version would drop a fact the reader needs — a list of affected packages or icons, for example. Never go over 160.
- Start with: `Added`, `Updated`, `Fixed`, or `Removed`
- Say **what** changed and **where** (package, icon, export, file). Then stop.
- **Name at least one concrete thing**: a package, icon, component, prop, export, import path, `package.json` field, Sass variable, or dependency. "Fixed webfont issues" and "Improved tree-shaking" name nothing — a reader cannot tell whether the change affects them. There is no minimum length, but an entry under ~40 characters that names nothing is almost always too vague; a dependency bump like ``Updated `sharp` to v0.34.`` is fine at 25, because the dependency and version are the content.
- Use **backticks** for code tokens:
  - Icons: `arrow-up`, `brand-instagram`
  - Components: `IconHome`, `IconSquareRoundedCheckFilled`
  - Packages and import paths: `@tabler/icons-react`, `@tabler/icons-svelte/icons/*`
  - Props and attributes: `strokeWidth`, `stroke-width`, `title`
  - Fields and files: `exports`, `sideEffects`, `package.json`, `.d.cts`
  - Sass variables and values: `$ti-font-split`, `false`, `1em`

The changelog generator (`@changesets/changelog-github`) adds the PR link and the commit hash on its own. Do not write them, and do not count them.

**Count the characters before writing the file:**

```shell
printf '%s' 'Fixed filled `home` webfont glyph having zero width in Chrome.' | wc -m
```

If it is over the limit, **cut words**. Never split it into two sentences, a second paragraph, or a bullet list.

### Leave this out

These belong in the PR description or the commit body, not in the changeset:

- Why the change was made, or what was broken before
- How it was built: file paths, build script internals, refactor steps
- Usage examples and import snippets
- Measurements (kB saved, speed-ups), unless the number is the change
- A list of every affected icon, package, or file
- Migration notes and "existing imports keep working" reassurances

**Cut the tail first.** An over-long entry in this repo is almost always a good sentence with a trailing justification clause glued on. Delete that clause and the length problem is usually solved:

```text
… so that browsers take the line metrics from Tabler Icons and not from the system fallback font.
… which speeds up dev servers and tests.
… , so font files no longer change between builds of the same icons.
```

### Examples

Good — short and specific:

```text
(75) Added `@tabler/icons-svelte/icons/*` per-icon imports and an `exports` map.
(62) Fixed filled `home` webfont glyph having zero width in Chrome.
(69) Removed source maps from the published `@tabler/icons-react` package.
(51) Added `squircle` tag to all `square-rounded` icons.
```

Too vague — name the thing that changed:

```text
(21) ❌ Fixed webfont issues.
(98) ✅ Fixed `sass` and `style` fields in the `@tabler/icons-webfont` `package.json` to point to `dist/`.
(22) ❌ Improved tree-shaking.
(85) ✅ Added `/* @__PURE__ */` annotations to icon components so bundlers drop unused icons.
```

Too long — trim it:

```text
(515) ❌ Improve tree-shaking and add per-icon imports. Icon components are now marked `/* @__PURE__ */`, so unused icons are dropped even when a bundler cannot rely on `sideEffects` (…). The package also gets an `exports` map with a typed per-icon subpath: … Existing `@tabler/icons-react/dist/*` deep imports keep working.
(111) ✅ Added `/* @__PURE__ */` annotations, an `exports` map and typed `@tabler/icons-react/icons/*` per-icon imports.
```

Over 130 but justified — the list of packages is the content, and cutting it would say nothing:

```text
(134) Fixed `types` entries in the `package.json` of `@tabler/icons-react`, `icons-preact`, `icons-solidjs`, `icons-vue` and `icons-svelte`.
```

Write in **simple English**, even if the user asked in another language.

### Language (simple English)

- Short sentences. Common words. One idea per sentence when possible.
- No buzzwords or filler. Use technical terms only when they appear in the code or are needed to name a behavior.
- Prefer plain phrasing: “Fixed `square-dashed` icon drawn as a solid square” over “Resolved rendering inconsistencies in dashed glyph geometry”.
- Keep the description easy to scan in a changelog—reviewers and users should understand it without reading the diff.

## 5. Pick the filename

- Location: `.changeset/`
- **Kebab-case**, descriptive: `icons-svelte-entry-points.md`, `fix-webfont-home-glyph.md`
- One logical change per file; split unrelated changes into separate changesets
- Never use `new-icons.md` — the release script writes that file
- Do not overwrite an existing changeset unless the user asks to update it

## 6. File format

```md
---
"@tabler/icons-svelte": minor
"@tabler/icons-svelte-runes": minor
---

One-sentence description here.
```

Rules:

- Frontmatter uses quoted package names: `"@tabler/icons-react": patch`
- Blank line after closing `---`
- No title heading, no bullet list in the body
- Body is a single line — no second paragraph
- Bump values: `patch` or `minor`

## 7. Validate before writing

- [ ] Every listed package has touched paths in the diff
- [ ] No changeset was written for new icons only
- [ ] Description is one sentence with action verb, in simple English
- [ ] Description is **130 characters or fewer** — counted, not estimated; over 130 only with a reason, never over 160
- [ ] Description names a concrete package, icon, component, prop, export, file, or dependency
- [ ] Code tokens use backticks
- [ ] Filename is kebab-case and not already used for a different change

## 8. Output to the user

After creating the file:

1. Show the full changeset content in a fenced `markdown` block (for easy copy/review)
2. Give the description length, e.g. `112 / 130 characters`; if it is over 130, say why the extra words earn their place
3. Briefly explain **why** each package and bump level was chosen
4. If no changeset is needed (new icons only, CI, website, lockfile-only, etc.), say so and why

Do **not** run `changeset version` or `changeset publish` unless the user explicitly asks.
