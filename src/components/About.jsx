import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Server, Brain, Cpu } from 'lucide-react';
import { personalInfo, education } from '../data';

export default function About() {
  const pillars = [
    { 
      title: 'Full-Stack Development', 
      desc: 'Building responsive web systems with Django, Flask, and modern React architectures.', 
      icon: Server, 
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' 
    },
    { 
      title: 'AI & Machine Learning', 
      desc: 'Developing predictive intelligence models and integrating LLMs and Gemini APIs.', 
      icon: Brain, 
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' 
    },
    { 
      title: 'Embedded IoT Systems', 
      desc: 'Designing smart wearable prototypes and robotic systems via Arduino C++ integration.', 
      icon: Cpu, 
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Scroll-animated background decorative rings */}
      <div className="absolute top-[10%] left-[-5%] w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-base font-semibold text-violet-400 uppercase tracking-widest">About Me</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            My Journey & Core Pillars
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Bio & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          
          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 sm:text-3xl leading-tight">
              Aspiring Software Engineer focused on real-world impact
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {/*{personalInfo.objective} */}
            </p>
            <p className="text-slate-400 leading-relaxed">
              I am a Computer Science student with a specialization in Artificial Intelligence , 
              passionate about AI, full-stack development, and software engineering. 
              I enjoy designing intelligent applications, solving Data Structures & Algorithms problems,
               and building scalable web solutions using Java, Python, React, Django, Flask, and Machine Learning. 
               I'm always eager to learn emerging technologies and transform innovative ideas into real-world products.
            </p>
          </motion.div>

          {/* Core Pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-6"
          >
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="glass-card glass-card-hover p-6 rounded-2xl flex items-start space-x-5 border border-slate-800/80"
              >
                <div className={`p-3.5 rounded-xl border shrink-0 ${pillar.color}`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{pillar.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl font-bold text-white mb-10 flex items-center justify-center lg:justify-start"
          >
            <GraduationCap className="w-7 h-7 mr-3 text-violet-400" />
            Education Timeline
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card glass-card-hover p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Visual accent bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-400 bg-violet-400/10 mb-4">
                    {edu.period}
                  </span>
                  
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-violet-400 transition-colors">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-slate-300 text-sm mb-6">
                    {edu.institution}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-500 font-medium">Result</span>
                  <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-500/10">
                    {edu.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
