import { useSearchParams, Link } from 'react-router-dom'
import { products, formatPrice } from '@/data/products'
import PageHeader from '@/components/PageHeader'

export default function SearchResults() {
  const [params] = useSearchParams()
  const q = (params.get('q') ?? '').trim().toLowerCase()
  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : []

  return (
    <>
      <PageHeader title="SEARCH" subtitle={q ? `Results for “${q}”.` : 'Search the catalog.'} />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge">
          {q && results.length === 0 ? (
            <p className="font-body text-sm text-ink-muted">No products found. <Link to="/shop" className="underline">Browse all products</Link>.</p>
          ) : (
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
              {results.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-ink-border">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <p className="mt-2 font-body text-[13px] font-bold uppercase">{p.name}</p>
                  <p className="font-body text-[13px] text-ink-acid">{formatPrice(p.price)}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
