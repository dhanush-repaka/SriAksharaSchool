'use client'

import Link from 'next/link'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Photo from '@/components/ui/Photo'
import Icon from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'

interface Card {
  title: string
  description: string
  image?: string
  link?: string
  icon?: IconName
}

interface CardsProps {
  cards: Card[]
  columns?: 2 | 3 | 4
  className?: string
  numbered?: boolean
}

export default function Cards({
  cards,
  columns = 3,
  className = '',
  numbered = false,
}: CardsProps) {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }

  return (
    <section className={className}>
      <div className="container-page py-10 lg:py-14">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns]} gap-6`}>
          {cards.map((card, index) => {
            const inner = (
              <>
                {card.image && (
                  <Photo
                    src={card.image}
                    alt={card.title}
                    className="aspect-[16/10]"
                  />
                )}
                <div className="p-7">
                  {card.icon && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/70 text-forest-700">
                      <Icon name={card.icon} className="h-4 w-4" />
                    </div>
                  )}
                  {numbered && (
                    <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-gold-600">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  )}
                  <h3 className="font-serif text-2xl group-hover:text-forest-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">{card.description}</p>
                </div>
              </>
            )

            return (
              <ScrollAnimation key={card.title} animation="fadeUp" delay={index * 0.06}>
                {card.link ? (
                  <Link
                    href={card.link}
                    className="group block h-full overflow-hidden border border-forest-100 bg-cream-50 transition-shadow hover:shadow-soft"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full overflow-hidden border border-forest-100 bg-cream-50">
                    {inner}
                  </div>
                )}
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
