import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Why from './components/Why'
import Story from './components/Story'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Why />
        <Story />
        <Contact />
        <footer className="py-12 text-center text-slate-400">
          © {new Date().getFullYear()} Kairokume. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
