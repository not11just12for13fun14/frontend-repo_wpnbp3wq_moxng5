import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! We will reach out shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Start a conversation</h2>
            <p className="mt-4 text-slate-300">We support collaboration, pilots, POCs, and founder‑friendly UX built for clarity and trust.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Pilots', 'POCs', 'Rapid Deployment', 'Pay‑as‑you‑grow'].map((t) => (
                <div key={t} className="rounded-xl border border-emerald-400/20 bg-slate-900/40 p-4 text-slate-200">{t}</div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6 md:p-8">
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="rounded-lg bg-slate-800/80 border border-emerald-400/20 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" />
              <input name="email" type="email" required placeholder="Email" className="rounded-lg bg-slate-800/80 border border-emerald-400/20 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" />
              <textarea name="message" required rows="4" placeholder="Tell us about your vision" className="rounded-lg bg-slate-800/80 border border-emerald-400/20 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" />
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition-colors">Send</button>
              {status && <p className="text-sm text-emerald-300/90">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
