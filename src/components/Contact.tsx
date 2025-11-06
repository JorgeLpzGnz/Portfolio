import { Github, Linkedin, Mail } from 'lucide-react';

import { useLanguage } from "@/context/LanguageContext";


const Contact = () => {

    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">{t('contact.title')}</h2>
                <p className="text-xl text-gray-300 mb-12">
                    {t('contact.subtitle')}
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
    )
}

export default Contact