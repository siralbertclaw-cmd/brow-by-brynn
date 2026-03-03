const services = [
  {
    name: 'Nano Brows',
    tagline: 'The most natural-looking brow technique available.',
    description:
      'Using an ultra-fine digital needle, nano brows deposit pigment in hair-like strokes that mimic real brow hairs. Perfect for sparse or thin brows. Results last 1–3 years.',
    price: 'Starting at $550',
    ideal: 'Oily, combination, or mature skin',
    img: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/3c6f7575-8a9f-4a73-a58b-981b5621e953/IMG_0489.jpeg',
  },
  {
    name: 'Lip Blush',
    tagline: 'Soft, full color that lasts for years.',
    description:
      'A watercolor-style pigment technique that enhances your natural lip shape, adds definition, and gives a lasting flush of color — no liner needed.',
    price: 'Starting at $500',
    ideal: 'Anyone wanting low-maintenance color',
    img: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/ca4d93a5-715c-42e5-8712-469546c9ec9a/IMG_3727.jpeg',
  },
  {
    name: 'Lash Line Enhancement',
    tagline: 'The illusion of thicker, fuller lashes.',
    description:
      'Pigment is carefully placed between lash hairs to create the appearance of a fuller, defined lash line. Subtle yet transformative. Zero daily liner required.',
    price: 'Starting at $400',
    ideal: 'Those who want effortless definition',
    img: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/8c596c95-2c56-4826-8ed0-87e7d0d5aa06/IMG_5525.jpeg',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Artistry That Lasts</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={s.name} className="group flex flex-col border border-blush/60 hover:border-rose/40 transition-colors duration-300 bg-white overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
