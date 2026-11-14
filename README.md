# Wonderfully Made Co.

Natural beauty, wonderfully made. Made by our family, for yours.

Storefront for wonderfullymadenaturals.com, built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/products.ts` | Products, coming-soon items, ingredients, badges. Edit here first. |
| `src/layouts/Base.astro` | Header, nav, footer (Psalm 139:14) and fonts |
| `src/pages/index.astro` | Home page (design Option A) |
| `src/pages/shop/[slug].astro` | One page per product |
| `src/pages/order.astro` | Order page placeholder |
| `src/styles/global.css` | Brand colors and shared styles |

## Brand

- Colors: cream `#F4EEE2`, sage `#B7C6A8`, rose `#E6B8B0`, deep green `#3F4F3A`
- Type: Cormorant Garamond (headings), Inter (body)
- Voice: warm, simple, a little playful. Natural first. Faith stays quiet (the verse lives in the footer).
- Every product page lists all ingredients and the allergen line.

## Not done yet

- Real prices (currently "Price coming soon")
- Real photos (currently text placeholders)
- Payments and checkout (no provider wired; needs a security review before launch)
- Email signup provider
- Shipping and pickup details, shelf life, giving-back cause
