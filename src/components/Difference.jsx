import { content } from '../content'
import Reveal from './Reveal'

export default function Difference() {
  return (
    <section
      id="difference"
      className="w-full bg-brand-bg px-5 py-16 text-center"
    >
      <Reveal className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-brand-primary">{content.difference.headline}</h2>
        <p className="text-base leading-relaxed text-brand-ink">{content.difference.body}</p>
      </Reveal>
    </section>
  )
}
