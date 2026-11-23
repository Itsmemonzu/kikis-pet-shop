---
name: Kiki's Pet Shop
description: A neighbourhood cat shop in navy, gold and cream; flat light-cream paper on a plain cream ground, with frosted glass kept for the few layers that float; ordering is one tap away.
colors:
  navy: "#27307a"
  navy-lift: "#343e94"
  ink: "#1d2352"
  ink-muted: "#4c517a"
  gold: "#f0cc6e"
  gold-lit: "#f6dc95"
  gold-deep: "#a07a1f"
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
  body-bn:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.7
  tagline-bn:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.05rem + 0.5vw, 1.45rem)"
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
  item: "12px"
  control: "14px"
  card: "18px"
  bar: "22px"
  stage: "24px"
  tabbar: "26px"
  hero-mobile: "28px"
  pill: "999px"
spacing:
  wrap: "clamp(1240px, 76vw, 1360px)"
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
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 1.5em"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
  paper-panel:
    backgroundColor: "{colors.cream-light}"
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
  lang-switch:
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "48px"
  tabbar:
    backgroundColor: "{colors.glass-strong}"
    rounded: "{rounded.tabbar}"
    padding: "6px"
  tabbar-item:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.card}"
    height: "58px"
  tabbar-item-active:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  tabbar-order:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.gold}"
    size: "58px"
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
  category-photo:
    textColor: "{colors.navy}"
    size: "clamp(88px, 9vw, 120px)"
  category-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0 20px"
    height: "56px"
  category-row-here:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  shelf-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.item}"
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

**Creative North Star: "Paper on the Counter, Glass in the Air"**

A neighbourhood cat shop in the client's own palette: deep navy, bright gold and warm cream. The page ground is plain cream with no coloured light behind it. Content that stays put sits on flat light-cream paper: a 1px navy hairline, 18px corners, no shadow and no blur. Frosted glass is kept for the few layers that genuinely float over content: the sticky header, the phone tab bar, the hero card over the shop photo and the small tags pinned on photos. Only those floating layers cast a shadow. The owner's photos are the only saturated things on the page, set flat with 18px corners and no drop shadow.

Navy carries the structure: headings, dark buttons, the WhatsApp action, the tab bar's raised Order button and the footer. Gold marks where to act and where you are: the primary button, the sliding nav pill, the active tab, the shop row in view, the contact WhatsApp card, step discs and the last floor-line stop. One typeface, Anek Bangla, carries every role in English and Bangla. Everything sits straight.

Density stays compact and legible for readers 30 and over on phones. Body text is 19px, readable text is meant never to go below 18px, and every target is at least 48px. English and Bangla are separate twin pages (the Bangla set lives under `bn/`); English pages keep Bangla only for the hero tagline and the footer tagline, and the language switch crossfades between twins in place. The user rejected an earlier sticker-and-hanging-tag layout because it copied suirenbd.com, and a later all-glass pass because it read as generated; this world is the client's palette, flat paper and a little glass.

**Key Characteristics:**
- Plain cream ground; static panels are flat light-cream paper with a navy hairline and 18px corners.
- Glass (warm-white 58% or 78%, 18px blur, 1.35 saturation, white edge) only on layers that float: header, tab bar, hero card, photo tags.
- One soft navy lift, only under the header, the tab bar (and its Order disc) and the hero card.
- Navy for structure, gold for "act here" and "you are here", always with ink text on gold.
- One face: Anek Bangla; Bangla pages get taller line-heights and no tracking.
- Photos flat, 18px corners (hero stage 24px); categories are round photos with labels.
- Phone-first: under 900px the top nav hides and a bottom tab bar with a raised navy Order button takes over.

## Colors

Navy and bright gold on plain cream, with ink and muted text that lean toward the navy, light-cream paper for panels and a translucent warm-white for the few floating layers.

### Primary
- **Shop Navy** (navy): headings, the dark button, the hero WhatsApp action, the tab bar's Order disc, numeral badges in the location chips, icons and arrows, the focus outline, floor-line rings, the ghost button text, the language switch and the footer ground. It is also the scrollbar thumb.
- **Navy Lift** (navy-lift): the hover state of every navy button and of the WhatsApp action. Never a resting colour.

### Secondary
- **Bright Gold** (gold): the primary button, the sliding nav pill, the active tab's icon pill, the shop row in view, the contact WhatsApp card, step discs, the last floor-line stop, the floor-line draw, the glass tag's hover, the WhatsApp glyph on navy, footer headings and footer link hovers, text selection and the skip link. Text on gold is always ink.
- **Gold, Lit** (gold-lit): the hover and focus state of every gold surface.
- **Deep Gold** (gold-deep): only the "PET SHOP" half of the header wordmark on cream, where bright gold would not hold contrast. On the navy footer the same half is bright gold.

### Neutral
- **Cream** (cream): the page ground, plain and flat.
- **Light Cream** (cream-light): the paper fill of every static panel, text on navy, the floor-line stop fill, the ring around the tab bar's Order disc, and the solid fallback for glass where backdrop blur is unsupported.
- **Navy Ink** (ink): body text, text on gold, and the dark ground behind the About video.
- **Muted Ink** (ink-muted): secondary text, leads, section-head paragraphs, sub-labels, idle nav links and idle tabs (about 6:1 on cream).
- **Hairline** (hairline): the 1px border of every paper panel, row dividers, the inner page-head rule, the floor-line rail, the language switch outline and the ring around category photos.
- **Glass** (glass) and **Glass, Strong** (glass-strong): the two frosted fills. The header uses glass; the tab bar, hero card and photo tags use glass-strong so text stays crisp over moving content or a photo.
- **Glass Edge** (glass-edge): the 1px white border on glass.
- **On-navy Muted** (on-navy-muted): footer body text and base links.
- **White** (white): shelf items, the logo plate, chat bubbles, the 3px ring on category photos and the ghost button's hover.

### Borrowed: WhatsApp chat palette (component-scoped)
The example chat uses WhatsApp's own colours so it reads as a real conversation: wallpaper (chat-wallpaper), header bar (chat-bar), outgoing bubble (chat-bubble-out), incoming bubble (white), text (chat-ink), caption (chat-meta), timestamps (chat-time). These appear only inside the chat.

### Elementor mapping
Global Colors: Primary = navy, Secondary = gold, Text = ink, Accent = gold. Custom: Muted text = ink-muted, Gold lit = gold-lit, Page = cream, Light cream = cream-light. Glass, hairline, deep gold and the chat palette live in the stylesheet.

### Named Rules
**The Gold Means Go Rule.** Gold marks an action or "you are here", plus the footer headings. It never fills captions, labels or ordinary sections, and text on gold is always ink.

**The Navy Action Rule.** The WhatsApp action that sits on glass (the hero action, the tab bar's Order disc) is navy with a gold glyph, because gold would wash out on glass over a photo. Elsewhere the primary call is gold.

## Typography

**Display Font:** Anek Bangla (with Noto Sans Bengali, system-ui)
**Body Font:** Anek Bangla, weights 400–800
**Label/Mono Font:** none distinct; numerals use tabular lining figures

**Character:** One Bengali-capable sans in several weights. Headings are 700 with slight negative tracking and balanced wrapping in English; on Bangla pages tracking goes to zero and lines open up so vowel signs above and below the letters never collide. Elementor: all four Global Fonts are Anek Bangla.

### Hierarchy
- **Display** (700, clamp 2.5–4.1rem, 1.02, -0.015em): the one H1 per page, in navy. Bangla: 1.32, no tracking.
- **Headline** (700, clamp 1.9–2.9rem, 1.05, -0.015em): section H2s. Bangla: 1.3, no tracking.
- **Wordmark** (800, 1.35rem): "KIKI'S PET SHOP" in the header and footer, with the Bangla name below in 500 muted.
- **Title** (700, 1.15–1.5rem): shelf brands, step titles, floor-line stops, channel names, category labels.
- **Lead** (400, clamp 1.2–1.4rem, 1.5, muted): the inner-page intro, max 60ch. Section-head paragraphs run at 1.25rem muted.
- **Body** (400, 19px, 1.6): paragraphs at max 68ch; 18px under 520px. Bangla pages: 1.7.
- **Bangla tagline** (500, clamp 1.2–1.45rem, muted, no tracking): the one Bangla line on English pages, under the hero H1; the footer tagline carries the same Bangla sentence at body size.
- **Label** (600, 18px): nav, chips, sub-labels, captions, footer text. Buttons, the language switch and tags use 700. Compact Bangla labels (buttons, rows, tags, chips, step and floor titles) run at 1.45.
- **Numeral** (700, tabular lining, 0.01em): phone numbers and the 2F / 122 badges.

### Named Rules
**The One Voice Rule.** Anek Bangla is the only typeface, at normal width. Hierarchy comes from size and weight, never from a second face.

**The Eighteen Floor Rule.** No readable text below 18px (1.125rem). The only exception is the decorative chat timestamps (0.875rem), which are aria-hidden.

**The Twin Page Rule.** Each language is its own page. English pages do not echo Bangla under headings; Bangla appears on English pages only as the hero tagline and the footer tagline.

## Layout

A centred wrap that grows with large screens (clamp 1240px, 76vw, 1360px) with a fluid gutter (16–40px). The header is a floating glass bar inside the wrap, 72px tall, sticky 12px from the top. Sections use compact padding (40–72px), and a section that follows another drops its top padding. Section heads are an H2 and one muted paragraph, max 760px wide.

The home hero is a full photo stage (24px corners, 560–780px tall, up to 76svh) with the glass card up to 600px wide at the bottom-left holding the location chips, the H1, the Bangla tagline, the navy WhatsApp action and a Messenger text link; a glass "Watch the shop tour" tag sits top-right. Categories follow as a wrapping row of round photos with labels. The shelf is one paper case of four photo items. The meow-babies section pairs a big photo with a paper card and two smaller photos. The order section is a single paper panel holding the steps beside the example chat. Visit pairs a paper address list with a map embedding the shop's Google listing, followed by the floor line. Shop, About and Contact open on a plain-type page head closed by a bottom hairline; the shop page keeps a 290px sticky category sidebar, About has a 400px tour video, and Contact leads with the gold WhatsApp card beside a paper rows list.

Breakpoints:
- **1100px:** nav links tighten, the header button goes icon-only, the shop sidebar narrows to 240px, the shop shelf drops to 3 columns and the footer to 2.
- **900px:** everything stacks. The top nav hides; the header becomes a compact 60px sticky bar (logo and language switch) 8px from the top, and a fixed glass tab bar sits at the bottom (Home, Shop, Order, About, Contact) clear of the safe-area inset. The hero photo becomes a 4:3.6 image (28px corners) and the glass card overlaps its bottom by 64px. The shelf goes to 2 columns and the floor line turns vertical.
- **620px:** categories become a centred 3-up grid of 88px round photos.
- **520px:** body drops to 18px, the header WhatsApp button hides, rows stack their sub-label, and the hero action runs full width.

## Elevation & Depth

The page is flat. Cream ground, light-cream paper with a hairline, and flat photos all sit on one plane; panels separate from the ground by tone and the hairline, never by shadow. Depth appears only where something actually floats over content, and there it is glass plus one soft navy lift.

### Shadow Vocabulary
- **Navy lift** (`box-shadow: 0 14px 34px -22px rgb(29 35 82 / 0.45)`): only the header, the tab bar, the tab bar's raised Order disc and the hero card.
- **Glass highlight** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.75)`): paired with the navy lift on the glass recipe.
- **Backdrop** (`backdrop-filter: blur(18px) saturate(1.35)`): every glass surface including photo tags, with a solid light-cream fallback where unsupported.

### Named Rules
**The Floating Glass Rule.** Glass is reserved for layers that float over content: the sticky header, the phone tab bar, the hero card over the photo and tags pinned on photos. Anything that stays in the page flow (shelf, lists, notes, address, rows, order panel, feature card, page heads) is flat paper. If it doesn't move over something, it isn't glass.

**The Only-Floaters-Lift Rule.** There is one shadow, soft and navy-tinted with a large negative spread, and only floating layers carry it. Photos, media, the map, the chat and paper panels have none. Never use a hard, offset or neutral-black shadow.

## Shapes

Gentle, consistent rounding with no tilts:
- **8px:** chat bubbles (and the focus outline's corner).
- **12px:** shelf items inside the paper case.
- **14px:** controls: the skip link and the logo plate.
- **18px:** the default corner: paper panels, the hero card, photos and media, the map, the chat, the WhatsApp card, category rows and tab items.
- **22px:** the header bar.
- **24px:** the hero stage.
- **26px:** the tab bar.
- **28px:** the hero photo under 900px.
- **999px pills:** buttons, nav links, the gold "you are here" pill, the language switch, location chips, the glass tag, the WhatsApp action, tab icon pills.
- **Circles:** category photos (3px white ring plus a hairline), step discs, floor-line stops, the tab bar's Order disc, the chat avatar.

### Named Rules
**The Straight Table Rule.** Nothing tilts and nothing is stuck on. Shape character comes from rounding, paper and the hairline, not from rotation, thick edges or overlapping objects.

## Components

### Buttons
- **Shape:** full pills (999px), 56px tall (48px in the header), label 700 at 18px.
- **Primary:** gold with ink text; gold-lit on hover and focus; nudges down 1px when pressed.
- **Dark:** navy with light-cream text, navy-lift on hover. Used for the header WhatsApp button and secondary calls.
- **Ghost:** transparent with navy text and a 1.5px navy outline at 35%; fills white on hover.

### Header and Navigation
A floating glass bar (22px, 72px tall, glass fill, white edge, highlight and lift) sticky 12px from the top, holding the logo plate, the wordmark with its Bangla name, the pill nav, the language switch and the dark WhatsApp button. Nav links are 48px muted pills that brighten on hover; the current page sits on the gold pill, which slides between links through View Transitions. Under 900px the nav hides and the bar shrinks to 60px.

### Language switch
A 48px outlined pill (hairline border, navy 700 text, a language icon and the other language's name) that turns white-60% on hover. With JavaScript it prefetches the twin page and swaps it in place with a calm crossfade (out 0.22s, in 0.38s), keeping the scroll position and replaying nothing; without it, it is a plain link.

### Tab bar (phones)
Under 900px, a fixed glass-strong bar (26px, 6px padding, lift) with five 58px tabs: icon over a 16px label, muted at rest. The current tab turns its icon pill gold with ink and its label navy. The middle tab is the raised Order button: a 58px navy disc with a gold WhatsApp glyph, lifted 30px above the bar, ringed 4px in light cream and carrying the lift.

### Hero
The home's signature: a full photo stage (24px) with the glass-strong card bottom-left. The card holds white-70% location chips with navy numeral badges, the H1, the Bangla tagline and the navy WhatsApp action: a gold glyph, "Order on WhatsApp" over the number, and an arrow that slides 4px on hover. The glass tour tag sits top-right and turns gold on hover.

### Categories
Round photos (88–120px) with a 3px white ring and a hairline, a navy 700 label below and no frame around the pair. On hover the photo scales to 1.05 and the label underlines; on phones it presses to 0.96.

### Paper panels and lists
Shelf case, address list, About list, notes, category rows, the feature card and the order panel share one material: light-cream fill, 1px hairline border, 18px corners, no shadow. Rows inside are divided by hairlines with navy icons. Category rows are 56px with a 600 title, a muted sub-label and an arrow; they brighten to white-60% on hover, and in the shop's sticky sidebar the row in view turns gold.

### Shelf
Real shop photos in one paper case (10px padding): four white items (12px) each with a 4:5 photo, the brand in navy 700, the product in muted, and a navy "Ask price" link whose arrow slides. Photos zoom to 1.04 on hover. It drops to 3 and then 2 columns.

### Page head
Inner pages open on plain type: the H1, a muted lead (max 60ch) and any notes, closed by a 1px hairline along the bottom. No panel.

### Steps and example chat
Steps use 48px gold discs with ink numerals and hairline separators. The chat is a WhatsApp mock in the borrowed palette (18px, hairline border, no shadow), set beside the steps inside the paper order panel.

### Contact WhatsApp card
An opaque gold card (18px, no shadow) holding the glyph, the name, a line and the number in numerals up to 2.6rem; gold-lit on hover. It sits beside a paper rows list.

### Map
A flat 18px frame (light-cream fill, hairline) embedding the shop's Google Maps listing, 380px tall (320px on phones).

### Floor line
Four stops from the bus stand to Shop 122 on a 3px hairline rail. Stops are 34px light-cream circles with a 3px navy ring; the last is gold. A gold line draws along the rail on scroll and turns vertical on phones.

### Footer
A navy ground with four columns: the wordmark and the tagline (English with the Bangla sentence beneath), gold headings, light-cream links that turn gold and underline on hover, on-navy-muted text and gold focus rings, closing on a hairline-divided base row.

### Motion
- **Easing:** expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`) throughout; in-out (`cubic-bezier(0.65, 0, 0.35, 1)`) for anything leaving.
- **First viewport:** the hero photo settles from scale 1.04 (1.6s), the card rises 24px (0.9s, 0.2s delay), then the tour tag rises (0.45s delay).
- **Scroll reveals:** items rise 20px or fade in, staggered 80ms among siblings; steps slide in one by one. Only when JS is present.
- **Floor line:** the gold line draws over 1.6s and the stops pop in one after another.
- **Page changes:** cross-document View Transitions keep the header still, slide the gold pill, sink the old page and raise the new one.
- **Language switch:** a plain crossfade of header and page; the gold pill jumps, and intro, reveals and the floor line show at rest.
- **Reduced motion:** turns all of it off and shows everything at rest.

## Do's and Don'ts

### Do:
- **Do** use glass only for layers that float over content (header, tab bar, hero card, photo tags), built from the one recipe: glass or glass-strong fill, 18px blur at 1.35 saturation, 1px white edge, top highlight and the navy lift (tags skip the lift).
- **Do** build every static panel as paper: light-cream fill, 1px navy hairline, 18px corners, no shadow.
- **Do** keep the page ground plain cream.
- **Do** set photos flat with 18px corners (hero stage 24px) and no shadow.
- **Do** keep gold for action and "you are here", always with ink text.
- **Do** set everything in Anek Bangla, and give Bangla pages their taller line-heights with zero tracking.
- **Do** let the owner's photos lead every image slot, with captions below, never on top (except the tour tag).
- **Do** keep every readable line at 18px or larger, every target at 48px or larger, contrast at WCAG AA, and content visible without JavaScript.

### Don't:
- **Don't** put glass on panels that stay in the page flow, or bring back coloured radial light behind the page.
- **Don't** put shadows on photos, media, the map, the chat or paper panels.
- **Don't** bring back stickers, hanging tags, a logo stamp, tilts, thick white edges or a footer wordmark; that layout copied suirenbd.com and was rejected.
- **Don't** add Bangla sub-lines under English headings; the Bangla twin page carries the Bangla.
- **Don't** add a second typeface.
- **Don't** use hard, offset or neutral-black shadows.
- **Don't** put muted or navy-lift text on gold; use ink only.
- **Don't** use the WhatsApp chat colours outside the example chat.
