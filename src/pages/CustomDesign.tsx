import { useState } from 'react'
import { Upload, Shirt, Check } from 'lucide-react'
import { useCart } from '@/store'
import PageHeader from '@/components/PageHeader'

const apparelTypes = [
  { id: 'tee', name: 'T-Shirt', price: 29.99 },
  { id: 'hoodie', name: 'Hoodie', price: 49.99 },
  { id: 'longsleeve', name: 'Long Sleeve', price: 38.99 },
  { id: 'crewneck', name: 'Crewneck', price: 44.99 },
]

const colors = [
  { name: 'Black', hex: '#080808' },
  { name: 'Off-White', hex: '#F3F2EE' },
  { name: 'Cream', hex: '#e8e4d8' },
  { name: 'Charcoal', hex: '#3a3a3a' },
]

export default function CustomDesign() {
  const [type, setType] = useState(apparelTypes[0])
  const [color, setColor] = useState(colors[0])
  const [size, setSize] = useState('M')
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)
  const addItem = useCart((s) => s.addItem)
  const openCart = useCart((s) => s.openCart)

  const onFile = (f: File | null) => {
    if (!f) return
    const ok = ['image/png', 'image/jpeg', 'image/svg+xml']
    if (!ok.includes(f.type)) { setError('Use a PNG, JPG or SVG file.'); return }
    if (f.size > 10 * 1024 * 1024) { setError('Max file size is 10MB.'); return }
    setError('')
    setFile(f)
  }

  const handleAdd = () => {
    if (!file && !text) { setError('Upload a design or add text first.'); return }
    const fakeProduct = {
      id: `custom-${type.id}`,
      slug: 'custom',
      name: `CUSTOM ${type.name.toUpperCase()}`,
      price: type.price + 5,
      category: type.name as 'T-Shirts',
      fit: 'Custom print on demand',
      description: `Custom ${type.name.toLowerCase()} — ${color.name}. Designed by you, printed for you.`,
      fabric: 'Premium cotton, made to order.',
      print: 'Your uploaded artwork, DTG printed.',
      image: 'https://picsum.photos/seed/mci-custom/800/1000',
      colors: [color],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    }
    addItem(fakeProduct, color.name, size)
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <>
      <PageHeader title="CREATE" highlight="YOURS" subtitle="Your idea. Your style. Your way. Upload your artwork and we'll print it on demand." />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Preview */}
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-border">
              <img src="https://picsum.photos/seed/mci-custom-preview/800/1000" alt="Custom apparel preview" className="h-full w-full object-cover" loading="lazy" />
              {text && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-3 font-display text-3xl uppercase text-ink-acid drop-shadow-lg">
                  {text}
                </span>
              )}
            </div>
            <p className="mt-3 font-body text-[11px] text-ink-muted">
              Front-end prototype. Production image rendering requires a backend print-on-demand integration.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col">
            <h2 className="mb-3 font-body text-sm font-bold uppercase tracking-wide">Apparel type</h2>
            <div className="grid grid-cols-2 gap-3">
              {apparelTypes.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setType(a)}
                  className={`border p-4 text-left transition-colors ${type.id === a.id ? 'border-ink-black bg-ink-black text-white' : 'border-ink-border hover:border-ink-black'}`}
                >
                  <Shirt size={18} />
                  <p className="mt-2 font-body text-[12px] font-bold uppercase">{a.name}</p>
                  <p className="font-body text-[11px] opacity-60">from ${a.price.toFixed(2)}</p>
                </button>
              ))}
            </div>

            <h2 className="mb-3 mt-6 font-body text-sm font-bold uppercase tracking-wide">Color</h2>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button key={c.name} onClick={() => setColor(c)} aria-label={c.name}
                  className={`h-8 w-8 rounded-full border ${color.name === c.name ? 'ring-2 ring-ink-black ring-offset-2' : 'border-ink-border'}`}
                  style={{ backgroundColor: c.hex }} />
              ))}
            </div>

            <h2 className="mb-3 mt-6 font-body text-sm font-bold uppercase tracking-wide">Size</h2>
            <div className="flex flex-wrap gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                <button key={s} onClick={() => setSize(s)}
                  className={`min-w-[44px] border px-3 py-2 font-body text-[12px] font-bold uppercase ${size === s ? 'border-ink-black bg-ink-black text-white' : 'border-ink-border hover:border-ink-black'}`}>{s}</button>
              ))}
            </div>

            <h2 className="mb-3 mt-6 font-body text-sm font-bold uppercase tracking-wide">Upload your design</h2>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed border-ink-border bg-white px-4 py-8 text-center hover:border-ink-black">
              <Upload size={22} className="text-ink-muted" />
              <span className="font-body text-[12px] text-ink-muted">{file ? file.name : 'PNG, JPG or SVG — max 10MB'}</span>
              <input type="file" accept="image/png,image/jpeg,image/svg+xml" className="sr-only" onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
            </label>

            <h2 className="mb-3 mt-6 font-body text-sm font-bold uppercase tracking-wide">Or add text</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} maxLength={20} placeholder="Up to 20 characters"
              className="w-full border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />

            {error && <p className="mt-3 font-body text-[12px] text-red-600">{error}</p>}

            <div className="mt-6 flex items-center justify-between">
              <span className="font-body text-sm text-ink-muted">Estimated price</span>
              <span className="font-display text-3xl">${(type.price + 5).toFixed(2)}</span>
            </div>
            <button onClick={handleAdd} className="btn-black mt-4 w-full">
              {added ? <><Check size={16} /> ADDED</> : 'ADD CUSTOM PRODUCT TO CART'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
