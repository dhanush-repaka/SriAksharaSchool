import type { Metadata } from 'next'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'
import PageHeader from '@/components/sections/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import { images } from '@/lib/images'
import type { IconName } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Life at Akshara',
  description:
    'Sport, arts, clubs, and pastoral care. A school day that still belongs to childhood.',
}

const activities: {
  title: string
  description: string
  image: string
  icon: IconName
}[] = [
  {
    title: 'Sport',
    description: 'Teams for those who compete, and a place on the field for everyone else. Fitness is a habit, not a slogan.',
    image: images.sports,
    icon: 'trophy',
  },
  {
    title: 'Arts & culture',
    description: 'Music, dance, drama, and the studio. Performances that families actually look forward to.',
    image: images.arts,
    icon: 'palette',
  },
  {
    title: 'Clubs',
    description: 'Debate, robotics, gardens, and service. Children choose, commit, and discover a second home in school.',
    image: images.clubs,
    icon: 'users',
  },
  {
    title: 'Service',
    description: 'Work beyond the gate. We teach that a good education includes the people it can help.',
    image: images.community,
    icon: 'heart',
  },
]

const events: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Annual Day',
    description: 'An evening of music, theatre, and the year’s work, shared with the people who made it possible.',
    icon: 'music',
  },
  {
    title: 'Science Fair',
    description: 'Questions made visible. Children present what they wondered about, and what they found.',
    icon: 'flask',
  },
  {
    title: 'Sports Day',
    description: 'Races, cheers, and the long afternoon when the whole school is one colour.',
    icon: 'trophy',
  },
  {
    title: 'Cultural Fest',
    description: 'Food, dance, and the many homes our families come from—celebrated under one roof.',
    icon: 'sun',
  },
]

export default function LifeAtAkshara() {
  return (
    <main>
      <PageHeader
        eyebrow="Life at Akshara"
        title="The hours after the bell still belong to childhood."
        description="Friends, fields, rehearsals, and the small rituals that make a school feel like a place one is sorry to leave."
        image={images.studentLife}
        imageAlt="Students together at Sri Akshara"
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="An ordinary Tuesday"
            title="Assembly, work, lunch, play—and someone who knows your name."
            description="The day is paced so that children can think, move, and rest. Morning assembly sets a tone. Classes ask for attention. Afternoons make room for the rest of a person."
            align="center"
          />
        </div>
      </section>

      <Cards cards={activities} columns={2} className="bg-cream-50 pt-0" />

      <SplitSection
        image={images.clubs}
        imagePosition="left"
        eyebrow="Student life"
        title="Work and play, kept in proportion."
        content="We teach time, not merely timetable. Children learn to finish work, keep a promise to a team, and still have an hour left for a book or a friend. That balance is the culture, not a poster."
      />

      <section className="py-8">
        <div className="container-page pt-8">
          <SectionHeading
            eyebrow="The year, marked"
            title="Days the whole school looks toward."
          />
        </div>
        <Cards cards={events} columns={4} />
      </section>

      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="When a child needs more"
            title="Support that does not wait for a crisis."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                title: 'Counselling',
                body: 'Academic guidance, career conversations, and a quiet room when the week is heavy. Our counsellors work with families, not around them.',
              },
              {
                title: 'Learning support',
                body: 'Extra help without stigma. If a child needs a different path through a subject, we build one—and we tell you how it is going.',
              },
              {
                title: 'Health',
                body: 'A nurse on campus, health education that is age-honest, and a culture that treats sleep and food as part of scholarship.',
              },
              {
                title: 'Parents',
                body: 'Meetings that are conversations. Workshops when they help. An open invitation to walk the campus you already trust.',
              },
            ].map((item) => (
              <article key={item.title} className="border border-forest-100 bg-cream-100 p-8">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Come and feel the day."
        description="Visit during school hours. Hear the noise that is work, and the quiet that is care."
        primaryCtaText="Apply now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Write to us"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}
