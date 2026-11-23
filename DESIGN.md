---
name: Kiki's Pet Shop
description: A neighbourhood cat shop in navy, gold and cream, with frosted glass panels floating over the owner's sunlit photos; ordering is one tap away.
colors:
  navy: "#27307a"
  navy-lift: "#343e94"
  ink: "#1d2352"
  ink-muted: "#4c517a"
  gold: "#d7b35c"
  gold-lit: "#e4c77f"
  cream: "#f3e7c8"
  cream-light: "#fbf5e6"
  white: "#ffffff"
  hairline: "rgb(39 48 122 / 0.14)"
  glass: "rgb(255 251 240 / 0.58)"
  glass-strong: "rgb(255 251 240 / 0.78)"
  glass-edge: "rgb(255 255 255 / 0.7)"
  on-navy-muted: "#c9cdea"
  chat-wallpaper: "#efeae2"
  chat-bar: "#075e54"
  chat-bubble-out: "#d9fdd3"
  chat-ink: "#111b21"
  chat-meta: "#54656f"
  chat-time: "#4f5d66"
typography:
  display:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.2vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.35rem + 1.8vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  wordmark:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1
  title:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.2rem"
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
  control: "14px"
  inner: "18px"
  bar: "22px"
  card: "26px"
  hero-mobile: "28px"
  feature: "32px"
  stage: "36px"
  pill: "999px"
spacing:
  wrap: "1240px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(40px, 5vw, 72px)"
  panel: "clamp(24px, 3.5vw, 48px)"
  head-gap: "clamp(20px, 2.5vw, 32px)"
  target: "48px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.5em"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.gold-lit}"
  button-dark:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.cream-light}"
    rounded: "{rounded.pill}"
    padding: "0 1.5em"
    height: "56px"
  button-dark-hover:
    backgroundColor: "{colors.navy-lift}"
  button-ghost:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 1.5em"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.glass-strong}"
  glass-panel:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.card}"
    padding: "{spacing.panel}"
  header:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.bar}"
    height: "72px"
  nav-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
    typography: "{typography.label}"
  nav-link-active:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  hero-card:
    backgroundColor: "{colors.glass-strong}"
    rounded: "{rounded.card}"
    padding: "clamp(22px, 3vw, 40px)"
    width: "600px"
  hero-action:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.cream-light}"
    rounded: "{rounded.pill}"
    padding: "12px 24px 12px 16px"
  hero-action-hover:
    backgroundColor: "{colors.navy-lift}"
  glass-tag:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    height: "48px"
  glass-tag-hover:
    backgroundColor: "{colors.gold}"
  category-pill:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 22px 8px 8px"
  category-pill-hover:
    backgroundColor: "{colors.glass-strong}"
  category-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.inner}"
    padding: "0 20px"
    height: "56px"
  category-row-here:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  shelf-item:
    backgroundColor: "rgb(255 255 255 / 0.7)"
    textColor: "{colors.ink}"
    rounded: "{rounded.inner}"
  whatsapp-card:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 3vw, 36px)"
  whatsapp-card-hover:
    backgroundColor: "{colors.gold-lit}"
  chat-bubble-in:
    backgroundColor: "{colors.white}"
    textColor: "{colors.chat-ink}"
    rounded: "{rounded.bubble}"
    padding: "8px 12px 20px"
  chat-bubble-out:
    backgroundColor: "{colors.chat-bubble-out}"
    textColor: "{colors.chat-ink}"
    rounded: "{rounded.bubble}"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy-muted}"
---

# Design System: Kiki's Pet Shop

## Overview

**Creative North Star: "Frosted Glass in Warm Light"**

A neighbourhood cat shop in the client's own palette: deep navy, soft gold and warm cream. The page ground is cream, lit from behind by four large, soft radial pools of gold and navy that stay fixed while the page scrolls. Over that light, the interface floats as frosted glass: the header, the hero card, the category pills, the shelf case, the order panel, the lists, the inner page heads and the notes are all translucent warm-white panels with a white edge, an 18px blur, a thin highlight along the top and a soft navy lift underneath. The owner's photos are the only opaque, saturated things on the page, and the glass is there to let them and the light show through.

Navy carries the structure: headings, dark buttons, the WhatsApp action and the footer. Gold marks where to act and where you are: the primary button, the sliding nav pill, the shop row in view, the contact WhatsApp card, step discs and the last floor-line stop. Everything else is calm. One typeface, Anek Bangla, carries every role in English and Bangla. Everything sits straight, with no tilts, stickers or hand-placed objects.

Density stays compact and legible for readers 30 and over on phones. Body text is 19px, readable text never goes below 18px, and every target is at least 48px. The user rejected the previous sticker-and-hanging-tag layout because it copied suirenbd.com; this world is the client's own palette plus glass.

**Key Characteristics:**
- Frosted glass panels (warm-white at 58% or 78%, 18px blur, 1.35 saturation, white edge, top highlight, soft navy lift) over a cream ground with fixed gold and navy light.
- Navy for structure, gold for "act here" and "you are here", always with dark text on gold.
- One face: Anek Bangla, 700 for headings, 500 for Bangla lines, 400 for body.
- Generous rounding (14 to 36px) and 999px pills; everything sits straight.
- Full-bleed photo hero with a frosted card bottom-left.
- The owner's photos lead every image slot.

## Colors

Navy and gold on warm cream, with ink and muted text that lean toward the navy, and a translucent warm-white for glass.

### Primary
- **Shop Navy** (navy): headings, the dark button, the hero WhatsApp action, the numeral badges in the location chips, icons and arrows, the focus outline, floor-line rings, the "Messenger" text button, and the footer ground. It is also the scrollbar thumb.
- **Navy Lift** (navy-lift): the hover state of every navy button and of the WhatsApp action. It is never a resting colour.

### Secondary
- **Soft Gold** (gold): the primary button, the sliding nav pill, the shop row in view, the contact WhatsApp card, step discs, the last floor-line stop, the hover of the glass tag, the WhatsApp glyph on the navy action, footer headings and footer link hovers, the dock's order button, text selection and the skip link. Text on gold is always ink.
- **Gold, Lit** (gold-lit): the hover and focus state of every gold surface.

### Neutral
- **Cream** (cream): the page ground, under the fixed radial light.
- **Light Cream** (cream-light): text on navy, the floor-line stop fill, the map placeholder, and the solid fallback for glass where backdrop blur is unsupported.
- **Navy Ink** (ink): body text and text on gold.
- **Muted Ink** (ink-muted): secondary text, Bangla lines, leads, sub-labels and idle nav links (about 6:1 on cream).
- **Hairline** (hairline): 1px dividers between rows, steps and list items, and the floor-line rail.
- **Glass** (glass) and **Glass, Strong** (glass-strong): the two frosted fills. The strong fill sits where text must stay crisp over a photo (the hero card, the tour tag) and on hover of glass pills and the ghost button.
- **Glass Edge** (glass-edge): the 1px white border on every glass surface.
- **On-navy Muted** (on-navy-muted): footer body text and base links.
- **White** (white): the logo plate and chat bubbles. Shelf items and the location chips use white at 70%.

### Borrowed: WhatsApp chat palette (component-scoped)
The example chat uses WhatsApp's own colours so it reads as a real conversation: wallpaper (chat-wallpaper), header bar (chat-bar), outgoing bubble (chat-bubble-out), incoming bubble (white), text (chat-ink), caption (chat-meta), timestamps (chat-time). These appear only inside the chat.

### Elementor mapping
Global Colors: Primary = navy, Secondary = gold, Text = ink, Accent = gold. Custom: Muted text = ink-muted, Gold lit = gold-lit, Page = cream, Light cream = cream-light. Glass, hairline and the chat palette live in the stylesheet.

### Named Rules
**The Gold Means Go Rule.** Gold marks an action or "you are here", plus the footer headings. It never fills captions, labels or ordinary sections, and text on gold is always ink.

**The Navy Action Rule.** The hero's WhatsApp action is a navy pill with a gold glyph, because it sits on glass over a photo where gold would wash out. Elsewhere the primary call is gold.

## Typography

**Display Font:** Anek Bangla (with Noto Sans Bengali, system-ui)
**Body Font:** Anek Bangla, weights 400–800
**Label/Mono Font:** none distinct; numerals use tabular lining figures

**Character:** One Bengali-capable sans in several weights. Headings are 700 with slight negative tracking and balanced wrapping; Bangla lines run at 500 with no tracking, so the two languages read as one voice. Elementor: all four Global Fonts are Anek Bangla.

### Hierarchy
- **Display** (700, clamp 2.5–4.1rem, 1.02, -0.015em): the one H1 per page, in navy.
- **Headline** (700, clamp 1.9–2.9rem, 1.05, -0.015em): section H2s, each followed by a Bangla line.
- **Wordmark** (800, 1.35rem): "KIKI'S PET SHOP" in the header and footer, with the Bangla name below in 500 muted.
- **Title** (700, 1.15–1.5rem): pill names, shelf brands, step titles, floor-line stops, channel names.
- **Lead** (400, clamp 1.2–1.4rem, 1.5, muted): the inner-page intro, max 60ch.
- **Body** (400, 19px, 1.6): paragraphs at max 68ch. Drops to 18px under 520px.
- **Bangla line** (500, 1.2–1.45rem, muted, no tracking): the Bangla echo under the H1 and every H2.
- **Label** (600, 18px): nav, chips, sub-labels, captions, footer text. Buttons use 700.
- **Numeral** (700, tabular lining, 0.01em): phone numbers and the 2F / 122 badges.

### Named Rules
**The One Voice Rule.** Anek Bangla is the only typeface, at normal width. Hierarchy comes from size and weight, never from a second face.

**The Eighteen Floor Rule.** No readable text below 18px (1.125rem). The only exception is the decorative chat timestamps (0.875rem), which are aria-hidden.

## Layout

A centred 1240px wrap with a fluid gutter (16–40px). The header is a floating glass bar inside the wrap, 72px tall, sticky 12px from the top. Sections use compact padding (40–72px), and a section that follows another drops its top padding. Section heads are an H2, a Bangla line and one muted paragraph, max 760px wide.

The home hero is a full photo stage inside the wrap: the photo covers a rounded 36px area (560–780px tall, up to 76svh), and a frosted card up to 600px wide sits at the bottom-left holding the location chips, the H1, the Bangla line, the navy WhatsApp action and a Messenger text link. A frosted "Watch the shop tour" tag sits at the top-right. Below it, the categories are a wrapping row of glass pills. The shelf is one glass case of four photo items. The meow-babies section pairs a big photo with a glass card and two smaller photos. The order section is a single glass panel holding the steps beside the example chat. Visit pairs a glass address list with the map, followed by the floor line. Shop, About and Contact open on a glass page head; the shop page keeps a 290px sticky category sidebar, About has a 400px tour video, and Contact leads with the gold WhatsApp card beside a glass rows list.

Breakpoints:
- **1100px:** nav links tighten, the header button goes icon-only, the shop shelf drops to 3 columns and the footer to 2.
- **900px:** everything stacks. The header stops sticking and the nav becomes a 4-up pill track. The hero photo becomes a 4:3.6 image (28px radius) and the glass card overlaps its bottom by 64px. The shelf goes to 2 columns, the floor line turns vertical, the fixed background light scrolls with the page, and the mobile dock appears.
- **520px:** body drops to 18px, the header button hides, pills stack full width, and the hero action runs full width.

## Elevation & Depth

Depth comes from glass over light. The cream page carries fixed radial pools of gold and navy, and every glass panel blurs and saturates what is behind it, so panels read as lifted sheets rather than boxes. Panels get one soft navy lift; opaque photos and the chat get the same lift so they sit at the same height. Rows, steps and list items inside a panel stay flat and are divided by hairlines.

### Shadow Vocabulary
- **Navy lift** (`box-shadow: 0 22px 50px -32px rgb(29 35 82 / 0.55)`): glass panels, the hero stage, feature photos, the map, the chat, media pairs, mosaic tiles, the contact WhatsApp card.
- **Glass highlight** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.75)`): paired with the navy lift on the full glass recipe (header, hero card, pills, the feature card, the order panel, page heads).
- **Backdrop** (`backdrop-filter: blur(18px) saturate(1.35)`): every glass surface, with a solid light-cream fallback where unsupported.

### Named Rules
**The Something-to-Blur Rule.** Glass only works over something. Keep the fixed radial light on the page ground, or a photo, behind every glass panel; a glass panel on flat cream with nothing behind it is just a pale box.

**The One Lift Rule.** There is one shadow, soft and navy-tinted with a large negative spread. Never use a hard, offset or neutral-black shadow.

## Shapes

Generous rounding, sorted by size, with no tilts:
- **8px:** chat bubbles (and the focus outline's corner).
- **14px:** controls: the skip link and the logo plate.
- **18px:** items inside a panel: shelf items and category rows.
- **22px:** the header bar and the chat.
- **26px:** glass panels and cards, the map, media pairs and mosaic tiles.
- **28px:** the hero photo under 900px.
- **32px:** page heads and the big feature photo.
- **36px:** the hero stage.
- **999px pills:** buttons, nav links, the gold "you are here" pill, location chips, category pills, the glass tag, the WhatsApp action, the dock buttons.
- **Circles:** pill thumbnails, step discs, floor-line stops, the chat avatar.

### Named Rules
**The Straight Table Rule.** Nothing tilts and nothing is stuck on. Shape character comes from rounding and glass, not from rotation, thick edges or overlapping objects.

## Components

### Buttons
- **Shape:** full pills (999px), 56px tall (48px in the header), label 700 at 18px.
- **Primary:** gold with ink text; gold-lit on hover and focus; nudges down 1px when pressed.
- **Dark:** navy with light cream text, navy-lift on hover. Used for the header WhatsApp button and secondary calls.
- **Ghost:** glass with navy text, a white edge and backdrop blur; glass-strong on hover.

### Header and Navigation
A floating glass bar (22px radius, 72px tall) sticky 12px from the top, holding the logo plate, the wordmark with its Bangla name, the pill nav and the dark WhatsApp button. Nav links are 48px muted pills that brighten on hover. The current page sits on the gold pill, which slides between links through View Transitions. Under 900px the nav becomes a 4-up track in a translucent white pill.

### Hero
The home's signature: a full photo stage (36px radius, navy lift) with the frosted card bottom-left in glass-strong. The card holds white-70% location chips with navy numeral badges, the H1, the Bangla line, and the navy WhatsApp action: a gold glyph, "Order on WhatsApp" over the number, and an arrow that slides 4px on hover. A frosted "Watch the shop tour" tag sits top-right and turns gold on hover.

### Glass category pills
Glass pills with a 64px round photo, a navy title, a muted Bangla sub-label and a navy arrow. On hover they turn glass-strong, lift 2px and slide the arrow.

### Shelf
Real shop photos in one glass case (26px, 10px padding): four items of white at 70% (18px radius), each with a 4:5 photo, the brand in navy 700, the product in muted, and a navy "Ask price" link. Photos zoom to 1.04 on hover. It drops to 3 and then 2 columns.

### Glass lists
Address lists, the About list, and category rows share one form: a glass panel (26px) with 1px hairline dividers and navy icons. Category rows are 56px with a 600 title, a muted sub-label and an arrow; they brighten on hover, and in the shop's sticky sidebar the row in view turns gold.

### Page head
On the inner pages the head content sits in a glass panel (32px) with the full glass recipe.

### Steps and example chat
Steps use 48px gold discs with ink numerals and hairline separators. The chat is a WhatsApp mock in the borrowed palette (22px, navy lift), set beside the steps inside the glass order panel.

### Contact WhatsApp card
An opaque gold card (26px, navy lift) holding the glyph, the name, a line and the number in numerals up to 2.6rem; gold-lit on hover. It sits beside a glass rows list.

### Floor line
Four stops from the bus stand to Shop 122 on a 3px hairline rail. Stops are 34px light-cream circles with a 3px navy ring; the last is gold. A gold line draws along the rail on scroll and turns vertical on mobile.

### Footer
A navy ground with four columns: gold headings, light-cream links that turn gold and underline on hover, on-navy-muted text and gold focus rings, closing on a hairline-divided base row.

### Mobile dock
Under 900px, a fixed gold "Order on WhatsApp" pill and a 64px navy Messenger pill, 60px tall. It tucks away while the hero action is on screen.

### Motion
- **Easing:** expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`) throughout; in-out (`cubic-bezier(0.65, 0, 0.35, 1)`) for the outgoing page.
- **First viewport:** the hero photo settles from scale 1.04 (1.6s), the card rises 24px (0.9s, 0.2s delay), then the tour tag rises (0.45s delay).
- **Scroll reveals:** items rise 20px or fade in, staggered 80ms among siblings; steps slide in one by one. Only when JS is present.
- **Floor line:** the gold line draws over 1.6s and the stops pop in one after another.
- **Page changes:** cross-document View Transitions keep the header still, slide the gold pill, sink the old page and raise the new one.
- **Reduced motion:** turns all of it off and shows everything at rest.

## Do's and Don'ts

### Do:
- **Do** build every floating surface from the one glass recipe: glass or glass-strong fill, 18px blur at 1.35 saturation, 1px white edge, top highlight and the navy lift.
- **Do** keep the fixed gold and navy light on the cream ground, or a photo, behind glass.
- **Do** use glass-strong wherever text sits over a photo.
- **Do** keep gold for action and "you are here", always with ink text.
- **Do** set everything in Anek Bangla: 700 headings, 500 Bangla lines, 400 body.
- **Do** let the owner's photos lead every image slot, with captions below, never on top (except the tour tag).
- **Do** keep every readable line at 18px or larger, every target at 48px or larger, contrast at WCAG AA, and content visible without JavaScript.

### Don't:
- **Don't** bring back stickers, hanging tags, a logo stamp, tilts, thick white edges or a footer wordmark; that layout copied suirenbd.com and was rejected.
- **Don't** add a second typeface.
- **Don't** use hard, offset or neutral-black shadows.
- **Don't** put muted or navy-lift text on gold; use ink only.
- **Don't** use the WhatsApp chat colours outside the example chat.
