import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, Search, User, ShoppingBag, X } from 'lucide-react'
import Logo from './Logo'
import { useCart } from '@/store'
import { shopCategories, collections } from '@/data/products'

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const cartCount = useCart((s) => s.count())
  const openCart = useCart((s) => s.openCart)
  const openSearch = useCart((s) => s.openSearch)
  const navigate = useNavigate()

  const closeAll = () => {
    setShopOpen(false)
    setCollectionsOpen(false)
    setMobileOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container-edge flex h-[68px] items-center justify-between lg:h-[80px]">
        {/* Left: logo */}
        <Logo />

        {/* Center: desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="nav-link inline-flex items-center gap-1" aria-expanded={shopOpen}>
              SHOP <ChevronDown size={13} className={`transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
            </button>
            {shopOpen && (
              <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3">
                <div className="border border-ink-border bg-white shadow-xl">
                  {shopCategories.map((c) => (
                    <Link
                      key={c}
                      to={`/shop/${c.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={closeAll}
                      className="block px-4 py-2.5 font-body text-[12px] font-semibold uppercase tracking-wide text-ink-black transition-colors hover:bg-ink-paper hover:text-ink-black"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <button className="nav-link inline-flex items-center gap-1" aria-expanded={collectionsOpen}>
              COLLECTIONS <ChevronDown size={13} className={`transition-transform ${collectionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {collectionsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3">
                <div className="border border-ink-border bg-white shadow-xl">
                  {collections.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/collections/${c.slug}`}
                      onClick={closeAll}
                      className="block px-4 py-2.5 font-body text-[12px] font-semibold uppercase tracking-wide text-ink-black transition-colors hover:bg-ink-paper"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/create-yours" className="nav-link">
            CREATE YOURS
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABOUT
          </NavLink>
          <NavLink to="/faq" className="nav-link">
            FAQ
          </NavLink>
        </nav>

        {/* Right: utility icons */}
        <div className="flex items-center gap-4 text-white">
          <button onClick={openSearch} aria-label="Search" className="transition-opacity hover:opacity-70">
            <Search size={20} strokeWidth={1.6} />
          </button>
          <button onClick={() => navigate('/account')} aria-label="Account" className="transition-opacity hover:opacity-70">
            <User size={20} strokeWidth={1.6} />
          </button>
          <button onClick={openCart} aria-label="Shopping bag" className="relative transition-opacity hover:opacity-70">
            <ShoppingBag size={20} strokeWidth={1.6} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-ink-acid px-1 font-body text-[10px] font-bold text-ink-black">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="container-edge bg-ink-black/95 py-4">
            <nav className="flex flex-col divide-y divide-white/10">
              {[
                { label: 'SHOP', to: '/shop' },
                { label: 'COLLECTIONS', to: '/collections' },
                { label: 'CREATE YOURS', to: '/create-yours' },
                { label: 'ABOUT', to: '/about' },
                { label: 'FAQ', to: '/faq' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
