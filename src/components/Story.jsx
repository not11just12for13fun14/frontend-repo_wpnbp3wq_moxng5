export default function Story() {
  const items = [
    { date: '24 May 2025', text: 'SAGEX Coin launched for commercial blockchain use' },
    { date: '13 Aug 2025', text: 'Kontour Coin created for Kontour Pvt Ltd' },
    { date: '18 Sep 2025', text: 'Cyscon launched, merging AI with deep cybersecurity & forensics' },
  ]

  return (
    <section id="story" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-400/20 bg-slate-900/40 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Story</h2>
          <ol className="mt-8 relative border-s-l border-emerald-400/20 pl-8">
            {items.map((item, idx) => (
              <li key={idx} className="mb-8">
                <div className="absolute -ms-1 mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-emerald-300 text-sm font-medium">{item.date}</p>
                <p className="text-slate-200 mt-1">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
