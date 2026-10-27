import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/store'
import { formatPrice } from '@/data/products'
import PageHeader from '@/components/PageHeader'

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal } = useCart()

  return (
    <>
      <PageHeader title="YOUR" highlight="BAG" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <ShoppingBag size={44} strokeWidth={1.2} className="text-ink-muted" />
              <p className="font-body text-sm text-ink-muted">Your bag is empty.</p>
              <Link to="/shop" className="btn-black">START SHOPPING</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4 border-b border-ink-border py-5">
                    <Link to={`/product/${item.slug}`} className="shrink-0">
                      <img src={item.image} alt={item.name} className="h-28 w-24 object-cover" loading="lazy" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <Link to={`/product/${item.slug}`} className="font-body text-[13px] font-bold uppercase">{item.name}</Link>
                        <button onClick={() => removeItem(item.key)} aria-label="Remove" className="text-ink-muted hover:text-ink-black"><Trash2 size={16} /></button>
                      </div>
                      <p className="mt-1 font-body text-[11px] uppercase text-ink-muted">{item.color} / {item.size}</p>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-ink-border">
                          <button onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Decrease" className="p-2 hover:bg-ink-border"><Minus size={13} /></button>
                          <span className="px-3 font-body text-xs font-semibold">{item.qty}</span>
                          <button onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Increase" className="p-2 hover:bg-ink-border"><Plus size={13} /></button>
                        </div>
                        <p className="font-body text-sm font-bold">{formatPrice(item.price * item.qty)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="border border-ink-border bg-white p-6">
                  <h2 className="font-display text-2xl uppercase">Summary</h2>
                  <div className="mt-4 flex justify-between font-body text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold">{formatPrice(subtotal())}</span>
                  </div>
                  <div className="mt-2 flex justify-between font-body text-sm text-ink-muted">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="mt-4 flex justify-between border-t border-ink-border pt-4">
                    <span className="font-body text-sm font-bold uppercase">Total</span>
                    <span className="font-display text-2xl">{formatPrice(subtotal())}</span>
                  </div>
                  <Link to="/checkout" className="btn-acid mt-5 w-full">CHECKOUT</Link>
                  <Link to="/shop" className="mt-2 block text-center font-body text-[12px] font-semibold uppercase text-ink-muted hover:text-ink-black">Continue Shopping</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
