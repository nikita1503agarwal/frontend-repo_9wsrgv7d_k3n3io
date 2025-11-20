import { Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/30 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Stay in the loop</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Get product drops, education, and offers.</p>
              <form className="mt-4 flex gap-2">
                <input type="email" placeholder="Email address" className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
                <button className="rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors">Join</button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>Must be of legal age to purchase cannabis. Consume responsibly.</li>
                <li>Check local laws before ordering. We comply with all regulations.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Connect</h3>
              <div className="mt-3 flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400"><Twitter className="h-4 w-4" /></a>
                <a href="mailto:hello@example.com" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200/60 dark:border-slate-800/60 pt-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row justify-between">
            <p>© {new Date().getFullYear()} Verdant. All rights reserved.</p>
            <p>For adults in legal jurisdictions only.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
