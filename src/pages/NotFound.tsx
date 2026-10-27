import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-ink-black text-center">
      <div>
        <h1 className="font-display text-7xl uppercase tracking-tightest text-white sm:text-9xl">
          4<span className="text-ink-acid">0</span>4
        </h1>
        <p className="mt-4 font-body text-sm uppercase tracking-wide text-white/60">This page does not exist.</p>
        <Link to="/" className="btn-acid mt-6">BACK HOME</Link>
      </div>
    </section>
  )
}
