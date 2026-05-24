import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Activity, MonitorPlay } from "lucide-react";
import { missions } from "@/data/journeyData";

interface DesignGalleryProps {
  selectedDesignId: string;
  setSelectedDesignId: (id: string) => void;
}

export default function DesignGallery({ selectedDesignId, setSelectedDesignId }: DesignGalleryProps) {
  // Find currently selected design system
  const currentSystem = missions.find(sys => sys.id === selectedDesignId) || missions[0];

  const systemsWithDesign = missions.filter(sys => sys.architectureSvg);


  return (
    <section id="gallery" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-slate-900/60">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 05 // SYSTEM DESIGNS ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          System Design Gallery
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Blueprint schematics mapping core architectural modules and telemetry streams across my software integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Systems Nav buttons */}
        <div className="md:col-span-2 flex flex-col gap-2.5 select-none">
          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest font-mono block mb-1">
            ACTIVE SYSTEMS
          </span>
          {systemsWithDesign.map((sys) => {
            const isSelected = sys.id === currentSystem.id;
            return (
              <button
                key={sys.id}
                onClick={() => setSelectedDesignId(sys.id)}
                className={`border p-4 rounded-xl text-left transition-all duration-200 ${
                  isSelected
                    ? "bg-slate-900 border-blue-500/40 text-slate-100 shadow-[0_0_15px_rgba(59,130,246,0.04)]"
                    : "bg-slate-950 border-slate-805 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between text-[9px] font-mono mb-1">
                  <span>{sys.id}</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-green-400"></span>
                    <span className="text-green-400 font-bold uppercase text-[7.5px]">ONLINE</span>
                  </div>
                </div>
                <h3 className="font-display font-extrabold text-xs sm:text-sm leading-tight mt-1.5">
                  {sys.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Schema Display Workspace */}
        <div className="md:col-span-3 border border-slate-800 bg-slate-950/20 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSystem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-5 h-full"
            >
              <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] pb-3 border-b border-slate-900">
                <GitBranch className="w-3.5 h-3.5" />
                <span>{currentSystem.id} // ACTIVE SCHEMATIC VIEWPORT</span>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-slate-100 leading-snug">
                  {currentSystem.name}
                </h4>
                <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed text-justify">
                  {currentSystem.approach}
                </p>
              </div>

              {/* Responsive SVG diagram */}
              {currentSystem.architectureSvg && (
                <div className="flex flex-col gap-2 mt-2 select-none">
                  <div 
                    className="w-full flex justify-center py-2"
                    dangerouslySetInnerHTML={{ __html: currentSystem.architectureSvg }}
                  />
                  <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-slate-600 justify-center uppercase mt-1">
                    <Activity className="w-3 h-3 text-blue-500 animate-pulse" />
                    <span>Real-time vector pipeline simulation ready</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
