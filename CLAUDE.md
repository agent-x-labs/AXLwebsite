# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for **Agent X Labs** (a bespoke-AI-agents agency). One long single page plus `/privacy-policy` and `/terms-of-service`. Live at https://agentxlabs.com.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**.
- **Tailwind CSS 4** is installed (`@tailwindcss/postcss`, imported at the top of `globals.css`), but the visual design is a **hand-written CSS design system** in `src/app/globals.css` (CSS custom-property tokens + bespoke semantic classes like `band-paper`, `eyebrow`, `agent-row`, `hf-stage`). Components use these class names, not Tailwind utilities. Add styles to `globals.css`, not as utility soup.
- Fonts via `next/font`: Space Grotesk (display), Geist (sans), Space Mono (mono).
- No UI/component library, no CSS-in-JS, no page-level animation library.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build; **run this to verify before pushing** (it type-checks)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`eslint-config-next`)

There is no test suite. To verify UI/behaviour, build + run and look at the page (e.g. screenshot `npm run start` with a headless browser).

## Deployment

Vercel — **pushing to `master` auto-deploys to production (agentxlabs.com)**; there is no preview/staging gate, so treat a push as a production deploy. The git remote `tengmesk/AXLwebsite` redirects to the real repo `agent-x-labs/AXLwebsite`. `/public` assets are served `cache-control: max-age=0, must-revalidate`, so a same-path asset swap goes live on the next request — a brief edge negative-cache 404 or stale-size read in the seconds right after a deploy is normal and self-heals (re-check with a cache-busting query).

## Architecture

### Content-driven sections
`src/app/page.tsx` composes the section components from `src/components/sections/`. **All copy and data live in `src/content/`** (`site.ts`, `agents.ts`, `stats.ts`) — edit content there, not in the JSX. `site.ts` is the single source of truth for nav links, hero, CTA, pedigree logos, how-it-works steps, the why do/don't lists, FAQs, and company/legal details (`COMPANY`, used by the legal pages).

### Theming — dark by default
Light is the base (`:root` tokens in `globals.css`); dark is overrides in `:root[data-theme="dark"]`. **Dark is the default**, applied before first paint by an inline script in `src/app/layout.tsx` (reads `localStorage.theme`, falls back to `'dark'`) so there is no flash; `<html suppressHydrationWarning>` covers that script-set attribute. `src/components/theme-toggle.tsx` (client component in the nav) flips `data-theme` and persists it. New colours should use the tokens (`--paper`, `--paper-card`, `--ink`, `--line`, brand `--violet`/`--teal`) so both themes work. A few things need per-theme handling: the nav/footer AXL wordmark swaps SVG asset by theme (`AXLLogoLightBG`/`AXLLogoDarkBG` in `/public/brand`), the pedigree logos swap variants (below), and the footer is intentionally always black.

### Animations
Two unrelated systems:

1. **Looping video clips** in the agent and how-it-works cards, played by `src/components/hyper-video.tsx`: `<HyperVideo src="/agents/<slug>" />` resolves `.webm` + `.mp4` + `.jpg` poster, plays only when in view (IntersectionObserver), and is poster-only under reduced-motion. The rendered clips are committed to `/public/agents/*` and `/public/how/0N.*`; their **source** lives in `motion/` — see `motion/CLAUDE.md` before editing or re-rendering one. In dark mode these clips stay light and read as framed light panels.
2. **Scroll-in motion** on the math / why / FAQ sections from `src/components/anim.tsx` (`CountUp`, `Reveal`) — IntersectionObserver-driven, reduced-motion-safe and no-JS-safe (content is visible by default; JS adds the hidden state).

### Pedigree ("delivered at") logos — per theme
`/public/logos/*`. Each logo has a light variant (`<name>.svg`, grayscale by default → full colour on hover) and a dark-background variant (`<name>-dark.svg`: white wordmark, or a colour mark with white text). `pedigree-strip.tsx` renders both and CSS shows the right one per theme. This section is the one place logos are colour-on-hover.

## Conventions

- **No em dashes in user-facing copy** — use hyphens. This is a deliberate, site-wide style choice (applies to `src/content`, component text, and the clip text in `motion/`).
- Brand semantics in the design/animations: **violet = voice (the agent), teal = signal (the result)**.
- SEO/metadata is the `metadata` export + Organization JSON-LD in `layout.tsx`; `robots.ts` and `sitemap.ts` generate the rest.
