import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'
import { fadeUp, stagger, reducedFadeUp } from '../lib/motion'
import Reveal from './Reveal'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export default function TrustBar() {
  const shouldReduceMotion = useReducedMotion()
  const rowVariants = shouldReduceMotion ? reducedFadeUp : fadeUp
  const [lead, ...supporting] = content.trustBar

  return (
    <section className="w-full bg-brand-navy px-6 py-16">
      <Reveal variants={stagger}>
        <motion.div className="flex flex-col items-center gap-4 text-center" variants={rowVariants}>
          <img
            src={assetPath('branding/otb-botanical-mark-cream-2048.png')}
            alt=""
            aria-hidden="true"
            className="h-14 w-auto object-contain"
          />
          <h2 className="max-w-xs font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white">
            {lead.heading}
          </h2>
          <p className="text-sm text-brand-bg/70">{lead.body}</p>
        </motion.div>

        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {supporting.map((item) => (
            <motion.div key={item.heading} className="py-5 text-left" variants={rowVariants}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">{item.heading}</h3>
              <p className="mt-0.5 text-xs text-brand-bg/60">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
