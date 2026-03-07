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
          href="https://secure.acuityscheduling.com/appointments.php"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-rose font-sans tracking-widest uppercase text-xs px-10 py-4 hover:bg-cream transition-colors duration-300"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  )
}
