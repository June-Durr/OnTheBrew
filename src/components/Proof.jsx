import { content } from '../content'

export default function Proof() {
  return (
    <section
      id="proof"
      className="w-full bg-brand-bg px-5 py-16 text-center"
    >
      <div className="w-full space-y-6">
        <h2 className="text-3xl font-display uppercase tracking-[0.03em] text-brand-primary">{content.proof.heading}</h2>

        <div className="flex flex-col gap-4 text-left">
          {content.proof.blocks.map((block) => (
            <div key={block.label} className="w-full rounded-2xl bg-brand-surface p-5">
              <h3 className="text-lg font-semibold text-brand-ink">{block.label}</h3>
              <p className="text-sm text-brand-ink">{block.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
