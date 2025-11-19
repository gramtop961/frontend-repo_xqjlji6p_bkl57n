import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Planner from './components/Planner'
import Progress from './components/Progress'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Planner />
        <Progress />
        <Pricing />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-blue-100/70 text-sm bg-slate-950">
        © {new Date().getFullYear()} GymTrack v3 • Built to be fast, interactive, and responsive
      </footer>
    </div>
  )
}

export default App
