import Hero from './components/Hero';
import Origins from './components/Origins';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-amber-500 text-neutral-950">B</span>
          Beanhaus
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#products" className="hover:text-white">Shop</a>
          <a href="#origins" className="hover:text-white">Origins</a>
          <a href="#" className="hover:text-white">Brew Guide</a>
        </nav>
        <a href="#" className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-amber-400">Subscribe</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Beanhaus Roasters. Crafted with care.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-[Inter,ui-sans-serif]">
      <Header />
      <main>
        <Hero />
        <Origins />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
