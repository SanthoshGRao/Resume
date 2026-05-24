import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Code, Sliders, Cpu, GitBranch } from "lucide-react";
import { toolkits } from "@/data/journeyData";

export default function ToolkitEcosystem() {
  const icons = [Code, Terminal, Database, Cpu, GitBranch];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="toolkit" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-slate-900/60">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 03 // TOOLKIT ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          The Engineering Ecosystem
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Languages, frameworks, databases, and applied modeling environments that I operate to implement scalable applications.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        {toolkits.map((category, idx) => {
          const CategoryIcon = icons[idx] || Sliders;
          return (
            <motion.div
              variants={cardVariants}
              key={category.category}
              className="border border-slate-800/80 bg-slate-950/20 p-5 rounded-xl flex flex-col gap-4 hover:border-slate-750 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-900 text-slate-400">
                <CategoryIcon className="w-4 h-4 text-blue-500 transition-transform group-hover:scale-110" />
                <h3 className="font-mono font-bold text-xs tracking-wider uppercase">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, k) => (
                  <span
                    key={k}
                    className="text-xs font-mono border border-slate-900 bg-slate-950 text-slate-400 px-3 py-1.5 rounded-lg select-none transition-all duration-200 hover:border-blue-500/40 hover:text-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.06)] hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
