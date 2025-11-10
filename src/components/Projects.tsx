// components/Projects.tsx
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface Project {
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  roleKey?: string;
  isPrivate?: boolean;
}

interface CompanyProjects {
  companyKey: string;
  period: string;
  projects: Project[];
}

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Proyectos destacados (siempre visibles)
  const featuredProjects: Project[] = [
    {
      titleKey: 'featured.metalorian-swap.title',
      descriptionKey: 'featured.metalorian-swap.description',
      tech: ['React.js', 'Solidity', 'Ethers.js', 'Smart Contracts'],
      roleKey: 'featured.metalorian-swap.role',
    },
    {
      titleKey: 'featured.metasender.title',
      descriptionKey: 'featured.metasender.description',
      tech: ['React.js', 'Solidity', 'Ethers.js'],
      roleKey: 'featured.metasender.role',
    },
    {
      titleKey: 'featured.metalorian-nfts.title',
      descriptionKey: 'featured.metalorian-nfts.description',
      tech: ['React.js', 'Solidity', 'ERC-721', 'IPFS'],
      roleKey: 'featured.metalorian-nfts.role',
    }
  ];

  // Todos los proyectos organizados por empresa
  const allCompanyProjects: CompanyProjects[] = [
    {
      companyKey: 'company.ciento.name',
      period: t('job1.period'),
      projects: [
        {
          titleKey: 'project.ciento.website.title',
          descriptionKey: 'project.ciento.website.description',
          tech: ['React.js', 'Figma', 'Tailwind CSS', 'Responsive Design'],
        }
      ]
    },
    {
      companyKey: 'company.metalorian.name',
      period: t('job2.period'),
      projects: [
        {
          titleKey: 'project.metalorian.website.title',
          descriptionKey: 'project.metalorian.website.description',
          tech: ['React.js', 'Ethers.js', 'Responsive Design'],
        },
        {
          titleKey: 'project.metalorian.metasender-contract.title',
          descriptionKey: 'project.metalorian.metasender-contract.description',
          tech: ['Solidity', 'Hardhat', 'OpenZeppelin'],
        },
        {
          titleKey: 'project.metalorian.metasender-web.title',
          descriptionKey: 'project.metalorian.metasender-web.description',
          tech: ['React.js', 'Ethers.js', 'Ethers.js'],
        },
        {
          titleKey: 'project.metalorian.nft-contract.title',
          descriptionKey: 'project.metalorian.nft-contract.description',
          tech: ['Solidity', 'ERC-721', 'OpenZeppelin'],
          isPrivate: true,
        },
        {
          titleKey: 'project.metalorian.nft-minting.title',
          descriptionKey: 'project.metalorian.nft-minting.description',
          tech: ['React.js', 'Ethers.js', 'IPFS'],
          isPrivate: true,
        },
        {
          titleKey: 'project.metalorian.swap-contract.title',
          descriptionKey: 'project.metalorian.swap-contract.description',
          tech: ['Solidity', 'DeFi', 'Automated Market Maker'],
        },
        {
          titleKey: 'project.metalorian.swap-api.title',
          descriptionKey: 'project.metalorian.swap-api.description',
          tech: ['Node.js', 'Express', 'Ethers.js'],
        },
        {
          titleKey: 'project.metalorian.swap-web.title',
          descriptionKey: 'project.metalorian.swap-web.description',
          tech: ['React.js', 'Ethers.js', 'Chart.js'],
        },
        {
          titleKey: 'project.metalorian.dao-token.title',
          descriptionKey: 'project.metalorian.dao-token.description',
          tech: ['Solidity', 'ERC-20', 'OpenZeppelin'],
        },
        {
          titleKey: 'project.metalorian.nft-swap-contract.title',
          descriptionKey: 'project.metalorian.nft-swap-contract.description',
          tech: ['Solidity', 'ERC-721', 'Smart Contracts'],
        },
        {
          titleKey: 'project.metalorian.nft-swap-web.title',
          descriptionKey: 'project.metalorian.nft-swap-web.description',
          tech: ['React.js', 'Ethers.js', 'IPFS'],
        },
        {
          titleKey: 'project.metalorian.chatbot.title',
          descriptionKey: 'project.metalorian.chatbot.description',
          tech: ['Node.js', 'Telegram API', 'Automation'],
        }
      ]
    },
    {
      companyKey: 'company.xvortex.name',
      period: t('job3.period'),
      projects: [
        {
          titleKey: 'project.xvortex.website.title',
          descriptionKey: 'project.xvortex.website.description',
          tech: ['React.js', 'JavaScript', 'CSS3'],
        },
        {
          titleKey: 'project.xvortex.no-vaseline.title',
          descriptionKey: 'project.xvortex.no-vaseline.description',
          tech: ['React.js', 'Animation', 'Responsive Design'],
        },
        {
          titleKey: 'project.xvortex.nft-minting.title',
          descriptionKey: 'project.xvortex.nft-minting.description',
          tech: ['React.js', 'Ethers.js', 'Solidity', 'IPFS'],
        }
      ]
    },
    {
      companyKey: 'company.external.name',
      period: 'Jun 2025 - Nov 2025',
      projects: [
        {
          titleKey: 'project.external.marketplace.title',
          descriptionKey: 'project.external.marketplace.description',
          tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
        },
        {
          titleKey: 'project.external.living-stones.title',
          descriptionKey: 'project.external.living-stones.description',
          tech: ['Next.js', 'Node.js', 'Responsive Design'],
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h2>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-400">{t(project.titleKey)}</h3>
              <p className="text-gray-300 mb-4">{t(project.descriptionKey)}</p>
              
              {project.roleKey && (
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-semibold">{t('projects.role')}:</span>
                  <p className="text-sm text-purple-300">{t(project.roleKey)}</p>
                </div>
              )}
              
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

        {/* Load More Section */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 hover:border-blue-400 rounded-lg font-semibold transition-all hover:scale-105"
          >
            {showAll ? t('projects.showLess') : t('projects.loadMore')}
            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* All Projects by Company */}
        {showAll && (
          <div className="space-y-12 animate-fadeIn">
            {allCompanyProjects.map((companyData, companyIdx) => (
              <div key={companyIdx} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                {/* Company Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                  <Briefcase className="text-blue-400" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{t(companyData.companyKey)}</h3>
                    <p className="text-sm text-gray-400">{companyData.period}</p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {companyData.projects.map((project, projectIdx) => (
                    <div
                      key={projectIdx}
                      className="bg-slate-800/50 rounded-lg p-5 border border-slate-700 hover:border-purple-500/50 transition-colors relative"
                    >
                      {project.isPrivate && (
                        <span className="absolute top-3 right-3 px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          {t('projects.private')}
                        </span>
                      )}
                      
                      <h4 className="text-lg font-bold text-gray-200 mb-2 pr-16">{t(project.titleKey)}</h4>
                      <p className="text-sm text-gray-400 mb-4">{t(project.descriptionKey)}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-slate-700/70 text-xs rounded text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects