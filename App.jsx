import React from 'react'
import { Sparkles } from 'lucide-react'
import styles from './App.module.css'
import ReferEarnBanner from './ReferEarnBanner.jsx'
import SwapCenterBanner from './SwapCenterBanner.jsx'
import BonusVEsBanner from './BonusVEsBanner.jsx'
import CaptchaTasksBanner from './CaptchaTasksBanner.jsx'
import ExchangeCenterBanner from './ExchangeCenterBanner.jsx'

const navigation = [
  { label: 'Overview', target: 'top' },
  { label: 'Earn', target: 'bonus-info' },
  { label: 'Swap', target: 'swap-info' },
  { label: 'Exchange', target: 'exchange-info' },
]

export default function App() {
  const [active, setActive] = React.useState('Overview')

  const navigateTo = (item) => {
    setActive(item.label)
    document.getElementById(item.target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <main className={styles.appShell}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark}><span /></span>
          <span>VELOOP<span className={styles.brandLight}>REWARDS</span></span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          {navigation.map(item => (
            <button
              key={item.label}
              type="button"
              aria-current={active === item.label ? 'page' : undefined}
              className={`${styles.navItem} ${active === item.label ? styles.navActive : ''}`}
              onClick={() => navigateTo(item)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className={styles.profile}>
          <span className={styles.avatar}>V</span>
          <span className={styles.profileName}>Your rewards</span>
        </div>
      </header>

      <section className={styles.intro} id="top">
        <div>
          <div className={styles.eyebrow}><span className={styles.eyebrowDot} /> YOUR REWARDS, REIMAGINED</div>
          <h1>Make every action<br /><span>more rewarding.</span></h1>
          <p>Discover new ways to earn, manage and redeem your rewards — all in one place.</p>
        </div>
        <div className={styles.introStat}>
          <div className={styles.statIcon}><Sparkles size={18} /></div>
          <div><small>YOUR REWARD HUB</small><strong>Good things add up.</strong></div>
        </div>
      </section>

      <section className={styles.bannerList} aria-label="Rewards features">
        <ReferEarnBanner />
        <SwapCenterBanner />
        <BonusVEsBanner />
        <CaptchaTasksBanner />
        <ExchangeCenterBanner />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>VELOOP REWARDS</div>
        <span>Designed for a smoother rewards experience.</span>
        <span className={styles.footerNote}>INTERNSHIP DESIGN CONCEPT</span>
      </footer>
    </main>
  )
}
