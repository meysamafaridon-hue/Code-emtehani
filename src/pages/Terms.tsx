import PageHeader from '@/components/PageHeader'

export default function Terms() {
  return (
    <>
      <PageHeader title="TERMS &" highlight="CONDITIONS" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-2xl space-y-4 font-body text-[15px] leading-relaxed text-ink-black/80">
          <p>These terms are a placeholder for the MCI MARCT prototype. Before launch, replace them with complete terms reviewed by a legal professional.</p>
          <p>By placing an order you agree to our production and shipping timelines. All items are made to order.</p>
          <p>This store is a demo prototype: no real payments are processed and no physical goods are dispatched.</p>
        </div>
      </section>
    </>
  )
}
