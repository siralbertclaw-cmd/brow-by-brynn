const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '2', label: 'Studio Locations' },
  { value: '500+', label: 'Happy Clients' },
  { value: '100%', label: 'Custom Techniques' },
]

export default function SocialProof() {
  return (
    <section className="bg-charcoal py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-4xl text-gold mb-1">{s.value}</p>
            <p className="font-sans text-xs tracking-widest uppercase text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
