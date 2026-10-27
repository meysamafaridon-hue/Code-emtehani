import PageHeader from '@/components/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader title="ABOUT" highlight="MCI MARCT" subtitle="Independent. Print-on-demand. Made for you, not the masses." />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-2xl space-y-6 font-body text-[15px] leading-relaxed text-ink-black/80">
          <p>
            MCI MARCT is an independent streetwear label built around one idea: what you wear should say something about you.
            We design bold, graphic-led apparel and print every piece on demand — so nothing is wasted and everything is made to order.
          </p>
          <p>
            We believe in premium materials, honest production, and graphics that come from a real point of view.
            No overstock. No minimum orders. Just your idea, printed and shipped.
          </p>
          <p>
            This store is a working front-end prototype. Imagery is placeholder photography to be replaced before launch,
            and checkout is a demo flow — no real payments are processed.
          </p>
        </div>
      </section>
    </>
  )
}
