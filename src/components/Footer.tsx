import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-bold tracking-tighter text-white">AR</div>
          <p className="text-gray-500 text-sm">© 2024 Avishka Codes. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"
            aria-label="View Git Hub Profile"
            title="View Git Hub Profile"><Github size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"
            aria-label="View Twitter Profile"
            title="View Twitter Profile"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"
            aria-label="View LinkedIn Profile"
            title="View LinkedIn Profile"><Linkedin size={20} /></a>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-2">
          Built with <Heart size={14} className="text-blue-500" /> & Passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;