import { content } from '../content'
import Reveal from './Reveal'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-brand-navy px-5 py-12 text-center text-brand-bg"
    >
      <img
        src={assetPath('branding/otb-botanical-mark-cream-2048.png')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-10 z-0 h-64 w-auto rotate-[-15deg] object-contain opacity-[0.16] md:-right-16 md:-top-14 md:h-96"
      />

      <Reveal className="relative z-10 space-y-6">
        <img
          src={assetPath('branding/otb-full-logo-cream-2048.png')}
          alt={content.business.name}
          className="mx-auto h-24 w-auto object-contain md:h-28"
        />

        <ul className="flex flex-col items-center gap-4">
          {content.footer.social.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <p className="text-sm">{content.footer.line}</p>
          <p className="text-xs text-brand-bg/50">
            Site built by{' '}
            <a
              href="https://sitelaunchstudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline underline-offset-2"
            >
              SiteLaunch Studios
            </a>
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
