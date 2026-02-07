# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Commands

```bash
yarn dev        # Dev server with Turbopack
yarn build      # Lint check + production build
yarn run check  # Prettier format check + oxlint
yarn format     # Prettier auto-format + oxlint auto-fix
yarn lint       # oxlint only
```

There is no test suite configured.

## Architecture

This is a personal blog built with **Next.js 15 (App Router)**, **React 19**,
**TypeScript**, **Tailwind CSS**, and **MDX**.

### Content System

Blog posts live in `src/app/(posts)/<slug>/content.mdx`. Each MDX file exports
metadata as named constants (not YAML frontmatter):

```js
export const title = 'Post Title';
export const published = '2025-06-01'; // null = draft (hidden from listings)
export const author = 'Rand Seay';
export const slug = 'post-slug';
export const tags = ['tag1', 'tag2'];
export const summary = 'Post summary';
```

Posts are registered in `src/app/(posts)/posts.ts`, which imports all MDX
content, filters out drafts (`published !== null`), sorts by date descending,
and extracts unique tags.

### Path Aliases

- `@articles/*` → `src/app/articles/*`
- `@components/*` → `src/app/components/*`
- `@hooks/*` → `src/app/hooks/*`

### Key Directories

- `src/app/(posts)/` — Blog post content (MDX) in route group
- `src/app/components/` — Reusable React components
- `src/app/articles/` — Articles listing page with tag filtering
- `src/app/about/` — About page (also MDX)
- `src/app/rss/` — RSS 2.0 feed generation route

### Patterns

- Server components by default; `'use client'` only where interactivity is
  needed (Tag filtering, ThemeSwitch)
- Tailwind utility classes for all styling; dark mode via class strategy with
  `next-themes`
- Prettier for formatting (single quotes, 80-char width, prose wrap always);
  `prettier-plugin-tailwindcss` for class sorting
- oxlint for linting with `react`, `typescript`, `nextjs`, `jsx-a11y`, `import`
  plugins
- Some posts include interactive Sandpack code editors (`Editor` component)
- Node.js >= 24 required

## CI

GitHub Actions runs `yarn run check` (Prettier + oxlint) on push and PRs.
Deployment is handled via Vercel.
