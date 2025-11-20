import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Collections', href: '#shop' },
    { label: 'About', href: '#learn' },
    { label: 'Store Locator', href: '#stores' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400 ring-1 ring-white/30" />
              <span className="text-lg font-semibold tracking-wide text-white">ROVE</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <button className="group inline-flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition-colors">
                Shop <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white text-sm font-semibold hover:bg-white/20 transition-colors ring-1 ring-white/20">
                Find ROVE
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-200">Shop</button>
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#shop" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white text-sm font-semibold hover:bg-white/20 transition-colors ring-1 ring-white/20">
                  Find ROVE
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
