import Link from 'next/link'
import { LEARNING_BUDDY_URL } from '@/lib/site'

export default function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-forest-900 text-cream-100">
      <div className="container-page flex flex-col items-center justify-between gap-1 py-2 text-center text-[12px] tracking-wide sm:flex-row sm:text-left">
        <p className="text-cream-100/85">
          Independence Day celebrations 2026.{' '}
          <Link
            href="/independence-day-2026"
            className="font-medium text-gold-300 hover:text-gold-200"
          >
            See the day
          </Link>
          <span className="mx-2 text-cream-100/40">·</span>
          Admissions 2026–27 are open.{' '}
          <Link href="/admissions" className="font-medium text-gold-300 hover:text-gold-200">
            Apply
          </Link>
        </p>
        <a
          href={LEARNING_BUDDY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gold-300 hover:text-gold-200 transition-colors"
        >
          Launch Learning Buddy →
        </a>
      </div>
    </div>
  )
}
