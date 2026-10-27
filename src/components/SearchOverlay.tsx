import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useCart } from '@/store'
import { products, formatPrice } from '@/data/products'

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useCart()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isSearchOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeSearch])

  if (!isSearchOpen) return null

  const q = query.trim().toLowerCase()
  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : []

  const popular = ['Hoodies', 'T-Shirts', 'New Arrivals', 'Accessories']

  const go = (path: string) => {
    closeSearch()
    navigate(path)
  }

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black/80 backdrop-blur-sm">
      <div className="container-edge py-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl uppercase tracking-tightest text-white">Search</span>
          <button onClick={closeSearch} aria-label="Close search" className="text-white hover:opacity-70">
            <X size={26} />
          </button>
        </div>
        <div className="mt-4 flex items-center gap-3 border-b border-white/30 pb-3">
          <Search size={22} className="text-white/70" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && results[0]) go(`/product/${results[0].slug}`)
            }}
            placeholder="Search products, collections…"
            className="w-full bg-transparent font-body text-lg text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="container-edge flex-1 overflow-y-auto pb-12">
        {!q && (
          <div>
            <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">
              Popular
            </p>
            <div className="flex flex-wrap gap-2">
              {popular.map((p) => (
                <button
                  key={p}
                  onClick={() => setQuery(p.replace(/s$/, ''))}
                  className="border border-white/30 px-4 py-2 font-body text-[12px] uppercase tracking-wide text-white hover:bg-white hover:text-ink-black"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {q && results.length === 0 && (
          <p className="font-body text-sm text-white/60">
            No products match “{query}”. Try another term.
          </p>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {results.map((p) => (
              <button
                key={p.id}
                onClick={() => go(`/product/${p.slug}`)}
                className="group text-left"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white/5">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="mt-2 font-body text-[12px] font-bold uppercase text-white">{p.name}</p>
                <p className="font-body text-[12px] text-ink-acid">{formatPrice(p.price)}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
