import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Before & After', to: '/before-after' },
  { label: 'About', to: '/about' },
  { label: 'Before Care', to: '/before-care' },
  { label: 'FAQ', to: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hover-glow font-serif text-lg md:text-2xl font-bold text-charcoal tracking-wide">
          Brow Company <span className="text-rose italic">by Brynn</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.to}
              className={`hover-underline font-sans text-xs tracking-widest uppercase transition-colors ${location.pathname === l.to ? 'text-rose' : 'text-charcoal hover:text-rose'}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://coloradobrow.as.me/schedule/0e8b855e" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">Book Now</a>
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
            <Link
              key={l.label}
              to={l.to}
              className={`font-sans text-xs tracking-widest uppercase ${location.pathname === l.to ? 'text-rose' : 'text-charcoal'}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://coloradobrow.as.me/schedule/0e8b855e" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">Book Now</a>
        </div>
      )}
    </header>
  )
}
