import Image from 'next/image'

export default function Photo({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    <div className={`relative overflow-hidden bg-forest-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  )
}

export function FramedPhoto({
  src,
  alt,
  caption,
  className = '',
  aspect = 'aspect-[4/5]',
  priority = false,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  aspect?: string
  priority?: boolean
}) {
  return (
    <figure className={`relative ${className}`}>
      <div className="pointer-events-none absolute -inset-3 hidden border border-gold-400/50 sm:block" />
      <Photo src={src} alt={alt} className={`${aspect} shadow-soft`} priority={priority} />
      {caption && (
        <figcaption className="mt-4 text-sm italic text-ink-soft font-serif">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
