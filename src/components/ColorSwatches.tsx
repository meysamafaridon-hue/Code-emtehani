import { cn } from '@/lib/utils'

type Props = {
  colors: { name: string; hex: string }[]
  active: string
  onChange: (name: string) => void
}

export default function ColorSwatches({ colors, active, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      {colors.map((c) => {
        const isActive = c.name === active
        return (
          <button
            key={c.name}
            onClick={() => onChange(c.name)}
            aria-label={c.name}
            aria-pressed={isActive}
            className={cn(
              'h-5 w-5 rounded-full border transition-all',
              isActive ? 'ring-2 ring-ink-black ring-offset-2 ring-offset-ink-paper' : 'border-ink-border'
            )}
            style={{ backgroundColor: c.hex }}
          />
        )
      })}
    </div>
  )
}
