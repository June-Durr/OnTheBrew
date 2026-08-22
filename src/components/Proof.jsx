import { content } from '../content'
import Reveal from './Reveal'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

const SCRIM =
  'linear-gradient(90deg, rgba(58, 32, 24, 0.82) 0%, rgba(58, 32, 24, 0.40) 52%, rgba(58, 32, 24, 0.05) 100%)'

const links = [
  {
    href: 'https://www.heystamford.com/on-the-brew-opens-new-coffee-shop-at-stamford-town-center-in/',
    ariaLabel: 'Read about On The Brew’s grand opening at Stamford Town Center',
  },
  {
    href: 'https://www.tiktok.com/@ashleygrudzinski/video/7663888765185707278',
    ariaLabel: 'Watch On The Brew featured as a community favorite on TikTok',
  },
  {
    href: 'https://www.youtube.com/watch?v=IJ1DCid1Xao',
    ariaLabel: 'Watch the On The Brew Guatemala story podcast on YouTube',
  },
]

// Wide rounded strip: the source photo is never cropped on disk -- each
// strip just frames a different object-position over the untouched file.
// The whole strip is one <a> -- image, overlay, and copy all share the
// single click target, no nested interactive elements.
function StoryStrip({ href, ariaLabel, src, position, number, label, detail }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative mx-auto block overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
      style={{ width: 'calc(100% - 48px)', maxWidth: '340px', height: '120px', borderRadius: '30px' }}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[275ms] ease-out group-hover:scale-[1.02]"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-[275ms] ease-out group-hover:opacity-90"
        style={{ background: SCRIM }}
      />
      <div className="absolute inset-0 flex flex-col justify-center px-5">
        <span className="font-sans text-[11px] font-semibold tracking-wide text-white/70">{number}</span>
        <h3 className="font-display text-[21px] font-bold uppercase leading-tight text-white">{label}</h3>
        <p className="mt-0.5 font-sans text-[13px] text-white/85">{detail}</p>
      </div>
      <svg
        className="pointer-events-none absolute right-3 top-3 h-[15px] w-[15px] text-white/45 transition-colors duration-[275ms] ease-out group-hover:text-white/85"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M17 7H8M17 7V16" />
      </svg>
    </a>
  )
}

export default function Proof() {
  const [grandOpening, communityFavorite, familyRoasted] = content.proof.blocks

  return (
    <section id="proof" className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F3EA' }}>
      <Reveal className="text-center">
        <h2 className="px-6 font-display text-2xl font-bold uppercase tracking-wide text-brand-ink">
          {content.proof.heading}
        </h2>

        <div className="mt-8 flex flex-col gap-10">
          <StoryStrip
            href={links[0].href}
            ariaLabel={links[0].ariaLabel}
            src={assetPath('images/story/coffee-cherries.webp')}
            position="50% 50%"
            number="01"
            label={grandOpening.label}
            detail={grandOpening.detail}
          />
          <StoryStrip
            href={links[1].href}
            ariaLabel={links[1].ariaLabel}
            src={assetPath('images/story/coffee-grounds.webp')}
            position="50% 50%"
            number="02"
            label={communityFavorite.label}
            detail={communityFavorite.detail}
          />
          <StoryStrip
            href={links[2].href}
            ariaLabel={links[2].ariaLabel}
            src={assetPath('images/story/coffee-roasting.jpg')}
            position="55% 50%"
            number="03"
            label={familyRoasted.label}
            detail={familyRoasted.detail}
          />
        </div>
      </Reveal>
    </section>
  )
}
