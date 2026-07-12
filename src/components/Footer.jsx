import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 pt-16 pb-10 relative overflow-hidden">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 right-[10%] w-72 h-72 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <span className="text-xl font-bold tracking-widest bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Pavani Parla
            </span>
            <p className="text-slate-400 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Aspiring Software Engineer specializing in Artificial Intelligence, Full-Stack development, and embedded computing systems.
            </p>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact shortcut & Location */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Reach Me</h4>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-slate-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-violet-400" />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Visakhapatnam / Srikakulam, AP, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator & Bottom Row */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          
          {/* Copyright & Stack */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 font-mono">
              Designed &amp; built with <span className="text-violet-500">React</span> &amp; <span className="text-cyan-500">Tailwind CSS</span>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-violet-500/30 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-violet-500/30 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
