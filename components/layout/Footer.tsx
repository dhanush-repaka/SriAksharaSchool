import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'

const footerLinks = {
  school: [
    { name: 'Our story', href: '/about' },
    { name: 'Mission & vision', href: '/about#mission' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Life at Akshara', href: '/life-at-akshara' },
  ],
  academics: [
    { name: 'Curriculum', href: '/academics#curriculum' },
    { name: 'Programmes', href: '/academics#programs' },
    { name: 'Faculty', href: '/academics#faculty' },
    { name: 'Campus & facilities', href: '/facilities' },
  ],
  admissions: [
    { name: 'How to apply', href: '/admissions' },
    { name: 'Requirements', href: '/admissions#requirements' },
    { name: 'Fees & aid', href: '/admissions#fees' },
    { name: 'Book a tour', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-200">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo inverted />
            <p className="mt-6 max-w-md text-cream-200/75 leading-relaxed">
              A school where children are known by name, stretched by ideas, and
              held by a community of teachers and parents who care.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <Icon name="map" className="w-4 h-4 mt-0.5 text-gold-300" />
                123 Education Street, Learning City
              </p>
              <p className="flex items-center gap-3">
                <Icon name="phone" className="w-4 h-4 text-gold-300" />
                <a href="tel:+15551234567" className="hover:text-cream-50">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="mail" className="w-4 h-4 text-gold-300" />
                <a href="mailto:info@sriaksharaschool.edu" className="hover:text-cream-50">
                  info@sriaksharaschool.edu
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-gold-300 mb-4">
              School
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.school.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream-50 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-gold-300 mb-4">
              Academics
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.academics.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream-50 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-gold-300 mb-4">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.admissions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream-50 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-cream-200/50 leading-relaxed">
              Front office: Monday–Friday, 8:00 AM – 5:00 PM
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream-200/50">
          <p>© {new Date().getFullYear()} Sri Akshara School. All rights reserved.</p>
          <p>A community of learners, since 1999.</p>
        </div>
      </div>
    </footer>
  )
}
