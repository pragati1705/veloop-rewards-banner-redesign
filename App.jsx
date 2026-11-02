import React from 'react'
import { Gift, ArrowLeftRight, Sparkles, ShieldCheck, Wallet, ChevronRight, ArrowUpRight, CircleCheck, Users, Coins, BadgeCheck, Ticket, Zap } from 'lucide-react'
import styles from './App.module.css'
import ReferEarnBanner from './ReferEarnBanner/ReferEarnBanner.jsx'
import SwapCenterBanner from './SwapCenterBanner/SwapCenterBanner.jsx'
import BonusVEsBanner from './BonusVEsBanner/BonusVEsBanner.jsx'
import CaptchaTasksBanner from './CaptchaTasksBanner/CaptchaTasksBanner.jsx'
import ExchangeCenterBanner from './ExchangeCenterBanner/ExchangeCenterBanner.jsx'

function App() {
  const [active, setActive] = React.useState('Overview')
  const nav = ['Overview', 'Earn', 'Swap', 'Exchange']
  return (
    <main className={styles.appShell}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="#top" aria-label="VELOOP Rewards home">
          <span className={styles.brandMark}><span /></span>
          <span>VELOOP<span className={styles.brandLight}>REWARDS</span></span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          {nav.map(item => <button key={item} className={`${styles.navItem} ${active === item ? styles.navActive : ''}`} onClick={() => setActive(item)}>{item}</button>)}
        </nav>
        <div className={styles.profile}>
          <span className={styles.avatar}>P</span>
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
        <div className={styles.footerBrand}><span className={styles.brandMark}><span /></span> VELOOP REWARDS</div>
        <span>Designed for a smoother rewards experience.</span>
        <span className={styles.footerNote}>INTERNSHIP DESIGN CONCEPT</span>
      </footer>
    </main>
  )
}

export default App
