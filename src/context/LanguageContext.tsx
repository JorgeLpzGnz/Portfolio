// context/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';
type Profile = 'jorge' | 'juan';

interface LanguageContextType {
    language: Language;
    profile: Profile;
    setLanguage: (lang: Language) => void;
    setProfile: (prof: Profile) => void;
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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [profile, setProfile] = useState<Profile>('jorge');

    const t = (key: string): string => {
        const profileTranslations = translations[profile][language];
        if (profileTranslations[key] !== undefined) return profileTranslations[key];
        // Fallback: shared keys (blog, gallery) live in jorge's translations
        const shared = translations['jorge'][language][key];
        if (shared !== undefined) return shared;
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, profile, setLanguage, setProfile, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// ─── SHARED TRANSLATIONS (blog + gallery) ─────────────────────────────────────
const sharedEs: Record<string, string> = {
    // Navigation
    'nav.blog':    'Blog',
    'nav.gallery': 'Galería',

    // Blog UI
    'blog.title':      'Blog',
    'blog.subtitle':   'Artículos sobre tecnología, desarrollo y telecomunicaciones',
    'blog.back':       'Volver al blog',
    'blog.read':       'lectura',
    'blog.readMore':   'Leer más',

    // Blog Post 1 – Web3
    'blog.post1.title':   '¿Qué son los Smart Contracts y cómo funcionan?',
    'blog.post1.excerpt': 'Los contratos inteligentes están revolucionando la forma en que hacemos acuerdos digitales. Descubre cómo funcionan por dentro y por qué son tan importantes en el ecosistema Web3.',
    'blog.post1.content': 'Un smart contract (contrato inteligente) es un programa almacenado en una blockchain que se ejecuta automáticamente cuando se cumplen condiciones predefinidas. A diferencia de los contratos tradicionales, no requieren intermediarios como bancos o abogados.\n\nLos contratos inteligentes están escritos en lenguajes como Solidity (para Ethereum) y se despliegan en la red blockchain. Una vez desplegados, su código es inmutable: nadie puede modificarlo.\n\n¿Cómo funcionan? Imagina una máquina expendedora: introduces dinero, seleccionas un producto, y la máquina lo entrega automáticamente. No necesitas confiar en un empleado. Los smart contracts funcionan igual: si A ocurre, entonces B se ejecuta.\n\nAlgunos casos de uso reales incluyen: DeFi (finanzas descentralizadas), NFTs, votaciones on-chain, seguros automáticos y contratos de trabajo freelance. La tecnología aún está madurando, pero su potencial para eliminar intermediarios es enorme.\n\nAprender Solidity y el ecosistema Ethereum ha sido uno de los retos más apasionantes de mi carrera como desarrollador.',

    // Blog Post 2 – Frontend
    'blog.post2.title':   'Por qué uso Next.js para todos mis proyectos frontend',
    'blog.post2.excerpt': 'Después de trabajar con diferentes frameworks, Next.js se convirtió en mi herramienta principal. Te cuento las razones técnicas y prácticas que me llevaron a esta decisión.',
    'blog.post2.content': 'Cuando empecé en el desarrollo web, usaba Create React App para todo. Funcionaba, pero con el tiempo noté sus limitaciones: SEO pobre, tiempos de carga lentos en producción, y configuración compleja para proyectos grandes.\n\nNext.js resolvió todos estos problemas de golpe. Sus principales ventajas son: Server Side Rendering (SSR) y Static Site Generation (SSG) para SEO y rendimiento, routing basado en archivos que simplifica la navegación, API Routes integradas para el backend, y soporte nativo para TypeScript.\n\nAdemás, el soporte de Vercel hace que el deploy sea trivial: conectas tu repositorio de GitHub y cada push se despliega automáticamente. Para proyectos personales y profesionales, eso ahorra horas de configuración de CI/CD.\n\nCombinado con Tailwind CSS, puedo construir interfaces modernas y responsivas muy rápido. Este mismo portafolio está construido con ese stack, y el resultado habla por sí solo.\n\nMi recomendación: si ya sabes React, el salto a Next.js es pequeño y el retorno de inversión es enorme.',

    // Blog Post 3 – Telecomunicaciones
    'blog.post3.title':   'Redes LAN y WAN: fundamentos que todo técnico debe conocer',
    'blog.post3.excerpt': 'Las redes son la columna vertebral de cualquier organización moderna. En este artículo repaso los conceptos esenciales de LAN y WAN que aplico en el trabajo diario de soporte técnico.',
    'blog.post3.content': 'Una red LAN (Local Area Network) conecta dispositivos dentro de un área geográfica limitada, como una oficina o edificio. Una red WAN (Wide Area Network) conecta múltiples LANs a través de grandes distancias, como el internet.\n\nEn el soporte técnico del día a día, entender la diferencia es crucial. Cuando un usuario reporta que "no tiene internet", el problema puede estar en: su dispositivo (capa de acceso), el switch del piso (capa de distribución), el router principal (capa de núcleo), o en el enlace WAN con el proveedor de servicios.\n\nEl modelo OSI de 7 capas es el marco de referencia fundamental. Siempre diagnostico de abajo hacia arriba: primero verifico la capa física (cables, luces del switch), luego la capa de enlace (MAC addresses, VLANs), después la capa de red (IP, enrutamiento) y así sucesivamente.\n\nHerramientas esenciales: ping para verificar conectividad, traceroute para identificar dónde falla el tráfico, ipconfig/ifconfig para revisar configuración local, y el simulador Cisco Packet Tracer para practicar topologías sin hardware real.\n\nLa certificación CCNA de Cisco es un excelente punto de partida para cualquiera que quiera profundizar en redes. Cubre desde fundamentos hasta configuración avanzada de routers y switches.',

    // Gallery UI
    'gallery.title':      'Galería de Evidencias',
    'gallery.subtitle':   'Proyectos, certificaciones y momentos del camino',
    'gallery.item':       'evidencia',
    'gallery.items':      'evidencias',
    'gallery.filter.all': 'Todas',
};

const sharedEn: Record<string, string> = {
    // Navigation
    'nav.blog':    'Blog',
    'nav.gallery': 'Gallery',

    // Blog UI
    'blog.title':    'Blog',
    'blog.subtitle': 'Articles about technology, development and telecommunications',
    'blog.back':     'Back to blog',
    'blog.read':     'read',
    'blog.readMore': 'Read more',

    // Blog Post 1 – Web3
    'blog.post1.title':   'What are Smart Contracts and how do they work?',
    'blog.post1.excerpt': 'Smart contracts are revolutionizing the way we make digital agreements. Discover how they work under the hood and why they are so important in the Web3 ecosystem.',
    'blog.post1.content': 'A smart contract is a program stored on a blockchain that executes automatically when predefined conditions are met. Unlike traditional contracts, they require no intermediaries such as banks or lawyers.\n\nSmart contracts are written in languages like Solidity (for Ethereum) and deployed on the blockchain network. Once deployed, their code is immutable: no one can modify it.\n\nHow do they work? Think of a vending machine: you insert money, select a product, and the machine delivers it automatically. You don\'t need to trust an employee. Smart contracts work the same way: if A happens, then B executes.\n\nSome real use cases include: DeFi (decentralized finance), NFTs, on-chain voting, automatic insurance and freelance work contracts. The technology is still maturing, but its potential to eliminate intermediaries is enormous.\n\nLearning Solidity and the Ethereum ecosystem has been one of the most exciting challenges of my career as a developer.',

    // Blog Post 2 – Frontend
    'blog.post2.title':   'Why I use Next.js for all my frontend projects',
    'blog.post2.excerpt': 'After working with different frameworks, Next.js became my main tool. Let me tell you the technical and practical reasons that led me to this decision.',
    'blog.post2.content': 'When I started in web development, I used Create React App for everything. It worked, but over time I noticed its limitations: poor SEO, slow load times in production, and complex configuration for large projects.\n\nNext.js solved all these problems at once. Its main advantages are: Server Side Rendering (SSR) and Static Site Generation (SSG) for SEO and performance, file-based routing that simplifies navigation, built-in API Routes for the backend, and native TypeScript support.\n\nAdditionally, Vercel\'s support makes deployment trivial: you connect your GitHub repository and every push deploys automatically. For personal and professional projects, that saves hours of CI/CD configuration.\n\nCombined with Tailwind CSS, I can build modern, responsive interfaces very quickly. This portfolio itself is built with that stack, and the result speaks for itself.\n\nMy recommendation: if you already know React, the jump to Next.js is small and the return on investment is enormous.',

    // Blog Post 3 – Telecomunicaciones
    'blog.post3.title':   'LAN and WAN networks: fundamentals every technician must know',
    'blog.post3.excerpt': 'Networks are the backbone of any modern organization. In this article I review the essential LAN and WAN concepts I apply in my daily technical support work.',
    'blog.post3.content': 'A LAN (Local Area Network) connects devices within a limited geographic area, such as an office or building. A WAN (Wide Area Network) connects multiple LANs across large distances, like the internet.\n\nIn day-to-day technical support, understanding the difference is crucial. When a user reports they "have no internet", the problem could be in: their device (access layer), the floor switch (distribution layer), the main router (core layer), or the WAN link with the service provider.\n\nThe 7-layer OSI model is the fundamental reference framework. I always diagnose from the bottom up: first I check the physical layer (cables, switch lights), then the data link layer (MAC addresses, VLANs), then the network layer (IP, routing) and so on.\n\nEssential tools: ping to verify connectivity, traceroute to identify where traffic fails, ipconfig/ifconfig to review local configuration, and Cisco Packet Tracer simulator to practice topologies without real hardware.\n\nThe Cisco CCNA certification is an excellent starting point for anyone who wants to go deeper into networking. It covers everything from fundamentals to advanced configuration of routers and switches.',

    // Gallery UI
    'gallery.title':      'Evidence Gallery',
    'gallery.subtitle':   'Projects, certifications and milestones along the way',
    'gallery.item':       'item',
    'gallery.items':      'items',
    'gallery.filter.all': 'All',
};

// ─── TRANSLATIONS ──────────────────────────────────────────────────────────────
const translations: Record<Profile, Record<Language, Record<string, string>>> = {
    jorge: {
        es: {
            ...sharedEs,

            'nav.home':       'Inicio',
            'nav.about':      'Sobre mí',
            'nav.skills':     'Habilidades',
            'nav.projects':   'Proyectos',
            'nav.experience': 'Experiencia',
            'nav.contact':    'Contacto',

            'hero.subtitle':      'Web3 & Front-end Developer',
            'hero.title':         'Jorge López',
            'hero.description':   'Construyo experiencias web modernas y soluciones blockchain con',
            'hero.and':           'y',
            'hero.tagline':       '3 años transformando ideas en productos digitales descentralizados',
            'hero.cta.projects':  'Ver Proyectos',
            'hero.cta.contact':   'Contacto',

            'about.title':          'Sobre Mí',
            'about.p1':             'Soy un desarrollador front-end especializado en',
            'about.p1.highlight':   'Web3 y tecnologías blockchain',
            'about.p1.continue':    '. Con 3 años de experiencia, he trabajado en el desarrollo de aplicaciones descentralizadas (dApps), smart contracts y experiencias de usuario modernas.',
            'about.p2':             'Mi enfoque combina',
            'about.p2.highlight':   'desarrollo técnico sólido',
            'about.p2.continue':    'con un profundo entendimiento de la experiencia del usuario. He liderado proyectos desde la conceptualización hasta el deployment, trabajando con equipos multifuncionales en entornos ágiles.',
            'about.p3':             'Además de mi experiencia en desarrollo, cuento con formación técnica en electricidad y electrónica, lo que me proporciona una perspectiva única para entender sistemas complejos y resolver problemas técnicos desafiantes.',

            'skills.title':    'Stack Tecnológico',
            'skills.frontend': 'Front-end',
            'skills.web3':     'Web3 & Blockchain',
            'skills.tools':    'Herramientas',

            'projects.title':     'Proyectos Destacados',
            'projects.loadMore':  'Ver todos los proyectos',
            'projects.showLess':  'Mostrar menos',
            'projects.role':      'Rol',
            'projects.private':   'Privado',

            'featured.metalorian-swap.title':       'Metalorian Swap',
            'featured.metalorian-swap.description': 'Plataforma descentralizada para intercambio de stablecoins en blockchain',
            'featured.metalorian-swap.role':        'Front-end & Smart Contract Developer',
            'featured.metasender.title':            'MetaSender',
            'featured.metasender.description':      'Solución para múltiples transferencias blockchain en una sola transacción',
            'featured.metasender.role':             'Full-stack Web3 Developer',
            'featured.metalorian-nfts.title':       'MetalorianNFTs',
            'featured.metalorian-nfts.description': 'Marketplace para intercambio de tokens no fungibles',
            'featured.metalorian-nfts.role':        'Front-end & Blockchain Developer',

            'company.ciento.name':   'Ciento Por Ciento Comunicaciones',
            'company.metalorian.name': 'The Metalorian DAO',
            'company.xvortex.name':  'XVORTEX',
            'company.external.name': 'Proyectos Externos',

            'project.ciento.website.title':                'Página Web Corporativa',
            'project.ciento.website.description':          'Desarrollo del sitio web principal de la empresa con React.js y diseño responsivo',
            'project.metalorian.website.title':            'Página Web de The Metalorian DAO',
            'project.metalorian.website.description':      'Desarrollo del sitio web principal de la organización descentralizada',
            'project.metalorian.metasender-contract.title':       'MetaSender Contract',
            'project.metalorian.metasender-contract.description': 'Smart contract para transferencias múltiples en una sola transacción',
            'project.metalorian.metasender-web.title':            'MetaSender - Página Web',
            'project.metalorian.metasender-web.description':      'Interfaz web para interactuar con el contrato MetaSender',
            'project.metalorian.nft-contract.title':              'Contrato NFT (proyecto privado)',
            'project.metalorian.nft-contract.description':        'Desarrollo de contrato inteligente ERC-721 para colección NFT privada',
            'project.metalorian.nft-minting.title':               'Página de Minting NFT (proyecto privado)',
            'project.metalorian.nft-minting.description':         'Interfaz web para minteo de NFTs del proyecto privado',
            'project.metalorian.swap-contract.title':             'Metalorian Stable Coin Swap (Contrato)',
            'project.metalorian.swap-contract.description':       'Smart contract para intercambio automatizado de stablecoins',
            'project.metalorian.swap-api.title':                  'The Metalorian Swap API',
            'project.metalorian.swap-api.description':            'API backend para obtener precios y datos del swap en tiempo real',
            'project.metalorian.swap-web.title':                  'Metalorian Stable Coin (Página Web)',
            'project.metalorian.swap-web.description':            'Interfaz de usuario para el intercambio de stablecoins',
            'project.metalorian.dao-token.title':                 'Contrato Token ERC-20 de la DAO',
            'project.metalorian.dao-token.description':           'Token de gobernanza para la organización descentralizada',
            'project.metalorian.nft-swap-contract.title':         'The Metalorian NFT Swap (Contrato)',
            'project.metalorian.nft-swap-contract.description':   'Smart contract para intercambio peer-to-peer de NFTs',
            'project.metalorian.nft-swap-web.title':              'The Metalorian NFT Swap (Página Web)',
            'project.metalorian.nft-swap-web.description':        'Marketplace descentralizado para trading de NFTs',
            'project.metalorian.chatbot.title':                   'Chatbot Corporativo',
            'project.metalorian.chatbot.description':             'Bot automatizado para recordatorios de pagos y gestión interna',
            'project.xvortex.website.title':                      'Página Web de XVORTEX',
            'project.xvortex.website.description':                'Sitio web corporativo con enfoque en experiencia de usuario',
            'project.xvortex.no-vaseline.title':                  'Página Web No Vaseline',
            'project.xvortex.no-vaseline.description':            'Campaña alternativa desarrollada para XVORTEX con diseño moderno',
            'project.xvortex.nft-minting.title':                  'XVORTEX NFT Minting Page',
            'project.xvortex.nft-minting.description':            'Plataforma para compra y minteo de NFTs de XVORTEX',
            'project.external.marketplace.title':                 'Marketplace de Ropa',
            'project.external.marketplace.description':           'E-commerce completo con frontend y backend, gestión de productos y pagos',
            'project.external.living-stones.title':               'Living Stones Projects',
            'project.external.living-stones.description':         'Serie de proyectos web desarrollados para esta fundación sin fines de lucro',

            'experience.title': 'Experiencia',

            'job1.role':         'Front-end Developer',
            'job1.company':      'Ciento Por Ciento Comunicaciones',
            'job1.period':       'Jul 2024 - Presente',
            'job1.location':     'Bogotá, Colombia',
            'job1.achievement1': 'Desarrollo de aplicaciones web con React.js y Figma',
            'job1.achievement2': 'Mantenimiento y mejoras de apps existentes',
            'job1.achievement3': 'Colaboración con equipos de diseño para interfaces responsivas',
            'job2.role':         'Web3 & Front-end Developer',
            'job2.company':      'The Metalorian DAO',
            'job2.period':       'Ago 2022 - Mayo 2023',
            'job2.location':     'Bucaramanga, Colombia',
            'job2.achievement1': 'Desarrollo de dApps en entorno Web 3.0',
            'job2.achievement2': 'Implementación de smart contracts con Solidity',
            'job2.achievement3': 'Creación de 12 productos blockchain exitosos',
            'job3.role':         'Front-end Developer',
            'job3.company':      'XVORTEX',
            'job3.period':       'Feb 2022 - Jul 2022',
            'job3.location':     'Bucaramanga, Colombia',
            'job3.achievement1': 'Desarrollo de interfaces enfocadas en UX',
            'job3.achievement2': 'Code reviews y procesos de mejora continua',
            'job3.achievement3': 'Optimización basada en feedback de usuarios',

            'contact.title':    'Contacto',
            'contact.subtitle': '¿Tienes un proyecto en mente? ¡Trabajemos juntos!',
            'contact.email':    'Email',
            'contact.github':   'GitHub',
            'contact.linkedin': 'LinkedIn',

            'footer.text': 'Desarrollado con Next.js y TypeScript.',
        },
        en: {
            ...sharedEn,

            'nav.home':       'Home',
            'nav.about':      'About',
            'nav.skills':     'Skills',
            'nav.projects':   'Projects',
            'nav.experience': 'Experience',
            'nav.contact':    'Contact',

            'hero.subtitle':      'Web3 & Front-end Developer',
            'hero.title':         'Jorge López',
            'hero.description':   'I build modern web experiences and blockchain solutions with',
            'hero.and':           'and',
            'hero.tagline':       '3 years transforming ideas into decentralized digital products',
            'hero.cta.projects':  'View Projects',
            'hero.cta.contact':   'Contact',

            'about.title':          'About Me',
            'about.p1':             'I am a front-end developer specialized in',
            'about.p1.highlight':   'Web3 and blockchain technologies',
            'about.p1.continue':    '. With 3 years of experience, I have worked on developing decentralized applications (dApps), smart contracts, and modern user experiences.',
            'about.p2':             'My approach combines',
            'about.p2.highlight':   'solid technical development',
            'about.p2.continue':    'with a deep understanding of user experience. I have led projects from conceptualization to deployment, working with cross-functional teams in agile environments.',
            'about.p3':             'In addition to my development experience, I have technical training in electricity and electronics, which provides me with a unique perspective to understand complex systems and solve challenging technical problems.',

            'skills.title':    'Tech Stack',
            'skills.frontend': 'Front-end',
            'skills.web3':     'Web3 & Blockchain',
            'skills.tools':    'Tools',

            'projects.title':    'Featured Projects',
            'projects.loadMore': 'View all projects',
            'projects.showLess': 'Show less',
            'projects.role':     'Role',
            'projects.private':  'Private',

            'featured.metalorian-swap.title':       'Metalorian Swap',
            'featured.metalorian-swap.description': 'Decentralized platform for stablecoin exchange on blockchain',
            'featured.metalorian-swap.role':        'Front-end & Smart Contract Developer',
            'featured.metasender.title':            'MetaSender',
            'featured.metasender.description':      'Solution for multiple blockchain transfers in a single transaction',
            'featured.metasender.role':             'Full-stack Web3 Developer',
            'featured.metalorian-nfts.title':       'MetalorianNFTs',
            'featured.metalorian-nfts.description': 'Marketplace for non-fungible token exchange',
            'featured.metalorian-nfts.role':        'Front-end & Blockchain Developer',

            'company.ciento.name':   'Ciento Por Ciento Comunicaciones',
            'company.metalorian.name': 'The Metalorian DAO',
            'company.xvortex.name':  'XVORTEX',
            'company.external.name': 'External Projects',

            'project.ciento.website.title':                'Corporate Website',
            'project.ciento.website.description':          'Development of the company\'s main website with React.js and responsive design',
            'project.metalorian.website.title':            'The Metalorian DAO Website',
            'project.metalorian.website.description':      'Development of the main website for the decentralized organization',
            'project.metalorian.metasender-contract.title':       'MetaSender Contract',
            'project.metalorian.metasender-contract.description': 'Smart contract for multiple transfers in a single transaction',
            'project.metalorian.metasender-web.title':            'MetaSender - Web Page',
            'project.metalorian.metasender-web.description':      'Web interface to interact with MetaSender contract',
            'project.metalorian.nft-contract.title':              'NFT Contract (private project)',
            'project.metalorian.nft-contract.description':        'ERC-721 smart contract development for private NFT collection',
            'project.metalorian.nft-minting.title':               'NFT Minting Page (private project)',
            'project.metalorian.nft-minting.description':         'Web interface for minting NFTs from private project',
            'project.metalorian.swap-contract.title':             'Metalorian Stable Coin Swap (Contract)',
            'project.metalorian.swap-contract.description':       'Smart contract for automated stablecoin exchange',
            'project.metalorian.swap-api.title':                  'The Metalorian Swap API',
            'project.metalorian.swap-api.description':            'Backend API for real-time swap prices and data',
            'project.metalorian.swap-web.title':                  'Metalorian Stable Coin (Web Page)',
            'project.metalorian.swap-web.description':            'User interface for stablecoin exchange',
            'project.metalorian.dao-token.title':                 'DAO\'s ERC-20 Token Contract',
            'project.metalorian.dao-token.description':           'Governance token for the decentralized organization',
            'project.metalorian.nft-swap-contract.title':         'The Metalorian NFT Swap (Contract)',
            'project.metalorian.nft-swap-contract.description':   'Smart contract for peer-to-peer NFT exchange',
            'project.metalorian.nft-swap-web.title':              'The Metalorian NFT Swap (Web Page)',
            'project.metalorian.nft-swap-web.description':        'Decentralized marketplace for NFT trading',
            'project.metalorian.chatbot.title':                   'Corporate Chatbot',
            'project.metalorian.chatbot.description':             'Automated bot for payment reminders and internal management',
            'project.xvortex.website.title':                      'XVORTEX Website',
            'project.xvortex.website.description':                'Corporate website focused on user experience',
            'project.xvortex.no-vaseline.title':                  'No Vaseline Website',
            'project.xvortex.no-vaseline.description':            'Alternative campaign developed for XVORTEX with modern design',
            'project.xvortex.nft-minting.title':                  'XVORTEX NFT Minting Page',
            'project.xvortex.nft-minting.description':            'Platform for purchasing and minting XVORTEX NFTs',
            'project.external.marketplace.title':                 'Clothing Marketplace',
            'project.external.marketplace.description':           'Full e-commerce with frontend and backend, product and payment management',
            'project.external.living-stones.title':               'Living Stones Projects',
            'project.external.living-stones.description':         'Series of web projects developed for this non-profit foundation',

            'experience.title': 'Experience',

            'job1.role':         'Front-end Developer',
            'job1.company':      'Ciento Por Ciento Comunicaciones',
            'job1.period':       'Jul 2024 - Present',
            'job1.location':     'Bogotá, Colombia',
            'job1.achievement1': 'Web application development with React.js and Figma',
            'job1.achievement2': 'Maintenance and improvements of existing apps',
            'job1.achievement3': 'Collaboration with design teams for responsive interfaces',
            'job2.role':         'Web3 & Front-end Developer',
            'job2.company':      'The Metalorian DAO',
            'job2.period':       'Aug 2022 - May 2023',
            'job2.location':     'Bucaramanga, Colombia',
            'job2.achievement1': 'dApps development in Web 3.0 environment',
            'job2.achievement2': 'Smart contract implementation with Solidity',
            'job2.achievement3': 'Creation of 12 successful blockchain products',
            'job3.role':         'Front-end Developer',
            'job3.company':      'XVORTEX',
            'job3.period':       'Feb 2022 - July 2022',
            'job3.location':     'Bucaramanga, Colombia',
            'job3.achievement1': 'UX-focused interface development',
            'job3.achievement2': 'Code reviews and continuous improvement processes',
            'job3.achievement3': 'Optimization based on user feedback',

            'contact.title':    'Contact',
            'contact.subtitle': 'Have a project in mind? Let\'s work together!',
            'contact.email':    'Email',
            'contact.github':   'GitHub',
            'contact.linkedin': 'LinkedIn',

            'footer.text': 'Built with Next.js and TypeScript.',
        },
    },

    juan: {
        es: {
            ...sharedEs,

            'nav.home':       'Inicio',
            'nav.about':      'Sobre mí',
            'nav.skills':     'Habilidades',
            'nav.experience': 'Experiencia',
            'nav.contact':    'Contacto',

            'hero.subtitle':     'Técnico en Sistemas & Atención al Cliente',
            'hero.title':        'Juan David Pardo López',
            'hero.description':  'Especialista en gestión comercial y atención al cliente',
            'hero.and':          'con',
            'hero.tagline':      'Experiencia en call center, ventas y telecomunicaciones',
            'hero.cta.projects': 'Ver Experiencia',
            'hero.cta.contact':  'Contacto',

            'about.title':        'Sobre Mí',
            'about.p1':           'Soy bachiller con técnico del SENA enfatizado en',
            'about.p1.highlight': 'lenguaje de programación Java, electricidad y electrónica',
            'about.p1.continue':  '. He participado y estudiado en programas como CISCO, obteniendo dos diplomas en instrucción de redes.',
            'about.p2':           'Tengo',
            'about.p2.highlight': 'habilidades de liderazgo y manejo de equipos',
            'about.p2.continue':  '. Me caracterizo por ser organizado y servicial, siempre dispuesto a colocar todo mi potencial profesional y humanístico al servicio del equipo.',
            'about.p3':           'Me encantan los retos, los proyectos nuevos y la innovación en todo ámbito. Estoy habituado a un nivel de exigencia alto y a trabajar por el cumplimiento de objetivos y metas, tanto en equipo como de forma individual.',

            'skills.title':    'Competencias',
            'skills.frontend': 'Ofimática',
            'skills.web3':     'Redes & Certificaciones',
            'skills.tools':    'Atención al Cliente',

            'experience.title': 'Experiencia',

            'job1.role':         'Coordinador WhatsApp Ventas Hogar',
            'job1.company':      'BRM S.A.S',
            'job1.period':       'Nov 2025 - Feb 2026',
            'job1.location':     'Colombia',
            'job1.achievement1': 'Coordinación de equipo de ventas vía WhatsApp',
            'job1.achievement2': 'Gestión de clientes y soluciones de hogar',
            'job1.achievement3': 'Mejora de procesos comerciales',
            'job2.role':         'Coordinador Ventas Claro Ecuador',
            'job2.company':      'BRM S.A.S',
            'job2.period':       'Oct 2025 - Nov 2025',
            'job2.location':     'Colombia',
            'job2.achievement1': 'Ventas de hogar, móvil y TyT',
            'job2.achievement2': 'Coordinación de equipo comercial',
            'job2.achievement3': 'Cumplimiento de metas de ventas',
            'job3.role':         'Coordinador Claro Filtro',
            'job3.company':      'BRM S.A.S',
            'job3.period':       'Jul 2025 - Sep 2025',
            'job3.location':     'Colombia',
            'job3.achievement1': 'Atención a clientes y retención',
            'job3.achievement2': 'Venta cruzada de servicios',
            'job3.achievement3': 'Gestión de satisfacción del cliente',

            'contact.title':    'Contacto',
            'contact.subtitle': '¿Buscas un profesional comprometido? ¡Hablemos!',
            'contact.email':    'Email',
            'contact.github':   'GitHub',
            'contact.linkedin': 'LinkedIn',

            'footer.text': 'Desarrollado con Next.js y TypeScript.',
        },
        en: {
            ...sharedEn,

            'nav.home':       'Home',
            'nav.about':      'About',
            'nav.skills':     'Skills',
            'nav.experience': 'Experience',
            'nav.contact':    'Contact',

            'hero.subtitle':     'Systems Technician & Customer Service',
            'hero.title':        'Juan David Pardo López',
            'hero.description':  'Specialist in commercial management and customer service',
            'hero.and':          'with',
            'hero.tagline':      'Experience in call center, sales and telecommunications',
            'hero.cta.projects': 'View Experience',
            'hero.cta.contact':  'Contact',

            'about.title':        'About Me',
            'about.p1':           'I am a high school graduate with a SENA technical degree focused on',
            'about.p1.highlight': 'Java programming, electricity and electronics',
            'about.p1.continue':  '. I have participated and studied in programs such as CISCO, obtaining two diplomas in network instruction.',
            'about.p2':           'I have',
            'about.p2.highlight': 'leadership and team management skills',
            'about.p2.continue':  '. I am characterized by being organized and helpful, always willing to put all my professional and humanistic potential at the service of the team.',
            'about.p3':           'I love challenges, new projects and innovation in all areas. I am used to a high level of demand and working to meet objectives and goals, both as a team and individually.',

            'skills.title':    'Skills',
            'skills.frontend': 'Office Suite',
            'skills.web3':     'Networks & Certifications',
            'skills.tools':    'Customer Service',

            'experience.title': 'Experience',

            'job1.role':         'WhatsApp Home Sales Coordinator',
            'job1.company':      'BRM S.A.S',
            'job1.period':       'Nov 2025 - Feb 2026',
            'job1.location':     'Colombia',
            'job1.achievement1': 'WhatsApp sales team coordination',
            'job1.achievement2': 'Client management and home solutions',
            'job1.achievement3': 'Commercial process improvement',
            'job2.role':         'Claro Ecuador Sales Coordinator',
            'job2.company':      'BRM S.A.S',
            'job2.period':       'Oct 2025 - Nov 2025',
            'job2.location':     'Colombia',
            'job2.achievement1': 'Home, mobile and TyT sales',
            'job2.achievement2': 'Commercial team coordination',
            'job2.achievement3': 'Sales targets achievement',
            'job3.role':         'Claro Filter Coordinator',
            'job3.company':      'BRM S.A.S',
            'job3.period':       'Jul 2025 - Sep 2025',
            'job3.location':     'Colombia',
            'job3.achievement1': 'Customer service and retention',
            'job3.achievement2': 'Cross-selling services',
            'job3.achievement3': 'Customer satisfaction management',

            'contact.title':    'Contact',
            'contact.subtitle': 'Looking for a committed professional? Let\'s talk!',
            'contact.email':    'Email',
            'contact.github':   'GitHub',
            'contact.linkedin': 'LinkedIn',

            'footer.text': 'Built with Next.js and TypeScript.',
        },
    },
};

export default LanguageProvider;