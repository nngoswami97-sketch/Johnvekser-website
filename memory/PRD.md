# Johnvekser.org — Multi-Page Site (PRD)

## Original Problem Statement
Rebuild the Johnvekser.org website as a multi-page experience. Each page is a single, long-scroll narrative with 10 slides. Enterprise-grade, minimal, white background, black accents with gold italic accent words.

## Pages (so far)
- `/` — **Home** (10 slides covering the funding mission)
- `/mentorship` — **Mentorship** (10 slides covering the mentor program)

## File Structure
```
/app/frontend/src/
├── App.js                       ← routes (/, /mentorship)
├── App.css                      ← minimal base styles
├── index.css                    ← Tailwind + fonts (Manrope + Playfair Display) + custom utilities
├── index.js
├── pages/
│   ├── Home.jsx                 ← entire homepage in one file (10 sections)
│   └── Mentorship.jsx           ← entire mentorship page in one file (10 sections)
└── components/
    ├── shared.jsx               ← Navbar, Footer, PillButton, Highlight, FeaturePopup,
    │                              ScrollProgress, StatCounter, Container, Overline,
    │                              Outline button, fadeUp variants
    └── ui/                      ← shadcn primitives (untouched)
```

## Design System (in shared.jsx + index.css)
- **Fonts:** Manrope ExtraBold (display) + Montserrat (body) + Playfair Display italic (gold accents)
- **Colors:** white background, black text, gold `#B8965A` italic accent
- **Buttons:** black gradient pill (`PillButton`) + 2-px black outline secondary
- **Motion:** framer-motion entrance fades, scroll progress bar, animated number counters, marquee press band, orbital city rings, pulsing dots

## Sections in Home.jsx
1. Hero — Funding ideas in diverse regions
2. Community Mission — thriving economies
3. Redefining (Bento) — 8 program cards
4. Shape — tomorrow's economies (huge type)
5–7. Pillars — Leadership, Strategize, Growth (with popups)
8. Global — orbital map + offices
9. Featured In — press marquee + quotes
10. Final CTA — Building entrepreneurial ecosystems

## Sections in Mentorship.jsx
1. Hero — Shaping your story
2. Evolve — Adapting to change
3. Partners — sponsor logo marquee
4. Inspiration — precision & simplicity (huge type)
5. Foundation — Learn. Mentor. Dare! (Respect, Communication, Expectation, Trust)
6. Featured In — press marquee
7. Foundation — solve social problems
8. Labs — break barriers
9. Grants — $10,000 per founder (LGBTQ, women, India, Latin America)
10. Record-breaking Success — final CTA

## What's been implemented (2025-12)
- Refactored Landing.jsx into 3 cleanly separated files (Home, Mentorship, shared)
- Added /mentorship route and cross-page navbar links
- Built all 10 mentorship slides with the same design vocabulary (organic shapes, feature popups, gold italic accents, animated counters)

## Backlog (P1)
- Apply / Become a Mentor flow with backend form submission
- Founder spotlight rotating section
- Localization (EN / ES / PT)
- Dedicated /press, /about, /apply routes

## Next Tasks
- Awaiting user direction.
