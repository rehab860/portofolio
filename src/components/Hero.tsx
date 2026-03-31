import React from 'react';
import { motion } from 'motion/react';
import { CONTACT } from '../constants';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-burgundy-200/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-burgundy-200/30 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-burgundy-100/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-50 text-burgundy-600 text-sm font-bold mb-6 border border-burgundy-100 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burgundy-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-burgundy-500"></span>
            </span>
            Available for Opportunities
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy-600 via-rose-600 to-burgundy-800 animate-gradient-x">
              {CONTACT.name}
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            A passionate <span className="font-bold text-burgundy-600">Frontend Architect</span> specializing in crafting immersive <span className="text-rose-600 font-semibold">React</span> interfaces and modern web experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-burgundy-600 text-white rounded-full font-bold flex items-center gap-2 shadow-md shadow-burgundy-100 hover:bg-burgundy-700 transition-colors"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/Rehab_Mohammed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-burgundy-50 text-burgundy-700 border border-burgundy-100 rounded-full font-bold flex items-center gap-2 hover:bg-burgundy-100 transition-colors"
            >
              View CV <Download size={20} />
            </motion.a>
          </div>

          <div className="flex items-center gap-6">
            <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="p-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md hover:text-burgundy-600 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md hover:text-burgundy-600 transition-all">
              <Github size={24} />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="p-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md hover:text-burgundy-600 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative Rings */}
            <div className="absolute -inset-4 border border-slate-200 rounded-full" />
            <div className="absolute -inset-8 border border-slate-100 rounded-full" />
            
            {/* Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
              <img
                src={CONTACT.photo}
                alt={CONTACT.name}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-lg z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-burgundy-50 rounded-xl flex items-center justify-center text-burgundy-600">
                  <span className="font-bold text-lg">⚛️</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specialist</p>
                  <p className="font-bold text-slate-800">React.js</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-lg z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600">
                  <span className="font-bold text-lg">🎨</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Styling</p>
                  <p className="font-bold text-slate-800">Tailwind CSS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
