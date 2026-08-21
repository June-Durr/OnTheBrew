import { content } from '../content'
import Reveal from './Reveal'
import Button from './Button'
import MenuTimeline from './MenuTimeline'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Menu() {
  const featuredItems = content.menu.categories
    .flatMap((category) => category.items)
    .filter((item) => item.featured)
    .slice(0, 3)

  return (
    <section id="menu" className="overflow-hidden bg-brand-bg px-5 py-16">
      <Reveal className="grid items-center gap-10 md:max-w-6xl md:grid-cols-2 md:gap-16">
        <div className="relative min-h-80" aria-hidden="true">
          <div className="absolute inset-x-8 bottom-4 h-32 rounded-full bg-brand-roast/15 blur-2xl" />
          <img
            src={assetPath('images/hero/otb-iced.png')}
            alt=""
            className="relative mx-auto h-80 w-full max-w-[230px] object-contain drop-shadow-[0_24px_24px_rgba(58,32,24,0.18)]"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-roast">A glimpse of the menu</p>
          <h2 className="font-display font-bold text-2xl uppercase leading-tight tracking-wide text-brand-primary sm:text-3xl">
            {content.menu.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed font-sans text-brand-ink">{content.menu.introduction}</p>

          <div className="my-8">
            <MenuTimeline items={featuredItems} variant="preview" animated />
          </div>

          <Button variant="primary" href="/menu">
            View full menu
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
