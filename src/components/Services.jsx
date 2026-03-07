import services from '../content/services.json'
import useScrollReveal from '../hooks/useScrollReveal'

function ServiceCard({ s, i }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${i + 1} group flex flex-col border border-blush/60 hover:border-rose/40 transition-all duration-500 bg-white overflow-hidden hover:scale-105 hover:shadow-xl hover:z-10 relative`}>
      <div className="h-72 overflow-hidden">
        <img src={s.image} alt={s.name} style={s.objectPosition ? { objectPosition: s.objectPosition } : {}} className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ${s.name === 'Lip Blush' || s.name === 'Powder Brows' ? 'object-contain bg-blush/20' : 'object-cover'}`} />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <span className="font-sans text-xs tracking-widest uppercase text-rose mb-4">0{i + 1}</span>
        <h3 className="hover-glow font-serif text-2xl text-charcoal mb-2 transition-colors duration-300">{s.name}</h3>
        <p className="font-sans text-sm italic text-charcoal/60 mb-4">{s.tagline}</p>
        <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6 flex-1">{s.description}</p>
        <div className="border-t border-blush pt-4 space-y-3">
          {s.pricing.map(p => (
            <div key={p.label}>
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs tracking-widest uppercase text-charcoal/50">{p.label}</span>
                <span className="font-sans text-sm font-semibold text-charcoal">{p.total}</span>
              </div>
              <p className="font-sans text-xs text-rose">{p.deposit}</p>
              <p className="font-sans text-xs text-charcoal/40">{p.balance}</p>
            </div>
          ))}
          <p className="font-sans text-xs text-charcoal/40 pt-1 border-t border-blush/50">Ideal for: {s.ideal}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useScrollReveal()

  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Artistry That Lasts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.name} s={s} i={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://coloradobrow.as.me/schedule/0e8b855e" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </div>
    </section>
  )
}
