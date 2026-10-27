import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingBag, Check, Minus, Plus, ChevronRight } from 'lucide-react'
import { getProduct, products, formatPrice } from '@/data/products'
import { useCart } from '@/store'
import PageHeader from '@/components/PageHeader'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = slug ? getProduct(slug) : undefined
  const [color, setColor] = useState(product?.colors[0]?.name ?? '')
  const [size, setSize] = useState('')
  const [qty, setQty] = useState(1)
  const [view, setView] = useState<'front' | 'back'>('front')
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)
  const addItem = useCart((s) => s.addItem)
  const openCart = useCart((s) => s.openCart)

  if (!product) {
    return (
      <>
        <PageHeader title="NOT" highlight="FOUND" />
        <div className="container-edge py-16">
          <p className="font-body text-sm text-ink-muted">This product does not exist.</p>
          <Link to="/shop" className="btn-black mt-4">BACK TO SHOP</Link>
        </div>
      </>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)
  const image = view === 'back' && product.imageBack ? product.imageBack : product.image

  const handleAdd = () => {
    if (!size) {
      setError('Please select a size.')
      return
    }
    setError('')
    addItem(product, color, size, qty)
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <>
      <div className="bg-ink-black pt-24">
        <div className="container-edge py-4 text-white">
          <nav className="flex items-center gap-2 font-body text-[11px] uppercase tracking-wide text-white/50">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link to="/shop" className="hover:text-white">Shop</Link>
            <ChevronRight size={12} />
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-ink-paper py-8 lg:py-12">
        <div className="container-edge grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] w-full overflow-hidden bg-ink-border">
              <img src={image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            {product.imageBack && (
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => setView('front')}
                  className={`overflow-hidden border-2 ${view === 'front' ? 'border-ink-black' : 'border-transparent'}`}
                >
                  <img src={product.image} alt="Front view" className="h-20 w-16 object-cover" />
                </button>
                <button
                  onClick={() => setView('back')}
                  className={`overflow-hidden border-2 ${view === 'back' ? 'border-ink-black' : 'border-transparent'}`}
                >
                  <img src={product.imageBack} alt="Back view" className="h-20 w-16 object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="mb-2 w-fit bg-ink-black px-3 py-1 font-body text-[10px] font-bold uppercase text-white">{product.badge}</span>
            )}
            <h1 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-body text-2xl font-bold">{formatPrice(product.price)}</span>
              {product.compareAt && <span className="font-body text-base text-ink-muted line-through">{formatPrice(product.compareAt)}</span>}
            </div>

            <p className="mt-4 font-body text-sm leading-relaxed text-ink-black/80">{product.description}</p>

            {/* Color */}
            <div className="mt-6">
              <p className="mb-2 font-body text-[12px] font-bold uppercase tracking-wide">Color: <span className="text-ink-muted">{color}</span></p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    aria-label={c.name}
                    className={`h-7 w-7 rounded-full border ${color === c.name ? 'ring-2 ring-ink-black ring-offset-2' : 'border-ink-border'}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-body text-[12px] font-bold uppercase tracking-wide">Size</p>
                <Link to="/size-guide" className="font-body text-[11px] uppercase text-ink-muted underline">Size guide</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSize(s); setError('') }}
                    className={`min-w-[48px] border px-3 py-2 font-body text-[12px] font-bold uppercase transition-colors ${
                      size === s ? 'border-ink-black bg-ink-black text-white' : 'border-ink-border hover:border-ink-black'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {error && <p className="mt-2 font-body text-[12px] text-red-600">{error}</p>}
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-2 font-body text-[12px] font-bold uppercase tracking-wide">Quantity</p>
              <div className="flex w-fit items-center border border-ink-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="p-2.5 hover:bg-ink-border"><Minus size={14} /></button>
                <span className="px-4 font-body text-sm font-semibold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="p-2.5 hover:bg-ink-border"><Plus size={14} /></button>
              </div>
            </div>

            <button onClick={handleAdd} className="btn-black mt-6 w-full">
              {added ? <>ADDED <Check size={16} /></> : <>ADD TO CART <ShoppingBag size={16} /></>}
            </button>

            {/* Info */}
            <dl className="mt-8 space-y-3 border-t border-ink-border pt-6 font-body text-[13px]">
              <div><dt className="font-bold uppercase text-ink-black">Fabric</dt><dd className="text-ink-black/70">{product.fabric}</dd></div>
              <div><dt className="font-bold uppercase text-ink-black">Print</dt><dd className="text-ink-black/70">{product.print}</dd></div>
              <div><dt className="font-bold uppercase text-ink-black">Fit</dt><dd className="text-ink-black/70">{product.fit}</dd></div>
              <div><dt className="font-bold uppercase text-ink-black">Production</dt><dd className="text-ink-black/70">Printed on demand in 2–4 business days.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ink-paper pb-16">
        <div className="container-edge">
          <h2 className="section-heading mb-8 text-3xl">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
