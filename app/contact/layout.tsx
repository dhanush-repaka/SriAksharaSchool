import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Visit Sri Akshara School, write to admissions, or book a campus tour. A person will answer.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
