import React from 'react';
import { Github, Linkedin} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
        <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/assets/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
            />
          </div>
          <p className="text-gray-500 text-sm">© 2026 Avishka Ruwanthi. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/AvishkaRuwanthi" className="text-gray-400 hover:text-white transition-colors"
            aria-label="View Git Hub Profile"
            title="View Git Hub Profile"><Github size={20} /></a>
          <a href="http://www.linkedin.com/in/avishkark" className="text-gray-400 hover:text-white transition-colors"
            aria-label="View LinkedIn Profile"
            title="View LinkedIn Profile"><Linkedin size={20} /></a>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-2">
          Built with Passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;