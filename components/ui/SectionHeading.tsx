export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? 'text-gold-300' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-serif text-display-sm ${
          light ? 'text-cream-50' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? 'text-cream-200/80' : 'text-ink-muted'
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`gold-rule mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
