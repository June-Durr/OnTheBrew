import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'
import { fadeUp, stagger, reducedFadeUp } from '../lib/motion'
import Reveal from './Reveal'

export default function Proof() {
  const shouldReduceMotion = useReducedMotion()
  const blockVariants = shouldReduceMotion ? reducedFadeUp : fadeUp

  return (
    <section
      id="proof"
      className="w-full bg-brand-roast px-5 py-16 text-center"
    >
      <Reveal className="w-full space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-white">{content.proof.heading}</h2>

        <motion.div
          className="flex flex-col gap-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {content.proof.blocks.map((block) => (
            <motion.div key={block.label} className="w-full rounded-2xl bg-brand-surface p-5" variants={blockVariants}>
              <h3 className="font-display text-lg font-bold text-brand-ink">{block.label}</h3>
              <p className="text-sm text-brand-ink">{block.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  )
}
