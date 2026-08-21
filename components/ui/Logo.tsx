import Link from 'next/link'

export default function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean
  compact?: boolean
}) {
  const mark = inverted ? 'text-cream-100' : 'text-forest-700'
  const word = inverted ? 'text-cream-50' : 'text-ink'

  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-full border ${
          inverted ? 'border-gold-300/50' : 'border-gold-400/70'
        } ${mark}`}
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
          <path
            d="M20 7c.4 4.2 2.4 7.4 6.2 9.6C22.4 18.8 20.4 22 20 26.2 19.6 22 17.6 18.8 13.8 16.6 17.6 14.4 19.6 11.2 20 7Z"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
          />
          <circle cx="20" cy="16.6" r="1.4" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-xl font-semibold tracking-tight ${word}`}>
          Sri Akshara
        </span>
        {!compact && (
          <span
            className={`block text-[10px] uppercase tracking-[0.22em] ${
              inverted ? 'text-gold-200' : 'text-gold-600'
            }`}
          >
            School
          </span>
        )}
      </span>
    </Link>
  )
}
