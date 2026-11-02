# VELOOP Rewards — Promotional Banner Redesign

A responsive React frontend concept for VELOOP Rewards' banner redesign task. It includes five distinct promotional feature banners with a shared premium fintech visual system.

## Features
- Refer & Earn
- Swap Center
- Bonus VEs
- Captcha Tasks
- Exchange Center
- Full-width responsive layouts for desktop, tablet, and mobile
- Dark navy app background (`#161827`) with restrained blue, gold, and neutral accents
- Custom CSS illustrations and Lucide icons
- Subtle motion, hover/active/focus states, and reduced-motion support
- Separate React components and CSS Modules for each banner
- No backend required; all content is demonstration UI and does not promise actual rewards

## Tech stack
- React 18
- Vite 6
- Bootstrap 5
- CSS Modules
- Lucide React

## Run locally
Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy
### Vercel
1. Push this repository to GitHub.
2. In Vercel, import the public GitHub repository.
3. Keep the detected Vite settings: build command `npm run build`, output directory `dist`.
4. Click **Deploy**. `vercel.json` contains these settings too.

### Netlify
1. Push this repository to GitHub.
2. In Netlify, add a new site by importing the GitHub repository.
3. Build command: `npm run build`; publish directory: `dist`.
4. Deploy. `netlify.toml` contains these settings too.

## Project structure
```text
src/
├── components/
│   ├── ReferEarnBanner/
│   ├── SwapCenterBanner/
│   ├── BonusVEsBanner/
│   ├── CaptchaTasksBanner/
│   └── ExchangeCenterBanner/
├── styles/global.css
├── App.jsx
├── App.module.css
└── main.jsx
```

## Interaction and content notes
The banners are front-end design demonstrations. Reward values are intentionally not invented, and no backend transactions are performed. Current CTA interactions are demonstration interactions; connect them to official VELOOP routes if provided by the company.

## Submission checklist
- [ ] Confirm the production build succeeds
- [ ] Open the live site on desktop and mobile and check layout/console
- [ ] Add screenshots of the final live site to this README if available
- [ ] Submit the public GitHub repository URL
- [ ] Submit the Vercel or Netlify live URL

## Author
Pragati Chitnalli
