import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'inverse'

const styles: Record<Variant, string> = {
  primary:
    'bg-forest-700 text-cream-50 hover:bg-forest-800 shadow-soft',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-forest-600 hover:text-forest-700',
  ghost:
    'bg-transparent text-cream-50 border border-cream-50/40 hover:bg-cream-50/10',
  gold:
    'bg-gold-400 text-ink hover:bg-gold-300 shadow-soft',
  inverse:
    'bg-cream-50 text-forest-800 hover:bg-white shadow-soft',
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300'

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
}) {
  const isExternal = external || href.startsWith('http')
  const classNames = `${baseClass} ${styles[variant]} ${className}`

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  )
}
