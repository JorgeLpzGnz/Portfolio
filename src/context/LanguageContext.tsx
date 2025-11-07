'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    // Función de traducción
    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Traducciones
const translations: Record<Language, Record<string, string>> = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',

        // Hero
        'hero.subtitle': 'Web3 & Front-end Developer',
        'hero.title': 'Jorge López',
        'hero.description': 'Construyo experiencias web modernas y soluciones blockchain con',
        'hero.and': 'y',
        'hero.tagline': '3 años transformando ideas en productos digitales descentralizados',
        'hero.cta.projects': 'Ver Proyectos',
        'hero.cta.contact': 'Contacto',

        // About
        'about.title': 'Sobre Mí',
        'about.p1': 'Soy un desarrollador front-end especializado en',
        'about.p1.highlight': 'Web3 y tecnologías blockchain',
        'about.p1.continue': '. Con 3 años de experiencia, he trabajado en el desarrollo de aplicaciones descentralizadas (dApps), smart contracts y experiencias de usuario modernas.',
        'about.p2': 'Mi enfoque combina',
        'about.p2.highlight': 'desarrollo técnico sólido',
        'about.p2.continue': 'con un profundo entendimiento de la experiencia del usuario. He liderado proyectos desde la conceptualización hasta el deployment, trabajando con equipos multifuncionales en entornos ágiles.',
        'about.p3': 'Además de mi experiencia en desarrollo, cuento con formación técnica en electricidad y electrónica, lo que me proporciona una perspectiva única para entender sistemas complejos y resolver problemas técnicos desafiantes.',

        // Skills
        'skills.title': 'Stack Tecnológico',
        'skills.frontend': 'Front-end',
        'skills.web3': 'Web3 & Blockchain',
        'skills.tools': 'Herramientas',

        // Projects
        'projects.title': 'Proyectos Destacados',
        'projects.role': 'Rol',
        'projects.highlights': 'Highlights',

        // Project 1
        'project1.title': 'Metalorian Swap',
        'project1.description': 'Plataforma descentralizada para intercambio de stablecoins en blockchain',
        'project1.role': 'Front-end & Smart Contract Developer',
        'project1.highlight1': 'Interfaz intuitiva para swaps',
        'project1.highlight2': 'Integración con múltiples wallets',
        'project1.highlight3': 'Smart contracts optimizados para gas',

        // Project 2
        'project2.title': 'MetaSender',
        'project2.description': 'Solución para múltiples transferencias blockchain en una sola transacción',
        'project2.role': 'Full-stack Web3 Developer',
        'project2.highlight1': 'Reducción de costos de gas',
        'project2.highlight2': 'Batch transactions',
        'project2.highlight3': 'UX simplificada para transferencias masivas',

        // Project 3
        'project3.title': 'MetalorianNFTs',
        'project3.description': 'Marketplace para intercambio de tokens no fungibles',
        'project3.role': 'Front-end & Blockchain Developer',
        'project3.highlight1': 'Minting de NFTs',
        'project3.highlight2': 'Sistema de trading peer-to-peer',
        'project3.highlight3': 'Galería interactiva',

        // Experience
        'experience.title': 'Experiencia',

        // Job 1
        'job1.role': 'Front-end Developer',
        'job1.company': 'Ciento Por Ciento Comunicaciones',
        'job1.period': 'Jul 2024 - Presente',
        'job1.location': 'Bogotá, Colombia',
        'job1.achievement1': 'Desarrollo de aplicaciones web con React.js y Figma',
        'job1.achievement2': 'Mantenimiento y mejoras de apps existentes',
        'job1.achievement3': 'Colaboración con equipos de diseño para interfaces responsivas',

        // Job 2
        'job2.role': 'Web3 & Front-end Developer',
        'job2.company': 'The Metalorian DAO',
        'job2.period': 'Ago 2022 - 2023',
        'job2.location': 'Bucaramanga, Colombia',
        'job2.achievement1': 'Desarrollo de dApps en entorno Web 3.0',
        'job2.achievement2': 'Implementación de smart contracts con Solidity',
        'job2.achievement3': 'Creación de 3 productos blockchain exitosos',

        // Job 3
        'job3.role': 'Front-end Developer',
        'job3.company': 'XVORTEX',
        'job3.period': 'Feb 2022 - Sep 2022',
        'job3.location': 'Bucaramanga, Colombia',
        'job3.achievement1': 'Desarrollo de interfaces enfocadas en UX',
        'job3.achievement2': 'Code reviews y procesos de mejora continua',
        'job3.achievement3': 'Optimización basada en feedback de usuarios',

        // Contact
        'contact.title': 'Contacto',
        'contact.subtitle': '¿Tienes un proyecto en mente? ¡Trabajemos juntos!',
        'contact.email': 'Email',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',

        // Footer
        'footer.text': 'Desarrollado con Next.js y TypeScript.',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        // Hero
        'hero.subtitle': 'Web3 & Front-end Developer',
        'hero.title': 'Jorge López',
        'hero.description': 'I build modern web experiences and blockchain solutions with',
        'hero.and': 'and',
        'hero.tagline': '3 years transforming ideas into decentralized digital products',
        'hero.cta.projects': 'View Projects',
        'hero.cta.contact': 'Contact',

        // About
        'about.title': 'About Me',
        'about.p1': 'I am a front-end developer specialized in',
        'about.p1.highlight': 'Web3 and blockchain technologies',
        'about.p1.continue': '. With 3 years of experience, I have worked on developing decentralized applications (dApps), smart contracts, and modern user experiences.',
        'about.p2': 'My approach combines',
        'about.p2.highlight': 'solid technical development',
        'about.p2.continue': 'with a deep understanding of user experience. I have led projects from conceptualization to deployment, working with cross-functional teams in agile environments.',
        'about.p3': 'In addition to my development experience, I have technical training in electricity and electronics, which provides me with a unique perspective to understand complex systems and solve challenging technical problems.',

        // Skills
        'skills.title': 'Tech Stack',
        'skills.frontend': 'Front-end',
        'skills.web3': 'Web3 & Blockchain',
        'skills.tools': 'Tools',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.role': 'Role',
        'projects.highlights': 'Highlights',

        // Project 1
        'project1.title': 'Metalorian Swap',
        'project1.description': 'Decentralized platform for stablecoin exchange on blockchain',
        'project1.role': 'Front-end & Smart Contract Developer',
        'project1.highlight1': 'Intuitive swap interface',
        'project1.highlight2': 'Multiple wallet integration',
        'project1.highlight3': 'Gas-optimized smart contracts',

        // Project 2
        'project2.title': 'MetaSender',
        'project2.description': 'Solution for multiple blockchain transfers in a single transaction',
        'project2.role': 'Full-stack Web3 Developer',
        'project2.highlight1': 'Gas cost reduction',
        'project2.highlight2': 'Batch transactions',
        'project2.highlight3': 'Simplified UX for mass transfers',

        // Project 3
        'project3.title': 'MetalorianNFTs',
        'project3.description': 'Marketplace for non-fungible token exchange',
        'project3.role': 'Front-end & Blockchain Developer',
        'project3.highlight1': 'NFT minting',
        'project3.highlight2': 'Peer-to-peer trading system',
        'project3.highlight3': 'Interactive gallery',

        // Experience
        'experience.title': 'Experience',

        // Job 1
        'job1.role': 'Front-end Developer',
        'job1.company': 'Ciento Por Ciento Comunicaciones',
        'job1.period': 'Jul 2024 - Present',
        'job1.location': 'Bogotá, Colombia',
        'job1.achievement1': 'Web application development with React.js and Figma',
        'job1.achievement2': 'Maintenance and improvements of existing apps',
        'job1.achievement3': 'Collaboration with design teams for responsive interfaces',

        // Job 2
        'job2.role': 'Web3 & Front-end Developer',
        'job2.company': 'The Metalorian DAO',
        'job2.period': 'Aug 2022 - 2023',
        'job2.location': 'Bucaramanga, Colombia',
        'job2.achievement1': 'dApps development in Web 3.0 environment',
        'job2.achievement2': 'Smart contract implementation with Solidity',
        'job2.achievement3': 'Creation of 3 successful blockchain products',

        // Job 3
        'job3.role': 'Front-end Developer',
        'job3.company': 'XVORTEX',
        'job3.period': 'Feb 2022 - Sep 2022',
        'job3.location': 'Bucaramanga, Colombia',
        'job3.achievement1': 'UX-focused interface development',
        'job3.achievement2': 'Code reviews and continuous improvement processes',
        'job3.achievement3': 'Optimization based on user feedback',

        // Contact
        'contact.title': 'Contact',
        'contact.subtitle': 'Have a project in mind? Let\'s work together!',
        'contact.email': 'Email',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',

        // Footer
        'footer.text': 'Built with Next.js and TypeScript.',
    }
};

export default LanguageProvider