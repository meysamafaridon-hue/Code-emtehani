import PageHeader from '@/components/PageHeader'

export default function Shipping() {
  return (
    <>
      <PageHeader title="SHIPPING &" highlight="RETURNS" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-2xl space-y-6 font-body text-[15px] leading-relaxed text-ink-black/80">
          <div>
            <h2 className="font-display text-2xl uppercase">Production</h2>
            <p className="mt-2">All items are printed on demand. Production takes 2–4 business days before your order ships.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase">Shipping</h2>
            <p className="mt-2">Shipping is calculated at checkout based on your destination. Orders over $75 ship free.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase">Returns</h2>
            <p className="mt-2">Because items are made to order, we accept returns only for defective or incorrect products. Contact us with a photo of the issue and we will arrange a replacement or refund.</p>
          </div>
        </div>
      </section>
    </>
  )
}
