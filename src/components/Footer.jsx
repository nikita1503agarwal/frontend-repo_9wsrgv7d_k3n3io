import { Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Newsletter</h3>
              <p className="mt-2 text-sm text-slate-300">Get drops, education, and offers.</p>
              <form className="mt-4 flex gap-2">
                <input type="email" placeholder="Email address" className="flex-1 rounded-full border border-white/15 bg-transparent px-3 py-2 text-sm outline-none text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-500/50" />
                <button className="rounded-full bg-white px-4 py-2 text-slate-900 text-sm font-semibold hover:bg-white/90 transition-colors">Join</button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>21+ only. Consume responsibly.</li>
                <li>Compliant with applicable regulations.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="mt-3 flex items-center gap-3 text-slate-300">
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
                <a href="mailto:hello@example.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400 flex flex-col sm:flex-row justify-between">
            <p>© {new Date().getFullYear()} ROVE-inspired. All rights reserved.</p>
            <p>For adults in legal jurisdictions only.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
