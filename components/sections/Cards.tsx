'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

interface Card {
  title: string
  description: string
  image?: string
  link?: string
  icon?: string
}

interface CardsProps {
  cards: Card[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function Cards({ cards, columns = 3, className = '' }: CardsProps) {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns]} gap-8`}>
          {cards.map((card, index) => (
            <ScrollAnimation
              key={index}
              animation="fadeUp"
              delay={index * 0.1}
            >
              {card.link ? (
                <Link
                  href={card.link}
                  className="block group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  {card.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {card.icon && (
                      <div className="text-4xl mb-4">{card.icon}</div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </Link>
              ) : (
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {card.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {card.icon && (
                      <div className="text-4xl mb-4">{card.icon}</div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              )}
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

