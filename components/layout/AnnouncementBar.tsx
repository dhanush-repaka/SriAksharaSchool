import Link from 'next/link'

export default function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-forest-900 text-cream-100">
      <div className="container-page flex flex-col items-center justify-between gap-1 py-2 text-center text-[12px] tracking-wide sm:flex-row sm:text-left">
        <p className="text-cream-100/85">
          Admissions for the 2026–27 academic year are now open.
        </p>
        <Link
          href="/admissions"
          className="font-medium text-gold-300 hover:text-gold-200 transition-colors"
        >
          Begin an application →
        </Link>
      </div>
    </div>
  )
}
