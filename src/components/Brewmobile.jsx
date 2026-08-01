import { motion, useReducedMotion } from 'motion/react'
import { content } from '../content'
import { fadeUp, stagger, reducedFadeUp } from '../lib/motion'
import Reveal from './Reveal'
import Button from './Button'

export default function Brewmobile() {
  const shouldReduceMotion = useReducedMotion()
  const chipVariants = shouldReduceMotion ? reducedFadeUp : fadeUp

  return (
    <section
      id="brewmobile"
      className="w-full bg-brand-primary px-5 py-16 text-center"
    >
      <Reveal className="w-full">
        <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-white">{content.brewmobile.heading}</h2>
        <p className="mt-4 font-display font-bold text-2xl text-white">{content.brewmobile.hook}</p>

        <motion.div
          className="mt-5 flex flex-wrap justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {content.brewmobile.tags.map((tag) => (
            <motion.span
              key={tag}
              className="rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 font-sans text-xs uppercase tracking-widest text-brand-accent"
              variants={chipVariants}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-8">
          <Button variant="accent" href="#">
            {content.brewmobile.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
