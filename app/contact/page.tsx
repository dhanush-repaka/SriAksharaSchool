'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      title: 'Address',
      content: '123 Education Street, Learning City, LC 12345',
      icon: '📍',
    },
    {
      title: 'Phone',
      content: '+1 (555) 123-4567',
      icon: '📞',
    },
    {
      title: 'Email',
      content: 'info@sriaksharaschool.edu',
      icon: '✉️',
    },
    {
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      icon: '🕐',
    },
  ]

  return (
    <main>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to answer your questions and help you learn more about Sri Akshara School"
        backgroundImage="/images/contact-hero.png"
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Programs</option>
                      <option value="facilities">Facilities Tour</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation animation="slideLeft">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels. We're always
                  happy to help!
                </p>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                    >
                      <div className="text-3xl flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Interactive Map</p>
                    <p className="text-sm">(Integration with Google Maps)</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="/admissions"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Apply Now
              </h3>
              <p className="text-sm text-gray-600">
                Start your admission process
              </p>
            </a>
            <a
              href="/facilities"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Schedule a Tour
              </h3>
              <p className="text-sm text-gray-600">
                Visit our campus facilities
              </p>
            </a>
            <a
              href="/academics"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                View Programs
              </h3>
              <p className="text-sm text-gray-600">
                Explore our academic offerings
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

