// components/Header.tsx
'use client';

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            JL
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle Button - Desktop */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 transition-colors text-sm font-semibold"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe size={18} />
              <span>{language === 'es' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Toggle Button - Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded border border-slate-600 hover:border-blue-400 transition-colors text-xs font-semibold"
            >
              <Globe size={16} />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            
            {/* Hamburger Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fadeIn">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left hover:text-blue-400 transition-colors ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header