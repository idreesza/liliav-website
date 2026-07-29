# Liliav — Private Plastic Surgery Concierge

A luxury, editorial-grade marketing site for **Liliav**, a private plastic surgery brokerage
connecting international patients with vetted, board-certified clinics across the
**USA, Turkey, and Lebanon**.

**Live preview:** https://liliav.kimi.page

## Stack

- **React 18 + TypeScript + Vite** — component architecture
- **Tailwind CSS** — dark charcoal / champagne-gold / dusty-teal design system
- **react-router** — 44 routes (SPA with full static prerendering)
- Custom components: `LuxSelect` (accessible themed dropdown), `LuxImg` (responsive `<picture>`)

## Key features

- **44 prerendered static routes** — full HTML payload per page for SEO/AI crawlers
- **24 procedure pages** with recovery timelines, price guidance (USA/TR/LB), FAQs
- **Destination hubs** (USA · Turkey · Lebanon), surgeon network, journey, results, journal, legal
- **Trilingual UI** — English / العربية (RTL) / Türkçe
- **Performance** — WebP responsive images (`srcset`/`sizes`), route-level code-splitting,
  vendor chunking, hydration over prerendered HTML, non-blocking fonts, hero preload
- **SEO / AIO** — JSON-LD (Organization, MedicalBusiness, MedicalProcedure, FAQPage,
  Article, BreadcrumbList), per-route title/meta/canonical, `sitemap.xml`, `robots.txt`

## Develop & build

```bash
npm install
npm run dev            # local dev server
npm run build          # production build -> dist/
npm run build:full     # production build + prerender (static HTML per route,
                       # sitemap.xml, robots.txt) — use this as the build command
                       # for Cloudflare Pages / any static host
```

> **Cloudflare Pages:** set the build command to `npm run build:full` and the
> output directory to `dist`. Node 20.19.0 is selected automatically via `.nvmrc`.
> `robots.txt`, `sitemap.xml`, and `llms.txt` ship from `public/` with every build.

The output in `dist/` is a **pure static site** — host it anywhere (GitHub Pages,
Netlify, S3, nginx). No server code required.

## Structure

```
src/
  components/   layout (header/footer/WhatsApp), LuxSelect, LuxImg, common
  data/         procedures (24), destinations, journal articles
  pages/        Home, Procedures(+detail), Destinations(+detail), Surgeons,
                Journey, Results, About, Contact, Journal(+article), Legal, NotFound
  i18n.tsx      EN/AR/TR language provider
  seo.ts        per-route metadata + JSON-LD builders
scripts/
  prerender.cjs post-build static-site generation
public/images/  AI-generated brand imagery (WebP + JPG, responsive sizes)
```
