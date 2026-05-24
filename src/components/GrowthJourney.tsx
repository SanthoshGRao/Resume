import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Cpu, Shield, Globe, Database, Milestone } from "lucide-react";
import { growthJourney } from "@/data/journeyData";

export default function GrowthJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(4); // Default expand JSS / Applied AI stage

  const icons = [Milestone, Globe, Database, Cpu, Shield, Cpu];

  return (
    <section id="journey" className="py-24 px-6 sm:px-12 max-w-4xl mx-auto border-t border-slate-900/60">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 01 // EVOLUTION ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          The Builder's Evolution
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Tracking the sequence of technologies, architectures, and academic milestones that shaped my software engineering capabilities.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        {growthJourney.map((stage, idx) => {
          const isExpanded = expandedIndex === idx;
          const isLast = idx === growthJourney.length - 1;
          const StageIcon = icons[idx] || Milestone;

          return (
            <React.Fragment key={idx}>
              {/* Timeline Card */}
              <div
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className={`w-full border rounded-xl p-5 cursor-pointer transition-all duration-300 select-none ${
                  isExpanded
                    ? "bg-slate-900/30 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.04)]"
                    : "bg-slate-950/20 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg border ${
                      isExpanded ? "bg-blue-500/10 border-blue-500/30 text-blue-400" : "bg-slate-900 border-slate-850 text-slate-500"
                    }`}>
                      <StageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className={`text-xs font-bold font-mono tracking-wide ${isExpanded ? "text-blue-400" : "text-slate-200"}`}>
                        {stage.title}
                      </h3>
                      <p className="text-[10.5px] text-slate-500 font-sans mt-0.5">{stage.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                    {isExpanded ? "[ Close ]" : "[ Details ]"}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-slate-900 pt-3"
                    >
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono whitespace-pre-line">
                        {stage.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Connecting node path arrow */}
              {!isLast && (
                <div className="py-1 text-slate-800 flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
