import React from 'react';
import { motion } from 'motion/react';
import { HERO_DATA } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-end sm:items-center pt-[280px] sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-slate-950">
      {/* Background Layer 1: Dark Base */}
      <div className="absolute inset-0 bg-slate-950 z-0"></div>

      {/* Background Layer 2: Crisp Main Background Image (100% Opacity) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_DATA.heroBgImage}
          alt="Ítalo Silas"
          className="w-full h-full object-cover object-[90%_top] sm:object-right opacity-100 transition-all duration-500"
          loading="eager"
        />
      </div>

      {/* Background Layer 3: Gradient Overlays for Text Contrast (Leaves face clear at top) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 sm:via-slate-950/70 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 sm:via-transparent to-transparent z-0 pointer-events-none"></div>

      {/* Ambient Radial Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-center sm:items-start">

          {/* Main Headline (Centered on mobile) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-5 font-display text-center sm:text-left"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              {HERO_DATA.title}
            </span>
          </motion.h1>

          {/* Subtitle (Centered on mobile) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 text-center sm:text-left"
          >
            {HERO_DATA.subtitle}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full sm:w-auto flex justify-center sm:justify-start"
          >
            <a
              href={HERO_DATA.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto relative group overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl shadow-indigo-600/35 hover:shadow-2xl hover:shadow-indigo-500/50 min-h-[52px]"
            >
              {/* Animated Gradient Border */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 animate-gradient"></span>
              
              <span className="relative px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white font-black text-sm sm:text-lg tracking-wide flex items-center justify-center text-center overflow-hidden w-full">
                {/* Continuous Shimmer Light Beam Effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 animate-shimmer-beam pointer-events-none"></span>

                <span className="relative z-10 drop-shadow-sm text-center flex items-center justify-center leading-snug w-full">
                  <span>{HERO_DATA.ctaText}</span>
                </span>
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
