export default function Why() {
  const points = [
    'Future-ready technology',
    'Tailored end-to-end solutions',
    'Expert teams in emerging tech',
    'Scalable builds for growing startups',
    'Unmatched digital resilience',
  ]

  return (
    <section id="why" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Why Kairokume?</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">We communicate clearly, convert intelligently, and design for speed. With modular solutions, pay-as-you-grow models, and rapid deployment, we stand as a true innovation partner.</p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-slate-900/40 p-4">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-200">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
