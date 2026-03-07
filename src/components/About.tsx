import React from 'react';
import { motion } from 'motion/react';
import { CAREER_OBJECTIVE, EDUCATION, EXTRACURRICULAR } from '../constants';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Left Column: Objective */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4 text-slate-900">
              <span className="w-12 h-1 bg-burgundy-600 rounded-full" />
              About Me
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              {CAREER_OBJECTIVE}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                  <GraduationCap className="text-burgundy-600" /> Education
                </h3>
                <div className="space-y-6">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-slate-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-burgundy-600 border-4 border-white shadow-sm" />
                      <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                      <p className="text-burgundy-600 text-sm font-semibold">{edu.institution}</p>
                      <p className="text-slate-500 text-sm">{edu.period} | {edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extracurricular */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                  <Heart className="text-slate-400" /> Beyond Code
                </h3>
                <div className="space-y-6">
                  {EXTRACURRICULAR.map((extra, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-slate-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-sm" />
                      <h4 className="font-bold text-slate-800">{extra.role}</h4>
                      <p className="text-slate-500 text-sm font-semibold">{extra.org}</p>
                      <p className="text-slate-400 text-sm">{extra.period}</p>
                      {extra.details && <p className="text-slate-400 text-xs mt-1 italic">{extra.details}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
