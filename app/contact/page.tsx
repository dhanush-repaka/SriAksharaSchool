'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageHeader from '@/components/sections/PageHeader'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import Icon from '@/components/ui/Icon'
import type { IconName } from '@/components/ui/Icon'
import { images } from '@/lib/images'

const contactInfo: { title: string; content: string; icon: IconName; href?: string }[] = [
  {
    title: 'Address',
    content: '123 Education Street, Learning City, LC 12345',
    icon: 'map',
  },
  {
    title: 'Phone',
    content: '+1 (555) 123-4567',
    icon: 'phone',
    href: 'tel:+15551234567',
  },
  {
    title: 'Email',
    content: 'info@sriaksharaschool.edu',
    icon: 'mail',
    href: 'mailto:info@sriaksharaschool.edu',
  },
  {
    title: 'Office hours',
    content: 'Monday – Friday, 8:00 AM – 5:00 PM',
    icon: 'clock',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const fieldClass =
    'w-full border border-forest-200 bg-cream-50 px-4 py-3 text-ink outline-none transition-colors focus:border-forest-600'

  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="A person will answer."
        description="Admissions, a tour, or a question you have been carrying. Write, call, or come to the front office—we keep time for families."
        image={images.campusTour}
        imageAlt="The school entrance"
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <ScrollAnimation animation="slideRight" className="lg:col-span-7">
              <p className="eyebrow">Write to us</p>
              <h2 className="mt-3 font-serif text-display-sm">Tell us a little, we will take it from there.</h2>
              <p className="mt-4 mb-8 max-w-xl text-ink-muted">
                We read every message. If you are enquiring about a place for your
                child, mention the grade and the year you hope to join.
              </p>

              {submitted ? (
                <div className="border border-forest-200 bg-forest-50 p-8">
                  <p className="font-serif text-2xl text-forest-800">Thank you.</p>
                  <p className="mt-2 text-ink-muted">
                    We have your note. Someone from the school will be in touch
                    within one school day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-forest-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-ink-muted">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-ink-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm text-ink-muted">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm text-ink-muted">
                        How can we help?
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={fieldClass}
                      >
                        <option value="">Please choose</option>
                        <option value="admissions">Admissions enquiry</option>
                        <option value="tour">Campus tour</option>
                        <option value="academics">Academic programmes</option>
                        <option value="general">A general question</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-ink-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-forest-700 px-8 py-3.5 text-sm font-medium text-cream-50 transition-colors hover:bg-forest-800"
                  >
                    Send message
                  </button>
                </form>
              )}
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" className="lg:col-span-5">
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 border border-forest-100 bg-cream-50 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-300/70 text-forest-700">
                      <Icon name={info.icon} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-[0.14em] text-ink-soft">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a href={info.href} className="mt-1 block text-ink hover:text-forest-700">
                          {info.content}
                        </a>
                      ) : (
                        <p className="mt-1 text-ink">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden border border-forest-100">
                <iframe
                  title="Map of Sri Akshara School"
                  className="h-56 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=university%20campus&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="border-t border-forest-100 bg-cream-50 py-16">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { href: '/admissions', title: 'Apply', note: 'Begin an application with a short conversation.', icon: 'clipboard' as IconName },
              { href: '/facilities', title: 'Tour', note: 'See classrooms, fields, and the quiet of the library.', icon: 'home' as IconName },
              { href: '/academics', title: 'Programmes', note: 'From early years through senior school.', icon: 'book' as IconName },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-forest-100 bg-cream-100 p-7 transition-shadow hover:shadow-soft"
              >
                <Icon name={item.icon} className="h-5 w-5 text-forest-700" />
                <h3 className="mt-4 font-serif text-2xl group-hover:text-forest-700">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
