import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const taglines = [
    "Full Stack Developer"
  ];

  const profileImg = '/avatar.jpg'; // Path to place your profile picture (e.g. public/avatar.jpg)

  useEffect(() => {
    let timer;
    const currentTagline = taglines[taglineIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && displayText === currentTagline) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTagline.substring(0, displayText.length - 1)
            : currentTagline.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-mesh">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-violet-600/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-violet-400 font-semibold tracking-wider uppercase text-sm sm:text-base">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              
              {/* Animated Tagline */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-3xl font-bold text-slate-300">
                  I am a{' '}
                  <span className="text-violet-400 border-r-2 border-violet-400 pr-1 animate-pulse">
                    {displayText}
                  </span>
                </span>
              </div>

              <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
                {personalInfo.objective}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center lg:justify-start space-x-6 pt-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visual (SVG Cyber Orb / Profile Image Core) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
            >
              {/* Outer spinning ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-violet-500/30 animate-[spin_40s_linear_infinite]"></div>
              
              {/* Middle pulsing ring */}
              <div className="absolute inset-4 rounded-full border border-violet-400/20 animate-pulse-slow"></div>
              
              {/* Second outer ring spinning opposite */}
              <div className="absolute inset-8 rounded-full border border-double border-cyan-400/20 animate-[spin_20s_linear_infinite_reverse]"></div>
              
              {/* Core Floating Orb */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-16 rounded-full bg-gradient-to-tr from-violet-600/80 to-cyan-500/80 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)] backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-1.5 rounded-full bg-slate-950/90 flex items-center justify-center border border-violet-500/20 overflow-hidden">
                  {!imgFailed ? (
                    <img 
                      src={profileImg} 
                      alt={personalInfo.name} 
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        PP
                      </span>
                      <span className="text-[10px] sm:text-xs tracking-widest text-slate-400 mt-2 font-mono uppercase">
                        &lt;Developer /&gt;
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Floating tech bits */}
              <div className="absolute top-[10%] right-[10%] p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 animate-bounce shadow-md">
                <Code className="w-5 h-5" />
              </div>
              <div className="absolute bottom-[15%] left-[5%] p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-violet-400 animate-pulse shadow-md">
                <span className="font-mono text-xs font-bold">Java</span>
              </div>
              <div className="absolute bottom-[5%] right-[20%] p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 animate-pulse shadow-md">
                <span className="font-mono text-xs font-bold">AI</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-slate-500 font-mono uppercase mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1.5"
          >
            <span className="w-1 h-1.5 bg-violet-400 rounded-full"></span>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
