import React from 'react'
import {
  ArrowLeftRight,
  ArrowRight,
  RefreshCw,
  CircleDollarSign,
  Sparkles,
  ShieldCheck
} from 'lucide-react'
import styles from './SwapCenterBanner.module.css'

export default function SwapCenterBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.kickerIcon}>
            <ArrowLeftRight size={15} />
          </span>
          REWARDS, REIMAGINED
        </div>

        <h2>
          One balance.
          <br />
          <span>More possibilities.</span>
        </h2>

        <p>
          Experience greater flexibility with supported reward
          conversions. Move between eligible balances with ease.
        </p>

        <div className={styles.featureRow}>
          <span><ShieldCheck size={15} /> Secure experience</span>
          <span><RefreshCw size={15} /> Flexible swaps</span>
        </div>

        <button
          type="button"
          className={styles.cta}
          onClick={() =>
            document.getElementById('swap-info')?.scrollIntoView({
              behavior: 'smooth'
            })
          }
        >
          Explore Swap Center <ArrowRight size={16} />
        </button>
      </div>

      <div
        className={styles.visual}
        aria-label="Reward balance exchange illustration"
      >
        <div className={styles.orbit}>
          <div className={styles.orbitOne} />
        </div>
        <div className={styles.orbitTwo} />
        <div className={styles.glow} />

        <div className={`${styles.balanceCard} ${styles.cardA}`}>
          <div className={styles.cardTop}>
            <span>AVAILABLE BALANCE</span>
            <CircleDollarSign size={19} />
          </div>

          <div className={styles.amount}>
            1,250 <small>VEs</small>
          </div>

          <div className={styles.cardLine}>
            <i /><i /><i />
          </div>

          <div className={styles.cardFoot}>Your reward points</div>
        </div>

        <div className={styles.swapButton}>
          <ArrowLeftRight size={25} />
        </div>

        <div className={`${styles.balanceCard} ${styles.cardB}`}>
          <div className={styles.cardTop}>
            <span>CONVERT TO</span>
            <div className={styles.tokenIcon}>S</div>
          </div>

          <div className={styles.amount}>
            1,250 <small>SVEs</small>
          </div>

          <div className={styles.progress}>
            <span />
          </div>

          <div className={styles.cardFoot}>Supported balance</div>
        </div>

        <div className={styles.roundBadge}>
          <Sparkles size={14} />
          SMART EXCHANGE
        </div>

        <div className={styles.floatingCoin}>V</div>
        <div className={styles.sparkle}>✦</div>
        <div className={styles.sparkleTwo}>✧</div>
      </div>

      <div className={styles.bottomNote} id="swap-info">
        <span />
        Conversion options depend on platform rules and availability.
      </div>
    </article>
  )
}
