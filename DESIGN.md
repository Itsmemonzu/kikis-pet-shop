---
name: Kiki's Pet Shop
description: A sunny neighbourhood pet shop laid out by hand, like stickers and shop tags on a table; ordering is one tap away.
colors:
  ink: "#1f2430"
  ink-muted: "#5a6070"
  ink-lift: "#343b4a"
  honey: "#f2b13d"
  honey-lit: "#f7c766"
  logo-blue: "#2b63b5"
  paper: "#ffffff"
  sky: "#edf3fa"
  hairline: "#dde5ef"
  deep: "#1c2a44"
  on-dark: "#eef3fa"
  on-dark-muted: "#b7c3d6"
  chat-wallpaper: "#efeae2"
  chat-bar: "#075e54"
  chat-bubble-out: "#d9fdd3"
  chat-ink: "#111b21"
  chat-meta: "#54656f"
  chat-time: "#4f5d66"
typography:
  display:
    fontFamily: "Baloo Da 2, Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.5rem + 3.6vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Baloo Da 2, Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  wordmark:
    fontFamily: "Baloo Da 2, Anek Bangla, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  bigmark:
    fontFamily: "Baloo Da 2, Anek Bangla, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 16vw, 12rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  tag-title:
    fontFamily: "Baloo Da 2, Anek Bangla, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
  lead:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  bangla-line:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 500
    letterSpacing: "0"
  label:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.2
  numeral:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "0.01em"
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  bubble: "8px"
  control: "10px"
  photo: "14px"
  frame-inner: "18px"
  tag: "24px"
  frame: "26px"
  sticker: "30px"
  page-sticker: "34px"
  sticker-hero: "40px"
  pill: "999px"
spacing:
  wrap: "1240px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(48px, 5.5vw, 84px)"
  section-after-pagehead: "clamp(16px, 2vw, 32px)"
  head-gap: "clamp(20px, 2.5vw, 32px)"
  sticker-edge: "8px"
  sticker-edge-hero: "10px"
  target: "48px"
components:
  top-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    height: "48px"
    typography: "{typography.label}"
  button-primary:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 1.4em"
    height: "56px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.honey-lit}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 1.4em"
    height: "56px"
  button-dark-hover:
    backgroundColor: "{colors.ink-lift}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 1.4em"
    height: "56px"
  nav-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
    typography: "{typography.label}"
  nav-link-hover:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
  nav-link-active:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
  hero-sticker:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sticker-hero}"
    padding: "clamp(26px, 4vw, 56px)"
  hero-action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 26px 12px 18px"
  hero-action-hover:
    backgroundColor: "{colors.ink-lift}"
  location-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "6px 14px 6px 6px"
  photo-frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.frame}"
    padding: "{spacing.sticker-edge}"
  logo-stamp:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "118px"
  hang-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "26px 12px 16px"
  page-sticker:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.page-sticker}"
    padding: "clamp(24px, 3.5vw, 48px)"
  category-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "58px"
  category-row-hover:
    backgroundColor: "{colors.sky}"
  category-row-here:
    backgroundColor: "{colors.honey}"
  photo-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "48px"
  shelf-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "14px 16px 8px"
  shelf-link:
    textColor: "{colors.logo-blue}"
    height: "48px"
  whatsapp-card:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sticker}"
    padding: "26px"
  whatsapp-card-hover:
    backgroundColor: "{colors.honey-lit}"
  chat-bubble-in:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.chat-ink}"
    rounded: "{rounded.bubble}"
    padding: "8px 12px 20px"
  chat-bubble-out:
    backgroundColor: "{colors.chat-bubble-out}"
    textColor: "{colors.chat-ink}"
    rounded: "{rounded.bubble}"
  footer:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-dark-muted}"
  footer-bigmark:
    textColor: "{colors.honey}"
    typography: "{typography.bigmark}"
---

# Design System: Kiki's Pet Shop

## Overview

**Creative North Star: "The Sticker Table"**

A sunny neighbourhood pet shop laid out by hand, in its own logo's colours: honey paw yellow and line-drawing blue. Each page reads like a table someone arranged. One honey sticker holds the home hero. Category tags hang from a blue rail. Cat photos sit in thick white frames, scattered at small angles. The page heads are pale sky stickers. Every placed object has a thick white (or logo-blue) edge, a slight tilt and a soft neutral drop shadow. Text, rows and shelves underneath stay straight and calm, so the playful layer frames the content without getting in its way.

Honey still marks where to act and where you are (the nav pill, the active category row, the WhatsApp card). It also signs the brand in exactly two big places: the hero sticker and the footer wordmark. Blue does the quiet work: links, icons, the wordmark accent, the tag rail and the photo edges. Baloo Da 2, a rounded Bengali-capable display face, gives headings and the wordmark their friendly weight. Anek Bangla carries body copy and every Bangla line.

Density stays compact and legible for readers 30 and over on phones. Body text is 19px, no readable text goes below 18px, every target is at least 48px, and section rhythm stays tight. The world rejects the retired navy directory board and the pastel paw-confetti pet template. Its looseness came from the suirenbd.com reference, rebuilt in Kiki's own palette.

**Key Characteristics:**
- Hand-placed objects: stickers, frames and tags tilt between 0.6 and 5 degrees, and neighbours alternate direction.
- Thick sticker edges: 8px white (10px on the hero sticker) or logo blue, on generous radii from 24 to 40px.
- Soft neutral drops (rgb(17 20 26 / 0.5–0.55)) under placed objects only; rows, shelves, buttons and chips stay flat.
- The logo's pair: honey to act and mark "you are here" (plus the hero sticker and footer wordmark), blue for links, icons and edges.
- Baloo Da 2 800 for display, Anek Bangla for body and Bangla.
- An ink top bar above a white header; the footer is deep blue with a huge honey wordmark.
- The owner's photos lead every image slot.

## Colors

Two colours from the logo on a white and sky ground, with slate neutrals that lean toward the blue. The palette is unchanged by the playful pass; only honey's job list grew.

### Primary
- **Paw Honey** (honey): the hero sticker's ground, the sliding nav pill, the active shop-category row, the contact WhatsApp card, primary buttons, step discs, the last floor-line stop, the dock's order button, links in the top bar, the footer headings and big wordmark, the first scattered photo's edge, the WhatsApp glyph on the ink hero action, text selection, the skip link. Text on honey is always ink (about 9:1).
- **Honey, Lit** (honey-lit): the hover and focus state of every honey surface. It is never a resting colour.

### Secondary
- **Logo Blue** (logo-blue): links ("Ask price", "See all"), icons, "PET SHOP" in the header wordmark, the focus outline, the tag rail, the hero photo's edge, the stamp ring, the tour video's edge, one scattered photo's edge, and the numerals in the hero chips. About 5.9:1 on paper.

### Neutral
- **Slate Ink** (ink): headings, body text, the top bar ground, the hero WhatsApp pill, the tag outlines and punch holes, the dark button, the dock's Messenger button.
- **Slate Muted** (ink-muted): secondary text, Bangla sub-lines, captions, tag sub-labels, idle nav links. About 6.3:1 on paper.
- **Ink Lift** (ink-lift): the hover state of every ink button and pill.
- **Paper** (paper): the page ground, every sticker edge and frame, tags, panels.
- **Pale Sky** (sky): alternate sections, inner page head stickers, nav and row hovers, placeholders, notes.
- **Hairline** (hairline): 1px dividers, panel outlines, and the 2px outer ring around stickers on a coloured ground.
- **Deep Blue** (deep): the footer ground only, with **On-dark** (on-dark) for links and **On-dark Muted** (on-dark-muted) for body text. On-dark is also the top bar's text.

### Borrowed: WhatsApp chat palette (component-scoped)
The example chat uses WhatsApp's own colours so it reads as a real conversation: wallpaper (chat-wallpaper), header bar (chat-bar), outgoing bubble (chat-bubble-out), incoming bubble (paper), text (chat-ink), caption (chat-meta), timestamps (chat-time). These colours appear only inside the chat.

### Elementor mapping
Global Colors: Primary = ink, Secondary = logo-blue, Text = ink, Accent = honey. Custom: Muted text = ink-muted, Honey lit = honey-lit, Page = paper, Sky = sky, Hairline = hairline, Footer = deep. The chat palette lives in the stylesheet.

### Named Rules
**The One Honey Rule.** Honey means "act here" or "you are here". Beyond that, it signs the brand only as the single hero sticker, the footer wordmark and at most one photo edge per scatter. It never fills labels, captions, tags or ordinary sections. Text on honey is always ink.

**The Inverted Action Rule.** When an action sits on honey, it inverts to an ink pill with white text and a honey glyph. Never put honey on honey.

**The Logo Pair Rule.** Honey acts, blue informs. Links and icons on light grounds are blue, never honey. A call to act is honey (or ink on honey), never blue.

## Typography

**Display Font:** Baloo Da 2, weights 600–800 (falls back to Anek Bangla)
**Body Font:** Anek Bangla, weights 400–800 (falls back to Noto Sans Bengali, system-ui)
**Label/Mono Font:** none distinct; numerals use tabular lining figures

**Character:** Baloo Da 2's rounded, heavy letters give headings, the wordmark and the tag titles a friendly, hand-lettered feel. Anek Bangla at normal width keeps body copy and Bangla sub-lines quiet and highly legible. Elementor: add Baloo Da 2 as the headings Global Font; Anek Bangla covers everything else.

### Hierarchy
- **Display** (Baloo Da 2 800, clamp 2.6–4.4rem, 1.0, -0.01em): the one H1 per page, wrapped balanced.
- **Headline** (Baloo Da 2 800, clamp 2–3.1rem, 1.05): section H2s, each followed by a Bangla line.
- **Tag title** (Baloo Da 2 700, 1.45rem, 1.25rem under 520px): the names on the hanging category tags.
- **Wordmark** (Baloo Da 2 800, 1.4rem): "Kiki's PET SHOP" in the header and footer.
- **Bigmark** (Baloo Da 2 800, clamp 4.5–12rem, 0.8): the honey "kiki's" across the footer, aria-hidden.
- **Title** (Anek Bangla 700, 1.15–1.5rem): step titles, card names, floor-line stops, captions, rows, shelf brands.
- **Lead** (Anek Bangla 400, clamp 1.2–1.4rem, 1.5, muted): the inner-page intro, max 60ch.
- **Body** (Anek Bangla 400, 19px, 1.6): paragraphs at max 68ch. Drops to 18px under 520px.
- **Bangla line** (Anek Bangla 500, 1.2–1.45rem, muted, no tracking): the Bangla echo under the H1 and every H2. On the honey sticker it switches to ink.
- **Label** (Anek Bangla 600, 18px): nav, chips, the top bar, buttons (700), captions, footer text.
- **Numeral** (Anek Bangla 700, tabular lining, 0.01em): phone numbers and the 2F / 122 chips.

### Named Rules
**The Two Voices Rule.** Baloo Da 2 is for display only: H1, H2, the wordmark, tag titles and the bigmark. Anek Bangla is for everything you read, and for every Bangla line. Use no third face, and no condensed or expanded widths.

**The Eighteen Floor Rule.** No readable text below 18px (1.125rem). The only exception is the decorative chat timestamps (0.875rem), which are aria-hidden.

## Layout

A centred 1240px wrap with a fluid gutter (16–40px). An ink top bar (48px tall) carries the address and the WhatsApp number, then the white sticky header follows. Sections alternate paper and sky with compact padding (48–84px). Section heads are a Baloo H2, a Bangla line and one muted paragraph, max 760px wide.

The home hero is one honey sticker inside the wrap, split about 1.05 : 0.95. The left side holds the chips, the H1, the Bangla line, and a row with the ink WhatsApp pill and the Messenger link. The right side holds the blue-framed photo with its tour tag, and the logo stamp overlaps the sticker's top-right corner. The categories hang as five tags from a full-width blue rail. Each tag is dropped 0–34px at a different depth and tilted. The meow-babies section pairs copy with three framed photos scattered absolutely in a 440–580px tall area. Shop, About and Contact open on a sky sticker page head, and a section after it starts 16–32px below. The shop page keeps the 290px sticky category sidebar, About keeps the 400px tour video, Contact leads with the tilted WhatsApp card beside a quiet rows list, and the order block puts the steps beside a 440px tilted chat.

Breakpoints:
- **1100px:** the nav tightens, the header button goes icon-only, the shelf drops to 3 columns, the footer to 2.
- **900px:** everything stacks. The hero sticker drops to one column at -0.6deg with an 8px edge and a 30px radius, and the stamp moves to the bottom-right at 84px. Tags become a straight 2-column grid with no rail or strings, alternating ±1.5deg; an odd last tag is centred. Page head stickers go straight. The chat tilts 1deg. The nav becomes a 4-up pill track, the floor line turns vertical, and the mobile dock appears.
- **520px:** body drops to 18px. The top bar shows only the number. The hero action runs full width and the header button hides.

## Elevation & Depth

Depth comes from objects placed on the page. Anything hand-placed (the hero sticker, frames, the scattered photos, the chat, the map, media pairs, mosaic photos) casts a soft neutral drop with a large negative spread, so it seems to rest just above the page. Structural pieces stay flat and are drawn with a 1px hairline: rows, shelves, lists, chips, buttons, tags. Hanging tags read as depth through their string and punch hole, not a shadow.

### Shadow Vocabulary
- **Sticker drop** (`box-shadow: 0 30px 60px -36px rgb(17 20 26 / 0.5)`): the hero sticker.
- **Frame drop** (`box-shadow: 0 22px 40px -26px rgb(17 20 26 / 0.55)`): framed photos, maps, media pairs. Mosaic photos use a slightly smaller drop (`0 20px 36px -26px`).
- **Chat drop** (`box-shadow: 0 26px 50px -30px rgb(17 20 26 / 0.55)`): the example chat.
- **Dock float** (`box-shadow: 0 10px 28px -12px rgb(17 20 26 / 0.45)`): the two mobile dock buttons.

### Named Rules
**The Soft Drop Rule.** Only placed objects cast shadows, and every shadow is neutral rgb(17 20 26), soft, and has a negative spread. Never use a tinted, hard or offset shadow. Rows, shelves, buttons, chips and tags stay flat.

## Shapes

The shape language is rounded and sorted by role:
- **10px:** controls (buttons, category rows, the skip link).
- **14px:** structural panels (the shelf, rows panels, lists, notes, the dock).
- **24px:** hanging tags (16px for the photo inside).
- **26px:** photo frames (18px for the image inside the edge).
- **30px:** the contact WhatsApp sticker and the photo inside the hero (22px for its image).
- **34px:** inner page head stickers (26px under 900px).
- **40px:** the home hero sticker (30px under 900px).
- **999px pills:** nav, chips, the tour tag, the hero action.
- **Circles:** the logo stamp, floor-line stops, step discs, the chat avatar.
- **8px:** chat bubbles.

### Named Rules
**The Sticker Edge Rule.** Every placed object wears a thick edge: 8px of paper, or 10px on the hero sticker. Within a group, one or two objects may swap white for a logo-blue or honey edge (the hero photo, the tour video, two of the three scattered photos), but never all of them. A sticker that sits on a coloured ground (the hero sticker, the page head, the contact card) adds a 2px hairline ring outside its white edge. The inner image's radius is the outer radius minus the edge (26 → 18, 30 → 22).

**The Hand-Placed Tilt Rule.** Tilt depends on size. Big stickers (the hero, page heads, the contact card, the map) lean 0.6–1.4deg. Frames, media pairs, the chat and tour video lean 1.5–2.6deg. Hanging tags lean 1.5–4deg. Only the scattered snaps reach 5deg, and only the logo stamp goes to 12deg. Neighbours alternate direction, and a child may counter-rotate its parent (the hero sticker at -1.1deg, its photo at +2.6deg). Text never tilts on its own; it rides its sticker. Under 900px, tilts roughly halve and page heads go straight. Hover straightens only the hanging tags (0.9s expo-out); no other placed object rotates on hover.

## Components

### Top bar
An ink strip, 48px tall and centred, holding the address in on-dark 600 and the WhatsApp number as a honey link (underlined on hover). Under 520px only the number shows.

### Buttons
- **Shape:** gently rounded (10px), 56px tall (48px in the header), label 700 at 18px.
- **Primary:** honey with ink text; honey-lit on hover and focus; nudges down 1px when pressed.
- **Dark:** ink with white text, ink-lift on hover. Used for the header WhatsApp button and secondary CTAs.
- **Ghost:** transparent with a 1.5px hairline border; turns white with a muted border on hover.

### Header and Navigation
A sticky white 80px bar with a hairline bottom border. It holds the logo plate, the Baloo wordmark ("PET SHOP" in blue) with the Bangla name below in muted Anek, the pill nav and the dark WhatsApp button. Nav links are 48px muted pills that fill with sky on hover. The current page sits on the honey pill, which slides between links through View Transitions. Under 900px the nav becomes a 4-up track in a sky pill.

### Hero sticker
The home's signature: a honey panel with a 10px white edge, a 40px radius and a 2px hairline ring, carrying the sticker drop, tilted -1.1deg. Inside, the location chips turn white with ink text and blue numerals, the Bangla line turns ink, and the WhatsApp action becomes an ink pill: a honey glyph, "Order on WhatsApp" over the number, and an arrow, with ink-lift on hover. The photo sits in a blue-edged frame (30px) tilted +2.6deg, with the white tour tag at the bottom-left that turns honey on hover. A round 118px logo stamp, with a 6px blue ring and tilted 12deg, overlaps the top-right corner.

### Hanging category tags
Five white tags with a 2px ink outline and a 24px radius. Each has an ink punch hole at the top, a square photo, a Baloo title and a muted Bangla sub-label. They hang by 2px strings from a 12px blue rail, with staggered drops (0, 26, 8, 34, 12px) and tilts (-3, 3, -1.5, 4, -2.5deg) pivoting from the rail. On hover or focus a tag swings straight. Under 900px the rail and strings go away and the tags sit in two columns.

### Photo frames and scatter
A frame is an 8px white edge at a 26px radius over the photo (18px), with the frame drop. In the meow-babies section three frames scatter and overlap: a honey-edged snap at -5deg, a white one at +4deg, and a blue-edged one at -2deg on top. The same frame wraps the map (-1.4deg). On the shop page, media pairs alternate -1.5 and +2deg; on About, mosaic photos alternate -1.6 and +1.8deg and the tour video gets a blue 8px edge at -2deg. Captions stay below the photos, never on top.

### Page head sticker
On the inner pages, the head content sits on a sky sticker with an 8px white edge, a 2px hairline ring and a 34px radius, tilted -0.7deg. It goes straight under 900px.

### Location chips
White pills with a hairline border and a muted label; an inner sky pill holds the tabular numeral. They state where the shop is; they are not section labels.

### Category rows panel
A white 14px panel of 58px rows divided by hairlines, each with a 600 title, a muted sub-label and an arrow that slides 4px on hover over sky. It forms the shop's sticky sidebar, where the row in view turns honey, and the contact page's secondary channels. It stays straight and flat.

### Shelf
Real shop photos in one white panel with hairline dividers: 4 columns, dropping to 3 and then 2. Each 4:5 photo has a label: the brand in ink 700, the product in muted, and a blue "Ask price" link. Photos zoom to 1.04 on hover. It stays straight and flat.

### Steps and example chat
Steps use 48px honey discs with ink numerals and hairline separators. The chat is a WhatsApp mock in the borrowed palette, with an 8px white edge, the chat drop and a 2deg tilt.

### Contact WhatsApp card
A honey sticker with an 8px white edge, a 2px hairline ring and a 30px radius, tilted -1.2deg. It holds the glyph, the name, a line and the number in numerals up to 2.6rem, and turns honey-lit on hover. It sits beside a flat rows panel.

### Floor line
Four stops from the bus stand to Shop 122 on a 3px hairline rail. The stops are 34px ink-ringed circles, and the last is honey. A honey line draws along the rail on scroll and turns vertical on mobile.

### Footer
A deep blue ground with four columns: honey headings, on-dark links that turn honey and underline on hover, on-dark-muted text, and honey focus rings. A giant honey "kiki's" bigmark closes the page, centred.

### Mobile dock
Under 900px, a fixed honey "Order on WhatsApp" button and a 64px ink Messenger button, 60px tall at a 14px radius, with the dock float. It tucks away while the hero action is on screen.

### Motion
- **Easing:** expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`) throughout.
- **First viewport:** the hero sticker rises 24px once (0.9s), and its photo reveals from scale 1.03.
- **Scroll reveals:** items rise 20px or fade in, staggered among siblings, and only when JS is present.
- **Tags:** swing straight on hover (0.9s).
- **Page changes:** View Transitions keep the header still, slide the honey pill, sink the old page and raise the new one.
- **Reduced motion:** turns all of it off. Tilts stay, because they are static placement, not motion.

## Do's and Don'ts

### Do:
- **Do** give every placed object a thick edge (8px paper, 10px on the hero sticker) and a tilt from the Hand-Placed Tilt scale, alternating direction with its neighbours.
- **Do** keep text, rows, shelves and lists straight; let them ride a sticker rather than tilt on their own.
- **Do** halve tilts under 900px and straighten page heads.
- **Do** use only neutral rgb(17 20 26) drops with a negative spread, and only under placed objects.
- **Do** set H1, H2, the wordmark and tag titles in Baloo Da 2; set body and every Bangla line in Anek Bangla.
- **Do** keep honey for action, "you are here", the single hero sticker and the footer wordmark, always with ink text.
- **Do** invert the action to an ink pill when it sits on honey.
- **Do** let the owner's photos lead every image slot, with captions below, never on top (except the tour tag pill).
- **Do** keep every readable line at 18px or larger, every target at 48px or larger, contrast at WCAG AA, and content visible without JavaScript.

### Don't:
- **Don't** return to the navy signboard world, or drift into pastel paw-confetti pet styling.
- **Don't** tilt beyond 5deg (the logo stamp is the only exception) or tilt everything the same way.
- **Don't** use hard, offset or tinted shadows, or put shadows on buttons, chips, rows or shelves.
- **Don't** add a second honey sticker or fill tags, labels or captions with honey.
- **Don't** give every object in a group a coloured edge; most edges are white.
- **Don't** use the WhatsApp chat colours outside the example chat.
- **Don't** add a third typeface, or set Bangla text in Baloo Da 2.
- **Don't** put muted or blue text on honey; use ink only.
