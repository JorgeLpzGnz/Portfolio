// components/Hero.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
    onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl text-center">
                <div className="mb-6">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                        {t('hero.subtitle')}
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                    {t('hero.description')}{' '}
                    <span className="text-blue-400 font-semibold">React</span> {t('hero.and')}{' '}
                    <span className="text-purple-400 font-semibold">Solidity</span>
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    {t('hero.tagline')}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={() => onNavigate('projects')}
                        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                        {t('hero.cta.projects')}
                    </button>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                        {t('hero.cta.contact')}
                    </button>
                </div>
            </div>
        </section>
    );

};

export default Hero