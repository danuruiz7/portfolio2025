# AGENTS.md

## Commands
- Use `npm` here. Verified scripts are `npm run dev`, `npm run build`, and `npm run preview`.
- There are no repo-configured `lint`, `test`, or standalone `typecheck` scripts. The main verification step is `npm run build`.

## App Shape
- This repo is a single Astro 5 static site, not a monorepo.
- `astro.config.mjs` sets `site: "https://druiz.dev"` and uses `@astrojs/react` plus Tailwind v4 through the Vite plugin.
- TypeScript extends `astro/tsconfigs/strict` in `tsconfig.json`.

## Content Source Of Truth
- Editable site content lives in `src/data/`, split by locale under `src/data/es/` and `src/data/en/`.
- `src/data/portfolio.ts` is the aggregator used by pages and components. Prefer updating locale JSON files first, not component markup.
- Keep new copy out of components unless it is purely structural/technical. This matches the repo README and current structure.

## Routing And i18n
- Spanish is the default locale at `/`; English lives under `/en/`.
- Shared route mapping lives in `src/i18n/routes.ts`. Update that file when adding or renaming localized static pages.
- Project detail pages keep the same slug in both languages:
  - ES: `/proyectos/[slug]`
  - EN: `/en/projects/[slug]`
- Non-obvious route: the Spanish privacy page is `/privacy`, not `/privacidad`.

## Shared Component Gotchas
- Shared components infer locale from `Astro.url.pathname` via `getLocaleFromPath()`. When editing shared links, make them locale-aware instead of hardcoding `/proyectos` or other ES-only paths.
- `src/components/Projects.astro` is a common place to accidentally break locale-specific project links.
- `src/layouts/Layout.astro` owns canonical URLs, hreflang tags, OG/Twitter metadata, JSON-LD, and the first-visit browser-language redirect.

## Pages And SEO
- Page entrypoints are in `src/pages/` for ES and `src/pages/en/` for EN.
- Home pages explicitly call `getPortfolio('es')` and `getPortfolio('en')` for page-level SEO props; shared sections derive locale from the URL.
- If you add a new static page, update both locale page trees and `src/pages/sitemap.xml.ts`.

## Assets
- Profile image is sourced from `src/assets/images/me.webp` via `astro:assets` in `Layout.astro`.
- Project images live in `public/proyectos/` and are referenced with absolute `/proyectos/...` URLs from project data JSON.
