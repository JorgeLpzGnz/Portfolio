import { useLanguage } from "@/context/LanguageContext";


const About = () => {

    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('about.title')}</h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t('about.p1')}<span className="text-blue-400 font-semibold"> {t('about.p1.highlight')}</span>{t('about.p1.continue')}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t('about.p2')}<span className="text-purple-400 font-semibold"> {t('about.p2.highlight')}</span> {t('about.p2.continue')}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.p3')}
                </p>
            </div>
            </div>
        </section>
    )
}

export default About