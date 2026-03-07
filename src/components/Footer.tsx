import React from 'react';
import { CONTACT } from '../constants';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-burgundy-600 mb-2">Rehab.dev</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Frontend Developer & CS Student</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 font-medium flex items-center gap-2 text-sm">
            Made with <Heart size={14} className="text-slate-300 fill-slate-300" /> by {CONTACT.name}
          </p>
          <p className="text-slate-300 text-[10px] font-bold uppercase tracking-tighter">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-slate-400 hover:text-burgundy-600 text-xs font-bold uppercase tracking-wider transition-colors">About</a>
          <a href="#projects" className="text-slate-400 hover:text-burgundy-600 text-xs font-bold uppercase tracking-wider transition-colors">Projects</a>
          <a href="#contact" className="text-slate-400 hover:text-burgundy-600 text-xs font-bold uppercase tracking-wider transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
