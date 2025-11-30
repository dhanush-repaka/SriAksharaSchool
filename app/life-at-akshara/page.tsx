import Hero from '@/components/sections/Hero'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'

export default function LifeAtAkshara() {
  const activities = [
    {
      title: 'Sports & Athletics',
      description:
        'Competitive sports teams, intramural leagues, and physical fitness programs for all skill levels.',
      image: '/images/sports-activities.png',
      icon: '⚽',
    },
    {
      title: 'Arts & Culture',
      description:
        'Music, dance, drama, and visual arts programs with regular performances and exhibitions.',
      image: '/images/arts-activities.png',
      icon: '🎭',
    },
    {
      title: 'Clubs & Societies',
      description:
        'Diverse clubs including debate, robotics, environmental, and community service organizations.',
      image: '/images/clubs.png',
      icon: '🤝',
    },
    {
      title: 'Community Service',
      description:
        'Opportunities to give back through volunteer programs and social impact initiatives.',
      image: '/images/community-service.png',
      icon: '❤️',
    },
  ]

  const events = [
    {
      title: 'Annual Day',
      description:
        'A grand celebration showcasing student achievements, performances, and school spirit.',
      icon: '🎉',
    },
    {
      title: 'Science Fair',
      description:
        'Students present innovative projects and experiments demonstrating scientific inquiry.',
      icon: '🔬',
    },
    {
      title: 'Sports Day',
      description:
        'Competitive athletic events bringing together students, parents, and teachers.',
      icon: '🏃',
    },
    {
      title: 'Cultural Fest',
      description:
        'A vibrant celebration of diversity through music, dance, food, and traditions.',
      icon: '🎪',
    },
  ]

  return (
    <main>
      <Hero
        title="Life at Akshara"
        subtitle="Beyond the Classroom"
        description="A vibrant community where students learn, grow, and create lasting memories"
        backgroundImage="/images/life-hero.png"
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Day in the Life
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every day at Sri Akshara is filled with learning opportunities,
              friendships, and experiences that shape character and build
              memories. From morning assemblies to after-school activities, our
              students engage in a rich, balanced routine.
            </p>
          </div>
        </div>
      </section>

      <Cards cards={activities} columns={2} className="bg-gray-50" />

      <SplitSection
        image="/images/student-life.png"
        imagePosition="left"
        title="Student Life"
        content="Our students enjoy a well-rounded experience that balances academics with extracurricular activities. Morning assemblies set a positive tone for the day, followed by engaging classes, lunch breaks with friends, and afternoon activities. We emphasize time management, responsibility, and the importance of both work and play."
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Annual Events & Celebrations
          </h2>
          <Cards cards={events} columns={4} />
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Student Support Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Counseling Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional counselors provide academic guidance, career
                  counseling, and emotional support to help students navigate
                  challenges and make informed decisions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Learning Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized programs and resources for students who need
                  additional academic support, ensuring every student can
                  succeed.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Health & Wellness
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  On-campus medical facilities, health education programs, and
                  wellness initiatives promote physical and mental well-being.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Parent Engagement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular parent-teacher meetings, workshops, and events foster
                  strong partnerships between home and school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Be Part of Our Community"
        description="Join us and experience the vibrant life at Sri Akshara School."
        primaryCtaText="Apply Now"
        primaryCtaLink="/admissions"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </main>
  )
}

