import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden pb-12 pt-8 md:pb-16">
      <div className="container-shell">
        <div className="relative min-h-[76vh] overflow-hidden rounded-[2.5rem] shadow-glow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.image}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/25 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 flex min-h-[76vh] items-center px-6 py-12 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-white">Wedding Planner</p>
              <h1 className="mt-3 text-5xl font-semibold leading-tight text-white md:text-7xl">
                {activeSlide.title}
              </h1>
              <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
                {activeSlide.text}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="button-primary gap-2">
                  Start Your Story
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/gallery"
                  className="button-secondary border-white/30 bg-white/15 text-white hover:bg-white/25 hover:text-white"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
            <button
              onClick={() =>
                setActiveIndex((value) => (value - 1 + slides.length) % slides.length)
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setActiveIndex((value) => (value + 1) % slides.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="absolute bottom-8 right-8 z-10 hidden gap-3 md:flex">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition ${
                  index === activeIndex ? "w-12 bg-white" : "w-6 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
