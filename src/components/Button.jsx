import { Link } from 'react-router-dom'

const base =
  'w-full h-14 rounded-full font-sans font-semibold text-base tracking-wide flex items-center justify-center transition-all duration-200 active:scale-[0.97] shadow-sm active:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary'

const variants = {
  primary: 'bg-brand-primary text-white hover:bg-brand-navy',
  accent: 'bg-brand-accent text-white hover:bg-brand-navy',
  outline: 'border-2 border-current bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white',
  light: 'bg-white text-brand-espresso hover:bg-brand-bg',
}

export default function Button({ variant = 'primary', href, children, external = false, className: extraClassName = '' }) {
  const className = `${base} ${variants[variant]} ${extraClassName}`.trim()

  if (href) {
    if (!external && href.startsWith('/')) {
      return (
        <Link to={href} className={className}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}
