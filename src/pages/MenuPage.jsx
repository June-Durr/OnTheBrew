import { Fragment } from 'react'
import { content } from '../content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import MenuTimeline from '../components/MenuTimeline'
import MenuHero from '../components/MenuHero'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

// Short mobile-only labels so the pill nav never truncates mid-word. Full
// category titles remain untouched inside the actual sections.
const shortNavLabels = ['Coffee', 'Cultural', 'Tea', 'More']

// Two alternating tones instead of four -- a quieter, more cohesive rhythm
// than a different color per category.
const sectionThemes = [
  { bg: 'bg-brand-espresso', label: 'text-white', sub: 'text-brand-bg/70', numeral: 'text-brand-accent/80', rule: 'bg-brand-accent/60' },
  { bg: 'bg-brand-bg', label: 'text-brand-primary', sub: 'text-brand-ink/60', numeral: 'text-brand-roast/60', rule: 'bg-brand-roast/40' },
]

function CategoryHeader({ category, index }) {
  const theme = sectionThemes[index % sectionThemes.length]

  return (
    <div className={`-mx-5 px-6 py-10 text-center ${theme.bg}`}>
      <div className="mx-auto w-full max-w-[440px]">
        <span className={`font-display text-2xl font-bold ${theme.numeral}`}>0{index + 1}</span>
        <div className={`mx-auto my-3 h-px w-12 ${theme.rule}`} />
        <h2 className={`font-display text-2xl font-bold uppercase tracking-wide ${theme.label}`}>{category.label}</h2>
        {category.subtitle && <p className={`mt-1 font-sans text-sm italic ${theme.sub}`}>{category.subtitle}</p>}
      </div>
    </div>
  )
}

function MenuChapter({ category, index }) {
  if (!category.items.length) return null

  const imageFirst = index % 2 !== 0

  return (
    <section id={category.id} className="scroll-mt-24">
      <CategoryHeader category={category} index={index} />

      <div
        className={`mx-auto grid w-full max-w-[440px] items-center gap-9 py-14 sm:py-16 md:max-w-6xl md:gap-16 ${
          category.image ? 'md:grid-cols-2' : 'md:max-w-2xl'
        }`}
      >
        <div className={imageFirst ? 'md:order-2' : ''}>
          <MenuTimeline items={category.items} variant="chapter" />
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

// A full-bleed photographic moment breaking up the category rhythm -- the
// real founders, reused from the homepage story, tying the menu back to
// the same origin narrative rather than feeling like a disconnected list.
function HeritageBand() {
  return (
    <>
      {/* Mobile: narrow tall card -- the same tuned zoom/position used on the homepage story photo. */}
      <div
        role="img"
        aria-label="Cecilia and Jonathan roasting and brewing by hand at On The Brew"
        className="h-56 w-full bg-cover bg-no-repeat sm:h-72 md:hidden"
        style={{
          backgroundImage: `url(${assetPath('images/story/otb-founders-about.jpg')})`,
          backgroundSize: '125% auto',
          backgroundPosition: '40% 36%',
        }}
      />

      {/* Desktop: a wide band -- cover crops by width alone here (no extra
          zoom needed), so a plain cover fit keeps both faces in frame. */}
      <div
        role="img"
        aria-label="Cecilia and Jonathan roasting and brewing by hand at On The Brew"
        className="hidden h-[420px] w-full bg-cover bg-no-repeat md:block"
        style={{
          backgroundImage: `url(${assetPath('images/story/otb-founders-about.jpg')})`,
          backgroundPosition: 'center 27%',
        }}
      />
    </>
  )
}

function hoursSummary(hours) {
  const [first, ...rest] = hours
  const sameRest = rest.every((entry) => entry.time === rest[0]?.time)

  if (sameRest && rest.length) {
    return `${rest[0].day}–${rest[rest.length - 1].day} ${rest[0].time} · ${first.day} ${first.time}`
  }

  return hours.map((entry) => `${entry.day} ${entry.time}`).join(' · ')
}

export default function MenuPage() {
  const categories = content.menu.categories.filter((category) => category.items.length)

  return (
    <>
      <Navbar />
      <main>
        <MenuHero />

        <nav aria-label="Menu categories" className="sticky top-14 z-30 border-b border-brand-line bg-brand-surface px-5 shadow-sm md:top-20">
          <ul className="mx-auto flex w-full max-w-[440px] gap-2.5 overflow-x-auto py-3 md:max-w-6xl">
            {categories.map((category, index) => (
              <li key={category.id} className="shrink-0">
                <a
                  href={`#${category.id}`}
                  className="flex min-h-10 items-center rounded-full border border-brand-primary/25 bg-brand-bg px-4 text-sm font-bold uppercase tracking-[0.1em] text-brand-primary hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                >
                  <span className="md:hidden">{shortNavLabels[index] ?? category.label}</span>
                  <span className="hidden md:inline">{category.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bg-brand-bg">
          <div className="mx-auto w-full">
            {categories.map((category, index) => (
              <Fragment key={category.id}>
                <div className="px-5">
                  <div className="mx-auto w-full max-w-[440px] md:max-w-6xl">
                    <MenuChapter category={category} index={index} />
                  </div>
                </div>
                {index === 0 && <HeritageBand />}
              </Fragment>
            ))}
          </div>
        </div>

        <section className="bg-brand-espresso px-5 py-16 text-white">
          <div className="mx-auto w-full max-w-[440px] text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-accent">Come find your favorite</p>
            <h2 className="mt-3 font-display font-bold text-4xl uppercase">Visit On The Brew</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85">{content.visit.address}</p>
            <p className="mt-2 text-base text-white/85">{hoursSummary(content.visit.hours)}</p>
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
