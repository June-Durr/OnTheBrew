import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { content } from '../content'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-line bg-brand-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="font-display uppercase text-lg tracking-wide text-brand-primary" onClick={() => setIsOpen(false)}>
          {content.business.short}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <Link className="text-sm font-bold uppercase tracking-[0.12em] text-brand-ink hover:text-brand-primary" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(true)}
          className="flex h-12 w-12 items-center justify-center text-brand-ink md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-brand-ink/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-[60] w-[85%] max-w-sm border-l border-brand-line bg-brand-surface md:hidden"
              initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-16 items-center justify-between border-b border-brand-line px-5">
                <Link to="/" className="font-display uppercase text-lg tracking-wide text-brand-primary" onClick={() => setIsOpen(false)}>
                  {content.business.short}
                </Link>

                <button
                  type="button"
                  aria-label="Close navigation"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 w-12 items-center justify-center text-brand-ink"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M5 5l14 14M19 5L5 19" />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col gap-6 px-8 pt-8">
                {content.nav.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex min-h-12 items-center font-display text-2xl uppercase tracking-wide text-brand-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
