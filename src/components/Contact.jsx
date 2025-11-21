import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // For now, mimic success locally. Can be wired to backend later.
    setTimeout(() => setStatus('Thanks! We\'ll get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="relative bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let\'s Talk About Your Wedding</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">Share your date, venues, and vision — we\'ll tailor a package and share availability.</p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-5">
          <form onSubmit={handleSubmit} className="space-y-4 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Your Name" required />
              <input type="email" className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Email" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Phone" />
              <input className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Wedding Date" />
            </div>
            <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 outline-none" placeholder="Tell us about your plans"></textarea>
            <button type="submit" className="w-full rounded-lg bg-white p-3 font-medium text-slate-900 hover:opacity-90">Send Inquiry</button>
            {status && <p className="text-center text-sm text-white/80">{status}</p>}
          </form>

          <div className="space-y-4 md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h4 className="font-medium">Based in Bangalore</h4>
              <p className="mt-1 text-white/70">Available across India and for select destination weddings worldwide.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h4 className="font-medium">What to expect</h4>
              <p className="mt-1 text-white/70">Thoughtful planning, calm presence, and imagery that feels elegant and effortless.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
