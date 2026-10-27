import { ArrowRight, Shirt, Printer, Globe, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

const trust = [
  { icon: Shirt, label: 'PREMIUM QUALITY', sub: 'Heavyweight fabrics' },
  { icon: Printer, label: 'PRINT ON DEMAND', sub: 'Made when you order' },
  { icon: Globe, label: 'WORLDWIDE SHIPPING', sub: 'Global delivery' },
  { icon: Leaf, label: 'SUSTAINABLE CHOICES', sub: 'No waste, no overstock' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden bg-ink-black lg:min-h-[680px]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/mci-hero-model/1600/1000"
          alt="Model wearing an oversized black graphic MCI MARCT t-shirt in an industrial urban setting"
          className="h-full w-full object-cover object-center"

        />
        {/* Dark gradient for left-side legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-ink-black/30" />
      </div>

      {/* Content */}
      <div className="container-edge relative flex min-h-[640px] flex-col justify-between py-28 lg:min-h-[680px] lg:py-32">
        <div className="max-w-xl">
          {/* Crown annotation */}
          <svg width="44" height="30" viewBox="0 0 44 30" className="mb-3 text-ink-acid" fill="none">
            <path d="M3 26L8 6L15 18L22 2L29 18L36 6L41 26" stroke="currentColor" strokeWidth="2.5" className="stroke-sketch" />
            <circle cx="8" cy="6" r="2" fill="currentColor" />
            <circle cx="22" cy="2" r="2" fill="currentColor" />
            <circle cx="36" cy="6" r="2" fill="currentColor" />
            <path d="M3 29H41" stroke="currentColor" strokeWidth="2" className="stroke-sketch" />
          </svg>

          <h1 className="font-display text-[68px] uppercase leading-[0.82] tracking-tightest text-white sm:text-[88px] lg:text-[112px]">
            WEAR
            <br />
            <span className="italic text-ink-acid">YOUR</span>
            <br />
            IDEA.
          </h1>

          {/* Hand-drawn arrow pointing right */}
          <svg width="120" height="40" viewBox="0 0 120 40" className="mt-4 hidden text-white sm:block" fill="none">
            <path d="M2 20C40 6, 80 6, 110 20" stroke="currentColor" strokeWidth="2" className="stroke-sketch" />
            <path d="M110 20L98 12M110 20L98 28" stroke="currentColor" strokeWidth="2" className="stroke-sketch" />
          </svg>

          <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-white/80">
            Premium streetwear. Custom graphics. Made to stand out.
            <br />
            <span className="text-white">Designed for you, not for the masses.</span>
          </p>

          <Link to="/shop" className="btn-acid mt-6">
            SHOP THE DROP <ArrowRight size={16} />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon size={22} strokeWidth={1.4} className="text-white" />
              <div>
                <p className="font-body text-[11px] font-bold uppercase tracking-wide text-white">{t.label}</p>
                <p className="font-body text-[10px] uppercase text-white/50">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right-edge promotional stickers */}
      <div className="absolute right-4 top-24 z-10 flex flex-col items-end gap-3 sm:right-8 lg:right-12 lg:top-32">
        <div className="rotate-3 border border-ink-black bg-white px-3 py-2 text-right shadow-lg">
          <p className="font-body text-[10px] font-bold uppercase leading-tight text-ink-black">
            Printed<br />on demand<br />for you
          </p>
        </div>
        <div className="-rotate-2 bg-ink-black/90 px-3 py-2 text-right ring-1 ring-white/20">
          <p className="font-body text-[10px] font-bold uppercase leading-tight text-white">
            No minimum<br />orders
          </p>
        </div>
        <div className="rotate-2 bg-ink-acid px-3 py-2 text-right shadow-lg">
          <p className="font-body text-[10px] font-bold uppercase leading-tight text-ink-black">
            Design it.<br />Wear it.<br />Own it.
          </p>
        </div>
        {/* Globe badge */}
        <div className="mt-1 flex h-16 w-16 rotate-6 items-center justify-center rounded-full border-2 border-white text-center">
          <div>
            <Globe size={16} className="mx-auto text-white" strokeWidth={1.4} />
            <p className="mt-0.5 font-body text-[8px] font-bold uppercase leading-none text-white">Made<br />For You</p>
          </div>
        </div>
      </div>
    </section>
  )
}
