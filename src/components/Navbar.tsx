import React from 'react';
import { Download } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center">
      {/* Decorative glow effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-blue-600/10 blur-[80px] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className={`w-full max-w-7xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-3.5 flex items-center justify-between transition-all duration-500 relative overflow-hidden ${scrolled ? 'mt-2 shadow-xl shadow-blue-500/10 bg-white/15' : 'mt-4'}`}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-white/5 via-white/10 to-white/5 opacity-60"></div>
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group relative z-10">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/40 transition-all scale-150"></div>
            <img 
              src="/assets/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain relative z-10 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium relative z-10">
          <a 
            href="#home" 
            className="relative text-gray-300 hover:text-white transition-colors group py-2"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
          </a>
          <a 
            href="#about" 
            className="relative text-gray-300 hover:text-white transition-colors group py-2"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
          </a>
          <a 
            href="#projects" 
            className="relative text-gray-300 hover:text-white transition-colors group py-2"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
          </a>
          <a 
            href="#contact" 
            className="relative text-gray-300 hover:text-white transition-colors group py-2"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="/assets/Avishka_Ruwanthi_Resume.pdf" 
          download="Avishka_Ruwanthi_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full flex items-center gap-3 text-sm font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] relative z-10 group"
        >
          <span>My Resume</span>
          <div className="bg-black/20 rounded-full p-1 transition-transform group-hover:translate-x-0.5">
            <Download size={14} />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;