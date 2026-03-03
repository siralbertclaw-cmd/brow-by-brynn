import reviews from '../content/testimonials.json'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09L5.25 12 1 8.09l6.122-.53L10 2l2.878 5.56L19 8.09 14.75 12l1.128 6.09z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">Real Results, Real Women</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.name} className="bg-white border border-blush/50 p-8">
              <Stars count={r.stars} />
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <div>
                <p className="font-sans text-sm font-bold text-charcoal">{r.name}</p>
                <p className="font-sans text-xs tracking-widest uppercase text-rose mt-0.5">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
