import { Link } from 'react-router-dom'
import { content } from '../content'

export default function Menu() {
  const featuredItems = content.menu.categories
    .flatMap((category) => category.items)
    .filter((item) => item.featured)
    .slice(0, 3)
  const featuredImage = content.menu.categories.find((category) => category.image)

  return (
    <section id="menu" className="overflow-hidden bg-brand-bg px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative min-h-80" aria-hidden={!featuredImage}>
          <div className="absolute left-2 top-4 h-52 w-52 rounded-full bg-brand-accent/20" />
          {featuredImage && (
            <img
              src={featuredImage.image}
              alt={featuredImage.imageAlt}
              className="relative mx-auto h-80 w-full max-w-xs object-contain drop-shadow-[0_24px_24px_rgba(58,32,24,0.18)]"
            />
          )}
          <span className="absolute bottom-3 right-0 font-display text-6xl text-brand-primary/10">OTB</span>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-roast">A glimpse of the menu</p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.03em] text-brand-primary sm:text-5xl">
            {content.menu.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed">{content.menu.introduction}</p>

          <div className="relative my-8 border-l border-brand-roast/60 pl-7">
            {featuredItems.map((item) => (
              <article key={item.name} className="relative pb-6 last:pb-0">
                <span className="absolute -left-[1.98rem] top-2 h-2.5 w-2.5 rounded-full bg-brand-roast" />
                <h3 className="font-display text-xl font-bold text-brand-espresso">{item.name}</h3>
                <p className="text-base leading-snug text-brand-ink/75">{item.description}</p>
              </article>
            ))}
          </div>

          <Link
            to="/menu"
            className="inline-flex min-h-12 items-center justify-center bg-brand-primary px-7 py-3 text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  )
}
