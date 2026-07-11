import { content } from '../content'

export default function Difference() {
  return (
    <section
      id="difference"
      className="w-full bg-brand-bg px-5 py-16 text-center"
    >
      <div className="w-full space-y-4">
        <h2 className="text-3xl font-display uppercase tracking-[0.03em] text-brand-primary">{content.difference.headline}</h2>
        <p className="text-base leading-relaxed text-brand-ink">{content.difference.body}</p>
      </div>
    </section>
  )
}
