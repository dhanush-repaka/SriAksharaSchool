import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Moments from campus life at Sri Akshara School—classrooms, sport, arts, and the everyday work of childhood.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
