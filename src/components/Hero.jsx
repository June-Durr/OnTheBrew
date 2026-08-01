import { content } from '../content'
import Reveal from './Reveal'
import Button from './Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[100dvh] w-full flex-col items-center justify-center bg-brand-primary px-5 py-16 text-center"
    >
      <Reveal className="w-full space-y-6">
        <h1 className="text-4xl font-display font-bold uppercase tracking-wide text-white">{content.hero.headline}</h1>
        <p className="text-sm uppercase tracking-widest text-brand-accent">{content.hero.subline}</p>
        <Button variant="accent" href="#visit">
          {content.hero.cta}
        </Button>
      </Reveal>

      <svg
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-accent"
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
