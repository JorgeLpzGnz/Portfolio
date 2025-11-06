'use client'
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Portfolio = () => {

    const scrollToSection = (sectionId: string) => {

        const element = document.getElementById(sectionId);

        if (element) element.scrollIntoView({ behavior: 'smooth' });
        
    };


    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

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

            <Contact/>

        </div>
    );

};

export default Portfolio;