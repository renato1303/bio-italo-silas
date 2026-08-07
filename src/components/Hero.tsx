import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock } from 'lucide-react';
import { HERO_DATA } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-end sm:items-center pt-[280px] sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-slate-950">
      {/* Background Layer 1: Animated Dark Ambient Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/60 to-indigo-950/30 z-0"></div>

      {/* Background Layer 2: Crisp Main Background Image (lp-1.png) - Fixed Mobile Scale */}
      <div className="absolute top-0 left-0 right-0 h-[360px] sm:h-full sm:inset-0 z-0 overflow-hidden">
        <img
          src={HERO_DATA.heroBgImage}
          alt="Ítalo Silas"
          className="w-full h-full object-cover object-[75%_15%] sm:object-right opacity-100 transition-all duration-700"
          loading="eager"
        />
      </div>

      {/* Background Layer 3: Lighter Gradient Mask on Mobile to keep image bright and clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 sm:via-slate-950/60 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 sm:via-transparent to-transparent sm:to-slate-950/40 z-0"></div>

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

                <span className="relative z-10 drop-shadow-sm text-center flex flex-col items-center justify-center leading-snug w-full">
                  <span>{HERO_DATA.ctaLine1}</span>
                  <span>{HERO_DATA.ctaLine2}</span>
                </span>
              </span>
            </a>
          </motion.div>

          {/* Trust Badges Bar - Scroll reveal transition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-12 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="glass-card rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 group border border-white/10 hover:border-indigo-400/60 bg-slate-900/40 hover:bg-indigo-950/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm sm:text-base font-extrabold text-white font-display group-hover:text-indigo-200 transition-colors">
                  3 Minutos
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Teste rápido de nível</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="glass-card rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 group border border-white/10 hover:border-emerald-400/60 bg-slate-900/40 hover:bg-emerald-950/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-emerald-500/20"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm sm:text-base font-extrabold text-white font-display group-hover:text-emerald-200 transition-colors">
                  100% Gratuito
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Sem custos ou cadastro</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
