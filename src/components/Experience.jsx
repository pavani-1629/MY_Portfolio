import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../data';

export default function Experience() {
  // Keep track of expanded experiences
  const [expandedIndices, setExpandedIndices] = useState([0]); // Expand first one by default

  const toggleExpand = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-900/40 relative">
      {/* Background overlay details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-violet-400 uppercase tracking-widest">Experience</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            My Work & Internships
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
          
          {experience.map((exp, index) => {
            const isExpanded = expandedIndices.includes(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-violet-500 flex items-center justify-center z-10 shadow-lg shadow-violet-500/10">
                  <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                </div>

                {/* Experience Card */}
                <div className="glass-card rounded-2xl overflow-hidden shadow-md border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300">
                  
                  {/* Card Header clickable for expanding */}
                  <div
                    onClick={() => toggleExpand(index)}
                    className="p-6 sm:p-8 cursor-pointer flex justify-between items-start hover:bg-slate-800/20 transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                        <span className="inline-block sm:hidden text-xs text-violet-400 font-semibold bg-violet-400/10 px-2 py-0.5 rounded">
                          {exp.company}
                        </span>
                      </div>

                      <div className="hidden sm:flex items-center text-sm font-semibold text-violet-400">
                        <span>{exp.company}</span>
                      </div>

                      <div className="flex items-center text-xs sm:text-sm text-slate-500 font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <button className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Expandable Content (List of achievements) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-800/60 bg-slate-900/30"
                      >
                        <div className="p-6 sm:p-8 pt-0 space-y-4 mt-6">
                          <ul className="space-y-3 list-none">
                            {exp.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex items-start text-slate-400 text-sm sm:text-base leading-relaxed">
                                {/* bullet dash decoration */}
                                <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
