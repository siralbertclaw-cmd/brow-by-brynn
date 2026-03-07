const reasons = [
  { stat: 'Custom', label: 'Brow mapping and shape design tailored to your face, every single time' },
  { stat: '4 Gen', label: 'Four generations deep in the beauty industry, beauty is in my blood' },
  { stat: '', label: "It doesn't look like makeup, it enhances your natural features" },
  { stat: 'Love', label: 'I only sign off on work I love. You deserve results worth being proud of' },
  { stat: 'Precision', label: 'Integrity and precision in every stroke. Perfection is the standard, not the goal' },
]

export default function WhyChoose() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Brynn</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-start border-l-2 border-rose/40 pl-5">
              {r.stat && <span className="font-serif text-2xl md:text-3xl text-rose font-bold mb-1">{r.stat}</span>}
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
