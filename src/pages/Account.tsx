import PageHeader from '@/components/PageHeader'

export default function Account() {
  return (
    <>
      <PageHeader title="YOUR" highlight="ACCOUNT" />
      <section className="bg-ink-paper py-12 lg:py-16">
        <div className="container-edge max-w-md">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="border border-ink-border bg-white p-6">
              <h2 className="font-display text-2xl uppercase">Sign in</h2>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-3">
                <input type="email" placeholder="Email" className="w-full border border-ink-border px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
                <input type="password" placeholder="Password" className="w-full border border-ink-border px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
                <button className="btn-black w-full">SIGN IN</button>
              </form>
            </div>
            <div className="border border-ink-border bg-white p-6">
              <h2 className="font-display text-2xl uppercase">Create account</h2>
              <p className="mt-3 font-body text-[12px] text-ink-muted">Track orders, save designs and check out faster.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-3">
                <input type="email" placeholder="Email" className="w-full border border-ink-border px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
                <input type="password" placeholder="Create password" className="w-full border border-ink-border px-4 py-3 font-body text-sm focus:outline-none focus:border-ink-black" />
                <button className="btn-acid w-full">CREATE ACCOUNT</button>
              </form>
            </div>
          </div>
          <p className="mt-4 font-body text-[11px] text-ink-muted">Demo only — no real authentication is connected.</p>
        </div>
      </section>
    </>
  )
}
