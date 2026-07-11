import { content } from '../content'
import Placeholder from './Placeholder'

export default function Story() {
  return (
    <section
      id="story"
      className="w-full bg-brand-surface px-5 py-16 text-center"
    >
      <div className="w-full space-y-6">
        <p className="text-sm uppercase tracking-widest text-brand-accent">{content.story.tag}</p>
        <h2 className="text-3xl font-display uppercase tracking-[0.03em] text-brand-primary">{content.story.headline}</h2>
        <p className="text-base leading-relaxed text-brand-ink">{content.story.body}</p>
        <Placeholder label="[ Cecilia & Jonathan ]" height="h-64" />
      </div>
    </section>
  )
}
