'use client'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Parent',
    content:
      'Sri Akshara School has provided an exceptional learning environment for my child. The teachers are dedicated, and the facilities are outstanding.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Alumni',
    content:
      'My years at Sri Akshara prepared me not just academically, but also shaped my character and values. I am grateful for the holistic education I received.',
    rating: 5,
  },
  {
    name: 'Dr. Anil Patel',
    role: 'Parent',
    content:
      'The school focuses on both academic excellence and character development. My daughter has grown into a confident and well-rounded individual.',
    rating: 5,
  },
  {
    name: 'Meera Nair',
    role: 'Alumni',
    content:
      'The supportive community and innovative teaching methods at Sri Akshara gave me the foundation I needed to succeed in my career.',
    rating: 5,
  },
]

export default function TestimonialSlider() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            What Our Community Says
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollAnimation>
      </div>
    </section>
  )
}

