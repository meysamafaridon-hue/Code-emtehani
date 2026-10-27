import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function ProductCollection() {
  return (
    <section id="the-drop" className="relative bg-ink-paper">
      {/* Torn-paper top edge */}
      <div className="torn-top h-7 w-full bg-ink-paper" />

      <div className="container-edge py-14 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-4 lg:mb-12">
          <div>
            <h2 className="section-heading">THE DROP</h2>
            <svg width="120" height="14" viewBox="0 0 120 14" className="mt-1" fill="none">
              <path
                d="M2 9C20 4, 40 11, 60 6C80 2, 100 10, 118 5"
                stroke="#E5FF00"
                strokeWidth="5"
                className="stroke-sketch"
              />
            </svg>
          </div>
          <Link to="/shop" className="btn-black shrink-0">
            VIEW ALL PRODUCTS <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
