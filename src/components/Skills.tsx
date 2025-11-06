import { useLanguage } from '@/context/LanguageContext';
import { Code2, Blocks, Palette } from 'lucide-react';

const skills = {
    frontend: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'JavaScript ES2023', 'Tailwind CSS'],
    web3: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'dApps', 'ERC-20/721'],
    tools: ['Git/GitHub', 'Figma', 'Node.js', 'Responsive Design', 'UI/UX']
};

const Skills = () => {

    const { t } = useLanguage();
    

    return (
        <section id="skills" className="py-20 px-6 bg-slate-800/30">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('skills.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                    <Code2 className="text-blue-400" size={28} />
                    <h3 className="text-xl font-semibold">{t('skills.frontend')}</h3>
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
                    <h3 className="text-xl font-semibold">{t('skills.web3')}</h3>
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
                    <h3 className="text-xl font-semibold">{t('skills.tools')}</h3>
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
    )
}


export default Skills