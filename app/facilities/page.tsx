import type { Metadata } from 'next'
import Cards from '@/components/sections/Cards'
import SplitSection from '@/components/sections/SplitSection'
import CTA from '@/components/sections/CTA'
import PageHeader from '@/components/sections/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Campus & facilities',
  description:
    'Laboratories, library, fields, and a campus designed for safety and calm. Tour Sri Akshara School.',
}

const facilities: {
  title: string
  description: string
  image: string
  icon: IconName
}[] = [
  {
    title: 'Classrooms',
    description: 'Light, air, and boards that work. Rooms sized so a teacher can reach every child.',
    image: images.classroom,
    icon: 'building',
  },
  {
    title: 'Science laboratories',
    description: 'Physics, chemistry, and biology labs kept ready for real experiment, not demonstration only.',
    image: images.science,
    icon: 'flask',
  },
  {
    title: 'Technology studios',
    description: 'Machines and software in the service of making, coding, and careful research.',
    image: images.computer,
    icon: 'compass',
  },
  {
    title: 'Library',
    description: 'Shelves, silence, and seats by the window. A place to get lost on purpose.',
    image: images.library,
    icon: 'book',
  },
  {
    title: 'Playing fields',
    description: 'Courts, a field, and indoor space so sport is a daily habit, not a rare treat.',
    image: images.sports,
    icon: 'trophy',
  },
  {
    title: 'Arts & music',
    description: 'Studios and a music room with instruments that are actually played.',
    image: images.arts,
    icon: 'palette',
  },
  {
    title: 'Dining',
    description: 'A clean kitchen and a hall where children eat well and sit with friends.',
    image: images.cafeteria,
    icon: 'heart',
  },
  {
    title: 'Auditorium',
    description: 'A hall for assembly, theatre, and the kind of evening parents remember.',
    image: images.auditorium,
    icon: 'music',
  },
]

export default function Facilities() {
  return (
    <main>
      <PageHeader
        eyebrow="Campus"
        title="A place built for children, kept for parents’ peace of mind."
        description="Fifteen acres of classrooms, gardens, and playing fields—maintained as if your child will notice the difference. They do."
        image={images.campus}
        imageAlt="Academic buildings at Sri Akshara"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Every corner has a purpose"
            title="Rooms, fields, and quiet."
            description="Infrastructure is only as good as the life inside it. Ours is designed for work, play, and the unhurried hour in between."
            align="center"
          />
        </div>
        <Cards cards={facilities} columns={4} className="pt-10" />
      </section>

      <SplitSection
        image={images.heroCampus}
        imagePosition="left"
        eyebrow="The grounds"
        title="Fifteen acres, one community."
        content="Academic wings, trees, and playing fields sit in an easy relationship. We maintain and renew the campus so that it remains safe, beautiful, and equal to a modern education."
        caption="The main lawn, looking toward the academic block."
      />

      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What parents ask first"
            title="Safety and wellbeing."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="border border-forest-100 bg-cream-100 p-8">
              <div className="mb-4 text-forest-700">
                <Icon name="shield" className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl">Security</h3>
              <ul className="mt-5 space-y-3 text-ink-muted">
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                  Staffed gates and known faces, day and evening
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                  Campus-wide cameras, reviewed with care
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                  Controlled visitor entry
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                  Practised emergency drills, not paper ones
                </li>
              </ul>
            </article>
            <article className="bg-forest-900 p-8 text-cream-100">
              <div className="mb-4 text-gold-300">
                <Icon name="heart" className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl text-cream-50">Health</h3>
              <ul className="mt-5 space-y-3 text-cream-200/80">
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
                  An infirmary on campus
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
                  Trained nursing staff during school hours
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
                  Regular health check-ins
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
                  Clean kitchens, water, and washrooms
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CTA
        title="Walk it with us."
        description="A tour is the honest way to judge a campus. We keep mornings free for visiting families."
        primaryCtaText="Book a tour"
        primaryCtaLink="/contact"
        secondaryCtaText="See the gallery"
        secondaryCtaLink="/gallery"
      />
    </main>
  )
}
