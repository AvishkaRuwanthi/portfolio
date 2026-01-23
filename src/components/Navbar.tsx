import React from 'react';
import { Download } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center">
      <div className={`w-full max-w-7xl backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? 'mt-2 border-blue-500/20' : 'mt-4'}`}>
        <a href="#home" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors">AR</div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-all shadow-lg shadow-blue-500/50">
          My Resume
          <div className="bg-black/20 rounded-full p-1">
            <Download size={14} />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;