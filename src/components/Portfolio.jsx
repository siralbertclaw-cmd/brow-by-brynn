import useScrollReveal from '../hooks/useScrollReveal'

const photos = [
  { src: '/portfolio/DUlr9f6kaoI.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DUT9J2sji9n.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DRNCBR1jmaH.jpg', alt: 'Lash line enhancement close-up' },
  { src: '/portfolio/DQUoGREDpCG.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DOFIQnwDqKi.jpg', alt: 'Lip blush result' },
  { src: '/portfolio/DNgpSbKy1pi.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DNYOJzpuDRB.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DNKSCsJtNyB.jpg', alt: 'Lip blush before and after' },
  { src: '/portfolio/DNEc3CwPKWN.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DMwd3V3s574.jpg', alt: 'Nano brow before and after' },
  { src: '/portfolio/DMY-XL8PYov.jpg', alt: 'Nano brow before and after' },
]

function PhotoCard({ p, i }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal break-inside-avoid overflow-hidden group transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:z-10 relative">
      <img
        src={p.src}
        alt={p.alt}
        className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>
  )
}

export default function Portfolio() {
  const titleRef = useScrollReveal()

  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">The Work Speaks for Itself</h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((p, i) => (
            <PhotoCard key={i} p={p} i={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://coloradobrow.as.me/schedule/0e8b855e" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Appointment</a>
        </div>
      </div>
    </section>
  )
}
