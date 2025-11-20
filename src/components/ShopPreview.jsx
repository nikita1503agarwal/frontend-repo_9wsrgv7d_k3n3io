import { Star, ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Sunset Sherbet',
    type: 'Hybrid',
    price: 45,
    img: 'https://images.unsplash.com/photo-1488903809927-48c9b4e4374b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Blue Dream',
    type: 'Sativa',
    price: 40,
    img: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Granddaddy Purple',
    type: 'Indica',
    price: 50,
    img: 'https://images.unsplash.com/photo-1546064130-cc96c4d5d30e?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function ShopPreview() {
  return (
    <section id="shop" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured picks</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A taste of what’s fresh. Explore the full menu.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-semibold hover:gap-3 transition-all">
            View full shop <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl overflow-hidden border border-white/30 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur shadow">
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-56 w-full object-cover" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/80 text-xs px-2 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
                  {p.type}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-amber-400' : ''}`} />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-700 dark:text-emerald-300 font-semibold">${p.price}</p>
                    <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3 py-1.5 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-semibold">
            View full shop <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
