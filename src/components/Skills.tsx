import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Code2, UserCheck, Languages } from 'lucide-react';

const Skills = () => {
  const categories = [
    { name: 'Technical', icon: <Code2 className="text-burgundy-600" />, color: 'bg-burgundy-50', accent: 'border-burgundy-200' },
    { name: 'Soft', icon: <UserCheck className="text-burgundy-600" />, color: 'bg-burgundy-50', accent: 'border-burgundy-200' },
    { name: 'Language', icon: <Languages className="text-burgundy-600" />, color: 'bg-burgundy-50', accent: 'border-burgundy-200' },
  ];

  return (
    <section id="skills" className="py-24 bg-burgundy-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-burgundy-600 to-burgundy-400 rounded-full" />
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className={`bg-burgundy-900/20 p-8 rounded-3xl border border-burgundy-800/30 backdrop-blur-md hover:border-burgundy-500/50 transition-all duration-300 group`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-8 uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">{cat.name}</h3>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === cat.name).map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i * 0.2) + (j * 0.05) }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(128,0,32,0.3)',
                      borderColor: 'rgba(128,0,32,0.5)'
                    }}
                    className="px-4 py-2 bg-burgundy-900/40 border border-burgundy-800/50 rounded-xl text-sm font-bold transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
