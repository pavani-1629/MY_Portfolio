import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { resumes } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-4 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <Terminal className="w-6 h-6 text-violet-500 group-hover:text-cyan-400 transition-colors" />
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
              Pavani Parla
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white relative group transition-colors duration-200"
              >
                {item.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href={resumes.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-cyan-500/20"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href={resumes.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="block text-center mx-3 mt-4 px-4 py-2.5 text-base font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg hover:from-violet-500 hover:to-cyan-400 transition-all shadow-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
