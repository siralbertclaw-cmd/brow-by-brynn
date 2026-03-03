const credentials = [
  'Licensed Permanent Makeup Artist',
  'Advanced Nano Brow Specialist',
  'Lip Blush & Color Theory Certified',
  'Member, Society of Permanent Cosmetic Professionals',
]

export default function About() {
  return (
    <section id="about" className="bg-blush/20 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative order-2 md:order-1">
          <div className="aspect-square bg-blush/50 rounded-sm overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/581f5c20-d84a-40de-bc1e-d962164a0593/image-asset.jpeg"
              alt="Brynn"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-rose/30 rounded-sm pointer-events-none" />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <span className="section-label">Meet Your Artist</span>
          <h2 className="section-title mb-6">Hi, I'm Brynn.</h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-4">
            With over 15 years in permanent makeup, I've dedicated my career to one thing: helping
            women wake up feeling effortlessly beautiful. My approach is personal — every client gets
            a custom design tailored to their face shape, skin tone, and lifestyle.
          </p>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
            I split my time between my studio in Boulder, Colorado and Ormond Beach, Florida — so
            no matter where you are, world-class brows are closer than you think.
          </p>

          <ul className="space-y-3 mb-8">
            {credentials.map(c => (
              <li key={c} className="flex items-center gap-3 font-sans text-sm text-charcoal/80">
                <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>

          <a href="https://secure.acuityscheduling.com/appointments.php" target="_blank" rel="noopener noreferrer" className="btn-outline">Work With Brynn</a>
        </div>
      </div>
    </section>
  )
}
