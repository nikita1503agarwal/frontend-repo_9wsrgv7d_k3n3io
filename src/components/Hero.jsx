export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_70%_-10%,rgba(34,211,238,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_0%,rgba(16,185,129,0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-300">
              Premium cannabis products
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Rethink your routine.
              <br /> Elevate everyday.
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">
              Clean, potent and consistent. A modern lineup crafted for flavor, clarity and performance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-white/90 transition-colors">
                Shop Collections
              </a>
              <a href="#learn" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Lab-Tested</div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Solventless</div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> Fresh Batches</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1603189342119-2a87b3b832d2?q=80&w=1200&auto=format&fit=crop"
                alt="Product"
                className="rounded-2xl object-cover w-full h-[460px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-lg">
              <p className="text-sm font-medium text-white">Live Resin • Diamonds • Rosin</p>
              <p className="text-xs text-slate-300">For every occasion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
