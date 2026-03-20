// components/Skills.tsx
'use client';

import React from 'react';
import { Code2, Blocks, Palette, Monitor, Network, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Skills: React.FC = () => {
  const { t, profile } = useLanguage();
  
  // Skills para Jorge (programador Web3)
  const jorgeSkills = {
    frontend: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'JavaScript ES2023', 'Tailwind CSS'],
    web3: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'dApps', 'ERC-20/721'],
    tools: ['Git/GitHub', 'Figma', 'Node.js', 'Responsive Design', 'UI/UX']
  };

  // Skills para Juan David (atención al cliente y telecomunicaciones)
  const juanSkills = {
    frontend: ['Microsoft Word', 'Microsoft Excel', 'PowerPoint', 'Windows', 'Office 365', 'Google Workspace'],
    web3: ['CISCO Networking', 'CISCO Cybersecurity', 'Redes LAN/WAN', 'Arduino', 'Telecomunicaciones', 'Soporte Técnico'],
    tools: ['Atención al Cliente', 'Ventas Telefónicas', 'Liderazgo de Equipos', 'CRM', 'Call Center', 'WhatsApp Business', 'Retención', 'Venta Cruzada']
  };

  // Seleccionar skills según el perfil
  const currentSkills = profile === 'jorge' ? jorgeSkills : juanSkills;

  // Iconos según perfil
  const icons = profile === 'jorge' 
    ? { frontend: Code2, web3: Blocks, tools: Palette }
    : { frontend: Monitor, web3: Network, tools: Users };

  // Colores según perfil
  const colors = profile === 'jorge'
    ? {
        frontend: { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'hover:border-blue-500/50', icon: 'text-blue-400' },
        web3: { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'hover:border-purple-500/50', icon: 'text-purple-400' },
        tools: { bg: 'bg-pink-500/20', text: 'text-pink-300', border: 'hover:border-pink-500/50', icon: 'text-pink-400' }
      }
    : {
        frontend: { bg: 'bg-green-500/20', text: 'text-green-300', border: 'hover:border-green-500/50', icon: 'text-green-400' },
        web3: { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'hover:border-cyan-500/50', icon: 'text-cyan-400' },
        tools: { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'hover:border-orange-500/50', icon: 'text-orange-400' }
      };

  const FrontendIcon = icons.frontend;
  const Web3Icon = icons.web3;
  const ToolsIcon = icons.tools;

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Primera categoría */}
          <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 ${colors.frontend.border} transition-colors`}>
            <div className="flex items-center gap-3 mb-4">
              <FrontendIcon className={colors.frontend.icon} size={28} />
              <h3 className="text-xl font-semibold">{t('skills.frontend')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentSkills.frontend.map(skill => (
                <span key={skill} className={`px-3 py-1 ${colors.frontend.bg} ${colors.frontend.text} rounded-full text-sm`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Segunda categoría */}
          <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 ${colors.web3.border} transition-colors`}>
            <div className="flex items-center gap-3 mb-4">
              <Web3Icon className={colors.web3.icon} size={28} />
              <h3 className="text-xl font-semibold">{t('skills.web3')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentSkills.web3.map(skill => (
                <span key={skill} className={`px-3 py-1 ${colors.web3.bg} ${colors.web3.text} rounded-full text-sm`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tercera categoría */}
          <div className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 ${colors.tools.border} transition-colors`}>
            <div className="flex items-center gap-3 mb-4">
              <ToolsIcon className={colors.tools.icon} size={28} />
              <h3 className="text-xl font-semibold">{t('skills.tools')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentSkills.tools.map(skill => (
                <span key={skill} className={`px-3 py-1 ${colors.tools.bg} ${colors.tools.text} rounded-full text-sm`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills