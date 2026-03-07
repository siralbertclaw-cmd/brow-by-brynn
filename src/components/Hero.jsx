import { Link } from 'react-router-dom'
import services from '../content/services.json'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cream">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blush/20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-28 pb-10">
        {/* Text */}
        <div className="w-full">
          <span className="section-label">Permanent Makeup</span>
          <p className="font-sans text-xs tracking-widest uppercase text-charcoal/50 mb-5">Colorado &amp; Florida</p>
          <div className="mb-6">
            <a href="https://coloradobrow.as.me/schedule/0e8b855e" target="_blank" rel="noopener noreferrer" className="btn-primary text-center inline-block">Book Now</a>
          </div>
          <h1 className="hover-glow font-serif font-bold text-4xl md:text-5xl text-charcoal leading-[1.1] mb-5 cursor-default">
            Wake Up to
            <em className="block text-rose font-bold"> Perfection.</em>
          </h1>
          <p className="font-sans font-semibold text-base md:text-lg text-charcoal/80 leading-relaxed mb-7 max-w-md">
            I've spent 15+ years perfecting the art of permanent makeup, so you can spend less time in front of the mirror and more time living your life.
          </p>
          <div className="flex flex-col gap-4 mb-8 w-full max-w-xs">
            <Link to="/services" className="btn-outline text-center">Explore Services</Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mb-6">
            <a href="https://www.instagram.com/_browcompany" target="_blank" rel="noopener noreferrer" className="font-sans text-xs tracking-widest uppercase text-charcoal/50 hover:text-rose transition-colors">Instagram</a>
            <span className="text-charcoal/20">|</span>
            <a href="https://www.facebook.com/floridabrowco" target="_blank" rel="noopener noreferrer" className="font-sans text-xs tracking-widest uppercase text-charcoal/50 hover:text-rose transition-colors">Facebook FL</a>
            <span className="text-charcoal/20">|</span>
            <a href="https://www.facebook.com/coloradobrowco" target="_blank" rel="noopener noreferrer" className="font-sans text-xs tracking-widest uppercase text-charcoal/50 hover:text-rose transition-colors">Facebook CO</a>
          </div>

          {/* Service pills */}
          <div className="flex flex-wrap gap-3">
            {services.map(s => (
              <Link
                key={s.name}
                to="/services"
                className="font-sans text-xs tracking-widest uppercase text-charcoal/60 border border-blush/60 hover:border-rose hover:text-rose px-4 py-2 transition-colors duration-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Photo — smaller on mobile, full on desktop */}
        <div className="relative w-full max-w-xs mx-auto md:max-w-none">
          <div className="aspect-[3/4] bg-blush/40 rounded-sm overflow-hidden">
            <img
              src="/brynn-pro.jpg"
              alt="Brynn, Permanent Makeup Artist"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
