import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { collections, products } from '@/data/products'
import PageHeader from '@/components/PageHeader'
import ProductCard from '@/components/ProductCard'

export default function Collections() {
  const { slug } = useParams()
  const active = collections.find((c) => c.slug === slug)

  return (
    <>
      <PageHeader title="COLLEC" highlight="TIONS" subtitle="Curated drops. Limited runs. Made to order." />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <Link
                key={c.slug}
                to={`/collections/${c.slug}`}
                className={`group border p-6 transition-colors ${active?.slug === c.slug ? 'border-ink-black bg-ink-black text-white' : 'border-ink-border hover:border-ink-black'}`}
              >
                <h3 className="font-display text-2xl uppercase leading-none">{c.name}</h3>
                <p className="mt-2 font-body text-[12px] text-ink-black/70 group-hover:text-white/70">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-body text-[11px] font-bold uppercase">
                  Explore <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>

          {active && (
            <div className="mt-12">
              <h2 className="section-heading mb-8 text-3xl">{active.name}</h2>
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
                {products.slice(0, 4).map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
