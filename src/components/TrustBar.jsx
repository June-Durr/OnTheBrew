import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'
import { fadeUp, stagger, reducedFadeUp } from '../lib/motion'
import Reveal from './Reveal'

const iconProps = {
  width: 48,
  height: 48,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'text-brand-accent',
}

const icons = {
  sprig: (
    <svg {...iconProps}>
      <path d="M24 40V20" />
      <path d="M24 26c0-6 6-9 11-8-1 6-5 9-11 8Z" />
      <path d="M24 20c0-6-6-9-11-8 1 6 5 9 11 8Z" />
      <circle cx="24" cy="12" r="4" />
    </svg>
  ),
  mountain: (
    <svg {...iconProps}>
      <circle cx="33" cy="12" r="3" />
      <path d="M4 36 16 18l6 8 4-5 14 15Z" />
    </svg>
  ),
  pin: (
    <svg {...iconProps}>
      <path d="M24 42s12-11.5 12-20a12 12 0 1 0-24 0c0 8.5 12 20 12 20Z" />
      <circle cx="24" cy="21" r="4" />
    </svg>
  ),
}

export default function TrustBar() {
  const shouldReduceMotion = useReducedMotion()
  const blockVariants = shouldReduceMotion ? reducedFadeUp : fadeUp

  return (
    <section className="w-full bg-brand-navy px-6 py-16">
      <Reveal className="flex flex-col items-center gap-12 text-center" variants={stagger}>
        {content.trustBar.map((item) => (
          <motion.div key={item.heading} className="flex flex-col items-center gap-3" variants={blockVariants}>
            {icons[item.icon]}
            <h3 className="font-display font-bold uppercase text-white text-lg tracking-wide">{item.heading}</h3>
            <p className="font-sans text-brand-bg/70 text-sm">{item.body}</p>
          </motion.div>
        ))}
      </Reveal>
    </section>
  )
}
