const credentials = [
  "Master Cosmetologist",
  "Florida State Licensed Tattoo Artist",
  "Dora Approved Business License",
  "Better Business Bureau Accredited",
  "NanoBrow Certification & Brow Mapping Course by Lauren Taylor",
  "Licensed PMU Artist, Beauty Mark Microblading Permanent Makeup Academy with Erla Trujillo (132 hours) Aurora, CO",
  "Body Art Certification from Boulder County Public Health Department Boulder, CO",
  "Integrative Health Coach Training by Trinity School of Natural Health Warsaw, IN",
  "Brow and Lip Saline Removal Certification by The Brow Effect, Brow Academy Miami, FL",
  "NanoLines & Digital Machine Hairstrokes Certification by Mary Richardson Ft Collins, CO",
  "Brow Lamination Certification by The Brow Effect, Brow Academy Miami, FL",
  "Esthetics and Cosmetology License from Auburn Career Center Chardon, OH",
]

export default function Credentials() {
  return (
    <section id="credentials" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Qualifications</span>
          <h2 className="section-title">Credentials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {credentials.map((c, i) => (
            <div key={i} className="group flex items-start gap-4 border-b border-blush pb-6 cursor-default transition-all duration-300 hover:bg-blush/20 hover:px-3 rounded-sm">
              <span className="font-serif text-rose text-xl leading-none mt-0.5 group-hover:scale-125 transition-transform duration-300">✦</span>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed group-hover:text-rose group-hover:font-bold group-hover:text-lg transition-all duration-300">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
