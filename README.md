# Kiki's Pet Shop website

Four-page site for Kiki's Pet Shop (Shop 122, 2nd floor, Khaja Supermarket, Kallyanpur, Dhaka): Home, Shop, About, Contact.

- `site/`: the static prototype (HTML, one stylesheet, one script). It's published to GitHub Pages by `.github/workflows/pages.yml`.
- `ELEMENTOR-MAP.md`: how to rebuild it 1:1 in WordPress + Elementor (free).
- `PRODUCT.md` / `DESIGN.md`: product facts and the design system.

Run locally:

```
python -m http.server 5520 --directory site
```

Credits: shop photos and videos are Kiki's Pet Shop's own (from their Facebook page). Cat photos are from Unsplash; see `site/assets/cats/CREDITS.md`.
