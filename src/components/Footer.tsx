import { useLanguage } from "@/context/LanguageContext";


const Footer = () => {

    const { t } = useLanguage();

    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 px-6 border-t border-slate-700 text-center text-gray-400 bg-slate-900">
            <p>© { currentYear } Jorge López. {t('footer.text')}</p>
        </footer>
    )
}


export default Footer