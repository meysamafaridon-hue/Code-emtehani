import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CampaignBanner() {
  return (
    <section className="relative bg-ink-black">
      {/* Torn-paper top edge */}
      <div className="torn-top h-7 w-full bg-ink-black" />

      <div className="container-edge grid grid-cols-1 gap-8 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        {/* Left photo */}
        <div className="lg:col-span-4">
          <div className="relative -rotate-2 border-4 border-ink-paper p-1">
            <div className="absolute -left-2 -top-3 z-10 h-10 w-24 rotate-[-8deg] bg-ink-acid" />
            <img
              src="https://picsum.photos/seed/mci-campaign-left/700/900"
              alt="Model wearing a graphic MCI MARCT t-shirt, back print detail"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Center copy */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <h2 className="font-display text-5xl uppercase leading-[0.85] tracking-tightest text-white sm:text-6xl lg:text-7xl">
            MADE FOR YOU.
            <br />
            <span className="text-ink-acid">PRINTED</span>
            <br />
            <span className="text-ink-acid">ON DEMAND.</span>
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-white/70">
            Your idea. Your style. Your way.
            <br />
            No limits. Just your imagination.
          </p>
          <Link to="/shop" className="btn-acid mt-6 w-fit">
            EXPLORE THE COLLECTION <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right photos + annotation */}
        <div className="lg:col-span-3">
          <div className="relative space-y-4">
            <div className="rotate-3 border-4 border-ink-paper p-1">
              <img
                src="https://picsum.photos/seed/mci-campaign-fabric/500/500"
                alt="Close-up of printed fabric texture with the MCI MARCT brand tag"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="-rotate-2 border-4 border-ink-paper p-1">
              <img
                src="https://picsum.photos/seed/mci-campaign-tag/500/500"
                alt="Close-up of the MCI MARCT woven brand tag"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Hand-drawn annotation */}
            <div className="absolute -left-6 bottom-2 hidden lg:block">
              <svg width="60" height="80" viewBox="0 0 60 80" className="text-white" fill="none">
                <path d="M50 4C30 20, 20 40, 8 70" stroke="currentColor" strokeWidth="2" className="stroke-sketch" />
                <path d="M8 70L18 62M8 70L14 78" stroke="currentColor" strokeWidth="2" className="stroke-sketch" />
              </svg>
              <p className="mt-1 -rotate-3 font-display text-sm uppercase leading-tight text-white">
                Quality<br />you can<br />feel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
