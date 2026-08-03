import { content } from '../content'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-brand-navy px-5 py-12 text-center text-brand-bg"
    >
      <Reveal className="space-y-6">
        <p className="text-lg font-semibold">{content.business.name}</p>

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
          <p className="text-xs text-brand-accent">{content.footer.credit}</p>
        </div>
      </Reveal>
    </footer>
  )
}
