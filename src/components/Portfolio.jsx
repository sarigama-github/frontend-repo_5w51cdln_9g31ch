import React from 'react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop',
    w: 3,
    h: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    w: 2,
    h: 3,
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    w: 3,
    h: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    w: 3,
    h: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    w: 2,
    h: 3,
  },
  {
    src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    w: 3,
    h: 2,
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Featured Portfolio</h2>
            <p className="mt-2 text-slate-600">A glimpse into the weddings weve had the honor to capture.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:inline-block">Book a Consultation</a>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [column-fill:_balance]"><!-- prettier-ignore -->
          {images.map((img, i) => (
            <div key={i} className="mb-4 overflow-hidden rounded-xl">
              <img src={img.src} alt="Wedding portfolio" className="h-auto w-full scale-100 transform transition duration-500 hover:scale-[1.03]" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
