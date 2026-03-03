import { useState } from 'react'
import faqs from '../content/faq.json'

function Item({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-blush/60">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-sans text-sm text-charcoal pr-4">{question}</span>
        <span className={`text-rose flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="font-sans text-sm text-charcoal/60 leading-relaxed pb-5">{answer}</p>
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
          {faqs.map(f => <Item key={f.question} {...f} />)}
        </div>
      </div>
    </section>
  )
}
