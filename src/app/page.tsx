// app/page.tsx
'use client';

import Hero  from '@/components/Hero';
import About  from '@/components/About';
import Skills  from '@/components/Skills';
import { Projects } from '@/components/Projects';
import Experience  from '@/components/Experience';
import Contact from '@/components/Contact';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { profile } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onNavigate={scrollToSection} />
      <About />
      <Skills />
      {profile === 'jorge' && <Projects />}
      <Experience />
      <Contact />
    </>
  );
}