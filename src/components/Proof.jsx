import { content } from '../content'
import Reveal from './Reveal'

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

// One shared editorial panel: three rows separated by thin cream rules,
// rather than three separate cards each with their own background/border.
function ProofPanel({ grandOpening, communityFavorite, familyRoasted }) {
  return (
    <div className="w-full rounded-xl bg-brand-espresso/75 backdrop-blur-sm">
      <div className="divide-y divide-brand-bg/25 px-5">
        <div className="py-3.5 text-center">
          <span className="font-display text-[10px] tracking-widest text-white/45">01</span>
          <h3 className="font-display text-base font-bold text-white">{grandOpening.label}</h3>
          <p className="mt-0.5 font-sans text-xs text-white/75">{grandOpening.detail}</p>
        </div>
        <div className="py-3.5 text-center">
          <span className="font-display text-[10px] tracking-widest text-white/45">02</span>
          <h3 className="font-display text-base font-bold text-white">{communityFavorite.label}</h3>
          <p className="mt-0.5 font-sans text-xs text-white/75">{communityFavorite.detail}</p>
        </div>
        <div className="py-4 text-center">
          <span className="font-display text-[10px] tracking-widest text-white/45">03</span>
          <h3 className="font-display text-xl font-bold text-white">{familyRoasted.label}</h3>
          <p className="mt-1 font-sans text-sm text-white/85">{familyRoasted.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default function Proof() {
  const [grandOpening, communityFavorite, familyRoasted] = content.proof.blocks

  return (
    <section id="proof" className="w-full bg-brand-bg px-5 py-16 md:py-24">
      <Reveal className="md:max-w-2xl">
        {/* Zero-crop: the container matches the photo's own square aspect
            exactly, so object-cover shows the complete outline with no
            crop -- and no letterboxing, since there's no size mismatch to
            create a gap in the first place. */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={assetPath('images/story/guatemala-origin.webp')} type="image/webp" />
            <img
              src={assetPath('images/story/guatemala-origin.jpg')}
              alt="Outline of Guatemala traced over a coffee plant, marking the origin of On The Brew's beans"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              {content.proof.heading}
            </p>
            <ProofPanel grandOpening={grandOpening} communityFavorite={communityFavorite} familyRoasted={familyRoasted} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
