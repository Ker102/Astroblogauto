<!-- Copied guidance tailored for AI coding agents working on this repo. -->
# Copilot instructions for Astroblogauto

This file gives concise, repository-specific guidance so AI coding agents can be productive immediately.

## Big picture
- This is an Astro blog site (Astro v5) that sources content from local `src/content/blog/` (Markdown/MDX).
- Content can be published from Notion via `scripts/publish.js` (converts Notion pages to Markdown and commits to `src/content/blog/`).
- The site is built and deployed to GitHub Pages; check `.github/workflows/deploy.yml` and `.github/workflows/publish-from-notion.yml` for CI flow.

## Key files & locations (quick references)
- `package.json` — scripts: `dev`, `build`, `preview`, and `check:notion`.
- `astro.config.mjs` — `site` and `base` are configured (base: `/Astroblogauto`). Use these when constructing URLs.
- `scripts/publish.js` — Notion -> Markdown publishing flow. See functions: `queryReadyPages`, `convertPageToMarkdown`, `publishPost`.
- `scripts/check-notion.mjs` (and `check-notion.cjs`) — helper to inspect Notion database properties.
- `src/content/blog/` — target directory where new posts are written. New files use frontmatter as produced by `getFrontmatter()` in `publish.js`.
- `src/layouts/BlogPost.astro` — how posts are rendered; check frontmatter keys it expects.

## Environment variables and secrets
The publishing workflow and scripts require these env vars (exact names used in code):
- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`
- `GITHUB_TOKEN` (CI provides this; scripts also expect `GITHUB_REPOSITORY` for owner/repo parsing)
- Optional overrides used by `publish.js`:
  - `PUBLISH_BRANCH` (default `main`)
  - `NOTION_STATUS_PROPERTY_ID` or `NOTION_STATUS_PROPERTY_NAME`
  - `NOTION_TITLE_PROPERTY_NAME`, `NOTION_DESCRIPTION_PROPERTY_NAME`, `NOTION_DATE_PROPERTY_NAME`, `NOTION_TAGS_PROPERTY_NAME`

When modifying workflows or running scripts locally, ensure these are set (or run `node scripts/check-notion.mjs` to inspect DB properties first).

## Conventions & patterns the agent should respect
- Posts are written with YAML frontmatter fields produced by `getFrontmatter()` in `scripts/publish.js`: `title`, `description` (Preview Text), `pubDate`, `updatedDate`, `tags`.
- Slugs: `publish.js` uses a `slugify()` that lowercases, removes non-alphanumerics, and replaces whitespace with `-`. Keep this behavior when adding routes or filename transforms.
- Notion Status property may be either a `select` or `status` type; code checks and adapts. Use `scripts/check-notion.mjs` to discover property ids/names.
- Blog source directory is `src/content/blog/`. Any content-generator or migration should write to that path and commit via the repository API or local git.
- The repo integrates `@astrojs/mdx`, `@astrojs/react`, `@astrojs/rss`, and `@astrojs/sitemap` — be mindful of MDX vs .md handling.

## Developer workflows (how to run things)
- Local dev server: `npm install` then `npm run dev` (runs `astro dev`).
- Build: `npm run build` then `npm run preview` to check the production build.
- Check Notion DB (locally): `node scripts/check-notion.mjs` (requires `NOTION_API_KEY` and `NOTION_DATABASE_ID`).
- Publish from Notion (locally, for testing): set required env vars and run `node scripts/publish.js`.

## Common tasks examples (for code suggestions)
- Add a new field to frontmatter: update `getFrontmatter()` in `scripts/publish.js` and ensure `src/layouts/BlogPost.astro` reads the new field.
- Change slug logic: update `slugify()` in `scripts/publish.js`; ensure any references to post filenames (e.g., in tests or tooling) use the same function.
- Add a CI secret or change branch used by publish action: update `.github/workflows/publish-from-notion.yml` and `PUBLISH_BRANCH` default in `scripts/publish.js`.

## Things NOT to change without checking the repo
- `astro.config.mjs` base/site values — changing them affects routing and GitHub Pages behavior.
- `src/content` layout or collection names — content collections are referenced in code and by Astro config.
- `scripts/publish.js` contract (frontmatter keys and target directory) — other parts of the site expect these fields.

## Example snippets (copy-ready)
- Run the publish script locally (example):
```
NOTION_API_KEY=xxx NOTION_DATABASE_ID=yyy GITHUB_TOKEN=zzz node scripts/publish.js
```
- Inspect Notion DB properties (returns property ids/types to help configure the repo):
```
NOTION_API_KEY=xxx NOTION_DATABASE_ID=yyy node scripts/check-notion.mjs
```

## Where to look next
- `scripts/publish.js` — publishing logic and edge cases.
- `.github/workflows/` — CI flows for deploy and scheduled publishing.
- `src/layouts/BlogPost.astro` and `src/content/blog/` — rendering and sample posts.

If any of the above guidance is unclear or you'd like me to merge in specific wording from an external AGENT.md, tell me which file to prioritize and I'll iterate.
