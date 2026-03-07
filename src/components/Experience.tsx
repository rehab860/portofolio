import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 text-slate-900">
          <span className="w-12 h-1 bg-burgundy-600 rounded-full" />
          Professional Experience
        </h2>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-burgundy-100 transition-all duration-500"
            >
              {/* Decorative Background Element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-burgundy-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-burgundy-50 rounded-2xl flex items-center justify-center text-burgundy-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Briefcase size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-burgundy-600 transition-colors">{exp.role}</h3>
                  <p className="text-burgundy-600 font-bold mb-4">{exp.company}</p>
                  <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-bold group-hover:bg-burgundy-600 group-hover:text-white transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <h4 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Key Responsibilities</h4>
                  <ul className="space-y-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <CheckCircle2 className="text-burgundy-600 mt-1 shrink-0" size={20} />
                        <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
