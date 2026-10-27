import { Link } from 'react-router-dom'

// Original MCI MARCT monogram: a sharp geometric mark combining M-C-M.
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="MCI MARCT home" className={`group inline-flex items-center gap-2 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="shrink-0">
        <rect width="34" height="34" fill="#080808" />
        <path d="M5 26V10L11 18L17 10V26" stroke="#FFFFFF" strokeWidth="2.4" className="stroke-sketch" />
        <path d="M17 18L22 10L27 18V26" stroke="#E5FF00" strokeWidth="2.4" className="stroke-sketch" />
        <circle cx="11" cy="7.5" r="1.6" fill="#E5FF00" />
      </svg>
      <span className="font-display text-[20px] uppercase leading-none tracking-tightest text-white">
        MCI <span className="text-ink-acid">MARCT</span>
      </span>
    </Link>
  )
}
