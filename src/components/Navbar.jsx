import { useState } from 'react'
import { Menu, X, Leaf, ShoppingBag, Info, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Shop', href: '#shop', icon: ShoppingBag },
    { label: 'Strains', href: '#strains', icon: Leaf },
    { label: 'Learn', href: '#learn', icon: Info },
    { label: 'Contact', href: '#contact', icon: Phone },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-slate-800/60 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900 dark:text-white">Verdant</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <item.icon className="h-4 w-4" /> {item.label}
                </a>
              ))}
              <a href="#shop" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Shop Now
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 px-6 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <item.icon className="h-4 w-4" /> {item.label}
                  </a>
                ))}
                <a href="#shop" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                  Shop Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
