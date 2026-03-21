// app/page.tsx
'use client';

import Hero  from '@/components/Hero';
import About  from '@/components/About';
import Skills  from '@/components/Skills';
import { Projects } from '@/components/Projects';
import Experience  from '@/components/Experience';
import Contact from '@/components/Contact';
import { useLanguage } from '@/context/LanguageContext';
import Blog from '@/components/Blog';
import Gallery, { GalleryImage } from '@/components/Gallery';

const jorgeImages: GalleryImage[] = [
    {
        src: '/images/gallery/jorge/1.jpeg',
        alt: 'Metalorian Swap',
        description: 'Exchange descentralizado de stablecoins.',
        category: 'Web3',
    },
    // ... más fotos
];

const juanImages: GalleryImage[] = [
    {
        src: '/images/gallery/juan/cisco-networking.png',
        alt: 'Diploma CISCO Networking',
        description: 'Certificación en instrucción de redes.',
        category: 'Certificaciones',
    },
    // ... más fotos
];

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
      {/* <Gallery jorgeImages={jorgeImages}/> */}
      <Blog/>
      <Contact />
    </>
  );
}