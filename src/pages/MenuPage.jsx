import { useEffect } from 'react'
import { content } from '../content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

function MenuChapter({ category, index }) {
  if (!category.items.length) return null

  const imageFirst = index % 2 !== 0

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="-mx-5 bg-brand-espresso px-6 py-5 text-center">
        <div className="mx-auto w-full max-w-[440px]">
          <h2 className="font-display font-bold uppercase text-2xl tracking-wide text-white">{category.label}</h2>
          <div className="mx-auto my-2 h-px w-16 bg-brand-accent" />
          {category.subtitle && (
            <p className="font-sans text-sm italic text-brand-bg/70">{category.subtitle}</p>
          )}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[440px] items-center gap-9 py-14 sm:py-16 md:max-w-6xl md:grid-cols-2 md:gap-16">
        <div className={imageFirst ? 'md:order-2' : ''}>
          <div className="relative ml-1 flex flex-col gap-6 border-l border-brand-roast/70 pl-7">
            {category.items.map((item) => (
              <article key={item.name} className="relative">
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <header className="relative overflow-hidden bg-brand-primary px-5 py-16 text-white">
          <div
            className="pointer-events-none absolute -right-16 top-1/2 h-[140%] w-auto -translate-y-1/2 rotate-6 text-brand-accent opacity-10"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 220 480"
              className="h-full w-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M100 470 C 60 380 140 300 90 210 C 55 140 145 80 100 10" />
              <path d="M85 430 Q65 424 51 406 Q71 410 85 430 Z" />
              <path d="M70 380 Q90 374 104 356 Q84 360 70 380 Z" />
              <path d="M95 330 Q75 324 61 306 Q81 310 95 330 Z" />
              <path d="M115 280 Q135 274 149 256 Q129 260 115 280 Z" />
              <path d="M95 230 Q75 224 61 206 Q81 210 95 230 Z" />
              <path d="M115 180 Q135 174 149 156 Q129 160 115 180 Z" />
              <path d="M130 130 Q110 124 96 106 Q116 110 130 130 Z" />
              <path d="M115 80 Q135 74 149 56 Q129 60 115 80 Z" />
              <circle cx="90" cy="425" r="6" />
              <circle cx="100" cy="325" r="5" />
              <circle cx="90" cy="225" r="6" />
              <circle cx="125" cy="125" r="5" />
            </svg>
          </div>
          <div className="relative mx-auto w-full max-w-[440px]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">On The Brew Coffee Company</p>
            <h1 className="max-w-3xl font-display font-bold text-5xl uppercase leading-[0.95] tracking-[0.03em] sm:text-7xl">{content.menu.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{content.menu.introduction}</p>
          </div>
        </header>

        <nav aria-label="Menu categories" className="border-b border-brand-line bg-brand-surface px-5">
          <ul className="mx-auto flex w-full max-w-[440px] gap-2 overflow-x-auto py-3">
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
          <div className="mx-auto w-full max-w-[440px] divide-y divide-brand-roast/20 md:max-w-6xl">
            {categories.map((category, index) => (
              <MenuChapter key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>

        <section className="bg-brand-espresso px-5 py-16 text-white">
          <div className="mx-auto w-full max-w-[440px] text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-accent">Come find your favorite</p>
            <h2 className="mt-3 font-display font-bold text-4xl uppercase">Visit On The Brew</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85">{content.visit.address}</p>
            <p className="mt-2 text-base text-white/85">{content.visit.hours}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <div className="sm:flex-1">
                <Button variant="light" href={content.visit.directionsUrl} external>
                  Get directions
                </Button>
              </div>
              <div className="sm:flex-1">
                <Button
                  variant="outline"
                  href="/"
                  className="text-white border-white hover:bg-white hover:text-brand-espresso"
                >
                  Return home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
