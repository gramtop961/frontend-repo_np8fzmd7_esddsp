import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const origins = [
  {
    country: 'Ethiopia',
    notes: 'Floral, blueberry, bergamot',
    image:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
  },
  {
    country: 'Colombia',
    notes: 'Caramel, citrus, balanced body',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    country: 'Costa Rica',
    notes: 'Honey sweetness, red apple, clean finish',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Origins() {
  return (
    <section id="origins" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Leaf className="h-4 w-4 text-emerald-300" />
              Origin Stories
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Sourced with soul. Roasted with science.</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              We work directly with smallholder farms and co‑ops. Transparent trade, seasonal lots, and meticulous cupping.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {origins.map((o, idx) => (
            <motion.article
              key={o.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              <div className="relative h-56 w-full">
                <img src={o.image} alt={o.country} className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{o.country}</h3>
                <p className="mt-1 text-sm text-white/70">{o.notes}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
