import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { skills } from '../data';

// Custom Tech SVGs for a super premium look
const getTechIcon = (name) => {
  const sizeClass = "w-4 h-4 mr-2 shrink-0";
  
  switch (name.toLowerCase()) {
    case 'java':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#E24F26">
          <path d="M2 13.5s-.5 2 1.5 2 3.5-1 5-1 4.5 1.5 6 1.5 3-1 3-1V12H2v1.5zM9 2c-.5 2 1.5 3 1.5 5.5s-2.5 3-2.5 5h3.5s2.5-2 2.5-5S12 4.5 12.5 2H9zM1 18.5s0 1.5 2 1.5h16s2-1 2-2h-20z"/>
        </svg>
      );
    case 'python':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor" className={`${sizeClass} text-yellow-400`}>
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.03.3v2h-3.5v-.5h-2v.5h-5v-1.54l.02-.36.08-.34.15-.32.22-.3.3-.27.4-.23.47-.17.58-.1.7-.03h1.96zm-7.1 3.82H9.1v2h5v-2h1.95l.08.02.34.08.32.15.3.22.27.3.23.4.17.47.1.58.03.7v1.96l-.2.9-.26.73-.3.59-.32.45-.34.34-.34.25-.33.16-.3.1-.3.03h-2v-3.5h.5v-2h-.5v-5zm10 10v1.54l-.02.36-.08.34-.15.32-.22.3-.3.27-.4.23-.47.17-.58.1-.7.03H13v-2h3.5v-.5h2v.5h-1.25z"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#F7DF1E">
          <path d="M0 0h24v24H0V0zm22.034 18.5c-.085-1.242-.78-2.148-2.485-2.148-1.655 0-2.31.775-2.43 1.95-.123 1.2.61 1.947 1.942 2.501 1.441.594 2.861 1.05 2.861 2.814 0 1.548-1.16 2.41-2.885 2.41-1.84 0-2.865-.926-3.007-2.61l1.77-.975c.105.814.502 1.486 1.5 1.486 1.022 0 1.378-.492 1.378-1.023 0-.827-.615-1.173-1.77-1.626-1.502-.573-3.03-1.009-3.03-2.894 0-1.897 1.379-2.658 3.007-2.658 1.625 0 2.614.774 2.822 2.148l-1.78.435z"/>
        </svg>
      );
    case 'c':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#00599C">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.18 13.9c-.83.62-1.9 1-3.18 1-2.76 0-5-2.24-5-5s2.24-5 5-5c1.28 0 2.35.37 3.18 1l-1.48 1.48C14.1 8.9 13.1 8.6 13 8.6c-1.66 0-3 1.34-3 3s1.34 3 3 3c.1 0 1.1-.3 1.7-.78l1.48 1.48z"/>
        </svg>
      );
    case 'sql':
      return <Database className={`${sizeClass} text-indigo-400`} />;
    case 'html':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.1H7.8l.2 2.4h9.1l-.3 3.4-3.1.9-3.1-.9-.2-2h-2.4l.4 4.3 5.3 1.5 5.3-1.5.7-8.1z"/>
        </svg>
      );
    case 'css':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.6 6.1H6.7l.2 2.4h10l-.3 3.4-3.1.9-3.1-.9-.2-2H8l.3 4.3 5.3 1.5 5.3-1.5.7-8.1z"/>
        </svg>
      );
    case 'react.js':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor" className={`${sizeClass} text-cyan-400 animate-[spin_12s_linear_infinite]`}>
          <path d="M24 11.23c0-.1-.05-.2-.15-.25a12.03 12.03 0 0 0-3.32-1.3c-.32-1.5-.94-2.9-1.84-4.2a12.18 12.18 0 0 0-2.46-2.6c-.1-.05-.2-.05-.3 0a12.12 12.12 0 0 0-3.35 3.03c-1.34.02-2.65.17-3.92.42A12.06 12.06 0 0 0 5.43 3.7c-.1-.05-.2-.05-.3 0A12.2 12.2 0 0 0 2.66 6.3c-.9 1.3-1.53 2.7-1.85 4.2a12 12 0 0 0-3.32 1.3c-.1.05-.15.15-.15.25a12.18 12.18 0 0 0 1.84 4.2 12.12 12.12 0 0 0 2.47 2.6c.1.05.2.05.3 0a12.16 12.16 0 0 0 3.35-3.03c1.33-.02 2.64-.17 3.9-.42a12.03 12.03 0 0 0 3.25 2.63c.1.05.2.05.3 0a12.18 12.18 0 0 0 2.46-2.6c.9-1.3 1.52-2.7 1.85-4.2a12 12 0 0 0 3.32-1.3c.1-.05.15-.15.15-.25zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
        </svg>
      );
    case 'tailwind css':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.2 1-.7 2.1-.8 3.2-.3 1 .4 1.7 1.3 2.6 2.2 1.4 1.4 3 3.1 6.6 3.1 2.8 0 4.5-1.4 5.2-4.2-1 .7-2.1.8-3.2.3-1-.4-1.7-1.3-2.6-2.2-1.4-1.4-3-3.1-6.6-3.1zM5.4 11.7C2.6 11.7.9 13.1.2 15.9c1-.7 2.1-.8 3.2-.3 1 .4 1.7 1.3 2.6 2.2 1.4 1.4 3 3.1 6.6 3.1 2.8 0 4.5-1.4 5.2-4.2-1 .7-2.1.8-3.2.3-1-.4-1.7-1.3-2.6-2.2-1.4-1.4-3-3.1-6.6-3.1z"/>
        </svg>
      );
    case 'flask':
      return <Code className={`${sizeClass} text-slate-300`} />;
    case 'django':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#092E20">
          <path d="M0 0h24v24H0V0zm11.5 5.5h-3v7c0 2 1.5 3 3.5 3 1.5 0 2.5-.5 3-1V12.5h-1.5v1c-.3.2-.7.3-1.2.3-.9 0-1.5-.5-1.5-1.8v-6.5zm8 3.5h-2.5v1h2.5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-2.5v1h2.5c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z"/>
        </svg>
      );
    case 'fastapi':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#05998B">
          <path d="M12 0L1.7 6v12L12 24l10.3-6V6L12 0zm5 11l-3 4.5H12L15 11h-4l3-4.5H12L9 11h8z"/>
        </svg>
      );
    case 'node.js':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 0L2 5.8v11.6l10 5.8 10-5.8V5.8L12 0zm6.5 16.5l-6.5 3.8-6.5-3.8V9.2l6.5-3.8 6.5 3.8v7.3z"/>
        </svg>
      );
    case 'sqlite':
      return <Database className={`${sizeClass} text-cyan-300`} />;
    case 'firebase realtime database':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#FFCA28">
          <path d="M3.89 15.57L1.6 10.95c-.32-.64-.09-1.41.52-1.77.61-.36 1.4-.15 1.77.46l2.3 4.62c-.89.04-1.63-.26-2.3-.69zm13.11-4.62c.37-.61 1.16-.82 1.77-.46.61.36.84 1.13.52 1.77l-2.29 4.62c-.67.43-1.41.73-2.3.69l2.3-4.62zM12 3.12l6.98 14c-.66.86-1.74 1.42-2.98 1.42H8c-1.24 0-2.32-.56-2.98-1.42L12 3.12z"/>
        </svg>
      );
    case 'git':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#F05032">
          <path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L9.3 3l3 3c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l3 3c.8-.3 1.8-.1 2.4.6.8.9.8 2.2 0 3-.8.8-2.2.8-3 0-.8-.8-.8-2.2 0-3 .6-.6 1.6-.8 2.4-.5l3-3L.7 12.4c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.9-10.9c.4-.4.4-1.1 0-1.5z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      );
    case 'vs code':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#007ACC">
          <path d="M23.984 6.136l-3.324-3.156c-.332-.315-.815-.224-1.077.202L12 13.109 4.417 3.182c-.262-.426-.745-.517-1.077-.202L.016 6.136c-.198.188-.198.535 0 .723L8.625 15l-8.609 8.14c-.198.188-.198.535 0 .723l3.324 3.156c.332.315.815.224 1.077-.202L12 16.891l7.583 9.927c.262.426.745.517 1.077.202l3.324-3.156c.198-.188.198-.535 0-.723L15.375 15l8.609-8.14c.198-.188.198-.535 0-.724z"/>
        </svg>
      );
    case 'arduino ide':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#00979D">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 12.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm5 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      );
    case 'google colab':
      return (
        <svg className={sizeClass} viewBox="0 0 24 24" fill="#F9AB00">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12s4.48-10 10-10zM7.5 10c.83 0 1.5-.67 1.5-1.5S8.33 7 7.5 7 6 7.67 6 8.5 6.67 10 7.5 10zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 7 16.5 7s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
        </svg>
      );
    default:
      return <Sparkles className={`${sizeClass} text-violet-400`} />;
  }
};

export default function Skills() {
  const categories = [
    { name: 'Languages', icon: Code, color: 'from-violet-500/20 to-indigo-500/10 border-violet-500/30 text-violet-400' },
    { name: 'Frontend', icon: Layout, color: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-400' },
    { name: 'Backend', icon: Server, color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400' },
    { name: 'Databases', icon: Database, color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400' },
    { name: 'Tools', icon: Wrench, color: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30 text-fuchsia-400' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    },
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-[30%] right-[-10%] w-80 h-80 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-base font-semibold text-violet-400 uppercase tracking-widest">Skills</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            My Tech Stack & Expertise
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, i) => {
            const list = skills[cat.name] || [];
            const Icon = cat.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass-card p-8 rounded-2xl border border-slate-800/80 transition-all duration-300 relative overflow-hidden group hover:shadow-2xl hover:shadow-violet-500/5"
              >
                {/* Glow Background effect */}
                <div className={`absolute -inset-px bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-slate-950/80 border border-slate-800 ${cat.text}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills tags list (Horizontal layout with icons and no levels) */}
                  <div className="flex flex-wrap gap-2.5">
                    {list.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="px-3 py-2 bg-slate-950/80 border border-slate-800/80 rounded-xl flex items-center hover:border-violet-500/50 hover:bg-slate-900/30 transition-all duration-200"
                      >
                        {getTechIcon(skill.name)}
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
