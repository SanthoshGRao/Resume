import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, ArrowRight, Mail } from "lucide-react";
import { heroData } from "@/data/journeyData";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative py-20 px-6 sm:px-12 max-w-5xl mx-auto">
      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col gap-6"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/40 px-3.5 py-1.5 rounded-full text-[10.5px] font-mono tracking-wider text-blue-400 uppercase select-none w-fit"
        >
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
          MCA Candidate // AI Engineering log
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-[1.05] max-w-4xl"
        >
          {heroData.headline}
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 font-sans tracking-wide max-w-3xl leading-relaxed mt-2"
        >
          {heroData.subheading}
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base text-slate-400 font-sans max-w-2xl leading-relaxed"
        >
          {heroData.description}
        </motion.p>

        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap gap-4 mt-6 select-none"
        >
          <button
            onClick={() => scrollToSection("missions")}
            className="group inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-mono transition-all duration-300"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="/Resume/Santhosh_G_Rao_Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/30 hover:border-slate-700 text-slate-200 hover:text-slate-100 font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-mono transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 border border-transparent hover:bg-slate-900/40 text-slate-400 hover:text-slate-300 font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-mono transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div 
        onClick={() => scrollToSection("journey")}
        className="absolute bottom-10 left-12 flex items-center gap-2.5 text-slate-600 hover:text-slate-400 transition-all cursor-pointer select-none text-[10px] font-mono tracking-widest uppercase"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        <span>Scroll log</span>
      </div>
    </section>
  );
}
