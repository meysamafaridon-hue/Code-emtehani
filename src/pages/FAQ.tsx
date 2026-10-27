import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

const faqs = [
  { q: 'How does print-on-demand work?', a: 'Every item is printed only after you order. That means no overstock, no waste, and every piece is made specifically for you. Production typically takes 2–4 business days before shipping.' },
  { q: 'What are your shipping times?', a: 'Production takes 2–4 business days. Shipping time depends on your location and is calculated at checkout. You will receive a tracking link once your order ships.' },
  { q: 'Can I return a product?', a: 'Because items are printed on demand, we accept returns only for defective or incorrect items. If something is wrong with your order, contact us and we will make it right.' },
  { q: 'Do you offer custom designs?', a: 'Yes. Head to the Create Yours page to upload your artwork or add text, choose your apparel, and we will print it for you.' },
  { q: 'What sizes do you offer?', a: 'Most garments run from XS to XXL. Check the Size Guide page for detailed measurements.' },
  { q: 'How should I care for my garment?', a: 'Machine wash cold, inside out, and tumble dry low or hang to dry to keep the print looking sharp.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <PageHeader title="FAQ" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-2xl">
          <div className="divide-y divide-ink-border border-y border-ink-border">
            {faqs.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">
                  <span className="font-body text-[14px] font-bold uppercase">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && <p className="pb-5 font-body text-[13px] leading-relaxed text-ink-black/70">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
