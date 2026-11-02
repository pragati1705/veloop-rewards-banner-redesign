import React from 'react'
import { Sparkles, ArrowUpRight, BadgePercent, Coins, Zap } from 'lucide-react'
import styles from './BonusVEsBanner.module.css'

export default function BonusVEsBanner() {
  return <article className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.kicker}><span className={styles.kickerIcon}><Sparkles size={14}/></span> A LITTLE EXTRA</div>
      <h2>More ways to earn.<br/><span>More to look forward to.</span></h2>
      <p>Explore eligible activities, campaigns and special opportunities that can add extra VEs to your rewards.</p>
      <div className={styles.bonusLine}><span className={styles.bonusIcon}><Zap size={14}/></span><span><strong>Bonus opportunities</strong><small>Find your next reward moment</small></span></div>
      <button className={styles.cta} onClick={() => document.getElementById('bonus-info')?.scrollIntoView({behavior:'smooth'})}>Explore Bonus <ArrowUpRight size={16}/></button>
    </div>
    <div className={styles.visual} aria-label="Illustration of a bonus reward box and coins">
      <div className={styles.halo}/><div className={styles.confetti}>✦</div><div className={styles.confettiTwo}>✧</div>
      <div className={styles.bigCoin}><span>VE</span><i>✦</i></div>
      <div className={styles.coinSmall}>V</div><div className={styles.coinSmallTwo}>✦</div>
      <div className={styles.rewardBox}><div className={styles.boxLid}/><div className={styles.boxFront}><span>+</span></div><div className={styles.boxRibbon}/><div className={styles.boxBow}>∞</div></div>
      <div className={styles.bonusBadge}><BadgePercent size={16}/><span>BONUS<br/><b>UNLOCKED</b></span></div>
      <div className={styles.rewardMeter}><span>REWARD MOMENT</span><div><i/></div></div>
    </div>
    <div className={styles.bottomNote} id="bonus-info"><span/> Availability and reward amounts depend on approved offers.</div>
  </article>
}