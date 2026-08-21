'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Parent of a Grade 4 student',
    content:
      'The school feels calm the moment you walk in. My son is stretched in class, but he is also known—his teacher can tell me how his week really went.',
  },
  {
    name: 'Priya Sharma',
    role: 'Alumna, Class of 2016',
    content:
      'Sri Akshara did not only prepare me for examinations. It taught me how to belong to a community, and how to try things that frightened me a little.',
  },
  {
    name: 'Dr. Anil Patel',
    role: 'Parent of a Grade 9 student',
    content:
      'We chose Akshara for the balance: serious academics, a kind campus, and staff who treat parents as partners rather than an audience.',
  },
  {
    name: 'Meera Nair',
    role: 'Alumna, Class of 2014',
    content:
      'The teachers remembered who I was. That sounds small until you are sixteen and trying to become someone. It gave me a foundation I still use.',
  },
]

export default function TestimonialSlider() {
  return (
    <section className="bg-cream-50 py-16 lg:py-24">
      <div className="container-page">
        <ScrollAnimation animation="fadeUp">
          <SectionHeading
            eyebrow="From our community"
            title="What parents and alumni tell us."
            description="We measure our work in the quiet confidence of a child who is happy to come to school on a Monday."
            align="center"
          />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.15}>
          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 5600, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <blockquote className="flex h-full flex-col border border-forest-100 bg-cream-100 p-8">
                    <span className="font-serif text-5xl leading-none text-gold-400">“</span>
                    <p className="mt-2 flex-1 font-serif text-xl leading-relaxed text-ink">
                      {testimonial.content}
                    </p>
                    <footer className="mt-8 border-t border-forest-100 pt-5">
                      <cite className="not-italic font-medium text-ink">{testimonial.name}</cite>
                      <p className="text-sm text-ink-soft">{testimonial.role}</p>
                    </footer>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
