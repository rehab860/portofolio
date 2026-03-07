import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { CONTACT, CAREER_OBJECTIVE, PROJECTS, SKILLS, EDUCATION, EXPERIENCE } from '../constants';
import ReactMarkdown from 'react-markdown';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Rehab's AI assistant. Ask me anything about her skills, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = ai.models.generateContent({
        model: 'gemini-1.5-flash', // Using flash for speed
        contents: [{ role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `You are an AI assistant for Rehab Abdelmalek's portfolio. 
          Your goal is to answer questions about Rehab professionally and enthusiastically.
          
          Context about Rehab:
          - Name: ${CONTACT.name}
          - Role: ${CONTACT.role}
          - Objective: ${CAREER_OBJECTIVE}
          - Skills: ${SKILLS.map(s => s.name).join(', ')}
          - Education: ${EDUCATION.map(e => `${e.degree} at ${e.institution}`).join(', ')}
          - Experience: ${EXPERIENCE.map(exp => `${exp.role} at ${exp.company}`).join(', ')}
          - Projects: ${PROJECTS.map(p => `${p.title} (${p.role}): ${p.description}`).join(', ')}
          
          Keep answers concise and helpful. If you don't know something, say you're not sure but can provide her contact info.`,
        }
      });

      const response = await model;
      const botText = response.text || "I'm sorry, I couldn't process that. Please try again!";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "Oops! Something went wrong. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-burgundy-600 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Rehab's AI</h3>
                  <p className="text-xs text-white/70 font-medium">Online & Helpful</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow p-6 space-y-4 max-h-[400px] overflow-y-auto scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-burgundy-600 text-white' : 'bg-slate-800 text-white'
                    }`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' ? 'bg-burgundy-600 text-white rounded-tr-none' : 'bg-slate-800 text-white rounded-tl-none'
                    }`}>
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white">
                      <Bot size={16} />
                    </div>
                    <div className="p-3 bg-slate-800 text-white rounded-2xl rounded-tl-none flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span className="text-xs font-medium">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Rehab..."
                className="flex-grow bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-burgundy-600 text-white rounded-xl hover:bg-burgundy-700 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-vibrant text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
      </motion.button>
    </div>
  );
};

export default AIChat;
