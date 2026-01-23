import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden scroll-mt-32">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-black"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_50%)]"></div>
      </div>

      {/* Background Decorative Elements (Blobs) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      {/* Profile Image with Glow */}
      <div className="relative mb-6 mt-4 animate-bounce-slow z-10">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.3)] bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
          <img 
            src="/assets/profile-photo.png" 
            alt="Avishka Profile" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-[3px] border-gray-950 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></div>
      </div>

      <p className="text-gray-300 font-normal mb-4 text-base tracking-normal relative z-10">
        Hello there, I'm Avishka 👋
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6 tracking-tight text-white relative z-10">
        Building scalable, user-focused<br />
        web applications.
      </h1>

      <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-normal relative z-10">
        Full-stack developer experienced in building reliable, scalable web systems.
      </p>

      <p className="text-gray-400 text-sm md:text-base mb-10 font-normal flex items-center justify-center gap-3 relative z-10">
        <span className="text-gray-300">React</span>
        <span>•</span>
        <span className="text-gray-300">Next.js</span>
        <span>•</span>
        <span className="text-gray-300">Node.js</span>
        <span>•</span>
        <span className="text-gray-300">PHP</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
        <a 
          href="#projects" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full flex items-center gap-3 font-semibold transition-all shadow-lg shadow-blue-500/50 group min-w-45 justify-center text-sm"
        >
          My Work
          <div className="bg-black/20 rounded-full p-1.5 transition-transform group-hover:translate-x-1">
            <ArrowRight size={16} />
          </div>
        </a>
        <a 
          href="#contact" 
          className="border border-white/20 hover:border-blue-500/50 backdrop-blur-md hover:bg-white/5 text-white px-8 py-3 rounded-full flex items-center gap-2 font-semibold transition-all min-w-45 justify-center text-sm"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;