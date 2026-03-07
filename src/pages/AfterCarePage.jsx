import Booking from '../components/Booking'

export default function AfterCarePage() {
  return (
    <div className="pt-20">
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="section-label">Healing Guide</span>
            <h1 className="section-title">After Care</h1>
            <p className="font-sans text-base text-charcoal/60 mt-4 max-w-2xl mx-auto">
              Follow these instructions carefully to protect your investment and ensure beautiful, long-lasting results.
            </p>
          </div>

          {/* Day of Treatment */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-2">Day of Treatment Only</h2>
            <p className="font-sans text-sm text-charcoal/60 mb-6">For the entire day after treatment:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Gently dab your new brows, lips, or eyeliner with a damp wipe, cotton pad, or splash with water every 15 to 20 minutes for 3 hours. Immediately dry with a paper towel so the skin is not wet.',
                'Before bed, apply a thin layer of Aquaphor.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-sans text-sm text-rose italic">Oily skin only: use Aquaphor only when your skin feels dry, tight, and itchy.</p>
          </div>

          {/* 10-Day Routine */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-2">10-Day Morning and Night Routine</h2>
            <p className="font-sans text-sm text-charcoal/60 mb-6">Starting the morning after your appointment. Do your best to sleep on your back for a week.</p>
            <p className="font-sans text-sm font-semibold text-charcoal mb-4 tracking-widest uppercase">Cleanse, Rinse, Dry</p>
            <ul className="space-y-3 mb-6">
              {[
                'Cleanse with a cotton round to the cosmetic tattooed area. Use a wet cotton round or splash water on brows.',
                'Pat with a paper towel or cotton round until 100% dry.',
                'Follow with a very thin layer of balm (normal and dry skin only). Remove excess Aquaphor so the skin can breathe.',
                'Pores should be clean, unclogged, and without makeup for proper healing.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Showering */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Showering</h2>
            <ul className="space-y-3">
              {[
                'Warm water only, no steam. Steam opens up the pores which is not good for healing.',
                'Baths are recommended. Try not to get brows wet until the end of your shower, then immediately blot dry with a paper towel until 100% dry.',
                'Avoid sweat-producing activities. If you sweat, do another round of cleanser to get the sweat out of the skin and pat dry.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* First 7 Days Avoid */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-2">For the First 7 Days, Avoid</h2>
            <p className="font-sans text-sm text-charcoal/60 mb-6">On or near the cosmetic tattoo area:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Powered foundation, bronzer, blush, or eyeshadow',
                'Sauna, jacuzzi, hot tub, or facial steamer',
                'Direct sunlight or salon tanning',
                'Excessive sweating',
                'Airborne debris and dust (wind, barns, attics, convertibles, motorcycles, etc.)',
                'Picking, scratching, or touching the treatment area',
                'Steaming hot showers (wear the shower visor provided or keep head away from shower stream)',
                'Swimming',
                'Skin care products on brows (resume after 14 days)',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-sans text-sm text-rose italic">Resume Botox, laser or chemical peels, Retinal, Retin-A, Benzyl Peroxide, fillers, or other treatments 6 weeks after your 2nd session.</p>
          </div>

          {/* Healing Timeline */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Healing Process</h2>
            <div className="space-y-4">
              {[
                { day: 'Day 1', note: 'Tender, red, and looking dark' },
                { day: 'Days 2 to 4', note: 'Cosmetic tattoo will get a bit darker before healing softer' },
                { day: 'Days 4 to 6', note: 'Flaking and itching is normal' },
                { day: 'Days 10 to 14', note: 'Hairstrokes, lips, or eyeliner may lighten, soften, shrink, or slightly disappear. This is normal after the first session.' },
                { day: 'Day 42', note: 'Fully healed' },
              ].map(({ day, note }) => (
                <div key={day} className="flex items-start gap-4">
                  <span className="font-sans text-xs tracking-widest uppercase text-rose w-24 flex-shrink-0 pt-0.5">{day}</span>
                  <span className="font-sans text-sm text-charcoal/70">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lip Notes */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Notes for Lip Tint</h2>
            <ul className="space-y-3">
              {[
                'If swollen, ice every ten minutes until swelling goes down.',
                'Keep lips moist with healing balm every day, all day for 7 days.',
                'Lips will chap or flake. Do not itch or pick. Let it fall off naturally and keep applying balm until the 3-week mark.',
                'Avoid vinegar, salty, spicy, and heavily seasoned foods.',
                'Drink out of a straw.',
                'After every meal, gently rinse and clean lips with water, pat dry, then reapply ointment.',
                'Lips will lighten up to 60% in two weeks.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Eyeliner Notes */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">Notes for Eyeliner and Lash Line Enhancement</h2>
            <ul className="space-y-3">
              {[
                'You may resume wearing contacts when your eyelids return to their pre-treatment condition.',
                'If swollen, ice every ten minutes until swelling goes down.',
                'All makeup brushes used on the treated area should be cleaned thoroughly before reuse.',
                'Hair growth serums and treatments can have a negative chemical reaction to the pigments. Using them with permanent makeup is not advised.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Longevity */}
          <div className="mb-8 bg-white border border-blush/50 p-10">
            <h2 className="font-serif text-2xl text-charcoal mb-6">How to Get the Most Out of Your Results</h2>
            <ul className="space-y-3">
              {[
                'Chemical, laser peels, or treatments will dramatically fade or possibly damage skin if used over your brows, lips, or eyeliner. Ask your esthetician to avoid an inch around the area and let them know about your permanent makeup.',
                'Sunlight everyday will affect your brows, lips, and lash line. Wear a hat, sunglasses, SPF, and SPF chapstick for lip blush.',
                'Retinal, Retin-A, Tretinoin, and Tretinal will cause premature fading. Try to avoid these active skincare ingredients 4 inches around your brows, lips, or lash line.',
                'Hormone treatments can prematurely fade permanent makeup.',
                'Sweating 5 times a week consistently will lead to needing a refresh sooner than 2 to 3 years.',
                'When receiving an MRI, let your nurse know you have a cosmetic tattoo.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-charcoal/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-blush/30">
              <p className="font-sans text-xs text-charcoal/50 mb-1">Common side effects immediately after treatment: swelling, flaking, peeling, itching, tenderness, tingling.</p>
              <p className="font-sans text-xs text-charcoal/50 mb-1">All services performed by Brynn Serfilippi. (720) 507-5119</p>
              <p className="font-sans text-xs text-charcoal/50 mb-1">Better Business Bureau Accredited.</p>
              <p className="font-sans text-xs text-charcoal/50">Boulder County Public Health licenses Colorado Brow Co. 3450 Broadway, Boulder, CO 80304. (303) 441-1100</p>
            </div>
          </div>

        </div>
      </section>
      <Booking />
    </div>
  )
}
