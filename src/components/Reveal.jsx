import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, reducedFadeUp } from '../lib/motion'

export default function Reveal({ className, children, variants, ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? reducedFadeUp : variants || fadeUp}
      {...props}
    >
      {children}
    </motion.div>
  )
}
