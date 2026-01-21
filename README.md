# Portfolio (Next.js + Cloudflare Pages)

Minimal, typography-driven portfolio built with Next.js App Router and Tailwind CSS. Configured for static export and Cloudflare Pages.

## Build & Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `out`

## Local Development

```bash
npm install
npm run dev
```

## Notes

- Update the site URL in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` before deployment.
- Writing content lives in `content/writing` as Markdown with frontmatter.
- Admin UI (no-code editing) is available at `/admin`. Log in with GitHub to edit Projects, Writing, and Site content.
