import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { content } from '../content'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

const mobileLinks = [{ label: 'Home', href: '/' }, ...content.nav.links]

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={assetPath('branding/otb-botanical-mark-blue-2048.png')}
        alt=""
        aria-hidden="true"
        className="h-9 w-auto shrink-0 object-contain md:h-10"
      />
      <span className="font-display text-lg font-bold uppercase leading-none tracking-wide text-brand-primary md:text-xl">
        {content.business.name.split(' Coffee')[0]}
      </span>
    </span>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isOpen) return undefined
    const { style } = document.body
    const previousOverflow = style.overflow
    style.overflow = 'hidden'
    return () => {
      style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-line bg-brand-surface">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between pl-5 pr-3 md:h-20 md:px-8">
        <Link to="/" onClick={() => setIsOpen(false)} aria-label="On The Brew Coffee Company home">
          <Wordmark />
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
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-brand-ink md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {isOpen ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-x-0 bottom-0 top-14 z-[90] bg-brand-ink/25 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed right-3 top-[60px] z-[100] w-[248px] overflow-hidden rounded-2xl border border-brand-line bg-brand-bg shadow-xl md:hidden"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center border-b border-brand-line/70 py-3">
                <img
                  src={assetPath('branding/otb-botanical-mark-blue-2048.png')}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto object-contain"
                />
              </div>

              <ul className="flex flex-col px-2 py-1.5">
                {mobileLinks.map((link, index) => (
                  <li key={link.label} className={index !== 0 ? 'border-t border-brand-line/70' : ''}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex min-h-[2.75rem] items-center px-3 font-display text-lg uppercase tracking-wide text-brand-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-center gap-5 border-t border-brand-line/70 px-3 py-3">
                {content.footer.social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-brand-ink/50 hover:text-brand-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
