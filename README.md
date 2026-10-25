# COOL 9 CAR TINT SHOP — Website Prototype

A responsive single-page React + Vite website prototype for COOL 9 CAR TINT SHOP, Johor Bahru.

## Design direction

**Precision in Every Layer** — premium automotive editorial design using carbon black, warm white, restrained cool blue, bold Outfit display type, and Geist body text. The page follows AIDA: hero, service discovery, decision support, tint education, illustrative gallery, and a direct contact CTA.

## Requirements

- Node.js 20 LTS or a current supported Node.js version
- npm
- Internet connection for the remote Google Fonts and Unsplash images used in this prototype

## Run on Windows

1. Download and extract `cool9-car-tint.zip`.
2. Open the extracted `cool9-car-tint` folder in File Explorer.
3. Click the address bar, type `cmd`, and press Enter (or open the folder in VS Code).
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Contact links

- Display phone: `017-879 0888`
- International phone format used by tel and WhatsApp: `+60178790888`
- WhatsApp uses a prefilled enquiry message. Clicking it starts a conversation; it does not book an appointment.
- Google Maps directions link searches for the supplied street address.

## Business information included

- COOL 9 CAR TINT SHOP
- 36, Jalan Sulam, Taman Sentosa, 80150 Johor Bahru, Johor Darul Ta'zim, Malaysia
- Business hours supplied: 10:00 AM – 7:00 PM (days of operation were not supplied; confirm before launch)
- Telephone: 017-879 0888

## Content owner review required before public launch

1. **Services:** automotive window tinting is the core business category provided. Tint consultation is positioned as an enquiry flow. Existing tint assessment/replacement is explicitly an unconfirmed placeholder; confirm availability or remove it.
2. **Opening days:** only the daily hours were supplied. Add the days of operation and holiday policy when confirmed.
3. **Product specifications:** no film brands, model names, prices, warranty, VLT/UV/IR/TSER test results, or product performance figures are claimed.
4. **Regulations:** the education section includes the commonly published 70% front windscreen and 50% front side-window minimum VLT values for private vehicles and directs visitors to verify current JPJ requirements, especially rear-window rules and applicable conditions. Check official JPJ/MOT guidance before publishing or relying on legal content.
5. **Gallery images:** external Unsplash images are illustrative automotive images, not claimed to be COOL 9 customer work. Replace with original shop and installation photos with permission before launch. Confirm image licenses/terms for the production use case and self-host approved assets when practical.
6. **Brand assets:** wordmark is typeset text, not an official logo file. Replace if the business has approved brand artwork.
7. **Contact and map:** test the phone, WhatsApp and Maps destinations on a real device before launch.
8. **Privacy/analytics:** no form, backend, database, or analytics has been added. If analytics, advertising pixels, or a form are later added, review privacy obligations and consent handling.

## Image source notes

Images load from `images.unsplash.com` using stable photo IDs with query parameters for sizing and compression. They are examples for the prototype; replace with approved original photography before production. The page uses descriptive alt text and lazy loading for below-the-fold images.

## Motion and accessibility

- GSAP timelines for the hero entrance.
- ScrollTrigger for service entrances and scroll-linked image reveals.
- Animations are skipped when `prefers-reduced-motion: reduce` is enabled.
- Mobile navigation is keyboard-operable with `aria-expanded` and a controlled menu.
- Tint education tabs use button controls and ARIA tab semantics.
- Visible focus indicators and responsive layouts are included.

## SEO

The HTML contains a page title, meta description and Open Graph basics. The address and phone are shown in page content. No fabricated reviews, rating, award, or structured-data review fields are included. Consider adding validated `LocalBusiness`/`AutomotiveBusiness` JSON-LD after the owner confirms all business details, operating days, and official URL.

## Verification status

The project files were generated in this deliverable. **No browser was launched and no npm build or automated test was executed in this session.** Run `npm install` and `npm run build` locally, then test mobile/desktop layout, external images, WhatsApp/telephone/Maps links, keyboard navigation, reduced motion, and the tint-regulation copy before launch.
