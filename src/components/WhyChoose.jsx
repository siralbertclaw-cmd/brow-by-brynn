const reasons = [
  { stat: '15+', label: 'Years of beauty experience' },
  { stat: '1,000+', label: 'Clients served across CO and FL' },
  { stat: 'Nano', label: 'Hyper-realistic hairstrokes, better than microblading' },
  { stat: 'Less', label: 'Trauma, minimal scabbing, natural healing' },
  { stat: 'Licensed', label: 'PMU artist and Florida State licensed tattoo artist' },
  { stat: '2-Step', label: 'Session process for the best, longest-lasting results' },
]

export default function WhyChoose() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Why Clients Choose Us</span>
          <h2 className="section-title">Why Florida Brow Co.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-start border-l-2 border-rose/40 pl-5">
              <span className="font-serif text-2xl md:text-3xl text-rose font-bold mb-1">{r.stat}</span>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
