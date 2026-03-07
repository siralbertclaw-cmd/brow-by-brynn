const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Locations', href: '#locations' },
  { label: 'Book Now', href: '#booking' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <a href="#" className="font-serif text-xl text-white tracking-wide">
            Brow Company <span className="text-rose italic">by Brynn</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Locations row */}
        <div className="grid md:grid-cols-2 gap-6 border-t border-white/10 pt-8 mb-8">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-rose mb-1">Boulder, Colorado</p>
            <p className="font-sans text-xs text-white/40">4750 Broadway, Boulder, CO 80304</p>
            <p className="font-sans text-xs text-white/40">(720) 507-5119</p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-rose mb-1">Ormond Beach, Florida</p>
            <p className="font-sans text-xs text-white/40">Phenix Salon Suites #101, 266 N Nova Rd</p>
            <p className="font-sans text-xs text-white/40">(720) 507-5119</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} Brow Company by Brynn. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/_browcompany" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase">Instagram</a>
            <a href="https://www.facebook.com/floridabrowco" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase">Facebook FL</a>
            <a href="https://www.facebook.com/coloradobrowco" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-white/40 hover:text-white transition-colors tracking-widest uppercase">Facebook CO</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
