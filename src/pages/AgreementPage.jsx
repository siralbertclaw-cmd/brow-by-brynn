import Booking from '../components/Booking'

const policies = [
  {
    title: 'Electronic Forms',
    body: 'Consent and medical forms will need to be kept on file per request of Boulder County Public Health.',
    link: { text: 'Complete Your Forms Here', href: 'https://pmusign.com/u/6psaj' },
  },
  {
    title: 'Consultation',
    body: 'A consultation is recommended if you may need a color correction or removal. The consultation fee is nonrefundable and applicable toward service.',
  },
  {
    title: 'Payment',
    body: 'A credit card is required to book an appointment, but your card will not be charged until the completion of service.',
  },
  {
    title: 'Cancellation',
    body: 'A 24-hour notice of cancellation is required to reschedule an appointment. Otherwise, you will be responsible for the cancellation fee of $100.',
  },
  {
    title: 'No Show',
    body: '35 minutes after your appointment time, if you have not communicated with me or rescheduled, you will be charged the full price of the appointment.',
  },
  {
    title: 'Refund',
    body: 'Services are not refundable. If you have any concerns please contact me as soon as possible.',
  },
  {
    title: 'Children',
    body: 'Children are not allowed in the studio. If you arrive at your appointment with your child, you will be rescheduled and billed a cancellation fee.',
  },
]

export default function AgreementPage() {
  return (
    <div className="pt-20">
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="section-label">Policies</span>
            <h1 className="section-title">Permanent Makeup Agreement</h1>
            <p className="font-sans text-base text-charcoal/60 mt-4 max-w-2xl mx-auto">
              Please review all policies before your appointment. Booking confirms your agreement to the terms below.
            </p>
          </div>

          <div className="space-y-6">
            {policies.map(p => (
              <div key={p.title} className="bg-white border border-blush/50 p-10">
                <h2 className="font-serif text-xl text-charcoal mb-3">{p.title}</h2>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{p.body}</p>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-sans text-xs tracking-widest uppercase text-rose border-b border-rose/30 hover:border-rose pb-0.5 transition-colors"
                  >
                    {p.link.text} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
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
