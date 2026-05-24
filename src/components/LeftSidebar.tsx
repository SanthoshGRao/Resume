import React from "react";
import { 
  LayoutDashboard, 
  Cpu, 
  Briefcase, 
  Sliders, 
  Award, 
  FileText, 
  Terminal as TerminalIcon, 
  MapPin 
} from "lucide-react";
import { profileData } from "@/data/dashboardData";

interface LeftSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LeftSidebar({ activeTab, setActiveTab }: LeftSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Project Registry", icon: Cpu },
    { id: "experience", label: "Experience DB", icon: Briefcase },
    { id: "skills", label: "Skill Matrix", icon: Sliders },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "resume", label: "Resume Center", icon: FileText },
    { id: "contact", label: "Contact Terminal", icon: TerminalIcon },
  ];

  return (
    <aside className="w-64 border-r border-border bg-[#0a0a0c]/80 flex flex-col justify-between p-6 select-none shrink-0 h-full backdrop-blur-md">
      <div className="flex flex-col gap-6">
        {/* Profile Card */}
        <div className="flex flex-col gap-1.5 pb-5 border-b border-border">
          <div className="flex items-center justify-between">
            <h1 className="font-display font-extrabold text-lg text-slate-100 tracking-tight">
              SANTHOSH G RAO
            </h1>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[8px] font-bold text-emerald-400 font-mono tracking-wider">ON</span>
            </div>
          </div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-none mt-1">
            Software Developer
          </p>
          <p className="text-[9px] font-sans text-slate-500 font-medium">
            AI Builder & Full Stack Engineer
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest font-mono mb-2">
            Workspace
          </span>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-panel text-accent border border-border shadow-[0_0_12px_rgba(99,102,241,0.06)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-panel/40 border border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-slate-500"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Metadata Bottom */}
      <div className="flex flex-col gap-2 pt-4 border-t border-border text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-slate-500" />
          <span>{profileData.location}</span>
        </div>
        <div className="text-[9px] text-slate-600 mt-1">
          SYS STATUS: SECURE (100)
        </div>
      </div>
    </aside>
  );
}
