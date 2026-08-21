import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, stagger, reducedFadeUp } from '../lib/motion'

const copy = {
  preview: {
    heading: 'font-display text-lg font-bold uppercase text-brand-primary',
    body: 'text-sm text-brand-ink/70',
    pending: 'text-sm italic text-brand-ink/40',
  },
  chapter: {
    heading: 'font-display text-xl font-bold leading-tight text-brand-espresso sm:text-2xl',
    body: 'mt-1 text-base leading-snug text-brand-ink/75',
    pending: 'mt-1 text-base italic leading-snug text-brand-ink/40',
  },
}

function Row({ item, styles, Wrapper, variants }) {
  const isPending = /^\[.*\]$/.test(item.description)
  const description = isPending ? item.description.replace(/^\[\s*|\s*\]$/g, '') : item.description

  return (
    <Wrapper className="relative flex gap-4" variants={variants}>
      <span className="relative z-10 mt-2 h-[11px] w-[11px] shrink-0 rounded-full bg-brand-roast ring-4 ring-brand-bg" />
      <div>
        <h3 className={styles.heading}>{item.name}</h3>
        <p className={isPending ? styles.pending : styles.body}>{description}</p>
      </div>
    </Wrapper>
  )
}

export default function MenuTimeline({ items, variant = 'chapter', animated = false }) {
  const shouldReduceMotion = useReducedMotion()
  const styles = copy[variant]

  if (!animated) {
    return (
      <div className="relative">
        <div className="pointer-events-none absolute left-[5px] top-2 bottom-2 w-px bg-brand-roast/25" aria-hidden="true" />
        <div className="flex flex-col gap-7">
          {items.map((item) => (
            <Row key={item.name} item={item} styles={styles} Wrapper="div" />
          ))}
        </div>
      </div>
    )
  }

  const rowVariants = shouldReduceMotion ? reducedFadeUp : fadeUp

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-[5px] top-2 bottom-2 w-px bg-brand-roast/25" aria-hidden="true" />
      <motion.div
        className="flex flex-col gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {items.map((item) => (
          <Row key={item.name} item={item} styles={styles} Wrapper={motion.div} variants={rowVariants} />
        ))}
      </motion.div>
    </div>
  )
}
