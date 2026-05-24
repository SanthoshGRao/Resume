import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Code, Sliders, Cpu, GitBranch } from "lucide-react";
import { skillMatrix } from "@/data/dashboardData";

export default function SkillsTab() {
  const icons = [Terminal, Code, Database, Database, Cpu, GitBranch];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-6 py-2"
    >
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
          SKILL MATRIX DIAGNOSTICS
        </h2>
        <span className="text-[10px] font-mono text-slate-500">
          HOVER TAGS TO EVALUATE LOGIC STATES
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {skillMatrix.map((group, i) => {
          const Icon = icons[i] || Sliders;
          return (
            <motion.div
              variants={itemVariants}
              key={group.category}
              className="border border-border bg-panel/20 rounded-xl p-5 hover:border-border-hover transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-border text-slate-300">
                <Icon className="w-4 h-4 text-accent" />
                <h3 className="font-display font-bold text-xs tracking-wider font-mono uppercase">
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-xs font-mono border border-border bg-panel/60 text-slate-400 px-3 py-1.5 rounded-lg select-none transition-all duration-200 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_10px_rgba(99,102,241,0.04)] hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
