'use client'

import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Icon from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'

const promises: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Safety, first and always',
    description:
      'Controlled entry, trained staff, a nurse on campus, and routines that let children feel free because they are looked after.',
    icon: 'shield',
  },
  {
    title: 'You will hear from us',
    description:
      'We return calls within a school day. Report cards never replace a conversation. Parents are partners, not spectators.',
    icon: 'chat',
  },
  {
    title: 'Character is taught, not assumed',
    description:
      'Courtesy, honesty, and service are practised in assembly, in the corridor, and when no one is watching.',
    icon: 'heart',
  },
]

export default function ParentPromise() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="For parents"
          title="The promises we make to families."
          description="A school website should tell you how it feels to leave your child with us in the morning. This is how we try to be."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {promises.map((item, index) => (
            <ScrollAnimation key={item.title} animation="fadeUp" delay={index * 0.08}>
              <article className="h-full bg-forest-900 p-8 text-cream-100">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/40 text-gold-300">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl text-cream-50">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-cream-200/75">{item.description}</p>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
