import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Settings, 
  HelpCircle, 
  CheckCircle, 
  Code2, 
  Activity,
  Layers,
  Sparkles
} from "lucide-react";
import { projectSystems, ProjectSystem } from "@/data/dashboardData";

export default function ProjectsTab() {
  const [selectedSystem, setSelectedSystem] = useState<ProjectSystem>(projectSystems[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-5 gap-6 h-full py-2"
    >
      {/* Systems Index List (Left 2 columns on wide layout) */}
      <div className="md:col-span-2 flex flex-col gap-3 h-full overflow-y-auto pr-1">
        <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest font-mono block mb-1">
          SYSTEM REGISTRY
        </span>
        {projectSystems.map((system) => {
          const isSelected = selectedSystem.id === system.id;
          return (
            <motion.div
              variants={itemVariants}
              key={system.id}
              onClick={() => setSelectedSystem(system)}
              className={`border p-4 rounded-xl cursor-pointer text-left transition-all duration-200 select-none ${
                isSelected
                  ? "bg-slate-900 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.05)]"
                  : "bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/10"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] font-mono text-slate-500 font-bold leading-none mt-0.5">
                  {system.id}
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                  <span className="w-1 h-1 rounded-full bg-green-400"></span>
                  <span className="text-[8px] font-mono font-bold text-green-400">OPERATIONAL</span>
                </div>
              </div>
              <h3 className={`font-display font-extrabold text-sm leading-tight mt-2.5 ${
                isSelected ? "text-slate-100" : "text-slate-300"
              }`}>
                {system.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {system.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[8.5px] font-mono bg-slate-900 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
                {system.technologies.length > 3 && (
                  <span className="text-[8px] font-mono text-slate-500 self-center">
                    +{system.technologies.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected System Operations Board (Right 3 columns) */}
      <div className="md:col-span-3 flex flex-col gap-4 border border-slate-800 bg-slate-900/15 rounded-xl p-5 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSystem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* System Status Headers */}
            <div className="flex flex-col gap-1 pb-4 border-b border-slate-900">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px]">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>{selectedSystem.id} // ACTIVE OPERATIONAL NODE</span>
              </div>
              <h2 className="font-display font-extrabold text-lg text-slate-100 tracking-tight mt-1 leading-snug">
                {selectedSystem.name}
              </h2>
            </div>

            {/* Core Metrics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 bg-slate-950/60 border border-slate-900 p-3.5 rounded-lg">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">CORE PROBLEM</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1 text-justify">
                  {selectedSystem.problem}
                </p>
              </div>

              <div className="flex flex-col gap-1 bg-slate-950/60 border border-slate-900 p-3.5 rounded-lg">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">DEPLOYED SOLUTION</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1 text-justify">
                  {selectedSystem.solution}
                </p>
              </div>
            </div>

            {/* System Modules List */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Layers className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase">FUNCTIONAL MODULES</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedSystem.modules.map((mod, i) => (
                  <span 
                    key={i} 
                    className="text-[9.5px] font-mono font-medium border border-blue-900/30 bg-blue-950/15 text-blue-400 px-2.5 py-1 rounded-md"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Impact */}
            <div className="flex flex-col gap-1 bg-slate-950/40 border border-slate-900 p-3.5 rounded-lg">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase">SYSTEM PERFORMANCE IMPACT</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mt-1">
                {selectedSystem.impact}
              </p>
            </div>

            {/* Architecture SVG diagram */}
            {selectedSystem.architectureSvg && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase">SYSTEM DATAFLOW ARCHITECTURE</span>
                </div>
                <div className="mt-1" dangerouslySetInnerHTML={{ __html: selectedSystem.architectureSvg }}></div>
              </div>
            )}

            {/* Technologies pills */}
            <div className="flex items-center gap-2 border-t border-slate-900 pt-4 text-[10px] text-slate-500">
              <span className="font-mono">COMPILED INTEGRATIONS:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedSystem.technologies.map((tech, i) => (
                  <span key={i} className="bg-slate-950 border border-slate-800 text-slate-400 font-mono text-[9px] px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
