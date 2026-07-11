import { content } from '../content'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-brand-primary px-5 py-16 text-center"
    >
      <div className="w-full space-y-6">
        <p className="text-lg font-semibold text-brand-surface">{content.business.name}</p>

        <ul className="flex flex-col items-center gap-6">
          {content.footer.social.map((label) => (
            <li key={label}>
              <a href="#" className="text-base text-brand-surface">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <p className="text-sm text-brand-surface">{content.footer.line}</p>
          <p className="text-sm text-brand-surface">{content.footer.credit}</p>
        </div>
      </div>
    </footer>
  )
}
