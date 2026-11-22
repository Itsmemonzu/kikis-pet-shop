---
name: Kiki's Pet Shop
description: A calm, sunlit neighbourhood pet shop in the logo's own colours; ordering is one honey-coloured button away.
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
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.5rem + 3.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Anek Bangla, Noto Sans Bengali, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
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
  pill: "999px"
spacing:
  wrap: "1240px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(48px, 5.5vw, 84px)"
  section-after-pagehead: "clamp(16px, 2vw, 32px)"
  head-gap: "clamp(20px, 2.5vw, 32px)"
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
    backgroundColor: "{colors.sky}"
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
    backgroundColor: "{colors.sky}"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "14px 16px 8px"
  shelf-link:
    textColor: "{colors.logo-blue}"
    height: "48px"
  whatsapp-card:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.photo}"
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
---

# Design System: Kiki's Pet Shop

## Overview

**Creative North Star: "The Golden Hour Shop"**

A calm, sunlit neighbourhood pet shop dressed in its own logo's colours: honey paw yellow against line-drawing blue. The page is clean white with pale sky sections. The golden-hour cat photos the owner supplied and the shop's own shelf photos bring the warmth, and the interface stays quiet so they can. Honey marks the two things a visitor needs: where to act (WhatsApp) and where they are (the nav pill, the active category row). Blue does the quiet work: links, icons, the wordmark.

Density is compact but legible, built for 30+ readers on phones: a 19px body, no readable text below 18px, every target at least 48px, and tight section rhythm with no empty bands. Surfaces are flat, and panels are drawn with a 1px inset hairline. Motion is a soft expo-out arrival. There is one signature move: the honey pill slides between nav links on page change while the content rises in, and the floor line draws itself on scroll.

The world replaces the retired navy directory-board and rejects the pastel, paw-confetti pet template.

**Key Characteristics:**
- The logo's pair: honey for action and "you are here", logo blue for links, icons and the wordmark.
- White page, pale sky alternate sections, cool hairlines; deep blue only in the footer.
- User-supplied photography leads the imagery; warmth lives in the photos.
- Anek Bangla at normal width for everything, English and Bangla side by side.
- Flat: the mobile dock is the only element that casts a shadow.
- Compact rhythm: sections 48–84px, short gaps after page heads.
- Rounded but not soft: 10px controls, 14px photos and panels, pills for nav, chips and tags.

## Colors

Two colours from the logo on a white and sky ground, with slate neutrals that lean toward the blue.

### Primary
- **Paw Honey** (honey): the WhatsApp action, primary buttons, the sliding nav pill, the active shop-category row, the WhatsApp contact card, step discs, the last floor-line stop, the dock's order button, text selection, the skip link. Ink text on honey only (about 9:1).
- **Honey, Lit** (honey-lit): the hover and focus state of every honey surface. It is never a resting colour.

### Secondary
- **Logo Blue** (logo-blue): links ("Ask price"), list, address, note and contact icons, the photo tag's play icon, the "PET SHOP" word in the wordmark, and the focus outline. About 5.9:1 on paper and 5.3:1 on sky.

### Neutral
- **Slate Ink** (ink): headings, body text, the dark button, the dock's Messenger button. It is also the Elementor Primary and Text colour.
- **Slate Muted** (ink-muted): secondary text, Bangla sub-lines, captions, shelf product lines, idle nav links, row arrows. About 6.3:1 on paper.
- **Ink Lift** (ink-lift): the dark button's hover state only.
- **Paper** (paper): the page ground and every panel (rows panel, shelf, lists). Pure white.
- **Pale Sky** (sky): alternate sections, the hover fill for nav links and rows, photo and map placeholders, notes, the mobile nav track, the scrollbar track.
- **Hairline** (hairline): 1px dividers, inset panel outlines, the shelf label's top rule, the undrawn floor rail.
- **Deep Blue** (deep): the footer ground only. On it, **On-dark** (on-dark) carries links and the wordmark and **On-dark Muted** (on-dark-muted) carries body text. Honey carries column headings, the wordmark accent and hover.

### Borrowed: WhatsApp chat palette (component-scoped)
The example chat on the order section uses WhatsApp's own colours so it reads as a real conversation: wallpaper (chat-wallpaper), header bar (chat-bar) with white text, outgoing bubble (chat-bubble-out), incoming bubble (paper), message text (chat-ink), caption (chat-meta), timestamps (chat-time). These values exist only inside the chat component.

### Elementor mapping
Global Colors: Primary = ink, Secondary = logo-blue, Text = ink, Accent = honey. Custom: Muted text = ink-muted, Honey lit = honey-lit, Page = paper, Sky = sky, Hairline = hairline, Footer = deep. The chat palette is not a Global Color; it lives in the stylesheet.

### Named Rules
**The One Honey Rule.** Honey means "act here" or "you are here". It never decorates, never fills a section, label or caption, and never carries any text colour but ink.

**The Logo Pair Rule.** Honey acts, blue informs. Links and icons on light grounds are blue, never honey; a call to act is honey, never blue.

## Typography

**Display Font:** Anek Bangla (with Noto Sans Bengali, system-ui)
**Body Font:** Anek Bangla, same family
**Label/Mono Font:** none distinct; numerals use tabular lining figures

**Character:** One bilingual family at normal width does everything, so English and Bangla sit on the same line in the same voice. Weight carries the hierarchy, not width or a second face. The site loads weights 400–800 only. Elementor Global Fonts: all four are Anek Bangla (Primary 700, Secondary 600, Text 400, Accent 700).

### Hierarchy
- **Display** (700, clamp 2.6–4.4rem, 1.02): the one H1 per page, with tight tracking (-0.015em) and a balanced wrap.
- **Headline** (700, clamp 2–3.1rem, 1.05): section H2s, always followed by a Bangla line.
- **Title** (700, 1.15–1.5rem): step titles (1.3rem), card names (1.5rem), floor-line stops, caption names, category rows (1.2rem), shelf brands (1.15rem).
- **Lead** (400, clamp 1.2–1.4rem, 1.5, muted): the inner-page intro paragraph, max 60ch.
- **Body** (400, 19px, 1.6): paragraphs at max 68ch. Drops to 18px under 520px.
- **Bangla line** (500, 1.2–1.45rem, muted, no tracking): the Bangla echo under the H1 and every H2.
- **Label** (600, 18px): nav links, chips, buttons (700), captions, footer text. 18px is the floor for every secondary line.
- **Numeral** (700, tabular lining, 0.01em): phone numbers (clamp 1.35–1.75rem in the hero action, up to 2.6rem on the WhatsApp contact card) and the 2F / 122 chips.

### Named Rules
**The Eighteen Floor Rule.** No readable text below 18px (1.125rem). The only exception is the decorative chat timestamps (0.875rem), which are hidden from assistive tech.

**The One Family Rule.** Use Anek Bangla at normal width only. No second display face, and no condensed or expanded widths.

## Layout

A centred 1240px wrap with a fluid gutter (16–40px). Sections alternate paper and sky with compact fluid padding (48–84px). A section directly after an inner page head starts only 16–32px below it, and section heads sit 20–32px above their content. Page heads are short (32–56px top, 20–32px bottom). Section heads are an H2, a Bangla line and one muted paragraph, max 760px wide.

The home hero is a two-column split (about 1.05 : 0.95). The copy stack sits on the left: chips, H1, Bangla line, WhatsApp action, Messenger link, category rows panel. A tall rounded photo on the right stays sticky at 104px, and the floor line runs full width beneath. The shop page puts a 290px sticky category sidebar beside the content. The about page has a 400px tour video beside the copy. Contact leads with a large WhatsApp card beside a quiet rows list. The order block puts the steps beside a 440px chat.

Breakpoints:
- **1100px:** the nav tightens, the header button goes icon-only, the shop shelf drops to 3 columns, the footer to 2.
- **900px:** everything stacks to one column. The header unsticks and the nav becomes a 4-up pill track. The shelf and photo grid drop to 2 columns and the floor line turns vertical. The mobile dock appears, with 84px reserved for it.
- **520px:** body drops to 18px, the header button is hidden, rows wrap their sub-label under the title, the photo grid goes single-column.

## Elevation & Depth

Flat. Panels are paper outlined by a 1px inset hairline and separated by tone (paper vs sky), never lifted. On hover, ghost buttons get a 1.5px muted inset line. Photos zoom gently (scale 1.04) inside their frame on hover instead of rising.

### Shadow Vocabulary
- **Dock float** (`box-shadow: 0 10px 28px -12px rgb(28 42 68 / 0.45)`): the two mobile dock buttons only, because they float over content.

### Named Rules
**The Only the Dock Floats Rule.** The mobile dock is the single element with a cast shadow. Everything else is flat.

## Shapes

The shape language is rounded, consistent and limited to a few values:
- **10px:** controls (buttons, category rows, skip link).
- **14px:** photos and panels (hero photo, shelf, rows panel, lists, WhatsApp card and action, map, chat, notes, dock buttons).
- **999px pills:** nav links and the active pill, location chips, photo tags.
- **8px:** chat bubbles.
- **Circles:** only the floor-line stops, step discs and the chat avatar.

The logo sits on a 12px white plate. Photos are clipped to their radius. The shelf is one clipped panel with hairline cell dividers.

## Components

### Buttons
- **Shape:** gently rounded (10px), 56px tall (48px in the header). Label weight is 700 at 18px, with an optional icon at 1.3em.
- **Primary:** honey with ink text. Hover and focus go honey-lit; on press it nudges down 1px.
- **Dark:** ink with white text, ink-lift on hover. Used for the header WhatsApp button and secondary page CTAs (directions, shop directory).
- **Ghost:** transparent with a 1.5px inset hairline. On hover it turns white with a muted inset line.

### Header and Navigation
A sticky white bar, 80px tall, with a hairline bottom border. It holds the logo plate and bilingual wordmark ("PET SHOP" in logo blue, the Bangla name in muted below), then the text nav and the dark WhatsApp button. Nav links are 48px pills in muted ink (600), and hover fills them with sky. The current page carries the honey pill behind its label, in ink 700. There is one pill per page with a view-transition name, so it slides to the new link on navigation. Under 900px the nav becomes a 4-up track inside a sky pill.

### Location chips
Small white pills with an inset hairline and a muted label. An inner sky pill holds the tabular numeral (2F, 122). They state where the shop is; they are not section labels.

### Category rows panel
A white 14px panel of full-width rows divided by inset hairlines. Each row is 58px with a 600 title, a muted sub-label and an arrow; hover fills it with sky and slides the arrow 4px. On the shop page the same rows form the sticky sidebar, and the row for the section in view turns honey (scroll-spy, aria-current="location"). On contact the rows list the secondary channels, each title led by a blue brand icon.

### WhatsApp action
The hero's main call: a honey 14px block with the WhatsApp glyph (2.2rem), then "Order on WhatsApp" over the number in large tabular numerals, then an arrow that slides 4px on hover. Hover goes honey-lit. It runs full width on small phones.

### Hero photo with tour tag
A tall 4:5 user photo, 14px radius, with a sky placeholder, capped to the viewport height and sticky beside the copy. A white 94% pill tag with a blue play icon sits bottom-left and links to the shop tour. Hover turns the tag honey.

### Floor line
Four stops from the bus stand to Shop 122 on a 3px hairline rail. Each stop is a 34px circle with a 3px ink ring, and the last is filled honey. On scroll a honey line draws along the rail (1.6s) while the stops pop in one after another. The line is vertical on mobile.

### Shelf
Real shop photos in one white clipped panel: four columns, dropping to 3 and then 2, with hairline cell dividers. Each 4:5 photo sits above a quiet label separated by a hairline top rule: the brand in ink 700, the product line in muted, and a blue "Ask price" link (48px, underlined on hover, arrow slides) that opens WhatsApp. Photos zoom to 1.04 on hover.

### Photo grid
Cat photos at 14px radius with captions below the image, never overlaid: a bold name and a muted line saying what the shop stocks for it. The first tile spans two rows on desktop.

### Steps
A numbered list with hairline separators. Each number is a 48px honey disc with an ink numeral, followed by a 1.3rem title and a muted line. The steps slide in one after another.

### Example chat
A WhatsApp conversation mock in the borrowed chat palette. It has a green bar with the logo avatar, the wallpaper thread, white incoming and pale-green outgoing bubbles (8px), and a photo in the first message. The timestamps are small, decorative and aria-hidden, with a muted centred caption below.

### Address and feature lists
White 14px panels of rows divided by hairlines, each row led by a blue Font Awesome icon in a fixed 36–40px column.

### Contact: WhatsApp card and quiet rows
The contact page leads with one large honey card: a 2.4rem ink WhatsApp glyph, a 1.5rem name, a line, and the number in numerals up to 2.6rem. It is at least 300px tall on desktop and goes honey-lit on hover. Beside it, a white rows panel lists Messenger, email and the Facebook page as quiet secondary options. The two stack under 900px.

### Footer
A deep blue ground with four columns. Column headings are honey. Links are on-dark at 48px tall, turning honey and underlined on hover. Body text is on-dark-muted, and a faint white hairline sits above the base row. Focus rings switch to honey here.

### Mobile dock
Under 900px, a fixed two-button bar sits 10px from the screen edges: honey "Order on WhatsApp" and a 64px ink Messenger button. Both are 60px tall with a 14px radius, and they are the only shadowed element. The dock tucks away while the hero's own WhatsApp action is on screen.

### Motion
- **Easing:** expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`) throughout.
- **First viewport:** arrives once. Copy items rise 24px in a 60ms stagger, and the hero photo reveals from scale 1.03 (1.4s).
- **Scroll reveals:** items rise 20px or images fade in, staggered 80ms among siblings. They are set only when JS runs, so content is visible without it.
- **Page changes:** cross-document View Transitions keep the header still, slide the honey pill (0.6s), sink the old page and rise the new one.
- **Reduced motion:** removes all of it. Reveals are shown, transitions and view transitions are off, smooth scroll is off.

## Do's and Don'ts

### Do:
- **Do** let the user-supplied photos lead every image slot; the shop's own shelf photos are the product proof.
- **Do** keep honey for action and "you are here" only, always with ink text.
- **Do** use logo blue for links and icons on paper and sky.
- **Do** draw panels with a 1px inset hairline on paper and separate sections with sky.
- **Do** keep section rhythm compact: 48–84px sections, 16–32px after a page head.
- **Do** keep every readable line at 18px or larger and every target at 48px or larger.
- **Do** pair each H1 and H2 with its Bangla line in muted 500.
- **Do** put captions below photos, never on top, except the single tour tag pill.
- **Do** keep text contrast at WCAG AA, honour reduced motion and keep content visible without JavaScript.

### Don't:
- **Don't** return to the navy signboard world, or drift into pastel paw-confetti pet styling.
- **Don't** fill labels, captions or shelf tags with honey.
- **Don't** add shadows to cards, photos or buttons; only the mobile dock floats.
- **Don't** use the WhatsApp chat colours outside the example chat.
- **Don't** add a second typeface or use Anek Bangla's condensed or expanded widths.
- **Don't** put muted or blue text on honey; ink only.
