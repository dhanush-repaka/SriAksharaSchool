import LaunchButton from '@/components/ui/LaunchButton'

export default function LearningBuddyLaunch() {
  return (
    <section className="bg-forest-900">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center lg:py-12">
        <div className="max-w-xl">
          <p className="eyebrow text-gold-300">For students and families</p>
          <h2 className="mt-3 font-serif text-3xl text-cream-50 lg:text-4xl">
            Learning Buddy
          </h2>
          <p className="mt-3 text-cream-200/75 leading-relaxed">
            Open the school learning tool in a new tab—homework, practice, and
            classroom work, one click from home.
          </p>
        </div>
        <LaunchButton className="shrink-0 px-7 py-3.5 text-base" />
      </div>
    </section>
  )
}
