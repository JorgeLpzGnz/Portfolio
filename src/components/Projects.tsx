import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Project {
    titleKey: string;
    descriptionKey: string;
    tech: string[];
    roleKey: string;
    highlightKeys: string[];
}

const Projects: React.FC = () => {
    const { t } = useLanguage();

    const projects: Project[] = [
        {
            titleKey: 'project1.title',
            descriptionKey: 'project1.description',
            tech: ['React.js', 'Solidity', 'Web3.js', 'Smart Contracts'],
            roleKey: 'project1.role',
            highlightKeys: ['project1.highlight1', 'project1.highlight2', 'project1.highlight3']
        },
        {
            titleKey: 'project2.title',
            descriptionKey: 'project2.description',
            tech: ['React.js', 'Solidity', 'Ethers.js'],
            roleKey: 'project2.role',
            highlightKeys: ['project2.highlight1', 'project2.highlight2', 'project2.highlight3']
        },
        {
            titleKey: 'project3.title',
            descriptionKey: 'project3.description',
            tech: ['React.js', 'Solidity', 'ERC-721', 'IPFS'],
            roleKey: 'project3.role',
            highlightKeys: ['project3.highlight1', 'project3.highlight2', 'project3.highlight3']
        }
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">{t('projects.title')}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-blue-400">{t(project.titleKey)}</h3>
                            <p className="text-gray-300 mb-4">{t(project.descriptionKey)}</p>

                            <div className="mb-4">
                                <span className="text-sm text-gray-400 font-semibold">{t('projects.role')}:</span>
                                <p className="text-sm text-purple-300">{t(project.roleKey)}</p>
                            </div>

                            <div className="mb-4">
                                <span className="text-sm text-gray-400 font-semibold mb-2 block">{t('projects.highlights')}:</span>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    {project.highlightKeys.map((key, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>{t(key)}</span>
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
    );
};

export default Projects