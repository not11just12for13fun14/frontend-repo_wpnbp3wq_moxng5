import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/50 px-3 py-1 text-xs text-emerald-300/90">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Future-ready. Secure by design.
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Kairokume — Where Innovation Meets Security
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-300">
              We empower startups with Blockchain, Cybersecurity and AI solutions—blending deep intelligence with powerful defense to craft secure and scalable digital futures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition-colors shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)]">
                Start your journey
              </a>
              <a href="#why" className="inline-flex items-center rounded-xl border border-emerald-400/40 text-emerald-300 hover:text-white hover:border-emerald-300 px-5 py-3">
                Why Kairokume?
              </a>
            </div>
          </div>

          <div className="h-[420px] md:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden border border-emerald-400/20 bg-slate-900/50">
            <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
