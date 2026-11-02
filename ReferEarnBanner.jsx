import React from 'react'
import { Users, Gift, ArrowUpRight, Sparkles, Coins } from 'lucide-react'
import styles from './ReferEarnBanner.module.css'

export default function ReferEarnBanner() {
  return <article className={`${styles.banner} ${styles.refer}`}>
    <div className={styles.content}>
      <div className={styles.kicker}><span className={styles.kickerIcon}><Users size={14}/></span> SHARE THE GOOD</div>
      <h2>Good friends.<br/><span>Great rewards.</span></h2>
      <p>Bring your people to VELOOP and unlock rewards together when they complete eligible activities.</p>
      <div className={styles.pills}><span><Gift size={14}/> Shared rewards</span><span><Sparkles size={14}/> More to discover</span></div>
      <button className={styles.cta} onClick={() => document.getElementById('referral-info')?.scrollIntoView({behavior:'smooth'})}>Refer &amp; Earn <ArrowUpRight size={16}/></button>
    </div>
    <div className={styles.visual} aria-label="Illustration of friends sharing a gift">
      <div className={styles.orbit}/><div className={styles.orbitTwo}/>
      <div className={styles.person personOne}><div className={styles.head}/><div className={styles.body}/></div>
      <div className={styles.person personTwo}><div className={styles.head}/><div className={styles.body}/></div>
      <div className={styles.gift}><div className={styles.giftLid}/><div className={styles.giftRibbon}/><div className={styles.giftBow}>∞</div></div>
      <div className={styles.coin}><Coins size={19}/></div>
      <div className={styles.floatTag}><Sparkles size={13}/> Invite. Connect. Earn.</div>
      <span className={styles.sparkleOne}>✦</span><span className={styles.sparkleTwo}>✧</span>
    </div>
    <div className={styles.bottomNote} id="referral-info"><span className={styles.noteDot}/> Rewards unlock when referral milestones are met</div>
  </article>
}