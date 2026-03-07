import useScrollReveal from '../hooks/useScrollReveal'

const photos = [
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/d5f27e99-1b9f-4dd5-bcb9-7a95579cafed/IMG_1901.jpeg', alt: 'Nano brow result' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/9745c2ff-93ad-467f-af55-81f912ad27b3/IMG_5789.png', alt: 'Brow work' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/1760572503014-Q2RTMJK4OKI132FNIOE2/IMG_3392.jpg', alt: 'Permanent makeup result' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/95ee17e8-cf27-4b1a-9efd-6370d0119392/IMG_5606.jpeg', alt: 'Brow transformation' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/f84a08f9-1445-458a-a669-d7711ec33f63/IMG_5604.jpeg', alt: 'Nano brow close-up' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/b14934b0-8a2e-4da6-a268-8a7d1df28945/IMG_5617.jpeg', alt: 'Lip blush result' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/ade78602-787b-40e5-8dd7-968a9a754ffb/IMG_4867.jpeg', alt: 'Permanent makeup' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/22ae98a9-d2ba-4b38-9ec6-a16ffc515b93/IMG_3173.jpeg', alt: 'Brow work' },
  { src: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/74b01fad-6522-476c-a8d1-8959a167e267/IMG_3136.jpeg', alt: 'Nano brow result' },
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
          <a href="https://coloradobrow.as.me/" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Appointment</a>
        </div>
      </div>
    </section>
  )
}
