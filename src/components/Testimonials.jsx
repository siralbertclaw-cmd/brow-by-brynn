import { useState, useEffect, useRef } from 'react'
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
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  const total = reviews.length

  const goTo = (index) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent((index + total) % total)
      setTransitioning(false)
    }, 300)
  }

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 3500)
    return () => clearInterval(timerRef.current)
  }, [current, transitioning])

  const r = reviews[current]

  return (
    <section className="bg-cream py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">Real Results, Real Women</h2>
          <a
            href="https://www.google.com/search?q=florida+brow+company+ormond+beach+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-sans text-xs tracking-widest uppercase text-rose hover:text-charcoal transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Read all reviews on Google
          </a>
        </div>

        <div className="relative bg-white border border-blush/50 p-10 md:p-16">
          {/* Review content */}
          <div
            className="transition-opacity duration-300 text-center"
            style={{ opacity: transitioning ? 0 : 1 }}
          >
            <Stars count={r.stars} />
            <p className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed mb-8 italic max-w-2xl mx-auto">
              "{r.text}"
            </p>
            <div>
              <p className="font-sans text-sm font-bold text-charcoal">{r.name}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-rose mt-0.5">{r.location}</p>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border border-blush hover:border-rose text-charcoal/40 hover:text-rose transition-colors"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border border-blush hover:border-rose text-charcoal/40 hover:text-rose transition-colors"
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === current ? 'bg-rose' : 'bg-blush'}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
