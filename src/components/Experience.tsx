// components/Experience.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ExperienceItem {
    roleKey: string;
    companyKey: string;
    periodKey: string;
    locationKey: string;
    achievementKeys: string[];
}

const Experience: React.FC = () => {

    const { t } = useLanguage();

    const experience: ExperienceItem[] = [
        {
            roleKey: 'job1.role',
            companyKey: 'job1.company',
            periodKey: 'job1.period',
            locationKey: 'job1.location',
            achievementKeys: ['job1.achievement1', 'job1.achievement2', 'job1.achievement3']
        },
        {
            roleKey: 'job2.role',
            companyKey: 'job2.company',
            periodKey: 'job2.period',
            locationKey: 'job2.location',
            achievementKeys: ['job2.achievement1', 'job2.achievement2', 'job2.achievement3']
        },
        {
            roleKey: 'job3.role',
            companyKey: 'job3.company',
            periodKey: 'job3.period',
            locationKey: 'job3.location',
            achievementKeys: ['job3.achievement1', 'job3.achievement2', 'job3.achievement3']
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-slate-800/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">{t('experience.title')}</h2>
                <div className="space-y-8">
                    {experience.map((exp, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-400">{t(exp.roleKey)}</h3>
                                    <p className="text-lg text-gray-300">{t(exp.companyKey)}</p>
                                    <p className="text-sm text-gray-400">{t(exp.locationKey)}</p>
                                </div>
                                <span className="text-purple-400 font-semibold mt-2 md:mt-0">{t(exp.periodKey)}</span>
                            </div>
                            <ul className="space-y-2">
                                {exp.achievementKeys.map((key, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-blue-400 mt-1">▹</span>
                                        <span>{t(key)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
    
};

export default Experience