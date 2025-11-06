import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code2, Blocks, Palette, GitBranch } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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

  const skills = {
    frontend: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'JavaScript ES2023', 'Tailwind CSS'],
    web3: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'dApps', 'ERC-20/721'],
    tools: ['Git/GitHub', 'Figma', 'Node.js', 'Responsive Design', 'UI/UX']
  };

  const projects = [
    {
      title: 'Metalorian Swap',
      description: 'Plataforma descentralizada para intercambio de stablecoins en blockchain',
      tech: ['React.js', 'Solidity', 'Web3.js', 'Smart Contracts'],
      role: 'Front-end & Smart Contract Developer',
      highlights: ['Interfaz intuitiva para swaps', 'Integración con múltiples wallets', 'Smart contracts optimizados para gas']
    },
    {
      title: 'MetaSender',
      description: 'Solución para múltiples transferencias blockchain en una sola transacción',
      tech: ['React.js', 'Solidity', 'Ethers.js'],
      role: 'Full-stack Web3 Developer',
      highlights: ['Reducción de costos de gas', 'Batch transactions', 'UX simplificada para transferencias masivas']
    },
    {
      title: 'MetalorianNFTs',
      description: 'Marketplace para intercambio de tokens no fungibles',
      tech: ['React.js', 'Solidity', 'ERC-721', 'IPFS'],
      role: 'Front-end & Blockchain Developer',
      highlights: ['Minting de NFTs', 'Sistema de trading peer-to-peer', 'Galería interactiva']
    }
  ];

  const experience = [
    {
      role: 'Front-end Developer',
      company: 'Ciento Por Ciento Comunicaciones',
      period: 'Jul 2024 - Presente',
      location: 'Bogotá, Colombia',
      achievements: [
        'Desarrollo de aplicaciones web con React.js y Figma',
        'Mantenimiento y mejoras de apps existentes',
        'Colaboración con equipos de diseño para interfaces responsivas'
      ]
    },
    {
      role: 'Web3 & Front-end Developer',
      company: 'The Metalorian DAO',
      period: 'Ago 2022 - 2023',
      location: 'Bucaramanga, Colombia',
      achievements: [
        'Desarrollo de dApps en entorno Web 3.0',
        'Implementación de smart contracts con Solidity',
        'Creación de 3 productos blockchain exitosos'
      ]
    },
    {
      role: 'Front-end Developer',
      company: 'XVORTEX',
      period: 'Feb 2022 - Sep 2022',
      location: 'Bucaramanga, Colombia',
      achievements: [
        'Desarrollo de interfaces enfocadas en UX',
        'Code reviews y procesos de mejora continua',
        'Optimización basada en feedback de usuarios'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              JL
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
            Construyo experiencias web modernas y soluciones blockchain con <span className="text-blue-400 font-semibold">React</span> y <span className="text-purple-400 font-semibold">Solidity</span>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            3 años transformando ideas en productos digitales descentralizados
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Sobre Mí</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Soy un desarrollador front-end especializado en <span className="text-blue-400 font-semibold">Web3 y tecnologías blockchain</span>. Con casi 3 años de experiencia, he trabajado en el desarrollo de aplicaciones descentralizadas (dApps), smart contracts y experiencias de usuario modernas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Mi enfoque combina <span className="text-purple-400 font-semibold">desarrollo técnico sólido</span> con un profundo entendimiento de la experiencia del usuario. He liderado proyectos desde la conceptualización hasta el deployment, trabajando con equipos multifuncionales en entornos ágiles.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Además de mi experiencia en desarrollo, cuento con formación técnica en electricidad y electrónica, lo que me proporciona una perspectiva única para entender sistemas complejos y resolver problemas técnicos desafiantes.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Stack Tecnológico</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-400" size={28} />
                <h3 className="text-xl font-semibold">Front-end</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Blocks className="text-purple-400" size={28} />
                <h3 className="text-xl font-semibold">Web3 & Blockchain</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.web3.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-pink-400" size={28} />
                <h3 className="text-xl font-semibold">Herramientas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-semibold">Rol:</span>
                  <p className="text-sm text-purple-300">{project.role}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-semibold mb-2 block">Highlights:</span>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experiencia</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-purple-400 font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contacto</h2>
          <p className="text-xl text-gray-300 mb-12">
            ¿Tienes un proyecto en mente? ¡Trabajemos juntos!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:geolg763@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://github.com/jorgelopez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jorgelopez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700 text-center text-gray-400">
        <p>© 2024 Jorge López. Desarrollado con Next.js y TypeScript.</p>
      </footer>
    </div>
  );
};

export default Portfolio;