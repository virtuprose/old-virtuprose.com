# Caching Policy

This project aims to prevent stale content while preserving performance. Follow these rules whenever you add or update assets, pages, or API responses.

## 1) Asset Versioning (Static Files)
- **Preferred:** Import raster assets (png/jpg/webp) in components so Next emits hashed URLs under `/_next/static/media`.
- **Public assets:** If an asset must live in `public/` (e.g., SVG icons used as plain URLs or metadata icons), **create a new versioned filename** (e.g. `logo.v2.svg`) and update references. **Never overwrite a stable URL.**
- **Immutable caching:** Versioned public assets are eligible for `Cache-Control: public, max-age=31536000, immutable` in `next.config.js`.

## 2) Route HTML Caching (App Router)
- Each route must explicitly declare its caching mode.
- **Static marketing pages**: use `export const dynamic = "force-static"`.
- **Always-fresh routes**: use `export const dynamic = "force-dynamic"` and/or `fetch(..., { cache: "no-store" })`.
- **ISR routes**: use `fetch(..., { next: { revalidate: N } })` and/or `export const revalidate = N`.

## 3) API Cache-Control
- All API responses must set `Cache-Control: no-store` (including errors).
- If you introduce a GET API that can be cached at the CDN, document it and apply `s-maxage` + `stale-while-revalidate` explicitly.

## 4) Build Cache vs Runtime Cache
- `generateBuildId` and build caching only affect build output. They do **not** invalidate browser/CDN caches for stable URLs.
- Use **versioned assets** or hashed imports to bust runtime caches. Do not rely on build cache settings.

## 5) Safe Asset Update Checklist
1) Add a new versioned file (e.g. `icon.v2.svg`).
2) Update all references in code.
3) If the asset is served directly from `public/`, add/adjust its immutable header entry in `next.config.js`.
4) Deploy; do **not** delete the old version until you’re confident no clients reference it.
