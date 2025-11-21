import React from 'react'
import { Camera, Heart, Users, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Candid & Documentary',
    desc: 'Natural, unscripted storytelling that captures the true essence of your day.'
  },
  {
    icon: Heart,
    title: 'Pre-Wedding Sessions',
    desc: 'Beautifully styled couple portraits across Bangalore or your dream destination.'
  },
  {
    icon: Users,
    title: 'Full-Day Coverage',
    desc: 'From haldi to reception, a complete narrative with multiple photographers.'
  },
  {
    icon: Sparkles,
    title: 'Films & Reels',
    desc: 'Cinematic highlights and social-ready edits crafted to music and emotion.'
  }
]

function Services() {
  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">What We Offer</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">Thoughtfully designed packages tailored for every scale of celebration.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
