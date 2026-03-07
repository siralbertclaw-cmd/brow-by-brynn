import about from '../content/about.json'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <section id="about" className="bg-blush/20 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div ref={ref1} className="reveal relative order-2 md:order-1">
          <div className="aspect-square bg-blush/50 rounded-sm overflow-hidden group">
            <img
              src={about.photo}
              alt="Brynn"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ objectPosition: 'center 15%' }}
            />
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-rose/30 rounded-sm pointer-events-none" />
        </div>

        {/* Text */}
        <div ref={ref2} className="reveal reveal-delay-2 order-1 md:order-2">
          <span className="section-label">Meet Your Artist</span>
          <h2 className="section-title mb-6">{about.heading}</h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">{about.bio1}</p>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">{about.bio2}</p>

          <ul className="space-y-3 mb-8">
            {about.credentials.map(c => (
              <li key={c} className="flex items-center gap-3 font-sans text-sm text-charcoal/80">
                <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>

          <a href="https://coloradobrow.as.me/schedule/0e8b855e" target="_blank" rel="noopener noreferrer" className="btn-outline">Work With Brynn</a>
        </div>
      </div>
    </section>
  )
}
