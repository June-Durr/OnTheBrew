import { content } from '../content'

export default function Brewmobile() {
  return (
    <section
      id="brewmobile"
      className="w-full bg-brand-primary px-5 py-16 text-center"
    >
      <div className="w-full space-y-6">
        <h2 className="text-3xl font-display uppercase tracking-[0.03em] text-brand-surface">{content.brewmobile.heading}</h2>
        <p className="text-base leading-relaxed text-brand-surface">{content.brewmobile.body}</p>
        <a
          href="#"
          className="flex h-12 w-full items-center justify-center rounded-full bg-brand-surface text-brand-primary transition-colors duration-150 hover:text-brand-navy"
        >
          {content.brewmobile.cta}
        </a>
      </div>
    </section>
  )
}
