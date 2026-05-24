import React from "react";
import { motion } from "framer-motion";
import { Cpu, GitBranch, ArrowRight, ExternalLink, Code } from "lucide-react";
import { missions } from "@/data/journeyData";

interface MissionRegistryProps {
  scrollToSection: (id: string) => void;
  setSelectedDesignId: (id: string) => void;
}

export default function MissionRegistry({ scrollToSection, setSelectedDesignId }: MissionRegistryProps) {
  const handleViewArchitecture = (id: string) => {
    // Map MISSION 01 -> SYS-01, etc.
    const sysId = id.replace("MISSION ", "SYS-");
    setSelectedDesignId(sysId);
    scrollToSection("gallery");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="missions" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-slate-900/60">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 02 // MISSIONS ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          Active Engineering Missions
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Case studies of resolving challenging software requirements through modular design, machine learning models, and automated logic.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        {missions.map((mission) => (
          <motion.div
            variants={cardVariants}
            key={mission.id}
            className="border border-slate-800 bg-slate-950/20 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 hover:border-slate-700/80 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Identity details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-900">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider">
                  {mission.id} // RESOLVED OBJECTIVE
                </span>
                <h3 className="text-[15px] font-mono font-bold text-blue-400 tracking-tight leading-snug mt-1">
                  &gt; {mission.question}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 w-fit shrink-0 sm:self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                <span className="text-[8px] font-mono font-bold text-green-400 tracking-wide">OPERATIONAL</span>
              </div>
            </div>

            {/* Title */}
            <h4 className="font-display font-black text-xl text-slate-100 tracking-tight leading-tight">
              {mission.name}
            </h4>

            {/* Core logs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1 bg-slate-950/60 border border-slate-900 p-4 rounded-xl">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans text-justify">
                  {mission.challenge}
                </p>
              </div>

              <div className="flex flex-col gap-1 bg-slate-950/60 border border-slate-900 p-4 rounded-xl">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">
                  THE APPROACH
                </span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans text-justify">
                  {mission.approach}
                </p>
              </div>
            </div>

            {/* Flowchart visualizer */}
            <div className="flex flex-col gap-2 bg-slate-950/30 border border-slate-900 p-4 rounded-xl">
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                DATAFLOW PIPELINE SEQUENCE
              </span>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {mission.flowchart.map((step, idx) => {
                  const isLast = idx === mission.flowchart.length - 1;
                  return (
                    <React.Fragment key={idx}>
                      <span className="text-[10px] font-mono border border-slate-800 bg-slate-950 text-slate-300 px-2.5 py-1 rounded">
                        {step}
                      </span>
                      {!isLast && (
                        <span className="text-slate-700 font-bold font-mono text-xs">→</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Performance Impact */}
            <div className="bg-blue-500/5 border border-blue-900/30 p-4 rounded-xl flex items-start gap-3">
              <div className="p-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9.5px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  SYSTEM PERFORMANCE IMPACT
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {mission.impact}
                </p>
              </div>
            </div>

            {/* Actions & Tech strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-900 pt-5 mt-2">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[9.5px] font-mono text-slate-500 font-semibold uppercase">INTEGRATIONS:</span>
                {mission.technologies.map((tech, i) => (
                  <span key={i} className="text-[9.5px] font-mono bg-slate-900 border border-slate-850 text-slate-400 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 select-none">
                <button
                  onClick={() => handleViewArchitecture(mission.id)}
                  className="inline-flex items-center gap-1.5 border border-slate-800 hover:border-blue-500/40 hover:text-blue-400 px-3.5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wide transition-all"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
                <a
                  href="https://github.com/SanthoshGRao/Resume"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 px-3.5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wide transition-all text-slate-300"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://github.com/SanthoshGRao/Resume"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 px-3.5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wide transition-all text-slate-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
