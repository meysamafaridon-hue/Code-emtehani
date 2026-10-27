import type { ReactNode } from 'react'

// Shared header for inner pages — keeps the MCI MARCT design system consistent.
export default function PageHeader({
  title,
  highlight,
  subtitle,
  children,
}: {
  title: string
  highlight?: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="bg-ink-black pt-28 pb-10 lg:pt-32 lg:pb-12">
      <div className="container-edge">
        <h1 className="font-display text-5xl uppercase leading-[0.85] tracking-tightest text-white sm:text-6xl lg:text-7xl">
          {title} {highlight && <span className="text-ink-acid">{highlight}</span>}
        </h1>
        {subtitle && <p className="mt-4 max-w-xl font-body text-sm text-white/70">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
