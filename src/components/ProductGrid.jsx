import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    name: 'Ethiopia Yirgacheffe',
    price: 18,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop',
    notes: 'Blueberry, jasmine, silky body',
  },
  {
    name: 'Colombia Huila',
    price: 17,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1536514498073-f6c9418f1c89?q=80&w=1200&auto=format&fit=crop',
    notes: 'Caramel, citrus, balanced finish',
  },
  {
    name: 'Costa Rica Honey',
    price: 19,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1507133750040-4a8f5702152d?q=80&w=1200&auto=format&fit=crop',
    notes: 'Red apple, honey sweetness, clean',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Signature Beans</h2>
          <p className="mt-2 max-w-2xl text-white/70">Freshly roasted every week. Whole bean or ground to order.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              <div className="relative h-56 w-full">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">{p.rating} ★</div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.notes}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? '' : 'opacity-30'}`} />
                    ))}
                  </div>
                  <button className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400">
                    Add — ${p.price}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
