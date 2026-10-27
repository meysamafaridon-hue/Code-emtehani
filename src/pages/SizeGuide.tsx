import PageHeader from '@/components/PageHeader'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const chest = [96, 100, 104, 108, 112, 116]
const length = [66, 68, 70, 72, 74, 76]

export default function SizeGuide() {
  return (
    <>
      <PageHeader title="SIZE" highlight="GUIDE" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-2xl">
          <p className="mb-4 font-body text-sm text-ink-muted">All measurements in centimeters. Garments are oversized — if between sizes, size down for a closer fit.</p>
          <table className="w-full border border-ink-border text-left font-body text-[13px]">
            <thead className="bg-ink-black text-white">
              <tr>
                <th className="px-4 py-3 uppercase">Size</th>
                <th className="px-4 py-3 uppercase">Chest</th>
                <th className="px-4 py-3 uppercase">Length</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s, i) => (
                <tr key={s} className="border-t border-ink-border">
                  <td className="px-4 py-3 font-bold uppercase">{s}</td>
                  <td className="px-4 py-3">{chest[i]}</td>
                  <td className="px-4 py-3">{length[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
