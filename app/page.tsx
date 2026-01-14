"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Youtube, Instagram, BookOpen, ExternalLink, Mail, Code2, BrainCircuit, Terminal, GraduationCap, Server, Layout, Settings, Cpu } from 'lucide-react';
const Portfolio = () => {
  const projects = [
    {
      title: "PDF Chat Bot (RAG)",
      description: "LLM-based document Q&A system using FAISS for vector similarity search and RAG concepts.",
      tech: ["Python", "FAISS", "Hugging Face", "LLMs"],
      link: "https://youtu.be/9IMX15ikRyE?si=EACtsq9AszoEW2cB",
      type: "YouTube Featured"
    },
    {
      title: "Website Scraper Bot",
      description: "Intelligent chatbot that scrapes live data and performs inference using DistilBERT.",
      tech: ["Python", "BeautifulSoup", "Transformers", "Regex"],
      link: "https://youtu.be/Eke0rOnZ0Dg?si=n_FgfQVmrxwlj-U0",
      type: "YouTube Featured"
    },
    {
      title: "Apex-Engine",
      description: "Revenue-sharing search engine with a custom web scraper and ad management system.",
      tech: ["Django", "Python", "BeautifulSoup", "Bootstrap"],
      link: "https://github.com/axitpatel1310/Apex-Engine",
      type: "Full-Stack"
    },
    {
      title: "Cashskool Platform",
      description: "LMS featuring educator onboarding, pay-per-view monetization, and real-time community chat.",
      tech: ["Django", "PostgreSQL", "JavaScript", "Python"],
      link: "https://github.com/axitpatel1310/Cashskool-django",
      type: "Backend"
    },
    {
      title: "Advanced Flask Bot",
      description: "Pattern-based chatbot integrated with an image editing suite and on-demand PDF generation.",
      tech: ["Flask", "Pillow", "ReportLab", "JSONL"],
      link: "https://github.com/axitpatel1310/advance-chat-bot-flask",
      type: "Automation"
    },
    {
      title: "Vercel Serverless Bot",
      description: "Lightweight REST API chatbot deployed on Vercel using serverless Flask functions.",
      tech: ["Flask", "Vercel", "REST API", "Git"],
      link: "https://simple-prompt-response-chatbot.vercel.app/",
      type: "DevOps"
    }
  ];
const skillCategories = [
    {
      name: "Backend & Systems",
      icon: <Server size={20} className="text-indigo-400" />,
      skills: ["SQL", "Python", "Django", "Flask", "MongoDB", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      name: "Machine Learning & AI",
      icon: <Cpu size={20} className="text-violet-400" />,
      skills: ["Machine Learning", "Deep Learning", "LLM & Applied AI", "Huggingface Transformers", "FAISS"]
    },
    {
      name: "Frontend",
      icon: <Layout size={20} className="text-cyan-400" />,
      skills: ["Next JS", "HTML", "Bootstrap", "JavaScript", "CSS"]
    },
    {
      name: "DevOps & Development",
      icon: <Settings size={20} className="text-emerald-400" />,
      skills: ["Docker", "GitHub", "Git", "Vercel", "Hostinger", "Linux", "Podman"]
    }
  ];


  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 font-sans">
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/50 bg-[#020617]/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            AXIT PATEL
          </motion.h1>
          <div className="flex gap-5 items-center">
            <a href="https://github.com/axitpatel1310" className="text-slate-400 hover:text-white transition-colors"><Github size={20}/></a>
            <a href="mailto:akky05727@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20}/></a>
            <button className="hidden md:block bg-slate-100 text-slate-950 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white transition-all">
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for AI Engineering & Data Science Roles
            </div>
            <h2 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-[1.1]">
              Engineering the <span className="bg-gradient-to-b from-indigo-300 to-indigo-600 bg-clip-text text-transparent">Next Generation</span> of AI.
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Backend specialist and Computer Applications graduate (9.13 GPA). 
              Founder of <span className="text-indigo-400 font-semibold">Kernx AI</span>, 
              building production-ready RAG pipelines and scalable systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                View Portfolio <Terminal size={18}/>
              </a>
              <a href="https://www.youtube.com/@akkyaapatel/" className="bg-slate-800/50 border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                Kernx AI YouTube <Youtube size={18}/>
              </a>
              <a href="https://www.instagram.com/kernx.ai" className="bg-slate-800/50 border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                Kernx AI Instagram <Instagram size={18}/>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Content Creation & Brand Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
              <Youtube size={24}/>
            </div>
            <h3 className="text-2xl font-bold mb-2">97+ Tutorials</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Educating 196+ subscribers on Python, LLMs, and AI automation.</p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-violet-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 mb-6">
              <BrainCircuit size={24}/>
            </div>
            <h3 className="text-2xl font-bold mb-2">Applied AI</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Developing RAG systems and transformer inference tools with Hugging Face</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-pink-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6">
              <Instagram size={24}/>
            </div>
            <h3 className="text-2xl font-bold mb-2">@kernx.ai</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Documenting the daily journey of an AI engineer for a growing community</p>
          </motion.div>
        </section>
        {/* Skills Matrix Section (Newly Added) */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <div className="h-px flex-1 bg-slate-800/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}
                  <h3 className="text-lg font-bold text-slate-100">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Academia Research Section */}
        <section className="mb-32">
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500">
            <div className="bg-[#020617] rounded-[calc(1.5rem-1px)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-indigo-400 font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                  <GraduationCap size={16}/> Academic Research
                </div>
                <h2 className="text-4xl font-bold mb-4">Published on Academia.edu</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Check out my formal research paper documenting technical innovations in 
                  computer applications and AI engineering.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-xl">9.13</span>
                    <span className="text-slate-500 uppercase tracking-tighter">Final Grade</span>
                  </div>
                  <div className="w-px h-10 bg-slate-800" />
                  <div className="text-slate-400 italic">
                    Natubhai V. Patel College of <br/> Pure & Applied Sciences
                  </div>
                </div>
              </div>
              <a 
                href="https://www.academia.edu/143796880/Personalized_Fitness_Coaching_System_using_Computer_Vision_Research_Paper_" 
                className="group flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all"
              >
                Read on Academia <BookOpen size={20} className="group-hover:rotate-12 transition-transform"/>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-slate-500 max-w-md">A collection of AI systems, backend architectures, and open-source tools[cite: 33].</p>
            </div>
            <div className="h-px flex-1 bg-slate-800 mx-10 hidden md:block" />
            <div className="text-slate-400 font-mono text-sm underline decoration-indigo-500 underline-offset-8">
              6 MAJOR PROJECTS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50 hover:bg-slate-900/40 hover:border-slate-700 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    {project.type}
                  </span>
                  <a href={project.link} className="text-slate-500 hover:text-indigo-400 transition-colors">
                    <ExternalLink size={20}/>
                  </a>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono font-medium px-2 py-1 rounded-md bg-indigo-500/5 text-indigo-400/80 border border-indigo-500/10">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact/CTA */}
        <section className="pb-32 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's build something intelligent.</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Currently looking for new opportunities in AI/Backend development. 
            Reach out via email or follow my journey on YouTube.
          </p>
          <a href="mailto:axitpatel1705@gmail.com" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 px-10 py-5 rounded-2xl font-bold transition-all">
            Get in Touch <Mail size={20}/>
          </a>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900/50 bg-[#020617] text-center">
        <div className="flex justify-center gap-8 mb-6 text-slate-500">
          <a href="https://github.com/axitpatel1310" className="hover:text-white transition-colors"><Github size={20}/></a>
          <a href="https://www.youtube.com/@akkyaapatel/" className="hover:text-white transition-colors"><Youtube size={20}/></a>
          <a href="https://www.instagram.com/kernx.ai/" className="hover:text-white transition-colors"><Instagram size={20}/></a>
        </div>
        <p className="text-slate-600 text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Axit Patel • Built with Next.js
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;