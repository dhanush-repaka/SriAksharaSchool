import Hero from '@/components/sections/Hero'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Image from 'next/image'
import { assetPath } from '@/lib/utils'

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'School Event', category: 'Events' },
  { src: '/images/gallery-2.png', alt: 'Classroom', category: 'Academics' },
  { src: '/images/gallery-3.png', alt: 'Sports Day', category: 'Sports' },
  { src: '/images/gallery-4.png', alt: 'Art Exhibition', category: 'Arts' },
  { src: '/images/gallery-5.png', alt: 'Science Fair', category: 'Academics' },
  { src: '/images/gallery-6.png', alt: 'Graduation', category: 'Events' },
  { src: '/images/gallery-7.png', alt: 'Music Concert', category: 'Arts' },
  { src: '/images/gallery-8.png', alt: 'Basketball', category: 'Sports' },
  { src: '/images/gallery-9.png', alt: 'Library', category: 'Facilities' },
  { src: '/images/gallery-10.png', alt: 'Field Trip', category: 'Events' },
  { src: '/images/gallery-11.png', alt: 'Drama Performance', category: 'Arts' },
  { src: '/images/gallery-12.png', alt: 'Campus', category: 'Facilities' },
]

const categories = ['All', 'Events', 'Academics', 'Sports', 'Arts', 'Facilities']

export default function Gallery() {
  return (
    <main>
      <Hero
        title="Gallery"
        subtitle="Life at Sri Akshara"
        description="Capturing moments of learning, growth, and celebration"
        backgroundImage="/images/gallery-hero.png"
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Explore our vibrant school community through these captured moments
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-primary-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeUp"
                delay={index * 0.05}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform z-20 opacity-0 group-hover:opacity-100">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Gallery
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Watch our school in action through these videos
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Campus Tour Video</p>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Annual Day Celebration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

