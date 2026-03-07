import { useEffect, useRef } from 'react'

export default function VideoSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5
    }
  }, [])

  return (
    <section className="bg-charcoal py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label" style={{ color: '#C9908E' }}>The Work</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">See It in Motion</h2>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-sm shadow-2xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
