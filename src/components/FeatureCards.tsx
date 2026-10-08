import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowUpRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURE_CARDS } from '../data';

export const FeatureCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(FEATURE_CARDS.length - 1, activeIndex + 1);
    scrollTo(newIndex);
  };

  const getButtonGradient = (variant: string) => {
    switch (variant) {
      case 'purple':
        return 'from-purple-600 via-indigo-600 to-indigo-700 shadow-purple-600/30';
      case 'green':
        return 'from-emerald-600 via-teal-600 to-emerald-700 shadow-emerald-600/30';
      default:
        return 'from-blue-600 via-indigo-600 to-blue-700 shadow-blue-600/30';
    }
  };

  return (
    <section id="programas" className="py-12 sm:py-20 px-4 sm:px-8 relative z-10 bg-slate-950 overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-end mb-6 sm:mb-8 gap-3"
        >
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                activeIndex === 0
                  ? 'border-white/5 text-slate-600 bg-slate-900/20 cursor-not-allowed'
                  : 'border-white/10 text-white bg-slate-900/80 hover:bg-indigo-600 hover:border-indigo-500 active:scale-95 shadow-md'
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === FEATURE_CARDS.length - 1}
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                activeIndex === FEATURE_CARDS.length - 1
                  ? 'border-white/5 text-slate-600 bg-slate-900/20 cursor-not-allowed'
                  : 'border-white/10 text-white bg-slate-900/80 hover:bg-indigo-600 hover:border-indigo-500 active:scale-95 shadow-md'
              }`}
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURE_CARDS.map((card, index) => (
            <div
              key={card.id}
              className="w-[88vw] sm:w-[380px] md:w-[400px] shrink-0 snap-center flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                className={`h-full relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 ${
                  card.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {/* Card Background Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={card.bgImage}
                    alt={card.title}
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-115 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

                  {/* Top Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-md bg-red-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-red-600/30 animate-pulse">
                      {card.tag}
                    </span>
                  </div>

                  {/* Diagonal Ribbon for Imersao */}
                  {card.id === 'imersao' && (
                    <div className="absolute top-0 right-0 h-48 w-48 overflow-hidden pointer-events-none z-20">
                      <div className="absolute transform rotate-45 bg-amber-400 text-slate-950 font-black text-[9px] py-1 px-6 -right-12 top-8 w-60 text-center shadow-lg uppercase tracking-wider whitespace-nowrap">
                        VAGAS PROMOCIONAIS
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display leading-tight mb-2">
                      {card.title}
                    </h3>

                    <p className="text-slate-100 font-bold text-xs sm:text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {card.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link/Button */}
                  <div className="pt-3">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative overflow-hidden w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r ${getButtonGradient(
                        card.ctaVariant
                      )} text-white font-black text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 group/btn min-h-[48px]`}
                    >
                      {/* Continuous Shimmer Effect */}
                      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 animate-shimmer-beam pointer-events-none"></span>

                      <span className="relative z-10 text-center">{card.buttonText}</span>
                      <ArrowUpRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {FEATURE_CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-8 bg-indigo-500 shadow-md shadow-indigo-500/50'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para card ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
