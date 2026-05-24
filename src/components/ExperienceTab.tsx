import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building, CheckSquare, Target } from "lucide-react";
import { experienceData } from "@/data/dashboardData";

export default function ExperienceTab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-3xl mx-auto flex flex-col gap-6 py-2"
    >
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
          EXPERIENCE RECORD ARCHIVE
        </h2>
        <span className="text-[10px] font-mono text-slate-500">
          NODE ID: EXP-01 // ACTIVE
        </span>
      </div>

      <motion.div variants={itemVariants} className="border border-border bg-panel/20 rounded-xl p-6 flex flex-col gap-5">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg border border-border bg-panel text-accent">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-slate-100">
                {experienceData.role}
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                {experienceData.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-panel border border-border text-[10px] font-mono text-slate-400 sm:self-start">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{experienceData.period}</span>
          </div>
        </div>

        {/* Technical stack */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
          <span className="font-mono">TECH INTEGRATIONS:</span>
          {experienceData.technologies.map((tech, i) => (
            <span key={i} className="bg-panel border border-border text-slate-400 font-mono text-[9px] px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Responsibilities */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-slate-500">
            <CheckSquare className="w-3.5 h-3.5" />
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase">EXECUTION PARAMETERS (RESPONSIBILITIES)</span>
          </div>
          <ul className="flex flex-col gap-2.5 pl-2 mt-1">
            {experienceData.responsibilities.map((resp, i) => (
              <li key={i} className="text-xs text-slate-400 leading-relaxed font-sans flex items-start gap-2.5">
                <span className="text-accent font-mono font-bold mt-0.5">›</span>
                <span className="text-justify">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-2 border-t border-border pt-4">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Target className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-500">SYSTEM PERFORMANCE METRICS (ACHIEVEMENTS)</span>
          </div>
          <ul className="flex flex-col gap-2.5 pl-2 mt-1">
            {experienceData.achievements.map((ach, i) => (
              <li key={i} className="text-xs text-slate-300 leading-relaxed font-sans flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono font-bold mt-0.5">✔</span>
                <span className="text-justify">{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
