import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Full-Stack', 'IoT/Hardware'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-semibold text-violet-400 uppercase tracking-widest">Projects</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            My Creative Works
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-slate-800/80 hover:border-violet-500/30 hover:shadow-violet-500/5 group transition-all duration-300"
              >
                <div>
                  {/* Category & Icons */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-3 text-slate-400">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.links.live !== '#' && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-slate-400 mb-4 font-mono">
                    {project.subtitle}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-medium font-mono text-slate-400 bg-slate-950/80 border border-slate-900 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
