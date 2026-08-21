import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`
const POSTER = assetPath('videos/menu/menu-hero-poster.webp')

// Fixed mount-relative delays, not tied to video playback events -- the
// video is a fixed ~15.7s clip that never loops, so a timer keyed off
// mount time lands the headline reliably in the same spot on every load
// without risking a re-trigger from timeupdate/ended firing more than once.
const KICKER_DELAY = 1
const HEADLINE_DELAY = 10.5
const SUPPORTING_DELAY = 11.3

export default function MenuHero() {
  const shouldReduceMotion = useReducedMotion()

  const kickerAnim = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: KICKER_DELAY } }

  const headlineAnim = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: HEADLINE_DELAY, ease: [0.22, 1, 0.36, 1] } }

  const supportingAnim = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: SUPPORTING_DELAY } }

  return (
    <header className="relative h-[68svh] w-full overflow-hidden bg-brand-espresso text-white">
      {shouldReduceMotion ? (
        <img src={POSTER} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={POSTER}
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src={assetPath('videos/menu/menu-hero-mobile.webm')} type="video/webm" />
          <source src={assetPath('videos/menu/menu-hero-mobile.mp4')} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso via-brand-espresso/55 to-brand-espresso/10" />

      <div className="relative flex h-full w-full flex-col justify-end px-5 pb-10">
        <div className="mx-auto w-full max-w-[440px] md:max-w-2xl">
          <motion.p
            className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.24em] text-brand-accent"
            {...kickerAnim}
          >
            On The Brew Coffee Company
          </motion.p>
          <motion.h1
            className="font-display font-bold text-5xl uppercase leading-[0.95] tracking-[0.03em] sm:text-7xl"
            {...headlineAnim}
          >
            {content.menu.title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            {...supportingAnim}
          >
            {content.menu.introduction}
          </motion.p>
        </div>
      </div>
    </header>
  )
}
