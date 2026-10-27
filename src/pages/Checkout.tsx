import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Check } from 'lucide-react'
import { useCart } from '@/store'
import { formatPrice } from '@/data/products'
import PageHeader from '@/components/PageHeader'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({ email: '', name: '', address: '', city: '', zip: '', country: '', card: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const shipping = subtotal() > 75 || subtotal() === 0 ? 0 : 6.99
  const total = subtotal() + shipping

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = 'Enter a valid email.'
    if (!form.name) e.name = 'Required.'
    if (!form.address) e.address = 'Required.'
    if (!form.city) e.city = 'Required.'
    if (!form.zip) e.zip = 'Required.'
    if (!form.country) e.country = 'Required.'
    if (form.card.replace(/\s/g, '').length < 12) e.card = 'Enter a valid card number.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (items.length === 0) return
    if (validate()) {
      setPlaced(true)
      clearCart()
    }
  }

  if (placed) {
    return (
      <>
        <PageHeader title="ORDER" highlight="CONFIRMED" />
        <section className="bg-ink-paper py-16">
          <div className="container-edge max-w-lg text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ink-acid">
              <Check size={28} className="text-ink-black" />
            </div>
            <h2 className="font-display text-3xl uppercase">Thank you.</h2>
            <p className="mt-3 font-body text-sm text-ink-black/70">
              This is a demo checkout — no payment was processed. Your order is recorded for this prototype session.
            </p>
            <Link to="/shop" className="btn-black mt-6">CONTINUE SHOPPING</Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader title="CHECK" highlight="OUT" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge grid grid-cols-1 gap-10 lg:grid-cols-2">
          <form onSubmit={submit} className="space-y-6">
            <div>
              <h2 className="mb-3 font-body text-sm font-bold uppercase tracking-wide">Contact</h2>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
              {errors.email && <p className="mt-1 font-body text-[12px] text-red-600">{errors.email}</p>}
            </div>
            <div>
              <h2 className="mb-3 font-body text-sm font-bold uppercase tracking-wide">Shipping address</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black sm:col-span-2" />
                <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Address" className="border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black sm:col-span-2" />
                <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" className="border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
                <input value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} placeholder="ZIP / Postal code" className="border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
                <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Country" className="border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black sm:col-span-2" />
              </div>
            </div>
            <div>
              <h2 className="mb-3 font-body text-sm font-bold uppercase tracking-wide">Payment <span className="text-ink-muted">(demo — do not enter real card data)</span></h2>
              <input value={form.card} onChange={(e) => setForm({ ...form, card: e.target.value })} placeholder="Card number" className="w-full border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
              {errors.card && <p className="mt-1 font-body text-[12px] text-red-600">{errors.card}</p>}
            </div>
            <button type="submit" className="btn-acid w-full" disabled={items.length === 0}>
              <Lock size={15} /> PLACE DEMO ORDER — {formatPrice(total)}
            </button>
          </form>

          <div className="lg:col-span-1">
            <div className="border border-ink-border bg-white p-6">
              <h2 className="font-display text-2xl uppercase">Order summary</h2>
              {items.length === 0 ? (
                <p className="mt-4 font-body text-sm text-ink-muted">Your bag is empty.</p>
              ) : (
                <>
                  <div className="mt-4 space-y-3">
                    {items.map((i) => (
                      <div key={i.key} className="flex justify-between font-body text-[13px]">
                        <span className="truncate pr-2">{i.name} × {i.qty}</span>
                        <span className="font-bold">{formatPrice(i.price * i.qty)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2 border-t border-ink-border pt-4 font-body text-sm">
                    <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal())}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
                    <div className="flex justify-between border-t border-ink-border pt-2 font-bold"><span>Total</span><span className="font-display text-xl">{formatPrice(total)}</span></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
