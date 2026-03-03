import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Locations', href: '#locations' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl text-charcoal tracking-wide">
          Brow <span className="text-rose italic">by Brynn</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="font-sans text-xs tracking-widest uppercase text-charcoal hover:text-rose transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://secure.acuityscheduling.com/appointments.php" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">Book Now</a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-px bg-charcoal transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-blush px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-sans text-xs tracking-widest uppercase text-charcoal">
              {l.label}
            </a>
          ))}
          <a href="https://secure.acuityscheduling.com/appointments.php" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary text-center">Book Now</a>
        </div>
      )}
    </header>
  )
}
