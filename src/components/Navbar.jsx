import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollTo(id)}
      className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
              <span className="text-lg font-semibold tracking-tight text-white">Kairokume</span>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              <NavLink id="blockchain" label="Blockchain" />
              <NavLink id="cybersecurity" label="Cybersecurity" />
              <NavLink id="ai" label="AI" />
              <NavLink id="why" label="Why Us" />
              <NavLink id="story" label="Our Story" />
              <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors">Contact</a>
            </nav>

            <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
              <NavLink id="blockchain" label="Blockchain" />
              <NavLink id="cybersecurity" label="Cybersecurity" />
              <NavLink id="ai" label="AI" />
              <NavLink id="why" label="Why Us" />
              <NavLink id="story" label="Our Story" />
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
