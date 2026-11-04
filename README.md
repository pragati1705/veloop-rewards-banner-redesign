# VELOOP Rewards — Promotional Banner Redesign

A responsive React frontend concept for VELOOP Rewards featuring five promotional banners with a consistent, premium fintech design.

## Features
- Refer & Earn
- Swap Center
- Bonus VEs
- Captcha Tasks
- Exchange Center
- Responsive desktop, tablet and mobile layouts
- Dark navy background with blue, gold and neutral accents
- Custom CSS illustrations and Lucide icons
- Interactive hover, focus and active states
- Reduced-motion accessibility support
- Reusable React components and CSS Modules
- Demonstration UI only; no real transactions or guaranteed rewards

## Tech Stack
- React 18
- Vite 6
- Bootstrap 5
- CSS Modules
- Lucide React

## Run Locally

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL provided by Vite.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deployment

### Vercel
- Import this GitHub repository into Vercel.
- Build command: `npm run build`
- Output directory: `dist`
- Deploy the project.

### Netlify
- Import this GitHub repository into Netlify.
- Build command: `npm run build`
- Publish directory: `dist`
- Deploy the project.

## Project Structure

```text
veloop-rewards-banner-redesign/
├── App.jsx
├── App.module.css
├── ReferEarnBanner.jsx
├── ReferEarnBanner.module.css
├── SwapCenterBanner.jsx
├── SwapCenterBanner.module.css
├── BonusVEsBanner.jsx
├── BonusVEsBanner.module.css
├── CaptchaTasksBanner.jsx
├── CaptchaTasksBanner.module.css
├── ExchangeCenterBanner.jsx
├── ExchangeCenterBanner.module.css
├── global.css
├── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── netlify.toml
├── .gitignore
└── README.md
```

## Interaction and Content Notes

All banners are frontend demonstrations. Reward values are not presented as official offers, and no backend transactions are performed. CTA interactions are illustrative and should be connected to official VELOOP routes if provided.

## Submission Checklist
- [ ] Production build verified
- [ ] Desktop and mobile layouts tested
- [ ] Buttons and navigation tested
- [ ] Public GitHub repository ready
- [ ] Live deployment completed

## Author
Pragati Chitnalli
