import { ShieldCheck, CircuitBoard, BrainCircuit } from 'lucide-react'

function Feature({ icon: Icon, title, desc, id }) {
  return (
    <div id={id} className="group rounded-2xl border border-emerald-400/20 bg-slate-900/40 p-6 md:p-8 hover:border-emerald-300/40 transition-colors">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-slate-900 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-4 text-slate-300">{desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Feature
            id="blockchain"
            icon={CircuitBoard}
            title="Blockchain Brilliance"
            desc="Build trust and transparency with next‑gen smart contracts, enterprise blockchain architecture, and seamless decentralized systems."
          />
          <Feature
            id="cybersecurity"
            icon={ShieldCheck}
            title="Cybersecurity Reinvented"
            desc="Advanced threat defense, digital forensics, and AI‑powered protection designed to secure fast‑moving startups."
          />
          <Feature
            id="ai"
            icon={BrainCircuit}
            title="AI for the New Era"
            desc="From automation to predictive intelligence, we deliver AI solutions that accelerate growth and sharpen competitive edge."
          />
        </div>
      </div>
    </section>
  )
}
