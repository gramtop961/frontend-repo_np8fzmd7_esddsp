import { motion } from 'framer-motion';
import { Coffee, Star, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex h-full max-w-6xl flex-col items-center px-6 pt-24 md:flex-row md:gap-12 md:pt-28">
        {/* Copy */}
        <div className="z-10 max-w-xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star className="h-4 w-4 text-amber-400" />
            Awwwards-style craft for coffee lovers
          </div>
          <h1 className="font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Bean to Cup,
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent"> Elevated</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Savor award-winning small‑batch coffee beans sourced ethically from iconic origins. Freshly roasted, flavor-forward, and delivered to your door.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
            >
              <Coffee className="h-4 w-4" /> Shop Signature Beans
            </a>
            <a
              href="#origins"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:bg-white/5"
            >
              Learn our origins
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Star className="h-4 w-4 text-amber-400" /> 4.9/5 by 10k+ sips
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Truck className="h-4 w-4 text-emerald-300" /> Free shipping $35+
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mt-12 w-full max-w-xl md:mt-0 md:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e1?q=80&w=1200&auto=format&fit=crop"
              alt="Roasted coffee beans in a bag"
              className="h-full w-full object-cover opacity-90"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neutral-900/40 via-transparent to-amber-500/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
