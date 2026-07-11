import { Link } from 'react-router-dom'
import { content } from '../content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MenuChapter({ category, index }) {
  if (!category.items.length) return null

  const imageFirst = index % 2 !== 0

  return (
    <section id={category.id} className="scroll-mt-24 py-14 sm:py-20">
      <div className="grid items-center gap-9 md:grid-cols-2 md:gap-16">
        <div className={imageFirst ? 'md:order-2' : ''}>
          <div className="inline-flex min-h-12 items-center bg-brand-roast px-6 py-2 text-white">
            <h2 className="font-display text-2xl uppercase tracking-[0.08em] sm:text-3xl">{category.label}</h2>
          </div>
          {category.subtitle && (
            <p className="mb-7 mt-5 font-display text-xl font-bold text-brand-espresso">{category.subtitle}</p>
          )}

          <div className="relative ml-1 border-l border-brand-roast/70 pl-7">
            {category.items.map((item) => (
              <article key={item.name} className="relative pb-6 last:pb-0">
                <span className="absolute -left-[1.98rem] top-2 h-2.5 w-2.5 rounded-full bg-brand-roast" />
                <h3 className="font-display text-xl font-bold leading-tight text-brand-espresso sm:text-2xl">{item.name}</h3>
                <p className="mt-1 text-base leading-snug text-brand-ink/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {category.image && (
          <div className={`relative min-h-72 ${imageFirst ? 'md:order-1' : ''}`}>
            <div className="absolute inset-x-8 bottom-8 h-32 rounded-full bg-brand-accent/15 blur-2xl" />
            <img
              src={category.image}
              alt={category.imageAlt}
              className="relative mx-auto h-80 w-full max-w-sm object-contain drop-shadow-[0_28px_26px_rgba(58,32,24,0.2)] sm:h-96"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default function MenuPage() {
  const categories = content.menu.categories.filter((category) => category.items.length)

  return (
    <>
      <Navbar />
      <main>
        <header className="relative overflow-hidden bg-brand-primary px-5 py-16 text-white sm:py-24">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-brand-accent/40" />
          <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full border border-brand-accent/40" />
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">On The Brew Coffee Company</p>
            <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-[0.03em] sm:text-7xl">{content.menu.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{content.menu.introduction}</p>
          </div>
        </header>

        <nav aria-label="Menu categories" className="border-b border-brand-line bg-brand-surface px-5">
          <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto py-3">
            {categories.map((category) => (
              <li key={category.id} className="shrink-0">
                <a href={`#${category.id}`} className="flex min-h-11 items-center px-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-primary hover:bg-brand-bg">
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bg-brand-bg px-5">
          <div className="mx-auto max-w-6xl divide-y divide-brand-roast/20">
            {categories.map((category, index) => (
              <MenuChapter key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>

        <section className="bg-brand-espresso px-5 py-16 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-accent">Come find your favorite</p>
            <h2 className="mt-3 font-display text-4xl uppercase">Visit On The Brew</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85">{content.visit.address}</p>
            <p className="mt-2 text-base text-white/85">{content.visit.hours}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={content.visit.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-white px-7 py-3 font-bold uppercase tracking-[0.12em] text-brand-primary hover:bg-brand-bg"
              >
                Get directions
              </a>
              <Link to="/" className="inline-flex min-h-12 items-center justify-center border border-white px-7 py-3 font-bold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-brand-espresso">
                Return home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
