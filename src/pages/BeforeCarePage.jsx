import Booking from '../components/Booking'

export default function BeforeCarePage() {
  return (
    <div className="pt-20">
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="section-label">Prepare for Your Visit</span>
            <h1 className="section-title">Before Care</h1>
            <p className="font-sans text-base text-charcoal/60 mt-4 max-w-2xl mx-auto">
              What to know before your Lip Tint, Nano Brow, Microblading, or Lash Line Tattoo appointment.
            </p>
          </div>

          {/* 4 Weeks Before */}
          <div className="mb-12 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-2">4 Weeks Before Your Appointment</h2>
            <p className="font-sans text-sm text-charcoal/60 mb-6">Stop the following in the 4 inches around the treatment area:</p>
            <ul className="space-y-3">
              {[
                'Retin-A, Tretinal, Tretinoid, Retinal, and Hydroxy Acids on the forehead and T-zone area',
                'Hair growth treatments',
                'Botox in the forehead or around the treatment area',
                'Accutane',
                'Sun tanning',
                'Laser or chemical peels',
                'Latissé or hair growth serums on treated area',
                'Microneedling',
                'Cannot be pregnant or nursing',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-sans text-sm text-rose italic mt-6">Expect increased sensitivity when booking a session during your period.</p>
          </div>

          {/* Lip Blush */}
          <div className="mb-12 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Lip Blush Prep</h2>
            <ul className="space-y-3 mb-6">
              {[
                'Keep lips moist with an organic skin oil such as jojoba, castor, coconut, argan, vitamin E, or grapeseed oil',
                'Exfoliate lips with brown sugar, baking soda, or salt so you do not have chapped lips',
                'Drink lots of water the week before',
                'Very important: if you have ever had a cold sore, get antivirals 2 days before and 2 days after your appointment',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 24 Hours Before */}
          <div className="mb-12 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">24 Hours Before Your Appointment</h2>
            <ul className="space-y-3">
              {[
                'Alcohol',
                'Caffeine',
                'Blood thinners (Ibuprofen, NSAIDs, Advil, allergy medication, fish oil, etc.)',
                'Heavy workouts',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lash Line */}
          <div className="mb-12 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Lash Line / Eyeliner</h2>
            <ul className="space-y-3">
              {[
                'Discontinue use of Latissé and other hair growth serums 6 weeks before your session',
                'If you wear contact lenses, bring glasses to wear home. You may resume wearing contacts in 7 to 10 days',
                'You may begin using newly purchased makeup and eyeliner after 4 to 5 days',
                'All makeup brushes used on the treated area should be cleaned thoroughly before reuse',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Day Of */}
          <div className="mb-12 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Day of Your Appointment</h2>
            <ul className="space-y-3">
              {[
                'Wash your hair before your appointment. You cannot get your brows soaked for the first 10 days during aftercare, so washing on the day of gives you a few days before you need to wash again',
                'If sunny outside, wear a hat to protect your freshly done cosmetic tattoo from the sun on the way home',
                'Avoid working out or sweating before treatment',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <Booking />
    </div>
  )
}
