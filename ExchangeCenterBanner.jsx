import React from 'react'
import { Wallet, ArrowUpRight, Gift, Ticket, CircleCheck, ArrowRightLeft } from 'lucide-react'
import styles from './ExchangeCenterBanner.module.css'

export default function ExchangeCenterBanner() {
  return <article className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.kicker}><span className={styles.kickerIcon}><Wallet size={14}/></span> YOUR REWARDS, YOUR CHOICE</div>
      <h2>Turn rewards into<br/><span>something you love.</span></h2>
      <p>Browse supported redemption options and exchange eligible VEs for rewards that fit you.</p>
      <div className={styles.optionRow}><span><Ticket size={14}/> Gift cards</span><span><Wallet size={14}/> Payout options</span></div>
      <button className={styles.cta} onClick={() => document.getElementById('exchange-info')?.scrollIntoView({behavior:'smooth'})}>Explore Rewards <ArrowUpRight size={16}/></button>
    </div>
    <div className={styles.visual} aria-label="Illustration of a wallet and reward cards">
      <div className={styles.visualHalo}/>
      <div className={styles.veCoin}><span>VE</span></div>
      <div className={styles.exchangeArrow}><ArrowRightLeft size={20}/></div>
      <div className={styles.wallet}>
        <div className={styles.walletBack}/>
        <div className={styles.walletBody}><div className={styles.walletLogo}><span/></div><div className={styles.walletText}>REWARD<br/><b>WALLET</b></div><div className={styles.walletChip}/></div>
        <div className={styles.walletPocket}><span/></div>
      </div>
      <div className={styles.giftCard}><div className={styles.giftMark}><Gift size={20}/></div><div><strong>Gift card</strong><small>Ready to redeem</small></div><CircleCheck size={16}/></div>
      <div className={styles.payoutCard}><div className={styles.payoutIcon}>₹</div><div><strong>More choices</strong><small>Explore options</small></div></div>
      <span className={styles.sparkle}>✦</span>
    </div>
    <div className={styles.bottomNote} id="exchange-info"><span/> Available redemption methods depend on platform eligibility.</div>
  </article>
}