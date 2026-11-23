# Kiki's Pet Shop: rebuild map for WordPress + Elementor (free)

The static prototype in `site/` is built so every section maps to an Elementor **container** plus **free widgets**, styled by one global stylesheet and one script. Rebuilding it through the Elementor MCP means the same structure, the same CSS class names, and the same two files.

## 1. One-time site setup

| What | Where in WordPress | Value |
|---|---|---|
| Theme | Appearance › Themes | **Hello Elementor** (no theme styling to fight) |
| Global Colors | Elementor › Site Settings › Global Colors | Primary `#27307A` (navy) · Secondary `#D7B35C` (gold) · Text `#1D2352` · Accent `#D7B35C` · plus custom: Muted text `#4C517A`, Gold lit `#E4C77F`, Page `#F3E7C8` (cream), Light cream `#FBF5E6` |
| Global Fonts | Site Settings › Global Fonts | All four = **Anek Bangla** (Primary 700, Secondary 600, Text 400, Accent 700) |
| Body | Site Settings › Typography | 19px / line-height 1.6, colour Text |
| Font loader | handled by Elementor | Elementor's Google Fonts loader is enough; the design uses the normal width only |
| Global CSS | Appearance › Customize › Additional CSS | paste all of `site/css/kiki.css` and change the two `url("../assets/fb/logo-plate.jpg")` paths to the Media Library URL |
| Global JS | Code-snippet plugin (footer) or an HTML widget in the footer template | `<script>` + contents of `site/js/kiki.js` |
| `js` class early | same snippet plugin, `wp_head` | `<script>document.documentElement.classList.add("js")</script>` |
| Icons | built in | Elementor ships Font Awesome; use the same names (`fa-whatsapp`, `fa-facebook-messenger`, `fa-arrow-right`, `fa-location-dot` …) |
| Page layout | each page › Page Settings | **Elementor Full Width / Canvas**, hide title |

Header and footer: Theme Builder is Pro-only. With free Elementor, save the header and footer as **Templates › Saved Templates** and insert them on all four pages (or use the free "Elementor Header & Footer Builder" plugin). The header's nav is four Button widgets, not the Pro Nav Menu widget. The current page is marked by the inline script in §3, which inserts the `.k-here` plate.

## 2. Class → widget map

Set classes in **Advanced › CSS Classes**. Containers use Flexbox/Grid containers.

| Prototype element | Elementor element | CSS class(es) |
|---|---|---|
| `header.k-header` | Container (full width, boxed inner 1240) | `k-header` |
| logo + wordmark | Image (logo-plate.jpg) + Heading `KIKI'S <span>PET SHOP</span>` + Text `কিকি'স পেট শপ` | `k-brand` on the inner container |
| nav links | one **HTML widget** in the shared header template, containing the `<nav class="k-nav">` markup (4 links, none marked) followed by the inline marker script below | `k-nav` |
| `section.k-board` hero | Container, background white, 2 columns | `k-board k-intro` (home) / `k-board k-pagehead` (inner pages) |
| headline | Heading H1 | `k-h1 k-display` |
| Bangla line | Text Editor | `k-bn k-bn-line` |
| 2F / 122 plates | Icon List or HTML widget | `k-plates` / `k-plate` |
| directory strips | **Icon List** (one item per category, link set, arrow icon) or HTML widget | `k-strips` (list) → items rendered as `k-strip` |
| WhatsApp action strip | Button widget (or HTML) | `k-action` |
| hero photo | **Image** widget (`assets/cats/blinds-nap.webp`) + Button widget "Watch the shop tour" linking to About `#tour` | `k-hero-photo` on its container, button `k-tag` |
| floor line | HTML widget (markup in `index.html`, `.k-floor`) | `k-floor` (`k-floor--light` on white) |
| section wrappers | Container | `k-section`, `k-section--white`, `k-section--tint` |
| section heading row | Container (2 columns) | `k-head` |
| H2 | Heading H2 | `k-h2 k-display` |
| product shelf | Container grid 4 cols (2 on mobile), each item = Image + Text Editor (brand, line, link) | grid `k-shelf`; item `k-item k-rv`; image wrapper `k-item__img`; tag `k-item__tag` |
| cat mosaic | Container grid, each = Image with caption | `k-mosaic` / `k-tile k-rv-img` |
| order steps | Container with 3 children (Heading + Text) | `k-steps k-rv-slats` |
| buttons | Button | `k-btn` (honey), `k-btn--dark`, `k-btn--ghost`, `k-btn--white` (dark, header) |
| address list | Icon List | `k-addr` |
| map | **Google Maps** widget, address "Khaja Super Market, Kallyanpur, Dhaka", zoom 16 | `k-map` |
| shop sidebar | Container (sticky via class) + Icon List of anchors | `k-dir__nav` inside `k-dir` |
| shop category | Container with CSS ID `wet-food`, `dry-food`, `treats`, `litter`, `grooming` | `k-cat` |
| two-photo row | Container 2 cols, 2 × Image | `k-media2` |
| contact | Container 2 columns: Icon Box (WhatsApp, link set) + Icon List (Messenger, Email, Facebook page, links set) | wrapper `k-reach`; WhatsApp `k-channel k-channel--primary`; list `k-strips` |
| about tour video | Video widget (`tour-full.mp4`, controls on, sound available) | `k-lit k-tour` |
| footer | Container | `k-footer` |
| mobile order bar | HTML widget in footer template | `k-dock` |

Reveal classes (`k-rv`, `k-rv-img`, `k-rv-slats`) are what the script animates. Don't also switch on Elementor's own "Entrance Animation" for the same elements.

## 3. Page transitions

These live entirely in the global CSS (`@view-transition { navigation: auto; }` plus `view-transition-name` on `.k-header`, `main`, `.k-here`). They work across normal WordPress page loads in Chrome/Edge 126+ and Safari 18.2+. Other browsers get a soft fade-in. In WordPress, `main` is Hello Elementor's `<main id="content">`, so the selector stays `main`. The sliding yellow plate needs exactly one `.k-here` element per page, inside the current page's nav link. Because the header is one shared template, put this inline right after the nav in the same HTML widget. It runs before first paint, so the transition can capture it:

```html
<script>(()=>{const p=location.pathname.replace(/\/$/,"")||"/";for(const a of document.querySelectorAll(".k-nav a")){const h=new URL(a.href).pathname.replace(/\/$/,"")||"/";if(h===p){a.setAttribute("aria-current","page");a.insertAdjacentHTML("afterbegin",'<i class="k-here" aria-hidden="true"></i>');break}}})()</script>
```

Instant navigation: add the `speculationrules` script from the prototype `<head>` to the same `wp_head` snippet.

## 4. Media to upload

`site/assets/fb/` (shop's own photos, logo, reel), `site/assets/shop/` (stills from the shop reel), `site/assets/cats/` (the four `.webp` golden-hour photos supplied by the client, plus Unsplash photos credited in `CREDITS.md`), `site/assets/video/` (`tour-full.mp4` with sound, posters).

## 5. Facts still to confirm with the owner

- Opening hours: the site says "Open every day", based on Facebook's "Always open".
- Whether 01680042538 is on WhatsApp (assumed yes).
- Home delivery: the site only says "ask us".
- Product names on the shelf come from the can labels in the photos. No prices are shown anywhere.

### Glass and layout (2026-11-23)

| Element | Elementor | Class(es) |
|---|---|---|
| frosted panel (header, hero card, pills, shelf case, order panel, lists, page heads) | any Container | `k-glass` (+ `k-panel` for inner padding). Elementor free has no backdrop blur control; the class supplies it |
| page background light | Site Settings › Background: colour `#F3E7C8` | the soft navy/gold light comes from the global CSS on `body` |
| hero | Container (min-height ~76vh, background image `blinds-nap.webp`, cover) with an inner glass Container | `k-hero__stage`; card `k-hero__card k-glass`; tour button `k-tag k-hero__tour` |
| category pills | Icon List or 5 small Containers (Image + Heading + Text, link set) | `k-pills`, each `k-pill k-glass` |
| meow-babies | Container 2 columns: Image (big) + Container (glass card + 2 Images) | `k-feature__grid`, `k-feature__main`, `k-feature__card k-glass`, `k-feature__pair` |

### English / Bangla (2026-11-23)

- The prototype has a Bangla twin of every page in `site/bn/`, written in standard Dhaka Bangla. The header switch (`k-lang`) links each page to its twin.
- In WordPress, install **Polylang** (free), add English and Bangla, then duplicate each Elementor page and link the pair. Copy the Bangla text from `site/bn/*.html`. Put Polylang's language switcher (a shortcode or menu item) where the `k-lang` link sits, with the `k-lang` class on it.
- On Bangla pages the small Bangla sub-lines are removed, because the main text is already Bangla.
- `tools/build_bn.py` regenerates `site/bn/` from the English pages using `tools/bn_strings.json`. Run `python tools/build_bn.py site tools/bn_strings.json` after editing English text, and add any new strings to the JSON.
- Smooth language switch: `kiki.js` fetches the other-language page in the background and crossfades into it in place, with no reload, keeping the scroll position. It only needs the Polylang switcher link to have the class `k-lang`; nothing else in `<head>`.
- Glass paw prints: put `<div class="k-paws" aria-hidden="true">` with 8 empty `<i></i>` inside in an HTML widget in the header template. CSS shows them only on screens 1440px and wider.
