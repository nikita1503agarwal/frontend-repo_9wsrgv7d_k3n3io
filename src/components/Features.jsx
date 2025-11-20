import { Leaf, TestTube, Package, Truck } from 'lucide-react'

const features = [
  {
    icon: TestTube,
    title: 'Lab-Tested Purity',
    desc: 'Every product is verified by third-party labs for potency and contaminants.'
  },
  {
    icon: Leaf,
    title: 'Curated Selection',
    desc: 'We hand-pick strains and brands that meet strict quality standards.'
  },
  {
    icon: Package,
    title: 'Discreet Packaging',
    desc: 'Orders ship in plain, smell-proof packaging for your privacy.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Reliable, trackable shipping. Local delivery available in select areas.'
  }
]

export default function Features() {
  return (
    <section id="learn" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why shop with us</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Quality you can trust, service you can count on.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/30 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-6 shadow">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
