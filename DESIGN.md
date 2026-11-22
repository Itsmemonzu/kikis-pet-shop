---
name: Kiki's Pet Shop
description: A calm, sunlit neighbourhood pet shop; ordering is one honey-coloured button away.
colors:
  ink: "#2b2420"
  ink-muted: "#6b5f55"
  ink-lift: "#463b34"
  honey: "#f2b13d"
  honey-lit: "#f7c766"
  amber: "#a35d0c"
  paper: "#ffffff"
  stone: "#f5f0ea"
  hairline: "#e6dccf"
  cocoa: "#2b2420"
  on-dark: "#f3ece2"
  on-dark-muted: "#cdbfb0"
  chat-wallpaper: "#efeae2"
  chat-bar: "#075e54"
  chat-bubble-out: "#d9fdd3"
  chat-ink: "#111b21"
  chat-meta: "#54656f"
  chat-time: "#4f5d66"
typography:
  display:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.5rem + 3.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 100"
  headline:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 100"
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
    fontVariation: "'wdth' 100"
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
  pill: "999px"
spacing:
  wrap: "1240px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 128px)"
  target: "48px"
components:
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
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
  nav-link-active:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
  location-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "6px 14px 6px 6px"
  category-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "58px"
  category-row-hover:
    backgroundColor: "{colors.stone}"
  category-row-here:
    backgroundColor: "{colors.honey}"
  whatsapp-action:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.photo}"
    padding: "14px 22px 14px 18px"
  whatsapp-action-hover:
    backgroundColor: "{colors.honey-lit}"
  photo-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "48px"
  shelf-label:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "10px 14px 8px"
  contact-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.photo}"
    padding: "26px"
  contact-card-primary:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
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
    backgroundColor: "{colors.cocoa}"
    textColor: "{colors.on-dark-muted}"
---

# Design System: Kiki's Pet Shop

## Overview

**Creative North Star: "The Golden Hour Shop"**

A calm, sunlit neighbourhood pet shop. The page is clean white paper and warm stone; the warmth comes from the photographs (golden-hour cats supplied by the owner, and the shop's own shelf photos), and the interface stays quiet so they can carry it. One honey colour, taken from the light in those photos, marks the two things a visitor needs: where to act (WhatsApp) and where they are (the nav pill, the active category row).

Density is generous and legible, built for 30+ readers on phones: a 19px body, no secondary text below 18px, every target at least 48px. Surfaces are flat; panels are drawn with a 1px inset hairline, not shadows. Motion is soft expo-out arrival, plus one signature: the honey pill slides between nav links on page change while the content rises in, and the floor line draws itself on scroll.

The world replaces the retired navy directory-board, and it rejects the pastel, paw-confetti pet template.

**Key Characteristics:**
- White page, warm stone alternate sections, warm hairlines; cocoa only in the footer.
- One honey accent for action and "you are here"; amber only for accent text and icons on light grounds.
- User-supplied photography leads the imagery; colour lives in the photos.
- Anek Bangla at normal width for everything, English and Bangla side by side.
- Flat: the mobile dock is the only element that casts a shadow.
- Rounded but not soft: 10px controls, 14px photos and panels, pills for nav, chips and tags.

## Colors

A warm neutral ground with one honey accent from the photos' light; every neutral leans brown, never grey or blue.

### Primary
- **Golden Hour Honey** (honey): the WhatsApp action, primary buttons, the sliding nav pill, the active shop-category row, shelf labels, step discs, the last floor-line stop, the primary contact card, text selection. Ink on honey only (about 9:1).
- **Honey, Lit** (honey-lit): hover and focus state of every honey surface. Never a resting colour.

### Secondary
- **Burnt Amber** (amber): accent text and icons on light grounds: the "PET SHOP" word in the wordmark, address and feature-list icons, contact-card icons, the photo tag's play icon, the focus outline. About 5.1:1 on paper; keep it on paper rather than stone for any real text.

### Neutral
- **Warm Ink** (ink): headings, body text, the dark button, the dock's Messenger button. Also the Elementor Primary and Text colour.
- **Cocoa Muted** (ink-muted): secondary text, Bangla sub-lines, captions, idle nav links, row arrows (about 6.2:1 on paper, 5.4:1 on stone).
- **Ink Lift** (ink-lift): hover state of the dark button only.
- **Paper** (paper): the page ground and every panel (rows panel, shelf, lists, cards). Plain white on purpose; the photos bring the warmth.
- **Warm Stone** (stone): alternate sections, hover fill for nav links and rows, photo placeholders, notes, the mobile nav track, scrollbar track.
- **Hairline** (hairline): 1px dividers, inset panel outlines, the undrawn floor rail.
- **Cocoa** (cocoa): footer ground only (same value as ink). On it: **On-dark** (on-dark) for links and the wordmark, **On-dark Muted** (on-dark-muted) for body text, honey for column headings and hover.

### Borrowed: WhatsApp chat palette (component-scoped)
The example chat on the order section reproduces WhatsApp's own colours so it reads as a real conversation: wallpaper (chat-wallpaper), header bar (chat-bar) with white text, outgoing bubble (chat-bubble-out), incoming bubble (paper), message text (chat-ink), caption (chat-meta), timestamps (chat-time). These values exist only inside the chat component; never use them elsewhere.

### Elementor mapping
Global Colors: Primary = ink, Secondary = amber, Text = ink, Accent = honey; custom: Muted text = ink-muted, Honey lit = honey-lit, Page = paper, Stone = stone, Hairline = hairline, Footer = cocoa. The chat palette is not a Global Color; it lives in the stylesheet.

### Named Rules
**The One Honey Rule.** Honey means "act here" or "you are here". It never decorates, never fills a section, and never carries text other than ink.

**The Photos Bring the Warmth Rule.** The ground stays white and stone; colour comes from the photographs, not from tinted backgrounds or gradients.

## Typography

**Display Font:** Anek Bangla (with Noto Sans Bengali, system-ui)
**Body Font:** Anek Bangla, same family
**Label/Mono Font:** none distinct; numerals use tabular lining figures

**Character:** One bilingual family at normal width (wdth 100) does everything, so English and Bangla sit on the same line in the same voice. Weight, not width or a second face, carries hierarchy. Elementor Global Fonts: all four set to Anek Bangla (Primary 700, Secondary 600, Text 400, Accent 700).

### Hierarchy
- **Display** (700, clamp 2.6–4.4rem, 1.02): the one H1 per page, tight tracking (-0.015em), balanced wrap.
- **Headline** (700, clamp 2–3.1rem, 1.05): section H2s, always followed by a Bangla line.
- **Title** (700, 1.2–1.5rem): step titles (1.3rem), contact-card names (1.5rem), floor-line stops, caption names and category rows (1.2rem).
- **Lead** (400, clamp 1.2–1.4rem, 1.5, muted): inner-page intro paragraph, max 60ch.
- **Body** (400, 19px, 1.6): paragraphs at max 68ch; drops to 18px under 520px.
- **Bangla line** (500, 1.2–1.45rem, muted, no tracking): the Bangla echo under the H1 and every H2.
- **Label** (600, 18px): nav links, chips, buttons (700), captions, footer text. 18px is the floor for every secondary line.
- **Numeral** (700, tabular lining, 0.01em): phone numbers (clamp 1.35–1.75rem in the action and contact cards), the 2F / 122 chips.

### Named Rules
**The Eighteen Floor Rule.** No readable text below 18px (1.125rem). The only exception is the decorative timestamps inside the example WhatsApp chat (0.8rem).

**The One Family Rule.** Anek Bangla at normal width only; no second display face, no condensed or expanded widths.

## Layout

A centred 1240px wrap with a fluid gutter (16–40px) and fluid section padding (72–128px). Sections alternate paper and stone. The home hero is a two-column split (about 1.05 : 0.95): copy stack on the left (chips, H1, Bangla line, WhatsApp action, Messenger link, category rows panel), a tall rounded photo on the right that stays sticky at 104px. Under it, full width, the floor line. Section heads are an H2 + Bangla line + one muted paragraph, max 760px. The shop page uses a 290px sticky category sidebar beside the content; the about page a 1:1 split; the order block puts steps beside a 440px chat.

Breakpoints: 1100px (nav tightens, header button goes icon-only, shop shelf to 3 columns, footer to 2), 900px (everything stacks to one column, header unsticks, nav becomes a 4-up pill track, shelf and photo grid to 2 columns, floor line turns vertical, mobile dock appears and the body reserves 84px for it), 520px (18px body, header button hidden, rows wrap their Bangla under the English, single-column photo grid).

## Elevation & Depth

Flat. Panels are paper drawn with a 1px inset hairline (`box-shadow: inset 0 0 0 1px` hairline) and separated by tone (paper vs stone), never lifted. Hover deepens the inset line to 1.5px muted on cards and ghost buttons. Photos zoom gently (scale 1.04) on hover inside their frame instead of rising.

### Shadow Vocabulary
- **Dock float** (`box-shadow: 0 10px 28px -12px rgb(43 36 32 / 0.45)`): the two mobile dock buttons only, because they float over content.

### Named Rules
**The Only the Dock Floats Rule.** The mobile dock is the single element with a cast shadow. Everything else is flat.

## Shapes

Rounded, consistent and few: 10px for controls (buttons, category rows, skip link), 14px for photos and panels (hero photo, shelf, rows panel, lists, contact cards, map, chat, WhatsApp action, dock buttons), 999px pills for the nav links and active pill, location chips and photo tags, 8px for the honey shelf label and chat bubbles. Circles only for the floor-line stops, step discs and the chat avatar. The logo sits on a 12px white plate. Photos are clipped to their radius; the shelf is one clipped panel with hairline cell dividers.

## Components

### Buttons
- **Shape:** gently rounded (10px), 56px tall (48px in the header), label weight 700 at 18px, optional icon at 1.3em.
- **Primary:** honey with ink text; hover/focus honey-lit; active nudges down 1px.
- **Dark:** ink with white text; hover ink-lift. Used for the header WhatsApp button and secondary page CTAs.
- **Ghost:** transparent with a 1.5px inset hairline; hover turns white with a muted inset line.

### Header and Navigation
Sticky white bar, 80px, hairline bottom border. Logo plate + bilingual wordmark ("PET SHOP" in amber, Bangla name in muted below), then text nav and the dark WhatsApp button. Nav links are 48px pills in muted ink (600); hover fills stone; the current page carries the honey pill behind the label in ink 700. The pill is one element per page with a view-transition name, so it slides to the new link on navigation. Under 900px the nav becomes a 4-up track inside a stone pill.

### Location chips
Small white pills with an inset hairline, muted label, and an inner stone pill holding the tabular numeral (2F, 122). They state where the shop is; they are not section labels.

### Category rows panel
A white 14px panel of full-width rows (58px, title 600 + muted Bangla + arrow) divided by inset hairlines. Hover fills stone and slides the arrow 4px. On the shop page the same rows form the sticky sidebar, and the row for the section in view turns honey (scroll-spy, aria-current="location").

### WhatsApp action
The hero's main call: a honey 14px block with the WhatsApp glyph (2.2rem), "Order on WhatsApp" over the number in large tabular numerals, and an arrow that slides 4px on hover. Hover honey-lit. Full width on small phones.

### Hero photo with tour tag
A tall 4:5 user photo, 14px radius, stone placeholder, capped to the viewport height, sticky beside the copy. A white 94% pill tag (play icon in amber) sits bottom-left and links to the shop tour; hover turns it honey.

### Floor line
Four stops from the bus stand to Shop 122 on a 3px hairline rail. Stops are 34px circles with a 3px ink ring; the last is filled honey. On scroll, a honey line draws along the rail (1.6s) while the stops pop in one after another. Vertical on mobile.

### Shelf
Real shop photos in one white clipped panel, four columns (3 / 2 responsive), hairline cell dividers. Each photo (4:5) sits above a honey shelf label (8px radius): brand in 700, product line, and an underlined "Ask price" link opening WhatsApp. Photos zoom to 1.04 on hover.

### Photo grid
Cat photos at 14px radius with captions below the image, never overlaid: a bold name and a muted line of what the shop stocks for it. The first tile spans two rows on desktop.

### Steps
Numbered list with hairline separators; each number is a 48px honey disc with an ink numeral, then a 1.3rem title and a muted line. Steps slide in one after another.

### Example chat
A WhatsApp conversation mock in the borrowed chat palette: green bar with the logo avatar, wallpaper thread, white incoming and pale-green outgoing bubbles (8px), a photo in the first message, small decorative timestamps, a muted centred caption below.

### Address and feature lists
White 14px panels of rows divided by hairlines, each led by an amber Font Awesome icon in a fixed 36–40px column.

### Contact cards
Three 14px cards: white with an inset hairline (hover deepens it), large amber icon, 1.5rem name, muted line, number in large numerals. The WhatsApp card is the primary variant: honey, no outline, ink icon, honey-lit on hover.

### Footer
Cocoa ground, four columns. Column headings in honey, links in on-dark at 48px tall (hover honey, underlined), body in on-dark-muted, a faint white hairline above the base row. Focus rings switch to honey here.

### Mobile dock
Under 900px, a fixed two-button bar 10px from the screen edges: honey "Order on WhatsApp" and a 64px ink Messenger button, both 60px tall, 14px radius, the only shadowed element. It tucks away while the hero's own WhatsApp action is on screen.

### Motion
Easing is expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`) throughout. The first viewport arrives once: copy items rise 24px in a 60ms stagger and the hero photo reveals from scale 1.03 (1.4s). Scroll reveals rise 20px or fade images in, staggered 80ms among siblings, set only when JS runs so content is visible without it. Cross-document View Transitions keep the header still, slide the honey pill (0.6s), sink the old page and rise the new one. Reduced motion removes all of it: reveals shown, transitions and view transitions off, smooth scroll off.

## Do's and Don'ts

### Do:
- **Do** let the user-supplied photos lead every image slot; the shop's own shelf photos are the product proof.
- **Do** keep honey for action and "you are here" only, always with ink text.
- **Do** draw panels with a 1px inset hairline on paper and separate sections with stone.
- **Do** keep every readable line at 18px or larger and every target at 48px or larger.
- **Do** pair each H1 and H2 with its Bangla line in muted 500.
- **Do** put captions below photos, never on top, except the single tour tag pill.
- **Do** keep amber for accent text and icons on paper, and keep body contrast at WCAG AA.
- **Do** honour reduced motion and keep content visible without JavaScript.

### Don't:
- **Don't** return to the navy signboard palette, or drift into pastel paw-confetti pet styling.
- **Don't** tint the page ground or add gradients; the photos bring the warmth.
- **Don't** add shadows to cards, photos or buttons; only the mobile dock floats.
- **Don't** use the WhatsApp chat colours outside the example chat.
- **Don't** add a second typeface or use Anek Bangla's condensed or expanded widths.
- **Don't** put muted or amber text on honey; ink only.
