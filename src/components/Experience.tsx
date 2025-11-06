
const experience = [
    {
      role: 'Front-end Developer',
      company: 'Ciento Por Ciento Comunicaciones',
      period: 'Jul 2024 - Presente',
      location: 'Bogotá, Colombia',
      achievements: [
        'Desarrollo de aplicaciones web con React.js y Figma',
        'Mantenimiento y mejoras de apps existentes',
        'Colaboración con equipos de diseño para interfaces responsivas'
      ]
    },
    {
      role: 'Web3 & Front-end Developer',
      company: 'The Metalorian DAO',
      period: 'Ago 2022 - 2023',
      location: 'Bucaramanga, Colombia',
      achievements: [
        'Desarrollo de dApps en entorno Web 3.0',
        'Implementación de smart contracts con Solidity',
        'Creación de 3 productos blockchain exitosos'
      ]
    },
    {
      role: 'Front-end Developer',
      company: 'XVORTEX',
      period: 'Feb 2022 - Sep 2022',
      location: 'Bucaramanga, Colombia',
      achievements: [
        'Desarrollo de interfaces enfocadas en UX',
        'Code reviews y procesos de mejora continua',
        'Optimización basada en feedback de usuarios'
      ]
    }
  ];

const Experience = () => 
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experiencia</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-purple-400 font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
    </section>

export default Experience