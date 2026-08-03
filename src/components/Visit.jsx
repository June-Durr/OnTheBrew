import { content } from '../content'
import Placeholder from './Placeholder'
import Reveal from './Reveal'
import Button from './Button'

export default function Visit() {
  const todayIndex = new Date().getDay()

  return (
    <section
      id="visit"
      className="w-full bg-brand-bg px-5 py-16 text-center"
    >
      <Reveal className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-brand-primary">{content.visit.heading}</h2>
        <p className="text-base leading-relaxed text-brand-ink">{content.visit.address}</p>
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-brand-roast">Open Late Every Day</p>
          <div className="mx-auto mt-2 w-full max-w-xs">
            {content.visit.hours.map((entry, index) => {
              const isToday = index === todayIndex
              return (
                <div
                  key={entry.day}
                  className={`flex items-center justify-between py-2 ${
                    index !== content.visit.hours.length - 1 ? 'border-b border-brand-line/50' : ''
                  }`}
                >
                  <span className={`font-sans text-sm ${isToday ? 'font-semibold text-brand-primary' : 'text-brand-ink'}`}>
                    {entry.day}
                  </span>
                  <span className={`font-sans text-sm ${isToday ? 'font-semibold text-brand-primary' : 'text-brand-ink/70'}`}>
                    {entry.time}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="primary" href="#">
            {content.visit.cta}
          </Button>
        </div>

        <div className="w-full h-64 rounded-2xl overflow-hidden border border-brand-line">
          <iframe
            src="https://www.google.com/maps?q=On+The+Brew+Coffee+Company,+100+Greyrock+Place,+Stamford,+CT+06901&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to On The Brew Coffee Company"
          />
        </div>

        <Placeholder label="[ Floor Plan ]" height="h-40" />

        <div>
          <h3 className="font-display font-bold uppercase text-xl text-brand-primary">{content.visit.videoHeading}</h3>
          <div className="mt-4">
            {content.visit.videoId ? (
              <div className="aspect-video w-full overflow-hidden rounded-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${content.visit.videoId}`}
                  className="h-full w-full"
                  loading="lazy"
                  title="Directions to On The Brew Coffee Company"
                  allowFullScreen
                />
              </div>
            ) : (
              <Placeholder label="[ Directions Video — 16:9 ]" height="h-52" />
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
