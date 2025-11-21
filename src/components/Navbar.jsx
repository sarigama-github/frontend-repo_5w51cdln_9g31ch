import React from 'react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
          Bangalore Wedding Photography
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-white hover:bg-white hover:text-slate-900">Enquire</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
