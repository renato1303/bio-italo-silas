import React from 'react';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Feature Cards Grid (Inglês Aeroporto, Mentoria, Grupo VIP) */}
        <FeatureCards />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


