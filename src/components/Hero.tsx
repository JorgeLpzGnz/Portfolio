// components/Hero.tsx
import React from 'react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-6">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Web3 & Front-end Developer
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Jorge López
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Construyo experiencias web modernas y soluciones blockchain con{' '}
          <span className="text-blue-400 font-semibold">React</span> y{' '}
          <span className="text-purple-400 font-semibold">Solidity</span>
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          3 años transformando ideas en productos digitales descentralizados
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
          >
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
};