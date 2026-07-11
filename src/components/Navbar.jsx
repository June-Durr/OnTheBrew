import { useState } from 'react'
import { Link } from 'react-router-dom'
import { content } from '../content'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-line bg-brand-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="font-display text-xl font-bold text-brand-primary" onClick={() => setIsOpen(false)}>
          {content.business.short}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <a className="text-sm font-bold uppercase tracking-[0.12em] text-brand-ink hover:text-brand-primary" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-12 w-12 items-center justify-center md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {isOpen ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-brand-line bg-brand-surface px-5 py-5 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col">
            {content.nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center border-b border-brand-line text-base font-bold uppercase tracking-[0.12em] last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
