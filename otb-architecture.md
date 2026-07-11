# OTB Site Architecture

## Architecture decision: Clover POS, no e-commerce on site

Client uses Clover Station Duo for POS. Shopify was dropped.
This site is onthebrew.com — marketing and conversion only.
No online ordering, no cart, no e-commerce in the $300 scope.
No Clover API integration (that's a separate paid project if ever).
Delivery (UberEats/DoorDash) not set up yet; links added free once client signs up.

## Build rules

Mobile-first always. Design and test 390px wide before touching desktop.
No preloaders that block content. Any intro animation must complete under 1 second.
prefers-reduced-motion must be respected on every animated component.
Test on mid-tier Android before committing any scroll effect.

## Section order (scroll top to bottom)

1. Hero
2. The Difference (problem reframed positive)
3. Story (Cecilia and Jonathan, seed to sip)
4. Menu preview (3 featured items linking to the full `/menu` route, NO prices)
5. Proof (grand opening, reviews, Brewmobile)
6. Visit / CTA (address, hours, map, order ahead)
7. Footer

## Routing rules

The marketing landing page uses anchor scrolling for its primary sections.
`/menu` is a lightweight, shareable café-menu route with Coffee, Non-Coffee, and Food categories.
shop.onthebrew.com = external only, never in-app routing.

## Build order (de-risk sequence)

Phase 1: Grayscale skeleton — all sections, semantic tokens, mobile layout locked [DONE]
Phase 2: Mobile drawer nav + smooth scroll [DONE]
Phase 3: Brand swap — real OTB tokens + Assistant/Bodoni fonts
Phase 4: Real content — blends, pastries, story copy, photos as they arrive
Phase 5: Motion layer — shared fade-up + 3-4 signature moments
Phase 6: Visit section — map embed, hours, directions, floor plan
Phase 7: Decap CMS admin (blends + pastries editing) — BUILD LAST, verify auth
Phase 8: Domain DNS cutover + Netlify deploy

## Content pending from client

Actual logo file (SVG preferred)
Real photos: shop interior, drinks, Cecilia and Jonathan
Hours and exact location details
Confirmed brand color hex values
Confirmed menu: 8 blends + 3 pastries with tasting notes/descriptions (no prices)
