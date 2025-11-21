import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Bangalore • Wedding Photography • India
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Timeless wedding stories captured with heart
        </h1>
        <p className="mt-5 max-w-2xl text-white/80">
          We are a Bangalore-based wedding photography studio crafting elegant, candid imagery across India. From intimate moments to grand celebrations, we turn your day into art.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="rounded-full bg-white px-6 py-3 font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:scale-[1.02]">
            Check Availability
          </a>
          <a href="#portfolio" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
