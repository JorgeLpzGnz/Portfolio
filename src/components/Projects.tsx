

const projects = [
    {
      title: 'Metalorian Swap',
      description: 'Plataforma descentralizada para intercambio de stablecoins en blockchain',
      tech: ['React.js', 'Solidity', 'Web3.js', 'Smart Contracts'],
      role: 'Front-end & Smart Contract Developer',
      highlights: ['Interfaz intuitiva para swaps', 'Integración con múltiples wallets', 'Smart contracts optimizados para gas']
    },
    {
      title: 'MetaSender',
      description: 'Solución para múltiples transferencias blockchain en una sola transacción',
      tech: ['React.js', 'Solidity', 'Ethers.js'],
      role: 'Full-stack Web3 Developer',
      highlights: ['Reducción de costos de gas', 'Batch transactions', 'UX simplificada para transferencias masivas']
    },
    {
      title: 'MetalorianNFTs',
      description: 'Marketplace para intercambio de tokens no fungibles',
      tech: ['React.js', 'Solidity', 'ERC-721', 'IPFS'],
      role: 'Front-end & Blockchain Developer',
      highlights: ['Minting de NFTs', 'Sistema de trading peer-to-peer', 'Galería interactiva']
    }
];

const Projects = () =>       
    <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-semibold">Rol:</span>
                  <p className="text-sm text-purple-300">{project.role}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-semibold mb-2 block">Highlights:</span>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{h}</span>
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


export default Projects