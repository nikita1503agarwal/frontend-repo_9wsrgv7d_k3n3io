const features = [
  { title: 'Lab-Tested Purity', desc: 'Third-party verified for potency and safety.' },
  { title: 'Curated Terpenes', desc: 'Flavor-forward profiles crafted for effect.' },
  { title: 'Consistent Potency', desc: 'Reliable experiences across every batch.' },
  { title: 'Nationwide Reach', desc: 'Available in select legal markets.' }
]

export default function Features() {
  return (
    <section id="learn" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="">
                <h3 className="text-white font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
