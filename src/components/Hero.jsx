import { Sparkles, ShieldCheck, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-lime-400/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-emerald-700/20 rounded-full px-3 py-1.5 text-sm text-emerald-700 dark:text-emerald-300">
              <Sparkles className="h-4 w-4" /> Premium Cannabis, Responsibly Sourced
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Elevate your everyday with curated strains and wellness goods
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Discover top-shelf flower, edibles, and concentrates. Hand-picked by experts, lab-tested for purity, and delivered discreetly where permitted.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-500 transition-colors">
                Shop Products
              </a>
              <a href="#learn" className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 px-6 py-3 text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Learn More
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Lab-Tested</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-600" /> Fast Delivery</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-600" /> Fresh Batches</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/30 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-4 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1200&auto=format&fit=crop"
                alt="Cannabis buds"
                className="rounded-2xl object-cover w-full h-[420px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-white/30 dark:border-slate-800/60 p-4 shadow-lg">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Indica • Sativa • Hybrid</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Something for every moment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
