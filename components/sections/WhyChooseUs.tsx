'use client'

import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Icon from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'

const features: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Academic depth, without the rush',
    description:
      'A thoughtful curriculum that builds mastery, curiosity, and the confidence to ask better questions.',
    icon: 'book',
  },
  {
    title: 'The whole child, every day',
    description:
      'Music, sport, service, and quiet time sit beside mathematics. Childhood is not an extra-curricular.',
    icon: 'leaf',
  },
  {
    title: 'Teachers who stay',
    description:
      'Experienced faculty, small groups, and the kind of attention a parent notices by the first term.',
    icon: 'users',
  },
  {
    title: 'A campus built for growing',
    description:
      'Laboratories, libraries, playing fields, and studios designed so children can try, fail, and try again.',
    icon: 'building',
  },
  {
    title: 'A wider world in view',
    description:
      'Languages, exchange of ideas, and a civic sense that reaches beyond the school gate.',
    icon: 'compass',
  },
  {
    title: 'Parents as partners',
    description:
      'Clear communication, an open door, and a community that treats families as part of the work.',
    icon: 'heart',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-50 py-16 lg:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <SectionHeading
              eyebrow="Why families choose us"
              title="A school that feels like a promise kept."
              description="Parents tell us they came for the academics and stayed because their child was seen—kindly, consistently, and with high expectation."
            />
          </div>
          <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} animation="fadeUp" delay={index * 0.06}>
                <article className="h-full border border-forest-100 bg-cream-100/80 p-7 transition-shadow hover:shadow-soft">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/70 text-forest-700">
                    <Icon name={feature.icon} className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gold-600">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{feature.title}</h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">{feature.description}</p>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
