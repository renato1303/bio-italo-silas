import React from 'react';
import { motion } from 'motion/react';
import { HERO_DATA } from '../data';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-slate-950 border-t border-white/10 pt-12 pb-10 px-4 text-slate-400"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand */}
        <div>
          <a href="#" className="inline-flex items-center gap-2 mb-1">
            <span className="font-extrabold text-xl text-white font-display tracking-wider">
              ITALO SILAS
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
              Inglês
            </span>
          </a>
          <p className="text-xs text-slate-500 max-w-sm">
            Metodologia prática focada em destravar sua fala para viagens e autonomia no inglês.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
          <a
            href={HERO_DATA.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-beam pointer-events-none"></span>
            <span className="relative z-10">Fazer Teste de Nível</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Ítalo Silas. Todos os direitos reservados.
      </div>
    </motion.footer>
  );
};
