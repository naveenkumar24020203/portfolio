# Naveen Kumar S — QA Engineer Portfolio

A single-page portfolio built with the Next.js App Router, React 19, Tailwind CSS v4
and a small set of shadcn/ui primitives.

**Live sections:** Hero → Stats → About → Skills → Projects → Experience →
Certifications → Contact → Footer.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script            | Does                                    |
| ----------------- | --------------------------------------- |
| `pnpm dev`        | Dev server (Turbopack)                  |
| `pnpm build`      | Production build                        |
| `pnpm start`      | Serve the production build              |
| `pnpm lint`       | ESLint (flat config, `next/core-web-vitals` + `next/typescript`) |
| `pnpm typecheck`  | `tsc --noEmit`                          |

## Project layout

```
app/
  layout.tsx        Fonts, metadata, Open Graph, theme provider, skip link
  page.tsx          Composes every section in order
  globals.css       Design tokens, animation keyframes, reveal/spotlight styles
components/
  portfolio/        One file per section, plus shared visual primitives
  ui/               shadcn/ui primitives actually in use (badge, button, card)
hooks/              use-reveal helpers: scroll spy, count-up, reduced motion
```

### Editing content

All copy lives in plain arrays at the top of each section component — there is no
CMS or data layer. To change a project, edit the `projects` array in
[`components/portfolio/projects.tsx`](components/portfolio/projects.tsx); the same
pattern holds for skills, experience and certifications.

### Shared primitives

- **`Reveal`** — wraps anything that should fade/lift in when scrolled into view.
  Pass `delay` (ms) to stagger a list.
- **`SpotlightCard`** — a `Card` that renders a cursor-following glow.
- **`TestRunTerminal`** — the animated Maven/TestNG run in the Stats section.
  The output is illustrative, built from the suites named in the Projects
  section.

All three respect `prefers-reduced-motion` and render their finished state
immediately when it is set.

### Adding more shadcn/ui components

Only the primitives in use are checked in. Add others as needed:

```bash
npx shadcn@latest add dialog
```

## Environment variables

The contact form posts through EmailJS. It works out of the box with the
committed public browser identifiers; override them per environment if you like:

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # canonical + Open Graph URLs
```

`NEXT_PUBLIC_SITE_URL` only matters in production — it drives `metadataBase`, the
canonical link and the absolute Open Graph image URL. On Vercel it falls back to
`VERCEL_PROJECT_PRODUCTION_URL` automatically.

The form also carries a hidden honeypot field; submissions that fill it are
silently discarded rather than sent.

## Deployment

Deployed on Vercel. `vercel.json` overrides the build command to run
`.v0/inject-built-with-v0.mjs` first, which patches `app/layout.tsx` at build time
to inject a fixed "Built with v0" badge into the deployed page. Delete that
`buildCommand` override if you no longer want the badge.
