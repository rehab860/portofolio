import React from 'react';
import { motion } from 'motion/react';
import { CONTACT } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 text-slate-900">
          <span className="w-12 h-1 bg-burgundy-600 rounded-full" />
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Let's connect and build something amazing together!</h3>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-burgundy-50 rounded-2xl flex items-center justify-center text-burgundy-600 group-hover:bg-burgundy-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-lg font-bold text-slate-800 hover:text-burgundy-600 transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-slate-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Me</p>
                  <a href={`tel:${CONTACT.phone}`} className="text-lg font-bold text-slate-800 hover:text-slate-600 transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-slate-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold text-slate-800">{CONTACT.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:text-burgundy-600 transition-all">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:text-burgundy-600 transition-all">
                <Github size={28} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-burgundy-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-burgundy-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-burgundy-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-burgundy-500 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-burgundy-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-burgundy-700 transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
