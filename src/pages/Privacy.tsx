import PageHeader from '@/components/PageHeader'

export default function Privacy() {
  return (
    <>
      <PageHeader title="PRIVACY" highlight="POLICY" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-2xl space-y-4 font-body text-[15px] leading-relaxed text-ink-black/80">
          <p>This privacy policy is a placeholder for the MCI MARCT prototype. Before launch, replace it with a complete policy reviewed by a legal professional.</p>
          <p>We collect only the information necessary to process and ship your orders, and we never sell your data.</p>
          <p>Contact us at any time to request access to or deletion of your personal information.</p>
        </div>
      </section>
    </>
  )
}
