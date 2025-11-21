import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
        <footer className="bg-black py-10 text-center text-white/60">
          <p className="px-6">© {new Date().getFullYear()} Bangalore Wedding Photography • Crafted with love</p>
        </footer>
      </main>
    </div>
  )
}

export default App
