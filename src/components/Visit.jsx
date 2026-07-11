import { content } from '../content'
import Placeholder from './Placeholder'

export default function Visit() {
  return (
    <section
      id="visit"
      className="w-full bg-brand-primary px-5 py-16 text-center"
    >
      <div className="w-full space-y-6">
        <h2 className="text-3xl font-display uppercase tracking-[0.03em] text-brand-surface">{content.visit.heading}</h2>
        <p className="text-base leading-relaxed text-brand-surface">{content.visit.address}</p>
        <p className="text-base leading-relaxed text-brand-surface">{content.visit.hours}</p>

        <div className="flex flex-col gap-3">
          {content.visit.ctas.map((cta, i) => (
            <a
              key={cta}
              href="#"
              className={
                i === 0
                  ? 'flex h-12 w-full items-center justify-center rounded-full bg-brand-surface text-brand-primary transition-colors duration-150 hover:text-brand-navy'
                  : 'flex h-12 w-full items-center justify-center rounded-full border border-brand-surface text-brand-surface transition-colors duration-150 hover:bg-brand-surface hover:text-brand-primary'
              }
            >
              {cta}
            </a>
          ))}
        </div>

        <Placeholder label="[ Map ]" height="h-52" />
        <Placeholder label="[ Floor Plan ]" height="h-40" />
      </div>
    </section>
  )
}
