import { content } from '../content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[100dvh] w-full flex-col items-center justify-center bg-brand-primary px-5 py-16 text-center"
    >
      <div className="w-full space-y-6">
        <h1 className="text-4xl font-display uppercase tracking-[0.03em] text-brand-surface">{content.hero.headline}</h1>
        <p className="text-base leading-relaxed text-brand-surface">{content.hero.subline}</p>
        <a
          href="#visit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-brand-surface text-brand-primary transition-colors duration-150 hover:text-brand-navy"
        >
          {content.hero.cta}
        </a>
      </div>

      <svg
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-surface"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </section>
  )
}
