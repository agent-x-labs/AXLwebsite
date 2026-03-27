# Agent X Labs Website

## Project Overview
Landing page for Agent X Labs, built from a React template. Single-page site with sections for hero, services, portfolio, team, contact, and footer.

## Tech Stack
- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4 (using `@tailwindcss/vite` plugin)
- **Animations:** Framer Motion
- **Notifications:** react-hot-toast
- **Contact Form:** Web3Forms API

## Commands
- `npm run dev` - Start dev server (http://localhost:5173)
- `npm run build` - Production build (outputs to `dist/`)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment
- **Host:** Netlify
- **URL:** https://axlweb.netlify.app
- **Repo:** https://github.com/agent-x-labs/AXLwebsite
- **Build:** Auto-deploys from GitHub on push

## Project Structure
```
src/
  assets/        - Images, icons, SVGs, and assets.js (data exports)
  components/    - UI components (Navbar, Hero, Services, OurWork, Teams, ContactUs, Footer, etc.)
  App.jsx        - Root component with theme toggle and custom cursor
  main.jsx       - Vite entry point
  index.css      - Global styles, Tailwind imports, primary color theme
public/          - Static assets (favicon)
index.html       - HTML shell
```

## Key Files for Content Updates
- `src/assets/assets.js` - Team data, company logos, all asset imports
- `src/index.css` - Primary brand color (`--color-primary: #5044E5`)
- `src/assets/logo.svg` / `logo_dark.svg` - Brand logos
- `src/components/Hero.jsx` - Main headline and subtext
- `src/components/Services.jsx` - Service offerings
- `src/components/ContactUs.jsx` - Contact form (Web3Forms API key needs replacing)
- `src/components/Footer.jsx` - Copyright, social links, newsletter
- `index.html` - Page title (currently "Agency.AI")

## Notes
- Dark/light theme support via class toggle on `<html>` element
- Custom cursor (dot + ring) implemented in App.jsx
- Font: Manrope (Google Fonts)
- The contact form API key in ContactUs.jsx belongs to the original template author and should be replaced
