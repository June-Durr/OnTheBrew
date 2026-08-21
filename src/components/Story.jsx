import { content } from '../content'
import Reveal from './Reveal'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Story() {
  return (
    <section
      id="story"
      className="w-full bg-brand-espresso px-5 py-16 text-center"
    >
      <Reveal className="space-y-6">
        <p className="font-display text-sm uppercase tracking-wide text-brand-accent">{content.story.tag}</p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-white">{content.story.headline}</h2>
        <p className="text-base leading-relaxed text-brand-bg/80">{content.story.body}</p>
        <div
          role="img"
          aria-label="Cecilia and Jonathan, co-founders of On The Brew, behind the counter with their espresso equipment"
          className="h-64 w-full overflow-hidden rounded-2xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${assetPath('images/story/otb-founders-about.jpg')})`,
            backgroundSize: '125% auto',
            backgroundPosition: '40% 36%',
          }}
        />
      </Reveal>
    </section>
  )
}
