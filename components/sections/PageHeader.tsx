import Photo from '@/components/ui/Photo'

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow?: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}) {
  return (
    <header className="border-b border-forest-100 bg-cream-50">
      <div className="container-page grid items-end gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <div className={image ? 'lg:col-span-7' : 'lg:col-span-10'}>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="font-serif text-display-sm lg:text-display">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <Photo
              src={image}
              alt={imageAlt || title}
              className="aspect-[16/10] shadow-soft"
              priority
            />
          </div>
        )}
      </div>
    </header>
  )
}
