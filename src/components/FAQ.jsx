import { useState } from 'react'

const faqs = [
  {
    q: 'Does it hurt?',
    a: 'Most clients describe the sensation as light scratching. We apply a topical numbing cream before and during the procedure to keep you comfortable throughout.',
  },
  {
    q: 'How long do results last?',
    a: 'Nano brows typically last 1–3 years. Lip blush lasts 2–4 years. Lash line enhancement can last up to 5 years. Individual results vary based on skin type, lifestyle, and aftercare.',
  },
  {
    q: 'What is the healing process like?',
    a: 'Expect 7–14 days of healing. The area will initially appear darker and may flake slightly — this is completely normal. Final color settles at about 4–6 weeks. A touchup is included at 6–8 weeks.',
  },
  {
    q: 'Am I a good candidate?',
    a: 'Most adults are great candidates! We do not recommend permanent makeup during pregnancy, while on certain medications (like blood thinners or Accutane), or with certain skin conditions. A consultation will help determine if you\'re ready.',
  },
  {
    q: 'Do I need a touchup?',
    a: 'Yes — a complimentary touchup is included in your service price, scheduled 6–8 weeks after your initial appointment. This is a normal part of the process and ensures optimal results.',
  },
  {
    q: 'Can I visit either location?',
    a: 'Absolutely. Brynn splits her schedule between Boulder, CO and Ormond Beach, FL. You can book at whichever location is most convenient for you.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-blush/60">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-sans text-sm text-charcoal pr-4">{q}</span>
        <span className={`text-rose flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="font-sans text-sm text-charcoal/60 leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-blush/10 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Your Questions, Answered</h2>
        </div>
        <div>
          {faqs.map(f => <Item key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  )
}
