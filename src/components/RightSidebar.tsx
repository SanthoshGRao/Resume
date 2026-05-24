import React from "react";
import { Cpu, Zap, Box, Compass } from "lucide-react";
import { metricsData } from "@/data/dashboardData";

export default function RightSidebar() {
  const metrics = [
    { label: "PROJECTS REGISTERED", value: metricsData.projectsBuilt + "+", icon: Box, color: "text-blue-400" },
    { label: "AI MODELS DEPLOYED", value: metricsData.aiSystemsCreated, icon: Cpu, color: "text-indigo-400" },
    { label: "TECHNOLOGY PARADIGMS", value: metricsData.technologiesUsed, icon: Zap, color: "text-amber-400" },
    { label: "YEARS CODING CORE", value: metricsData.yearsLearning + "+", icon: Compass, color: "text-emerald-400" },
  ];

  return (
    <aside className="w-64 border-l border-border bg-[#0a0a0c]/80 p-6 select-none shrink-0 flex flex-col gap-6 h-full overflow-y-auto backdrop-blur-md">
      <div>
        <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest font-mono block mb-4">
          SYSTEM TELEMETRY
        </span>

        <div className="flex flex-col gap-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div 
                key={i} 
                className="border border-border bg-panel/40 p-4 rounded-lg flex flex-col gap-1.5 transition-all hover:border-border-hover"
              >
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-[9px] font-mono tracking-wider font-semibold">{metric.label}</span>
                  <Icon className={`w-3.5 h-3.5 ${metric.color}`} />
                </div>
                <div className="text-xl font-display font-black text-slate-100 tracking-tight">
                  {metric.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest font-mono block">
          ENGINE STATE
        </span>
        <div className="bg-panel/20 border border-border rounded-lg p-3 flex flex-col gap-2 text-[10px] font-mono">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">AI AGENT LAYER</span>
            <span className="text-green-400 font-bold">READY</span>
          </div>
          <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
            <div className="bg-green-400 h-full w-[90%] rounded-full"></div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-slate-500">CLIENT CODES</span>
            <span className="text-blue-400 font-bold">OPTIMIZED</span>
          </div>
          <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
            <div className="bg-blue-400 h-full w-[100%] rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
