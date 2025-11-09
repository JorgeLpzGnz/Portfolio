// app/ClientLayout.tsx
'use client';

import { useState, useEffect, ReactNode } from 'react';
import LanguageProvider  from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer  from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { WaveBackground } from '@/components/WaveBackground';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      {/* Particle Background - Capa inferior */}
      {/* <ParticleBackground /> */}
      <WaveBackground />
      
      {/* Content wrapper - Capa superior */}
      <div className="min-h-screen bg-transparent text-white relative" style={{ position: 'relative', zIndex: 10 }}>
        <Header activeSection={activeSection} onNavigate={scrollToSection} />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}