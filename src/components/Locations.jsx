import locations from '../content/locations.json'

export default function Locations() {
  return (
    <section id="locations" className="bg-charcoal py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label" style={{ color: '#C9908E' }}>Find Us</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">Two Locations, One Standard of Excellence</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map(l => (
            <div key={l.city} className="border border-white/10 p-10 hover:border-rose/40 transition-colors duration-300">
              <h3 className="font-serif text-2xl text-white mb-1">{l.city}</h3>
              <p className="font-sans text-xs tracking-widest uppercase text-rose/80 mb-6">{l.note}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="font-sans text-xs tracking-widest uppercase text-white/40 w-14 flex-shrink-0 pt-0.5">Address</span>
                  <span className="font-sans text-sm text-white/70">{l.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-sans text-xs tracking-widest uppercase text-white/40 w-14 flex-shrink-0 pt-0.5">Hours</span>
                  <span className="font-sans text-sm text-white/70">{l.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-sans text-xs tracking-widest uppercase text-white/40 w-14 flex-shrink-0 pt-0.5">Phone</span>
                  <a href={`tel:${l.phone}`} className="font-sans text-sm text-white/70 hover:text-white transition-colors">{l.phone}</a>
                </div>
              </div>

              <a
                href={l.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-xs tracking-widest uppercase text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-colors"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
