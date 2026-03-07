import Booking from '../components/Booking'

const pairs = [
  {
    category: 'Nano Brows',
    before: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/d5f27e99-1b9f-4dd5-bcb9-7a95579cafed/IMG_1901.jpeg',
    after: '/nano-brows.jpg',
  },
  {
    category: 'Lip Blush',
    before: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/b14934b0-8a2e-4da6-a268-8a7d1df28945/IMG_5617.jpeg',
    after: '/lip-blush.jpg',
  },
  {
    category: 'Lash Line Enhancement',
    before: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/22ae98a9-d2ba-4b38-9ec6-a16ffc515b93/IMG_3173.jpeg',
    after: '/lash-liner.jpg',
  },
  {
    category: 'Nano Brows',
    before: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/95ee17e8-cf27-4b1a-9efd-6370d0119392/IMG_5606.jpeg',
    after: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/f84a08f9-1445-458a-a669-d7711ec33f63/IMG_5604.jpeg',
  },
  {
    category: 'Permanent Makeup',
    before: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/ade78602-787b-40e5-8dd7-968a9a754ffb/IMG_4867.jpeg',
    after: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/74b01fad-6522-476c-a8d1-8959a167e267/IMG_3136.jpeg',
  },
  {
    category: 'Brow Work',
    before: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/9745c2ff-93ad-467f-af55-81f912ad27b3/IMG_5789.png',
    after: 'https://images.squarespace-cdn.com/content/v1/61bfdc9772885c03561fb234/1760572503014-Q2RTMJK4OKI132FNIOE2/IMG_3392.jpg',
  },
]

function PairCard({ pair }) {
  return (
    <div className="bg-white border border-blush/50 overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="relative">
          <img
            src={pair.before}
            alt={`${pair.category} before`}
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-3 left-3 bg-charcoal/70 text-white font-sans text-xs tracking-widest uppercase px-3 py-1">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={pair.after}
            alt={`${pair.category} after`}
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-3 right-3 bg-rose/80 text-white font-sans text-xs tracking-widest uppercase px-3 py-1">
            After
          </span>
        </div>
      </div>
      <div className="px-6 py-4 border-t border-blush/30">
        <p className="font-sans text-xs tracking-widest uppercase text-rose">{pair.category}</p>
      </div>
    </div>
  )
}

export default function BeforeAfterPage() {
  return (
    <div className="pt-20">
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="section-label">Real Results</span>
            <h1 className="section-title">Before &amp; After</h1>
            <p className="font-sans text-base text-charcoal/60 mt-4 max-w-2xl mx-auto">
              Every result is unique. Browse transformations across Nano Brows, Lip Blush, and Lash Line Enhancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pairs.map((pair, i) => (
              <PairCard key={i} pair={pair} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-sans text-sm text-charcoal/60 mb-6">Ready for your own transformation?</p>
            <a
              href="https://coloradobrow.as.me/schedule/0e8b855e"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Consultation
            </a>
          </div>

        </div>
      </section>
      <Booking />
    </div>
  )
}
