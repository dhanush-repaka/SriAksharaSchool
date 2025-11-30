import Hero from '@/components/sections/Hero'
import SplitSection from '@/components/sections/SplitSection'
import Cards from '@/components/sections/Cards'
import CTA from '@/components/sections/CTA'

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description:
        'We strive for the highest standards in everything we do, from academics to character development.',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description:
        'We build trust through honesty, transparency, and ethical behavior in all our interactions.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description:
        'We embrace new ideas and technologies to enhance learning and prepare students for the future.',
      icon: '💡',
    },
    {
      title: 'Community',
      description:
        'We foster a sense of belonging and collaboration among students, parents, and educators.',
      icon: '🏘️',
    },
  ]

  return (
    <main>
      <Hero
        title="About Sri Akshara School"
        subtitle="Excellence in Education Since 1999"
        description="A legacy of nurturing young minds and shaping future leaders"
        backgroundImage="/images/about-hero.png"
      />

      <SplitSection
        image="/images/history.png"
        imagePosition="left"
        title="Our History"
        content="Founded in 1999, Sri Akshara School began with a vision to provide world-class education that combines academic rigor with holistic development. Over the past two decades, we have grown from a small institution to a leading educational establishment, consistently producing graduates who excel in their chosen fields. Our commitment to excellence has earned us recognition and trust from parents and the community."
      />

      <section id="mission" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary-600 mb-4">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide a transformative educational experience that
                  empowers students to achieve academic excellence, develop
                  critical thinking skills, and become responsible global
                  citizens with strong moral values.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary-600 mb-4">
                  Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as a premier educational institution that
                  nurtures innovative thinkers, compassionate leaders, and
                  lifelong learners who contribute meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cards cards={values} columns={4} className="bg-white" />

      <SplitSection
        image="/images/leadership.png"
        imagePosition="right"
        title="Our Leadership"
        content="Our leadership team brings together decades of experience in education, administration, and child development. Led by visionary educators, we are committed to continuous improvement and innovation in teaching methodologies. Our principals, department heads, and coordinators work collaboratively to ensure every student receives the support and guidance they need to succeed."
        ctaText="Meet Our Team"
        ctaLink="/about#leadership"
      />

      <CTA
        title="Join Our Community"
        description="Discover how Sri Akshara School can help your child reach their full potential."
        primaryCtaText="Schedule a Visit"
        primaryCtaLink="/contact"
        secondaryCtaText="View Admissions"
        secondaryCtaLink="/admissions"
      />
    </main>
  )
}

