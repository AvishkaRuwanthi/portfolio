import React from 'react';

const TechStack: React.FC = () => {
  const techs = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  // Triple for extra smoothness
  const list = [...techs, ...techs, ...techs];

  return (
    <section className="py-20 bg-gray-950 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-blue-500/30"></div>
          <p className="text-blue-400 uppercase tracking-widest text-xs font-black">Trusted Technologies</p>
          <div className="h-px w-12 bg-blue-500/30"></div>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-4">
          {list.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 px-16 group/item cursor-default transition-all duration-500 hover:scale-110">
              <div className="w-10 h-10 flex items-center justify-center filter grayscale opacity-40 group-hover/item:opacity-100 group-hover/item:grayscale-0 transition-all duration-500">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain brightness-0 invert group-hover/item:invert-0 group-hover/item:brightness-100" />
              </div>
              <span className="text-white/30 font-bold text-xl uppercase tracking-widest group-hover/item:text-blue-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;