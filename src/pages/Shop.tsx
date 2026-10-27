import { useParams } from 'react-router-dom'
import { products, filterProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import PageHeader from '@/components/PageHeader'

const titleMap: Record<string, string> = {
  'all-products': 'All Products',
  'new-arrivals': 'New Arrivals',
  'best-sellers': 'Best Sellers',
  't-shirts': 'T-Shirts',
  hoodies: 'Hoodies',
  sweatshirts: 'Sweatshirts',
  'long-sleeves': 'Long Sleeves',
  accessories: 'Accessories',
}

export default function Shop() {
  const { filter } = useParams()
  const key = filter ? filter.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'All Products'
  const title = titleMap[filter ?? 'all-products'] ?? key
  const list = filterProducts(title)

  return (
    <>
      <PageHeader title="THE" highlight="SHOP" subtitle={`${list.length} product${list.length === 1 ? '' : 's'} in ${title}.`} />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge">
          <div className="mb-8 flex flex-wrap gap-2">
            {Object.entries(titleMap).map(([slug, label]) => (
              <a
                key={slug}
                href={`/shop/${slug}`}
                className={`border px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                  title === label ? 'border-ink-black bg-ink-black text-white' : 'border-ink-border text-ink-black hover:bg-ink-black hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
