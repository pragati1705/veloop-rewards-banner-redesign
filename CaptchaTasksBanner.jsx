import React from 'react'
import { ShieldCheck, ArrowRight, Check, Keyboard, CircleCheck, Sparkles } from 'lucide-react'
import styles from './CaptchaTasksBanner.module.css'

export default function CaptchaTasksBanner() {
  return <article className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.kicker}><span className={styles.kickerIcon}><ShieldCheck size={14}/></span> SMALL TASKS, REAL PROGRESS</div>
      <h2>Complete a task.<br/><span>Earn as you go.</span></h2>
      <p>Take on available captcha tasks, submit accurate responses and receive rewards for eligible completions.</p>
      <div className={styles.trustRow}><span><CircleCheck size={14}/> Clear task steps</span><span><ShieldCheck size={14}/> Verified submissions</span></div>
      <button className={styles.cta} onClick={() => document.getElementById('captcha-info')?.scrollIntoView({behavior:'smooth'})}>Explore Tasks <ArrowRight size={15}/></button>
    </div>
    <div className={styles.visual} aria-label="Illustration of a verified captcha task">
      <div className={styles.glow}/>
      <div className={styles.taskCard}>
        <div className={styles.taskHeader}><span className={styles.windowDots}><i/><i/><i/></span><span>QUICK VERIFICATION</span><ShieldCheck size={15}/></div>
        <div className={styles.taskPrompt}>Select all matching symbols</div>
        <div className={styles.tiles}>
          <div>⌘</div><div className={styles.selected}>✓<span><Check size={15}/></span></div><div>⌘</div>
          <div className={styles.selected}>✓<span><Check size={15}/></span></div><div>⌘</div><div className={styles.selected}>✓<span><Check size={15}/></span></div>
        </div>
        <div className={styles.taskFooter}><span><ShieldCheck size={12}/> Secure task</span><span className={styles.verify}>Verify <ArrowRight size={12}/></span></div>
      </div>
      <div className={styles.verified}><span><Check size={18}/></span><div><strong>Task verified</strong><small>Submission complete</small></div></div>
      <div className={styles.rewardChip}><Sparkles size={14}/> Reward earned</div>
      <div className={styles.keyboard}><Keyboard size={20}/><div>{Array.from({length:12},(_,i)=><i key={i}/>)}</div></div>
      <span className={styles.sparkle}>✦</span>
    </div>
    <div className={styles.bottomNote} id="captcha-info"><span/> Rewards are subject to task availability and submission rules.</div>
  </article>
}