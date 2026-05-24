import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Cpu, Network, CheckCircle } from "lucide-react";
import { evolutionStages, profileData } from "@/data/dashboardData";

export default function OverviewTab() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(4); // Default expand the JSS Science / Applied AI stage

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-3xl mx-auto flex flex-col gap-8 py-4"
    >
      {/* Developer Snapshot */}
      <motion.div variants={itemVariants} className="border border-border bg-panel/30 rounded-xl p-6 flex flex-col gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
          [ DEVELOPER SNAPSHOT ]
        </h2>
        <h3 className="font-display font-extrabold text-2xl text-slate-100 tracking-tight leading-tight mt-1">
          Building systems that connect algorithms to user interfaces.
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1">
          I am a software engineer and Master of Computer Applications (MCA) candidate. I focus on developing clean full-stack web applications and applying computer vision tracking, language modeling, and intelligent automation systems.
        </p>
      </motion.div>

      {/* Developer Evolution Timeline */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            DEVELOPER EVOLUTION ROADMAP
          </h2>
          <span className="text-[10px] font-mono text-slate-500">
            CLICK NODES TO EXPAND SYSTEM LOGS
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          {evolutionStages.map((stage, index) => {
            const isExpanded = expandedIndex === index;
            const isLast = index === evolutionStages.length - 1;

            return (
              <React.Fragment key={index}>
                {/* Evolution Card */}
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className={`w-full border cursor-pointer rounded-xl p-4 transition-all duration-300 select-none ${
                    isExpanded 
                      ? "bg-panel border-accent/40 shadow-[0_0_15px_rgba(99,102,241,0.06)]" 
                      : "bg-panel/20 border-border hover:border-border-hover hover:bg-panel/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg border ${
                        isExpanded ? "bg-accent/10 border-accent/20 text-accent" : "bg-panel border-border text-slate-400"
                      }`}>
                        {index < 2 ? <Network className="w-4 h-4" /> : index < 4 ? <Cpu className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className={`text-xs font-bold font-mono tracking-wide ${isExpanded ? "text-accent" : "text-slate-200"}`}>
                          {stage.stage}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-sans mt-0.5">{stage.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 font-semibold">
                      {isExpanded ? "[ CLOSE ]" : "[ LOGS ]"}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-border pt-3"
                      >
                        <p className="text-xs text-slate-400 leading-relaxed font-mono whitespace-pre-line">
                          {stage.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Connecting Arrow */}
                {!isLast && (
                  <div className="py-1 flex items-center justify-center text-slate-700">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
