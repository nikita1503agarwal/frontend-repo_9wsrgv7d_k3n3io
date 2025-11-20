import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ShopPreview from './components/ShopPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-lime-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ShopPreview />
        <Footer />
      </main>
    </div>
  )
}

export default App
