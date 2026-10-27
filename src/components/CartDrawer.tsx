import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/store'
import { formatPrice } from '@/data/products'

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQty, removeItem, subtotal } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden={!isCartOpen}
      />
      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[440px] flex-col bg-ink-paper transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink-border bg-ink-black px-5 py-4">
          <h2 className="font-display text-xl uppercase tracking-tightest text-white">
            Your Bag ({items.reduce((s, i) => s + i.qty, 0)})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-white transition-opacity hover:opacity-70">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1.2} className="text-ink-muted" />
            <p className="font-body text-sm text-ink-muted">Your bag is empty.</p>
            <button onClick={closeCart} className="btn-black">
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-3 border-b border-ink-border py-4">
                  <Link to={`/product/${item.slug}`} onClick={closeCart} className="shrink-0">
                    <img src={item.image} alt={item.name} className="h-24 w-20 object-cover" loading="lazy" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-body text-[13px] font-bold uppercase leading-tight text-ink-black">
                        {item.name}
                      </p>
                      <button onClick={() => removeItem(item.key)} aria-label="Remove item" className="text-ink-muted hover:text-ink-black">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="mt-1 font-body text-[11px] uppercase tracking-wide text-ink-muted">
                      {item.color} / {item.size}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center border border-ink-border">
                        <button onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Decrease quantity" className="p-1.5 hover:bg-ink-border">
                          <Minus size={13} />
                        </button>
                        <span className="px-3 font-body text-xs font-semibold">{item.qty}</span>
                        <button onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Increase quantity" className="p-1.5 hover:bg-ink-border">
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="font-body text-sm font-bold">{formatPrice(item.price * item.qty)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ink-border bg-white px-5 py-4">
              <div className="flex items-center justify-between pb-3">
                <span className="font-body text-sm font-semibold uppercase tracking-wide">Subtotal</span>
                <span className="font-display text-2xl">{formatPrice(subtotal())}</span>
              </div>
              <p className="pb-3 font-body text-[11px] text-ink-muted">
                Shipping &amp; taxes calculated at checkout.
              </p>
              <Link to="/checkout" onClick={closeCart} className="btn-acid w-full">
                CHECKOUT
              </Link>
              <button onClick={closeCart} className="mt-2 w-full py-2 text-center font-body text-[12px] font-semibold uppercase tracking-wide text-ink-muted hover:text-ink-black">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
