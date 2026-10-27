import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Check } from 'lucide-react'
import type { Product } from '@/data/products'
import { formatPrice } from '@/data/products'
import { useCart } from '@/store'
import ColorSwatches from './ColorSwatches'
import ProductBadge from './ProductBadge'

export default function ProductCard({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]?.name ?? '')
  const [added, setAdded] = useState(false)
  const addItem = useCart((s) => s.addItem)
  const openCart = useCart((s) => s.openCart)

  const handleAdd = () => {
    const size = product.sizes[0]
    addItem(product, color, size)
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-border">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        {product.badge && <ProductBadge label={product.badge} />}
      </div>

      <div className="flex flex-1 flex-col pt-3">
        <div className="flex items-baseline justify-between gap-2">
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-body text-[13px] font-bold uppercase leading-tight text-ink-black">{product.name}</h3>
          </Link>
          <div className="text-right">
            <p className="font-body text-[13px] font-bold">{formatPrice(product.price)}</p>
            {product.compareAt && (
              <p className="font-body text-[11px] text-ink-muted line-through">{formatPrice(product.compareAt)}</p>
            )}
          </div>
        </div>
        <p className="mt-0.5 font-body text-[11px] uppercase tracking-wide text-ink-muted">{product.fit}</p>

        <div className="mt-2">
          <ColorSwatches colors={product.colors} active={color} onChange={setColor} />
        </div>

        <button onClick={handleAdd} className="btn-black mt-3 w-full">
          {added ? (
            <>ADDED <Check size={15} /></>
          ) : (
            <>ADD TO CART <ShoppingBag size={15} /></>
          )}
        </button>
      </div>
    </div>
  )
}
