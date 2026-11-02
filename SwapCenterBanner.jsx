import React from 'react'
import { ArrowLeftRight, ArrowRight, RefreshCw, CircleDollarSign } from 'lucide-react'
import styles from './SwapCenterBanner.module.css'

export default function SwapCenterBanner() {
  return <article className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.kicker}><span className={styles.kickerIcon}><ArrowLeftRight size={14}/></span> FLEXIBLE REWARDS</div>
      <h2>Make your rewards<br/><span>work together.</span></h2>
      <p>Move between supported reward balances with a clear, simple swap experience.</p>
      <div className={styles.microcopy}><RefreshCw size={14}/> Smooth conversions. More flexibility.</div>
      <button className={styles.cta} onClick={() => document.getElementById('swap-info')?.scrollIntoView({behavior:'smooth'})}>Open Swap Center <ArrowRight size={15}/></button>
    </div>
    <div className={styles.visual} aria-label="Illustration of two reward balances being swapped">
      <div className={styles.backGlow}/>
      <div className={`${styles.balanceCard} ${styles.cardA}`}><div className={styles.cardTop}><span>YOUR BALANCE</span><CircleDollarSign size={17}/></div><div className={styles.amount}>1,250 <small>VEs</small></div><div className={styles.cardLine}><span/><span/><span/></div><div className={styles.cardFoot}>Reward balance</div></div>
      <div className={styles.swapButton}><ArrowLeftRight size={24}/></div>
      <div className={`${styles.balanceCard} ${styles.cardB}`}><div className={styles.cardTop}><span>SWAP TO</span><div className={styles.tokenIcon}>S</div></div><div className={styles.amount}>1,250 <small>SVEs</small></div><div className={styles.progress}><span/></div><div className={styles.cardFoot}>Supported balance</div></div>
      <div className={styles.roundBadge}><RefreshCw size={15}/><span>SWAP</span></div>
      <span className={styles.sparkle}>✦</span>
    </div>
    <div className={styles.bottomNote} id="swap-info"><span/> Conversion options depend on platform rules and availability.</div>
  </article>
}