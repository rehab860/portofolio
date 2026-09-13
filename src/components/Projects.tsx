import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Layers, Code2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 text-slate-900">
          <span className="w-12 h-1 bg-burgundy-600 rounded-full" />
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 group flex flex-col hover-glow"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-burgundy-50 rounded-xl flex items-center justify-center text-burgundy-600 group-hover:bg-burgundy-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                  <Layers size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                  }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-burgundy-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-burgundy-600 font-bold text-sm mb-4">{project.role}</p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-50 text-slate-500 border border-slate-100 rounded-lg text-xs font-bold">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-burgundy-600 transition-colors text-xs font-bold uppercase tracking-wider"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-burgundy-600 transition-colors text-xs font-bold uppercase tracking-wider"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
