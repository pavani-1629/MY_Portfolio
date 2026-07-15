import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { certifications, leadership } from '../data';

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
    },
  };

  return (
    <section id="certifications" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* ROW 1: Certifications */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-base font-semibold text-violet-400 uppercase tracking-widest">Credentials</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Certifications
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-xl overflow-hidden border border-slate-800/85 hover:border-violet-500/30 hover:shadow-violet-500/5 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Certificate Image Header */}
                <div className="h-24 overflow-hidden relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-3 flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold bg-violet-600/90 text-white flex items-center">
                      <Award className="w-2 h-2 mr-1" />
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug group-hover:text-violet-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      Issued by: <span className="text-slate-300 font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                    <span className="text-[9px] text-slate-500 font-mono">Credential ID: Verified</span>
                    <span className="text-xs font-semibold text-violet-400 hover:text-cyan-400 transition-colors cursor-pointer">View PDF</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Leadership & Activities */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-base font-semibold text-cyan-400 uppercase tracking-widest">Leadership</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Roles & Leadership
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {leadership.map((role, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/20 hover:bg-slate-900/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                      <Star className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {role.role}
                    </h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {role.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
