import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Nova CRM Platform",
      category: "Enterprise SaaS",
      description: "A comprehensive customer relationship management tool built for high-scale operations. Featuring real-time analytics and predictive forecasting.",
      tags: ["Next.js", "TypeScript", "Prisma", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      color: "blue"
    },
    {
      title: "Etherum Wallet v2",
      category: "Fintech & Web3",
      description: "Non-custodial digital asset manager focusing on security and intuitive onboarding for the next billion crypto users.",
      tags: ["React", "Ethers.js", "Solidity", "Tailwind"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop",
      color: "purple"
    },
    {
      title: "StreamLine Studio",
      category: "Creative Tool",
      description: "Collaborative design-to-code workspace for agency teams. Real-time multi-user editing with automated deployment pipelines.",
      tags: ["Node.js", "Socket.io", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      color: "pink"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-linear-to-b from-gray-950 to-black scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Selected Works</h2>
            <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              A curated selection of projects where engineering meets design to solve complex business problems.
            </p>
          </div>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-3 group">
            All Projects
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projectList.map((project, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden group flex flex-col h-full relative">
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center gap-6">
                <a 
                href="#" 
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl"
                aria-label="View project on GitHub"
                title="View on GitHub"
                >
                <Github size={20} />
                </a>
                <a 
                href="#" 
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl"
                aria-label="View live project"
                title="View Live Project"
                >
                <ExternalLink size={20} />
                </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-10 flex flex-col grow bg-linear-to-b from-white/5 to-transparent">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-blue-500 text-xs font-black uppercase tracking-widest">{project.category}</span>
                  <div className={`w-2 h-2 rounded-full ${project.color === 'blue' ? 'bg-blue-500 shadow-lg shadow-blue-500' : project.color === 'purple' ? 'bg-purple-500 shadow-lg shadow-purple-500' : 'bg-pink-500 shadow-lg shadow-pink-500'}`}></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed grow font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;