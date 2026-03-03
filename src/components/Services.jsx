import services from '../content/services.json'

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Artistry That Lasts</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={s.name} className="group flex flex-col border border-blush/60 hover:border-rose/40 transition-colors duration-300 bg-white overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-sans text-xs tracking-widest uppercase text-rose mb-4">0{i + 1}</span>
                <h3 className="font-serif text-2xl text-charcoal mb-2">{s.name}</h3>
                <p className="font-sans text-sm italic text-charcoal/60 mb-4">{s.tagline}</p>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6 flex-1">{s.description}</p>
                <div className="border-t border-blush pt-4 flex flex-col gap-1">
                  <p className="font-sans text-xs tracking-widest uppercase text-gold">{s.price}</p>
                  <p className="font-sans text-xs text-charcoal/50">Ideal for: {s.ideal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://secure.acuityscheduling.com/appointments.php" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Consultation</a>
        </div>
      </div>
    </section>
  )
}
