import { content } from '../content'
import Reveal from './Reveal'

export default function PressBand() {
  const { press } = content

  return (
    <section className="w-full border-y border-brand-line bg-brand-bg px-6 py-10 text-center">
      <Reveal>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-roast">{press.label}</p>
        <p className="mt-2 font-display font-bold uppercase text-2xl text-brand-primary">{press.name}</p>
        <a
          href={press.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-sans text-sm text-brand-primary underline underline-offset-4"
        >
          {press.linkText} →
        </a>
      </Reveal>
    </section>
  )
}
