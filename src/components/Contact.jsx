import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // clear message after 5 seconds
    }, 1500);
  };

  const contactOptions = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    },
    {
      label: 'LinkedIn',
      value: 'pavaniparla09',
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      label: 'GitHub',
      value: 'pavani-1629',
      href: personalInfo.github,
      icon: Github,
      color: 'text-slate-200 bg-slate-500/10 border-slate-500/20'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900/40 relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-base font-semibold text-violet-400 uppercase tracking-widest">Contact</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Let's Connect
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's build something together</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Have an internship opportunity, a project idea, or just want to connect? Click on any of my social profiles or send a direct message using the form.
              </p>
            </div>

            {/* Info Badges */}
            <div className="space-y-4">
              {contactOptions.map((opt, i) => (
                <a
                  key={i}
                  href={opt.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card glass-card-hover p-5 rounded-2xl flex items-center space-x-4 border border-slate-800/80 group"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${opt.color} group-hover:scale-105 transition-transform`}>
                    <opt.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{opt.label}</div>
                    <div className="text-sm font-semibold text-slate-200 mt-0.5 group-hover:text-white transition-colors">{opt.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick reminder text */}
            <div className="text-xs text-slate-500 font-mono">
              Designed with &hearts; inside the workspace.
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 text-sm text-slate-300 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:border-violet-500/50 focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-300">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 text-sm text-slate-300 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:border-violet-500/50 focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Collaboration Opportunity"
                    className="w-full px-4 py-3.5 text-sm text-slate-300 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:border-violet-500/50 focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello Pavani, I would love to talk about..."
                    className="w-full px-4 py-3.5 text-sm text-slate-300 bg-slate-950/60 border border-slate-800/80 rounded-xl focus:border-violet-500/50 focus:ring-0 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 flex items-center justify-center space-x-2 text-white font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:from-violet-500 hover:to-indigo-500 disabled:opacity-55 disabled:cursor-wait transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30"
                >
                  {submitting ? (
                    <span className="flex items-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                {/* Successful submission overlay message */}
                {submitted && (
                  <div className="flex items-center space-x-3 p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-emerald-400 animate-pulse">
                    <Sparkles className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-semibold">Message sent successfully! Thank you.</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
