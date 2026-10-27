import { Link } from 'react-router-dom'
import { Pencil, Lock, Smile, Instagram, Youtube } from 'lucide-react'

const trust = [
  { icon: Pencil, title: 'CREATE YOUR OWN', sub: 'Personalize your design in just a few steps.' },
  { icon: Lock, title: 'SECURE PAYMENTS', sub: 'Safe, fast & trusted checkout.' },
  { icon: Smile, title: 'HAPPINESS GUARANTEED', sub: 'Love it or we’ll make it right.' },
]

const linkGroups = [
  {
    title: 'SHOP',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'New Arrivals', to: '/shop/new-arrivals' },
      { label: 'Best Sellers', to: '/shop/best-sellers' },
      { label: 'Hoodies', to: '/shop/hoodies' },
      { label: 'T-Shirts', to: '/shop/t-shirts' },
    ],
  },
  {
    title: 'HELP',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About MCI MARCT', to: '/about' },
      { label: 'Create Yours', to: '/create-yours' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
    ],
  },
]

// Social profile URLs — replace with the real MCI MARCT profiles before launch.
const social = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-ink-black text-white">
      {/* Trust row */}
      <div className="border-b border-white/10">
        <div className="container-edge grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex items-start gap-3">
              <t.icon size={24} strokeWidth={1.5} className="mt-0.5 text-ink-acid" />
              <div>
                <p className="font-body text-[13px] font-bold uppercase tracking-wide">{t.title}</p>
                <p className="font-body text-[12px] text-white/60">{t.sub}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <p className="font-body text-[13px] font-bold uppercase tracking-wide">FOLLOW US</p>
            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-ink-acid"
                >
                  <s.icon size={22} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-edge grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {linkGroups.map((g) => (
          <div key={g.title}>
            <p className="mb-3 font-body text-[12px] font-bold uppercase tracking-[0.12em] text-ink-acid">{g.title}</p>
            <ul className="space-y-2">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-body text-[12px] text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 sm:col-span-1">
          <p className="mb-3 font-body text-[12px] font-bold uppercase tracking-[0.12em] text-ink-acid">NEWSLETTER</p>
          <p className="mb-3 font-body text-[12px] text-white/60">Get early access to drops.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="min-w-0 flex-1 border border-white/20 bg-transparent px-3 py-2 font-body text-[12px] text-white placeholder:text-white/40 focus:outline-none focus:border-ink-acid"
            />
            <button className="bg-ink-acid px-4 font-body text-[12px] font-bold uppercase text-ink-black">Join</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <p className="font-body text-[11px] uppercase tracking-wide text-white/50">
            © 2026 MCI MARCT. ALL RIGHTS RESERVED.
          </p>
          <p className="font-body text-[11px] uppercase tracking-wide text-white/40">
            Designed &amp; printed on demand.
          </p>
        </div>
      </div>
    </footer>
  )
}
