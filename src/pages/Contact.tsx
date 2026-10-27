import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHeader title="CONTACT" highlight="US" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-lg">
          {sent ? (
            <div className="border border-ink-border bg-white p-8 text-center">
              <h2 className="font-display text-2xl uppercase">Thanks.</h2>
              <p className="mt-2 font-body text-sm text-ink-muted">Your message has been recorded (demo only).</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
              <input required placeholder="Name" className="w-full border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
              <input required type="email" placeholder="Email" className="w-full border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
              <textarea required placeholder="Message" rows={5} className="w-full border border-ink-border bg-white px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
              <button className="btn-black w-full">SEND MESSAGE</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
