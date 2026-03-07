export default function Booking() {
  return (
    <section id="booking" className="bg-rose py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-white/60 mb-3 block">Ready?</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-snug mb-6">
          Start Your Journey to Effortless Beauty
        </h2>
        <p className="font-sans text-sm text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          Book a free consultation and we'll walk you through everything: design, technique, aftercare, and pricing. No pressure, just great brows.
        </p>
        <a
          href="https://coloradobrow.as.me/schedule/0e8b855e"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-rose font-sans tracking-widest uppercase text-xs px-10 py-4 transition-all duration-300 hover:bg-cream hover:scale-110 hover:shadow-lg active:scale-95"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  )
}
