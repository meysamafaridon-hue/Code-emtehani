# MCI MARCT — Base44 dev environment

## Stack
- Vite 6 + React 18 + TypeScript + Tailwind CSS 3
- React Router for routing, Zustand (persisted) for cart state, lucide-react for icons
- Google Fonts: Anton (display), Inter (body) — loaded in `index.html`

## Run
```
docker compose -f docker-compose.base44.yml up -d
```
The container installs dependencies from `package.json` on startup, then runs the
Vite dev server on port 5173 (mapped to host port 3000). Edits hot-reload.

## Structure
- `src/components/` — reusable UI (header, footer, hero, product card, cart drawer, search overlay)
- `src/pages/` — route pages (home, shop, product detail, cart, checkout, custom design, info pages)
- `src/data/products.ts` — product catalog + helpers (single source of product data)
- `src/store/cart.ts` — Zustand cart store, persisted to localStorage as `mci-marct-cart`

## Notes
- Product imagery uses `picsum.photos` seeds as placeholder photography. Replace
  `image`/`imageBack` in `src/data/products.ts` with licensed product photography before launch.
- Checkout is a demo flow: no real payment is processed.
- Social links in the footer point to placeholder URLs — set real profiles before launch.
- No external services or credentials are required to boot.
