import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ShopPreview from './components/ShopPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_80%_-10%,#1f2937,transparent)] dark:bg-slate-950">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <section aria-hidden className="py-10">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="flex animate-[marquee_24s_linear_infinite] [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
                {Array.from({ length: 2 }).map((_, loop) => (
                  <div key={loop} className="flex shrink-0 items-center gap-10 px-8 py-6 text-slate-300">
                    {['Lab Tested','Solventless','California Grown','Cold Cured','Discrete Delivery','Fresh Batches'].map((t) => (
                      <span key={t+loop} className="inline-flex items-center gap-2 text-sm tracking-wide">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {t}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Features />
        <ShopPreview />
        <Footer />
      </main>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}

export default App
