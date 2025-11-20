import { ArrowRight } from 'lucide-react'

const products = [
  { name: 'Haze Diamonds', type: 'Sativa', price: 45, img: 'https://images.unsplash.com/photo-1600370051732-02d5cad6eecd?q=80&w=1200&auto=format&fit=crop' },
  { name: 'OG CBD Rosin', type: 'Hybrid', price: 40, img: 'https://images.unsplash.com/photo-1621091211039-3a30ec6b66ec?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Indica Live Resin', type: 'Indica', price: 50, img: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1200&auto=format&fit=crop' },
]

export default function ShopPreview() {
  return (
    <section id="shop" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Collections</h2>
            <p className="mt-2 text-slate-300">Explore the lineup.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90">
                  {p.type}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{p.name}</h3>
                    <p className="text-sm text-slate-300">${p.price}</p>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-1.5 text-sm text-white hover:bg-white/10 transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
