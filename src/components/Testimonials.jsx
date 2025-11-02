import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  {
    author: 'Aiden M.',
    text: 'The Ethiopia Yirgacheffe tastes like sunshine in a cup. Nuanced, bright, and impossibly clean.',
  },
  {
    author: 'Sofia R.',
    text: 'Finally, a roaster that respects the farmer and the flavor. Subscription day is my favorite day.',
  },
  {
    author: 'Jun T.',
    text: 'Every bag is consistent and fresh. Their brew guides helped me dial in the perfect pour over.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Loved by discerning palates</h2>
          <p className="mt-2 max-w-2xl text-white/70">Thousands of five‑star sips and counting.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-neutral-900 p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-amber-400" />
              <p className="text-white/90">“{q.text}”</p>
              <footer className="mt-4 text-sm text-white/60">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-amber-500/10 to-emerald-400/10 p-6 text-sm text-white/80">
          Join our monthly drop for limited, traceable lots. Skip or cancel anytime.
          <a href="#" className="ml-3 rounded-full bg-amber-500 px-3 py-1 font-semibold text-neutral-950 hover:bg-amber-400">Subscribe</a>
        </div>
      </div>
    </section>
  );
}
