'use client'
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';

const Portfolio = () => {

    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Navigation */}

            <Header activeSection={activeSection} onNavigate={scrollToSection} />

            {/* Hero Section */}

            <Hero onNavigate={scrollToSection} />

            {/* About Section */}

            <About />

            {/* Skills Section */}

            <Skills />

            {/* Projects Section */}

            <Projects />

            {/* Experience Section */}

            <Experience />


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
                            href="https://github.com/JorgeLpzGnz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/jorge-lopez-gonzalez-443940247/"
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