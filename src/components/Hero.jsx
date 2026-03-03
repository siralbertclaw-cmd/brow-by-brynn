export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blush/20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pt-24 pb-16">
        {/* Text */}
        <div>
          <span className="section-label">Permanent Makeup Artist</span>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1] mb-6">
            Wake Up to
            <em className="block text-rose"> Perfect Brows.</em>
          </h1>
          <p className="font-sans text-base text-charcoal/70 leading-relaxed mb-8 max-w-md">
            15+ years of advanced permanent makeup in Boulder, CO and Ormond Beach, FL.
            Nano brows, lip blush, and lash line enhancement — tailored to you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://secure.acuityscheduling.com/appointments.php" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Consultation</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
        </div>

        {/* Photo placeholder — swap src for real image */}
        <div className="relative">
          <div className="aspect-[3/4] bg-blush/40 rounded-sm overflow-hidden">
            <img
              src="/brynn-header.jpg"
              alt="Brynn — Permanent Makeup Artist"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg px-6 py-4 text-center">
            <p className="font-serif text-3xl text-charcoal">15+</p>
            <p className="font-sans text-xs tracking-widest uppercase text-rose mt-1">Years of Artistry</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-xs tracking-widest uppercase text-charcoal">Scroll</span>
        <div className="w-px h-8 bg-charcoal animate-pulse" />
      </div>
    </section>
  )
}
