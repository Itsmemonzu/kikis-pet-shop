---
name: Kiki's Pet Shop
description: The shopping complex's directory board, and Kiki's is the strip you came looking for.
colors:
  board-navy: "#172260"
  board-strip: "#202d74"
  board-deep: "#10184a"
  shop-magenta: "#c8156a"
  pink-on-navy: "#ff7ab4"
  here-yellow: "#f7bf18"
  here-yellow-lit: "#ffd34d"
  ink: "#12173a"
  ink-muted: "#474d6c"
  on-navy-muted: "#c3c9ee"
  aluminium: "#eceef2"
  aluminium-rail: "#dde1e8"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.3vw, 3.3rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  numeral:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontWeight: 800
    letterSpacing: "0.01em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
  strip:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
  bangla-line:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    letterSpacing: "0"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 112"
rounded:
  inner: "4px"
  plate: "6px"
  strip-end: "9px"
  dock: "10px"
  panel: "12px"
spacing:
  seam: "3px"
  xs: "8px"
  sm: "14px"
  md: "18px"
  lg: "26px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 128px)"
  wrap: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 1.4em"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.board-deep}"
  button-navy:
    backgroundColor: "{colors.board-navy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 1.4em"
    height: "56px"
  button-navy-hover:
    backgroundColor: "{colors.board-deep}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 1.4em"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.board-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "0 1.4em"
    height: "56px"
  button-white-hover:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-navy}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.plate}"
    padding: "0 18px"
    height: "52px"
  nav-link-here:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
  directory-strip:
    backgroundColor: "{colors.board-strip}"
    textColor: "{colors.white}"
    typography: "{typography.strip}"
    padding: "0 20px 0 22px"
    height: "56px"
  directory-strip-here:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
  action-strip:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    rounded: "{rounded.panel}"
    padding: "16px 22px"
  action-strip-hover:
    backgroundColor: "{colors.here-yellow-lit}"
  location-plate:
    backgroundColor: "transparent"
    textColor: "{colors.on-navy-muted}"
    rounded: "{rounded.plate}"
    padding: "8px 16px 8px 8px"
  location-plate-numeral:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    typography: "{typography.numeral}"
    rounded: "{rounded.inner}"
    height: "56px"
  lit-panel:
    backgroundColor: "{colors.board-deep}"
    rounded: "{rounded.panel}"
  shelf-tag:
    backgroundColor: "{colors.board-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "12px 14px 14px"
  mosaic-caption:
    backgroundColor: "{colors.board-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.plate}"
    padding: "6px 12px"
  step:
    backgroundColor: "{colors.board-strip}"
    textColor: "{colors.white}"
    padding: "28px 26px 30px"
  step-number:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    rounded: "{rounded.plate}"
    size: "52px"
  channel-card:
    backgroundColor: "{colors.board-strip}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "26px"
  channel-card-hover:
    backgroundColor: "{colors.board-deep}"
  channel-card-primary:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
  channel-card-primary-hover:
    backgroundColor: "{colors.here-yellow-lit}"
  tag:
    backgroundColor: "{colors.board-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.plate}"
    padding: "8px 12px"
  dock-order:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    rounded: "{rounded.dock}"
    height: "60px"
  dock-messenger:
    backgroundColor: "{colors.board-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.dock}"
    height: "60px"
    width: "64px"
---

# Design System: Kiki's Pet Shop

## Overview

**Creative North Star: "The Market Directory Board"**

The site is the shopping complex's directory board, and Kiki's is the strip you came looking for. A brushed-aluminium ground carries deep navy board panels; on them sit enamel sign strips, numbered location plates and one yellow "you are here" state. Everything reads like signage in a Dhaka supermarket stairwell: large, expanded, heavy lettering for the signs, normal-width Anek Bangla for reading, and real numbers (2F, 122, 01680-042538) set as interface.

Density is low and type is large on purpose: body text is 19px, every tap target is at least 48px, and every enclosure does a job (a strip goes somewhere, a plate says where, a tag names a product). Depth is quiet: tonal navy layers separated by 3px seams of a deeper navy, with soft diffuse shadows only on lift. Motion is the board coming alive: strips fill yellow from the left, the yellow plate slides between pages, the floor line draws itself.

The confirmed rejection is the category default: pastel pet templates with rounded icon-card grids, paw confetti and a dog-photo hero.

**Key Characteristics:**
- Navy board panels on a brushed-aluminium ground; yellow is the only state colour.
- One family, Anek Bangla, with the width axis carrying the voice (100 reading, 112 to 125 signage).
- Enclosures are sign strips, plates and tags, joined by 3px deep-navy seams.
- State is a left-to-right fill (strips, buttons, action strip); "you are here" is the strip itself filled yellow.
- Bilingual: every section heading carries its Bangla line.
- Built for 30+ eyes and thumbs: 19px body, 48px minimum targets, reduced motion honoured.

## Colors

A three-ink signage palette: board navy, enamel yellow, and shop magenta, set on brushed aluminium.

### Primary
- **Board Navy** (board-navy): the board itself. Header, hero panels, navy sections, shelf tags, mosaic captions, tags, the navy button. Elementor Global Color "Primary".
- **Board Strip** (board-strip): one step lighter; the face of each directory strip, step cell and channel card. Elementor custom "Board strip".
- **Board Deep** (board-deep): the rail behind strips (the 3px seams), the lit-panel mount, the footer, hover fill on navy surfaces, and the text colour on yellow. Elementor custom "Board deep".

### Secondary
- **Shop Magenta** (shop-magenta): the "PET SHOP" brand colour. On light grounds only: Bangla sub-lines under section headings, the note icon. Elementor Global Color "Secondary".
- **Pink on Navy** (pink-on-navy): magenta's stand-in where it must sit on navy (the "PET SHOP" half of the header wordmark), because shop-magenta fails contrast there.

### Tertiary
- **Here Yellow** (here-yellow): the paw yellow from the logo, and the only state colour. "You are here" nav plate, filled strips, the action strip, the primary button, plate numerals, step numbers, floor-line stops, focus rings, selection. Elementor Global Color "Accent".
- **Here Yellow Lit** (here-yellow-lit): the hover fill for yellow surfaces and the focus-ring colour on navy.

### Neutral
- **Ink** (ink): body text on light grounds. Elementor Global Color "Text".
- **Ink Muted** (ink-muted): secondary text on aluminium and white (7:1 on aluminium). Elementor custom "Muted text".
- **On-Navy Muted** (on-navy-muted): secondary text on any navy surface.
- **Aluminium** (aluminium): the page ground. Elementor custom "Aluminium".
- **Aluminium Rail** (aluminium-rail): the seam and rail colour on light grounds (address list, feature list, light floor line, category dividers, scrollbar track).
- **White** (white): white sections, light list cells, the white header button.

### Named Rules
**The One State Colour Rule.** Yellow means "here" or "do this". Nothing decorative is yellow; if a surface is yellow, it is the current location or the action.

**The Magenta Stays Light Rule.** Shop magenta appears only on aluminium or white. On navy, use pink-on-navy for brand text and yellow for Bangla sub-lines.

## Typography

**Display Font:** Anek Bangla (with Noto Sans Bengali, system-ui)
**Body Font:** Anek Bangla, same family
**Label/Mono Font:** none distinct; numerals use Anek Bangla at full width with tabular lining figures

**Character:** One Bengali-first variable family doing two jobs through its width axis: expanded and heavy it is enamel sign lettering; at normal width it is calm, readable body copy in both scripts. The font must be loaded with both axes (wdth 75..125, wght 400..800); Elementor's own loader only supplies weights, so the width axis is loaded separately.

### Hierarchy
- **Display** (800, clamp 2.5 to 3.9rem, 1.05, wdth 118, -0.02em): page H1 on the board.
- **Headline** (800, clamp 2 to 3.3rem, 1.05, wdth 118, -0.02em): section H2s, always followed by a Bangla line.
- **Numeral** (800, wdth 125, tabular lining figures): plate numbers (2F, 122), the phone number, step numbers.
- **Title** (700, 1.3rem, 1.2, wdth 112 to 115): step titles, action-strip and channel-card titles.
- **Strip** (700, 1.2rem, wdth 112): directory strip labels; their Bangla sub-label drops to 500 at wdth 100.
- **Lead** (400, clamp 1.2 to 1.4rem, 1.5): page intros, ink-muted or on-navy-muted.
- **Bangla line** (500, 1.15rem, wdth 100, no tracking): Bangla sub-lines under headings; magenta on light, yellow on navy.
- **Body** (400, 19px, 1.6, max 68ch): all reading text. Drops to 18px under 520px.
- **Label** (700, 1.125rem, wdth 112): buttons and nav.

### Named Rules
**The Width Is the Voice Rule.** Signage (headings, strips, plates, buttons, nav) is set expanded (wdth 112 to 125); reading text and Bangla script stay at wdth 100. Never condense Bangla.

**The Bilingual Heading Rule.** Every section H2 carries its Bangla line directly beneath it, set in the Bangla-line style.

## Layout

A boxed 1240px column with a fluid gutter (16 to 40px) and fluid section padding (72 to 128px). Sections alternate aluminium, white and navy grounds. The home board is a 7fr / 5fr grid (copy and strips left, the lit tour panel right); inner pages open with a shorter navy page board. Section heads are a two-column row (H2 with Bangla line left, explanatory paragraph right, bottom-aligned). The shop page uses a 300px sticky directory column beside the content.

Grids: shelf 4 columns (3 under 1100px, 2 under 900px); mosaic 1.15fr / 1fr / 1fr with the first tile spanning two rows; steps and channel cards 3 columns, single column under 900px.

Breakpoints: 1100px (nav tightens, header button drops its label), 900px (header unsticks, nav becomes a 4-cell plate row, everything single column, mobile dock appears, floor line turns vertical), 520px (body 18px, header button hidden, strips stack their Bangla sub-label under the label).

**The Seam Rule.** Grouped items (strips, steps, address rows, feature rows) are cells in one panel separated by 3px seams of the rail colour, with 9px corners on the outer cells only. They are never separate floating cards.

## Elevation & Depth

Depth is tonal first: board-strip cells sit on a board-deep rail, which sits on board-navy. Shadows are soft, navy-tinted and diffuse, and appear on lift (hover) or on media mounted into the board. There are no hard offset shadows.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px rgb(16 24 74 / 0.06), 0 8px 24px -8px rgb(16 24 74 / 0.18)`): button hover, the map.
- **Action lift** (`box-shadow: 0 14px 30px -14px rgb(0 0 0 / 0.5)`): action strip hover, with a 2px rise.
- **Channel lift** (`box-shadow: 0 24px 40px -24px rgb(0 0 0 / 0.6)`): channel card hover, with a 4px rise.
- **Lit mount** (`box-shadow: 0 0 0 3px #10184a, 0 30px 60px -30px rgb(0 0 0 / 0.7)`): video panels set into the board.
- **Dock float** (`box-shadow: 0 12px 30px -10px rgb(16 24 74 / 0.55)`): the mobile dock buttons.
- **Plate outline** (`box-shadow: inset 0 0 0 2px rgb(255 255 255 / 0.22)`): location plates and the ghost button (2px inset currentColor) use inset outlines instead of borders.

### Named Rules
**The Flat Until Touched Rule.** Surfaces rest flat; a shadow appears only with hover lift, or as the mount of a lit panel or the floating dock.

## Shapes

Sign-plate geometry: gently rounded rectangles, never pills. Plates, buttons, nav and tags use 6px; panels, strips groups, tiles and cards use 12px; inner cells take 9px on their outer corners only; the small numeral block inside a plate takes 4px; the mobile dock 10px. Circles appear only as floor-line stops (34px) and the live dot. Mosaic captions stack two navy plates with the joined corners squared off, like stacked sign plates.

## Components

### Buttons
Enamel plates that fill on touch.
- **Shape:** gently rounded (6px), 56px tall (52px in the header).
- **Primary:** here-yellow with board-deep text, label type, icon leading.
- **Hover / Focus:** a fill wipes in from the left (scaleX, 0.45s expo-out) in the hover colour, plus the lift shadow; active presses 1px down. Focus shows a 3px yellow outline at 3px offset.
- **Variants:** navy (wipes to board-deep), white (header; wipes to yellow), ghost (2px inset outline in currentColor; wipes to yellow and the outline turns yellow).

### Navigation (header and "you are here" plate)
- **Header:** sticky board-navy strip, 84px, logo plate (56px white rounded square), bilingual wordmark (KIKI'S white, PET SHOP pink-on-navy, Bangla name in yellow), nav, white WhatsApp button.
- **Nav links:** 52px tall, 18px side padding, label type in white; hover adds a 9% white wash.
- **You are here:** the current link holds one yellow plate element filling the link, with text turning board-deep. It carries its own view-transition name, so on page change it slides from the old link to the new one (0.6s expo-out). Exactly one per page.
- **Mobile (under 900px):** nav drops to a full-width 4-cell plate row on a board-deep rail with 3px seams, 48px cells.

### Directory Strips (signature)
The core component: a stacked list of wide navy sign strips on a board-deep rail.
- **Strip:** board-strip face, 56px tall, label + Bangla sub-label + trailing arrow; outer corners 9px.
- **States:** hover, focus and "here" fill yellow from the left (0.5s expo-out), text turns board-deep, the sub-label turns navy, the arrow nudges 5px right.
- **Shop directory:** the sticky sidebar version marks the section in view as "here" (scroll-spy, aria-current="location").
- **Mobile:** under 520px the Bangla sub-label stacks below the label, 64px tall.

### Action Strip
The one yellow strip on the board: WhatsApp icon, title, the phone number in numeral type, arrow. 12px corners, 16px 22px padding. Hover wipes in here-yellow-lit and lifts 2px. A muted text link follows it for the second channel.

### Location Plates
Inset-outlined plates on the board carrying a yellow numeral block (2F, 122; 56px tall, 84px min width) and a short label. A text-only plate variant holds the complex name.

### Lit Panel
Video (or image) mounted into the board: 12px corners, board-deep 3px mount and deep drop shadow, 4:5 crop (9:16 for the about-page tour). Its caption row holds tags (a live tag with a yellow dot) and a 48px pause/play plate.

### Floor Line
One horizon through the site: a 4px rail with four stops (Bus stand, Khaja Supermarket, 2nd floor, Shop 122). The rail draws in yellow over 1.6s when it enters view and the stops scale in one after another (0.35s apart); the last stop is filled yellow with a halo. A light variant runs on white. Under 900px it turns vertical.

### Shelf Item Tags
Real product photo (4:5, 12px top corners) sitting on a navy shelf-edge tag (12px bottom corners): brand name, line in on-navy-muted, and a yellow "Ask price" link at 48px. Hover zooms the photo to 1.045 over 0.9s.

### Mosaic Tiles
Photo tiles (12px) with stacked navy caption plates bottom-left: a bold title plate and a muted line plate, joined corners squared. Hover zooms to 1.04 over 1.2s.

### Steps
Numbered sequence as seamed cells on a board-deep rail: board-strip cells, a 52px yellow numeral plate, title and muted body. Three across, stacked under 900px. A plain variant drops the numbers.

### Channel Cards
Contact plates, 260px tall, 26px padding, 12px corners: large icon, title, muted line, and the number or address in yellow numeral type. Hover fills board-deep from the bottom (scaleY) and lifts 4px. The primary card (WhatsApp) is yellow and fills here-yellow-lit.

### Mobile Dock
Under 900px, a fixed bar 10px from the screen edges: a yellow "Order on WhatsApp" button and a 64px navy Messenger button, both 60px tall with 10px corners and the dock float shadow. It tucks away (slides down, fades) while the hero's own action strip is on screen.

### Motion Grammar
- **Easing:** expo-out `cubic-bezier(0.16, 1, 0.3, 1)` for everything that arrives or fills; `cubic-bezier(0.65, 0, 0.35, 1)` only for content leaving.
- **Durations:** state colour 0.3 to 0.35s; fills and lifts 0.4 to 0.6s; reveals 0.8 to 0.9s; image zoom 0.9 to 1.3s; floor line 1.6s.
- **Page transitions:** cross-document View Transitions (navigation: auto). Header is pinned (no animation); main content sinks out (0.26s) and rises in (0.6s, 0.12s delay); the yellow plate slides between links. Browsers without support get a 0.6s rise on arrival.
- **First viewport:** the home board assembles once: strips slat in left-to-right (70ms stagger), the lit panel rises, then the action strip.
- **Scroll reveals (JS-applied, content visible without JS):** rise (fade + 22px), image focus-in (fade, 1.04 scale, 6px blur clearing), slats (children unclip left-to-right, 0.12s stagger), floor draw. Siblings stagger 80ms.
- **Reduced motion:** all animation and transition durations collapse, reveals show immediately, view-transition animations are off, autoplay video starts paused.

## Do's and Don'ts

### Do:
- **Do** set every Elementor Global Color from these tokens (Primary board-navy, Secondary shop-magenta, Text ink, Accent here-yellow, plus custom board-strip, board-deep, aluminium, ink-muted) and set all four Global Fonts to Anek Bangla (800 / 700 / 400 / 700).
- **Do** keep body text at 19px (18px on small phones) and secondary text at 18px (1.125rem) minimum.
- **Do** give every link and control a 48px minimum tap target.
- **Do** make state a left-to-right yellow fill; "you are here" is the strip or plate itself filled yellow.
- **Do** group related items as seamed cells in one panel (3px seams, 9px outer corners).
- **Do** use real numbers (floor, shop number, phone) as large numeral plates.
- **Do** pair every section H2 with its Bangla line.
- **Do** apply reveals only through the reveal classes, never with Elementor entrance animations on the same element.

### Don't:
- **Don't** use pastel pet-template styling: rounded icon-card grids, paw confetti, or a dog-photo hero.
- **Don't** add decorative boxes; every enclosure must be a strip, plate, tag or panel that does a job.
- **Don't** use yellow for decoration or put shop-magenta on navy.
- **Don't** use pill shapes or hard offset shadows.
- **Don't** condense Bangla text or set reading text expanded.
