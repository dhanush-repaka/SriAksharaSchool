import Hero from '@/components/sections/Hero'
import Cards from '@/components/sections/Cards'
import SplitSection from '@/components/sections/SplitSection'
import CTA from '@/components/sections/CTA'

export default function Facilities() {
  const facilities = [
    {
      title: 'Modern Classrooms',
      description:
        'Spacious, well-lit classrooms equipped with smart boards, projectors, and comfortable seating designed for optimal learning.',
      image: '/images/classrooms.png',
      icon: '🏫',
    },
    {
      title: 'Science Laboratories',
      description:
        'Fully equipped physics, chemistry, and biology labs with modern equipment for hands-on experiments and research.',
      image: '/images/labs.png',
      icon: '🔬',
    },
    {
      title: 'Computer Labs',
      description:
        'State-of-the-art computer labs with high-speed internet and the latest software for technology education.',
      image: '/images/computer-lab.png',
      icon: '💻',
    },
    {
      title: 'Library & Media Center',
      description:
        'Extensive collection of books, digital resources, and quiet study spaces for research and reading.',
      image: '/images/library.png',
      icon: '📚',
    },
    {
      title: 'Sports Facilities',
      description:
        'Large playgrounds, basketball courts, football field, and indoor sports facilities for physical education.',
      image: '/images/sports.png',
      icon: '⚽',
    },
    {
      title: 'Arts & Music Rooms',
      description:
        'Dedicated spaces for visual arts, music, dance, and drama with professional equipment and instruments.',
      image: '/images/arts.png',
      icon: '🎨',
    },
    {
      title: 'Cafeteria',
      description:
        'Clean, spacious cafeteria serving nutritious meals prepared in our modern kitchen facilities.',
      image: '/images/cafeteria.png',
      icon: '🍽️',
    },
    {
      title: 'Auditorium',
      description:
        'Large auditorium with advanced audio-visual systems for assemblies, performances, and events.',
      image: '/images/auditorium.png',
      icon: '🎭',
    },
  ]

  return (
    <main>
      <Hero
        title="Our Facilities"
        subtitle="World-Class Infrastructure"
        description="State-of-the-art facilities designed to enhance learning and support student growth"
        backgroundImage="/images/facilities-hero.png"
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Space
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our campus features modern facilities that support diverse learning
              experiences. From cutting-edge laboratories to creative arts
              spaces, every facility is designed with student success in mind.
            </p>
          </div>
          <Cards cards={facilities} columns={4} />
        </div>
      </section>

      <SplitSection
        image="/images/campus-aerial.png"
        imagePosition="left"
        title="Our Campus"
        content="Spread across 15 acres, our campus provides a safe, inspiring environment for learning and growth. The thoughtfully designed spaces include academic buildings, recreational areas, and green spaces that promote well-being. Our facilities are regularly maintained and upgraded to meet the evolving needs of modern education."
      />

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Safety & Security
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Security Measures
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 security personnel</li>
                  <li>• CCTV surveillance system</li>
                  <li>• Controlled access points</li>
                  <li>• Emergency response protocols</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Health & Wellness
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• On-campus medical facility</li>
                  <li>• Trained nursing staff</li>
                  <li>• Regular health check-ups</li>
                  <li>• Clean and hygienic environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Experience Our Facilities"
        description="Schedule a campus tour to see our facilities in person."
        primaryCtaText="Book a Tour"
        primaryCtaLink="/contact"
        secondaryCtaText="View Gallery"
        secondaryCtaLink="/gallery"
      />
    </main>
  )
}

