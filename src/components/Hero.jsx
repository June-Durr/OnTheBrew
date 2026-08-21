import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'
import Button from './Button'
import { fadeUp, reducedFadeUp } from '../lib/motion'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

const EASE = [0.22, 1, 0.36, 1]

const SHADOW = 'drop-shadow(0px 5px 7px rgba(40, 30, 20, 0.10)) drop-shadow(0px 12px 18px rgba(40, 30, 20, 0.06))'
const SHADOW_HOT = 'drop-shadow(0px 6px 8px rgba(40, 30, 20, 0.12)) drop-shadow(0px 14px 20px rgba(40, 30, 20, 0.07))'

// Calibrated against public/images/hero/otb-hero-final.png (768x1376): each
// box below is the exact pixel rect (converted to %) where that product's
// PNG is a 1:1 crop of the final artwork — verified to a 0.000 mean color
// error by brute-force search, not estimated from the PNG canvas size.
// zIndex mirrors the actual paint order in the approved composite (red
// bottom, matcha top), confirmed by reassembling all four over the
// reference and diffing against it pixel-for-pixel.
const PRODUCTS = [
  {
    key: 'red',
    src: assetPath('images/hero/otb-red-full.png'),
    width: 231,
    height: 477,
    box: { left: '0%', top: '4.2878%', width: '30.0781%' },
    from: { x: '-150%', y: '-110%' },
    delay: 0.05,
    duration: 1.55,
    zIndex: 10,
    shadow: SHADOW,
  },
  {
    key: 'iced',
    src: assetPath('images/hero/otb-iced.png'),
    width: 343,
    height: 494,
    box: { left: '23.4375%', top: '12.5727%', width: '44.6615%' },
    from: { x: '-170%', y: '-65%' },
    delay: 0.18,
    duration: 1.65,
    zIndex: 20,
    shadow: SHADOW,
  },
  {
    key: 'hot',
    src: assetPath('images/hero/otb-hot.png'),
    width: 408,
    height: 564,
    box: { left: '46.875%', top: '26.2355%', width: '53.125%' },
    from: { x: '150%', y: '-85%' },
    delay: 0.32,
    duration: 1.55,
    zIndex: 30,
    shadow: SHADOW_HOT,
  },
  {
    key: 'matcha',
    src: assetPath('images/hero/otb-matcha-full.png'),
    width: 257,
    height: 538,
    box: { left: '66.5365%', top: '45.7849%', width: '33.4635%' },
    from: { x: '130%', y: '100%' },
    delay: 0.48,
    duration: 1.15,
    zIndex: 40,
    shadow: SHADOW,
  },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="hero" className="relative w-full bg-brand-bg">
      <div
        className="relative z-0 w-full overflow-hidden bg-brand-bg"
        style={{ aspectRatio: '768 / 1376' }}
        aria-hidden="true"
      >
        {shouldReduceMotion ? (
          // Reduced motion is the only mode where the final composite is
          // used: no cup layers are rendered or animated at all.
          <img
            src={assetPath('images/hero/otb-hero-final.png')}
            width={768}
            height={1376}
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // Normal motion: the four cutouts animate in and settle — that IS
          // the final hero. No crossfade, no swap to otb-hero-final.png, no
          // opacity change of any kind after they land.
          PRODUCTS.map((product) => (
            <motion.img
              key={product.key}
              src={product.src}
              width={product.width}
              height={product.height}
              alt=""
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute h-auto"
              style={{
                left: product.box.left,
                top: product.box.top,
                width: product.box.width,
                zIndex: product.zIndex,
                filter: product.shadow,
              }}
              initial={{ ...product.from, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                x: { duration: product.duration, delay: product.delay, ease: EASE },
                y: { duration: product.duration, delay: product.delay, ease: EASE },
                opacity: { duration: 0.45, delay: product.delay, ease: 'easeOut' },
              }}
            />
          ))
        )}
      </div>

      <motion.div
        className="absolute bottom-6 left-5 w-[190px] text-left"
        initial="hidden"
        animate="visible"
        variants={shouldReduceMotion ? reducedFadeUp : fadeUp}
      >
        <h1 className="font-display text-[26px] font-bold uppercase leading-[1.08] tracking-wide text-brand-ink">
          {content.hero.headline}
        </h1>
        <p className="mt-3 text-[11px] uppercase leading-snug tracking-widest text-brand-primary">{content.hero.subline}</p>
        <Button variant="primary" href="#visit" className="!mt-4 !h-11 !w-auto !px-6 !text-sm">
          {content.hero.cta}
        </Button>
      </motion.div>
    </section>
  )
}
