export default function ProductBadge({ label }: { label: string }) {
  const color =
    label === 'LIMITED'
      ? 'bg-ink-acid text-ink-black'
      : 'bg-ink-black text-white'
  return (
    <span className={`absolute left-0 top-0 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wide ${color}`}>
      {label}
    </span>
  )
}
