import { content } from '../content'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

export default function Story() {
  return (
    <section
      id="story"
      className="w-full bg-brand-espresso px-5 py-16 text-center"
    >
      <Reveal className="w-full space-y-6">
        <p className="font-display text-sm uppercase tracking-wide text-brand-accent">{content.story.tag}</p>
        <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-white">{content.story.headline}</h2>
        <p className="text-base leading-relaxed text-brand-bg/80">{content.story.body}</p>
        <Placeholder label="[ Cecilia & Jonathan ]" height="h-64" />
      </Reveal>
    </section>
  )
}
