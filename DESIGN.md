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
  numeral-step:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 125"
  numeral:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 125"
  numeral-phone:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 0.8vw, 1.8rem)"
    fontWeight: 800
    letterSpacing: "0.01em"
    fontFeature: "'tnum', 'lnum'"
    fontVariation: "'wdth' 125"
  card-title:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
    fontVariation: "'wdth' 115"
  wordmark:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 120"
  title:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
  intro:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  lead:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.4vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
  bangla-line-board:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.05rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    letterSpacing: "0"
    fontVariation: "'wdth' 100"
  bangla-line:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 500
    letterSpacing: "0"
    fontVariation: "'wdth' 100"
  strip:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
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
  secondary:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.35
    fontVariation: "'wdth' 100"
rounded:
  label: "2px"
  plate: "3px"
  panel: "4px"
  bubble: "8px"
  dock: "10px"
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
    typography: "{typography.label}"
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
    rounded: "{rounded.plate}"
    padding: "0 20px 0 22px"
    height: "56px"
  directory-strip-here:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
  action-strip:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    typography: "{typography.title}"
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
    rounded: "{rounded.panel}"
    height: "56px"
  lit-panel:
    backgroundColor: "{colors.board-deep}"
    rounded: "{rounded.panel}"
  shelf:
    backgroundColor: "{colors.white}"
  shelf-label:
    backgroundColor: "{colors.here-yellow}"
    textColor: "{colors.board-deep}"
    rounded: "{rounded.label}"
    padding: "10px 12px 4px"
  mosaic-tile:
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  step:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    padding: "22px 0"
  step-number:
    textColor: "{colors.here-yellow}"
    typography: "{typography.numeral-step}"
    width: "56px"
  list-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "14px 16px"
  channel-card:
    backgroundColor: "{colors.board-strip}"
    textColor: "{colors.white}"
    typography: "{typography.card-title}"
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
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "8px 12px"
  chat-bar:
    backgroundColor: "#075e54"
    textColor: "#ffffff"
    padding: "10px 16px"
  chat-wall:
    backgroundColor: "#efeae2"
    textColor: "#111b21"
    rounded: "{rounded.panel}"
    width: "440px"
  chat-bubble-in:
    backgroundColor: "#ffffff"
    textColor: "#111b21"
    typography: "{typography.secondary}"
    rounded: "{rounded.bubble}"
    padding: "8px 12px 20px"
  chat-bubble-out:
    backgroundColor: "#d9fdd3"
    textColor: "#111b21"
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

The site is the shopping complex's directory board, and Kiki's is the strip you came looking for. A brushed-aluminium ground carries deep navy board panels; on them sit enamel sign strips, numbered location plates, yellow shelf labels and one yellow "you are here" state. Everything reads like signage and shelving in a Dhaka supermarket: large, expanded, heavy lettering for the signs, normal-width Anek Bangla for reading, and real numbers (2F, 122, 01680-042538) set as interface.

Density is low and type is large on purpose: body text is 19px, every tap target is at least 48px, and every enclosure does a job (a strip goes somewhere, a plate says where, a shelf label names a product and asks its price). Corners are nearly square, cut metal and printed card rather than soft app tiles. The board is flat: nothing lifts or casts a shadow on hover; state is a fill. Motion is the board coming alive: strips fill yellow from the left, the yellow plate slides between pages, the floor line draws itself.

The confirmed rejections are the category default (pastel pet templates with rounded icon-card grids, paw confetti and a dog-photo hero) and the generic AI-site finish the visual pass removed: soft rounded cards, hover lifts and drop shadows, icon tiles, caption plates laid over photos, blur reveals.

**Key Characteristics:**
- Navy board panels on a brushed-aluminium ground; yellow marks location, action and the shelf price label.
- One family, Anek Bangla, with the width axis carrying the voice (100 reading, 112 to 125 signage).
- Nearly square corners: 2px labels, 3px plates, 4px panels.
- Grouped items are cells joined by 3px seams; sequences are plain numbered rows.
- State is a left-to-right fill; nothing lifts or casts a shadow on hover.
- Bilingual: every section heading carries its Bangla line.
- Built for 30+ eyes and thumbs: 19px body, 48px minimum targets, reduced motion honoured.

## Colors

A three-ink signage palette: board navy, enamel yellow and shop magenta, set on brushed aluminium.

### Primary
- **Board Navy** (board-navy): the board itself. Header, hero panels, navy sections, tags, the navy button, the Messenger dock button. Elementor Global Color "Primary".
- **Board Strip** (board-strip): one step lighter; the face of each directory strip, mobile nav cell and channel card. Elementor custom "Board strip".
- **Board Deep** (board-deep): the rail behind strips (the 3px seams), the lit panel's 3px border, the footer, hover fill on navy surfaces, and the text colour on yellow. Elementor custom "Board deep".

### Secondary
- **Shop Magenta** (shop-magenta): the "PET SHOP" brand colour. On light grounds only: the plain icons in the address and feature lists, the note icon, the Bangla line on shop category heads, and the hover colour of the shelf label's Ask price link. Elementor Global Color "Secondary".
- **Pink on Navy** (pink-on-navy): magenta's stand-in where it must sit on navy (the "PET SHOP" half of the header wordmark), because shop-magenta fails contrast there.

### Tertiary
- **Here Yellow** (here-yellow): the paw yellow from the logo. "You are here" nav plate, filled strips, the action strip, the primary button, plate numerals, step numerals, shelf labels, floor-line stops, focus rings, selection. Elementor Global Color "Accent".
- **Here Yellow Lit** (here-yellow-lit): the hover fill for yellow surfaces and the focus-ring colour on navy.

### Neutral
- **Ink** (ink): body text on light grounds. Elementor Global Color "Text".
- **Ink Muted** (ink-muted): secondary text on aluminium and white (7:1 on aluminium): section-head paragraphs, Bangla lines under section H2s, mosaic caption lines. Elementor custom "Muted text".
- **On-Navy Muted** (on-navy-muted): secondary text and Bangla lines on any navy surface.
- **Aluminium** (aluminium): the page ground. Elementor custom "Aluminium".
- **Aluminium Rail** (aluminium-rail): the seam and rail colour on light grounds (address list, feature list, the shelf's 10px bottom rail, light floor line, category dividers, scrollbar track).
- **White** (white): white sections, the shelf, light list cells, the white header button.

### Example chat palette (component-scoped)
The example WhatsApp chat imitates the app the audience already uses, so it carries WhatsApp's own colours: bar (#075e54), wall (#efeae2), incoming bubble (#ffffff), outgoing bubble (#d9fdd3), text (#111b21), timestamps (#667781), caption (#54656f). They live only inside that component and are never brand colours.

### Named Rules
**The Yellow Means Act Rule.** Yellow marks where you are, what to do, or the shelf label that asks a price. Nothing decorative is yellow; real numbers and sequence numerals may be yellow because they are interface.

**The Magenta Stays Light Rule.** Shop magenta appears only on aluminium or white. On navy, brand text uses pink-on-navy and Bangla lines use on-navy-muted.

**The Borrowed Palette Rule.** WhatsApp's colours appear only inside the example chat, which is always labelled "Example chat". They never leak into buttons, strips or sections.

## Typography

**Display Font:** Anek Bangla (with Noto Sans Bengali, system-ui)
**Body Font:** Anek Bangla, same family
**Label/Mono Font:** none distinct; numerals use Anek Bangla at full width with tabular lining figures

**Character:** One Bengali-first variable family doing two jobs through its width axis: expanded and heavy it is enamel sign lettering; at normal width it is calm, readable body copy in both scripts. The font must be loaded with both axes (wdth 75..125, wght 400..800); Elementor's own loader only supplies weights, so the width axis is loaded separately.

### Hierarchy
- **Display** (800, clamp 2.5 to 3.9rem, 1.05, wdth 118, -0.02em): page H1 on the board.
- **Headline** (800, clamp 2 to 3.3rem, 1.05, wdth 118, -0.02em): section H2s, always followed by a Bangla line.
- **Numeral step** (800, 2.6rem, wdth 125): yellow step numbers on navy.
- **Numeral** (800, 2.1rem, wdth 125, tabular lining figures): plate numbers (2F, 122); 1.6rem under 520px.
- **Numeral phone** (800, clamp 1.35 to 1.8rem, wdth 125): the phone number in the action strip and channel cards.
- **Card title** (700, 1.5rem, wdth 115): channel card titles.
- **Wordmark** (800, 1.45rem, wdth 120, 0.01em): KIKI'S PET SHOP in the header and footer; 1.25rem under 520px.
- **Title** (700, 1.3rem, 1.2, wdth 112 to 115): step titles, action-strip title.
- **Intro** (400, 1.25rem): the paragraph in a section head; floor-line stop names use this size at 700.
- **Lead** (400, clamp 1.2 to 1.4rem, 1.5): page intros, ink-muted or on-navy-muted.
- **Bangla line board** (500, clamp 1.2 to 1.5rem, wdth 100): the Bangla tagline under a page H1.
- **Bangla line** (500, 1.2rem, wdth 100, no tracking): Bangla sub-lines under section H2s; ink-muted on light, on-navy-muted on navy.
- **Strip** (700, 1.2rem, wdth 112): directory strip labels and mosaic caption titles; strip Bangla sub-labels drop to 500 at wdth 100 and 1.125rem.
- **Body** (400, 19px, 1.6, max 68ch): all reading text. Drops to 18px under 520px.
- **Label** (700, 1.125rem, wdth 112): buttons, nav, tags.
- **Secondary** (400, 1.125rem, 1.35): muted lines, captions, shelf label lines, footer text, chat bubbles. This is the floor for any text.

### Named Rules
**The Width Is the Voice Rule.** Signage (headings, strips, plates, buttons, nav) is set expanded (wdth 112 to 125); reading text and Bangla script stay at wdth 100. Never condense Bangla.

**The Bilingual Heading Rule.** Every section H2 carries its Bangla line directly beneath it, set in the Bangla-line style.

## Layout

A boxed 1240px column with a fluid gutter (16 to 40px) and fluid section padding (72 to 128px). Sections alternate aluminium, white and navy grounds. The home board is a 7fr / 5fr grid (copy and strips left, the lit tour panel right); inner pages open with a shorter navy page board. Section heads are one column, max 760px: H2, its Bangla line, then the intro paragraph, 14px apart. The shop page uses a 300px sticky directory column beside the content (240px under 1100px).

Grids: the shelf is 4 columns edge to edge with no gaps (shop categories 3 under 1100px; 2 under 900px; 12px gaps under 520px). The mosaic is 1.15fr / 1fr / 1fr, the lead tile filling two rows and the small tiles at 4:3; under 900px it is 2 columns with the lead tile full width at 16:10, single column under 520px. The order section sets the steps beside a 440px example chat. Channel cards are 3 columns. Everything stacks to one column under 900px.

Breakpoints: 1100px (nav tightens, header button drops its label), 900px (header unsticks, nav becomes a 4-cell plate row, everything single column, mobile dock appears, floor line turns vertical), 520px (body 18px, header button hidden, strips stack their Bangla sub-label under the label).

**The Seam Rule.** Grouped items (strips, address rows, feature rows, mobile nav cells) are cells in one panel separated by 3px seams of the rail colour, with 3px corners on the outer cells only. They are never separate floating cards.

## Elevation & Depth

Depth is tonal and flat: board-strip cells sit on a board-deep rail, which sits on board-navy. Nothing lifts on hover and no surface casts a shadow at rest, except the floating mobile dock. The lit panel is set into the board with a 3px board-deep border, not a drop shadow. Outlines are drawn with inset box-shadows rather than borders.

### Shadow Vocabulary
- **Dock float** (`box-shadow: 0 12px 30px -10px rgb(16 24 74 / 0.55)`): the mobile dock buttons, which float over content.
- **Plate outline** (`box-shadow: inset 0 0 0 2px rgb(255 255 255 / 0.22)`): location plates; the ghost button uses `inset 0 0 0 2px currentColor`, turning yellow on hover.

### Named Rules
**The Flat Board Rule.** Surfaces never rise. Hover and focus change fill and colour only; the one physical response is a 1px press on active buttons. The only cast shadow is the mobile dock.

## Shapes

Cut-metal and printed-card geometry: nearly square rectangles, never pills. Shelf labels take 2px; plates, buttons, nav, tags and the outer cells of seamed groups take 3px; panels (strip groups, lit panel, action strip, mosaic photos, channel cards, the map, notes, the chat) take 4px. Softer corners are reserved for things that are soft in life: chat bubbles (8px), the logo plate and the mobile dock (10px). Circles appear only as floor-line stops (34px), the live dot and the chat avatar. The shelf has no corners at all: one white run with a 10px aluminium-rail bottom edge.

## Components

### Buttons
Enamel plates that fill on touch.
- **Shape:** nearly square (3px), 56px tall (52px in the header).
- **Primary:** here-yellow with board-deep text, label type, icon leading.
- **Hover / Focus:** a fill wipes in from the left (scaleX, 0.45s expo-out) in the hover colour; no lift, no shadow. Active presses 1px down. Focus shows a 3px yellow outline at 3px offset.
- **Variants:** navy (wipes to board-deep), white (header; wipes to yellow), ghost (2px inset outline in currentColor; wipes to yellow and the outline turns yellow).

### Navigation (header and "you are here" plate)
- **Header:** sticky board-navy strip, 84px, logo plate (56px white square, 10px corners), bilingual wordmark (KIKI'S white, PET SHOP pink-on-navy, Bangla name in yellow), nav, white WhatsApp button.
- **Nav links:** 52px tall, 18px side padding, label type in white; hover adds a 9% white wash.
- **You are here:** the current link holds one yellow plate element filling the link, with text turning board-deep. It carries its own view-transition name, so on page change it slides from the old link to the new one (0.6s expo-out). Exactly one per page.
- **Mobile (under 900px):** nav drops to a full-width 4-cell plate row on a board-deep rail with 3px seams, 48px cells.

### Directory Strips (signature)
The core component: a stacked list of wide navy sign strips on a board-deep rail.
- **Strip:** board-strip face, 56px tall, label + Bangla sub-label + trailing arrow; outer corners 3px inside a 4px rail.
- **States:** hover, focus and "here" fill yellow from the left (0.5s expo-out), text turns board-deep, the sub-label turns navy, the arrow nudges 5px right.
- **Shop directory:** the sticky sidebar version marks the section in view as "here" (scroll-spy, aria-current="location").
- **Mobile:** under 520px the Bangla sub-label stacks below the label, 64px tall.

### Action Strip
The one yellow strip on the board: WhatsApp icon, title, the phone number in numeral type, arrow. 4px corners, 16px 22px padding. Hover wipes in here-yellow-lit from the left; it does not lift. A muted text link follows it for the second channel.

### Location Plates
Inset-outlined plates on the board carrying a yellow numeral block (2F, 122; 56px tall, 84px min width) and a short label. A text-only plate variant holds the complex name.

### Lit Panel
Video (or image) set into the board: 4px corners, a 3px board-deep border, 4:5 crop (9:16 for the about-page tour). Its caption row overlays tags (a live tag with a yellow dot) and a 48px pause/play plate.

### Floor Line
One horizon through the site: a 4px rail with four stops (Bus stand, Khaja Supermarket, 2nd floor, Shop 122). The rail draws in yellow over 1.6s when it enters view and the stops scale in one after another (0.35s apart); the last stop is filled solid yellow. A light variant runs on white. Under 900px it turns vertical.

### Shelf
Real product photos standing edge to edge on one white shelf, finished with a 10px aluminium-rail bottom edge. Under each photo (4:5) hangs a yellow shelf label with 2px corners, inset 10px from the photo's sides: brand name in board-deep, product line in board-deep, and an underlined "Ask price" link at 48px that turns magenta on hover. Hover zooms the photo to 1.045 over 0.9s.

### Mosaic Tiles
Photos with 4px corners and the caption as plain text below: a bold title in strip type and a muted line in ink-muted. No plates over the photo. Small tiles are 4:3; the lead tile fills two rows. The about-page mosaic runs without captions.

### Steps
A plain numbered list on navy: big yellow numerals (2.6rem) in a 56px column, title and on-navy-muted body beside them, items separated by 1px light rules (white at 16%). No boxes, no numeral plates.

### Example WhatsApp Chat
Beside the steps, a 440px imitation of the WhatsApp thread the customer will actually have: green bar with the shop's logo avatar, name and number; the beige wall; outgoing (light green) and incoming (white) bubbles with 8px corners, a product photo in the first message, and timestamps. It is captioned "Example chat" and uses only the component-scoped palette. Stacks under the steps below 900px.

### Lists (address and features)
Seamed white rows on an aluminium-rail panel, each led by a plain magenta icon in a 40 to 44px column. No icon tiles.

### Channel Cards
Contact plates, 260px tall, 26px padding, 4px corners: large icon, title, muted line, and the number or address in yellow numeral type. Hover fills board-deep from the bottom (scaleY); no lift. The primary card (WhatsApp) is yellow and fills here-yellow-lit.

### Mobile Dock
Under 900px, a fixed bar 10px from the screen edges: a yellow "Order on WhatsApp" button and a 64px navy Messenger button, both 60px tall with 10px corners and the dock float shadow. It tucks away (slides down, fades) while the hero's own action strip is on screen.

### Motion Grammar
- **Easing:** expo-out `cubic-bezier(0.16, 1, 0.3, 1)` for everything that arrives or fills; `cubic-bezier(0.65, 0, 0.35, 1)` only for content leaving.
- **Durations:** state colour 0.3 to 0.35s; fills 0.45 to 0.6s; reveals 0.8 to 0.9s; shelf image zoom 0.9s; floor line 1.6s.
- **Page transitions:** cross-document View Transitions (navigation: auto). Header is pinned (no animation); main content sinks out (0.26s) and rises in (0.6s, 0.12s delay); the yellow plate slides between links. Browsers without support get a 0.6s rise on arrival.
- **First viewport:** the home board assembles once: strips slat in left-to-right (70ms stagger), the lit panel rises, then the action strip.
- **Scroll reveals (JS-applied, content visible without JS):** rise (fade + 22px), image reveal (opacity only, no blur or scale), slats (children unclip left-to-right, 0.12s stagger), floor draw. Siblings stagger 80ms.
- **Reduced motion:** all animation and transition durations collapse, reveals show immediately, view-transition animations are off, autoplay video starts paused.

## Do's and Don'ts

### Do:
- **Do** set every Elementor Global Color from these tokens (Primary board-navy, Secondary shop-magenta, Text ink, Accent here-yellow, plus custom board-strip, board-deep, aluminium, ink-muted) and set all four Global Fonts to Anek Bangla (800 / 700 / 400 / 700).
- **Do** keep body text at 19px (18px on small phones) and all other text at 18px (1.125rem) minimum.
- **Do** give every link and control a 48px minimum tap target.
- **Do** make state a left-to-right fill; "you are here" is the strip or plate itself filled yellow.
- **Do** keep corners nearly square: 2px labels, 3px plates and outer cells, 4px panels.
- **Do** group related items as seamed cells in one panel (3px seams, 3px outer corners).
- **Do** set captions as plain text below photos.
- **Do** use real numbers (floor, shop number, phone) as large numerals.
- **Do** pair every section H2 with its Bangla line.
- **Do** label any imitation of a third-party app ("Example chat") and keep its colours inside it.
- **Do** apply reveals only through the reveal classes, never with Elementor entrance animations on the same element.

### Don't:
- **Don't** use pastel pet-template styling: rounded icon-card grids, paw confetti, or a dog-photo hero.
- **Don't** add decorative boxes; every enclosure must be a strip, plate, label or panel that does a job.
- **Don't** lift surfaces or add shadows on hover, and don't mount panels with drop shadows.
- **Don't** put icons in coloured tiles or lay caption plates over mosaic and shelf photos.
- **Don't** blur images in or out.
- **Don't** use yellow for decoration or put shop-magenta on navy.
- **Don't** use pill shapes or hard offset shadows.
- **Don't** condense Bangla text or set reading text expanded.
