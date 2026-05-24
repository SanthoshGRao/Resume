"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

// Sidebar & Tab Components
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import OverviewTab from "@/components/OverviewTab";
import ProjectsTab from "@/components/ProjectsTab";
import SkillsTab from "@/components/SkillsTab";
import ExperienceTab from "@/components/ExperienceTab";
import CertificationsTab from "@/components/CertificationsTab";
import ResumeTab from "@/components/ResumeTab";
import ContactTab from "@/components/ContactTab";
import FloatingAIAssistant from "@/components/FloatingAIAssistant";

export default function Home() {
  const [bootStep, setBootStep] = useState(0);
  const [isBooted, setIsBooted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const bootLines = [
    "Initializing Mission Control...",
    "Loading Developer Profile...",
    "Loading AI Systems...",
    "Loading Experience Database...",
    "Loading Project Registry...",
    "System Ready"
  ];

  // System boot typewriter sequence
  useEffect(() => {
    if (bootStep < bootLines.length) {
      const delay = bootStep === bootLines.length - 1 ? 700 : 350;
      const timer = setTimeout(() => {
        setBootStep((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsBooted(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  // Render Loader
  if (!isBooted) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#0b0f19] font-mono text-[11px] p-6 text-slate-400 select-none">
        <div className="w-full max-w-md flex flex-col gap-2">
          {bootLines.slice(0, bootStep).map((line, idx) => (
            <div key={idx} className={idx === bootLines.length - 1 ? "text-blue-400 font-bold" : ""}>
              <span className="text-slate-600 mr-2">&gt;</span>
              {line}
            </div>
          ))}
          {bootStep < bootLines.length && (
            <div className="flex items-center">
              <span className="text-slate-600 mr-2">&gt;</span>
              <span className="w-1.5 h-3 bg-blue-500 cursor-blink"></span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render Dashboard
  return (
    <div className="w-screen h-screen flex flex-col bg-[#0b0f19] text-[#f8fafc] overflow-hidden select-text">
      {/* Top OS Header Bar */}
      <header className="h-9 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-6 select-none shrink-0">
        <div className="flex items-center gap-4 text-[10px] font-mono font-semibold text-slate-500">
          <div className="flex items-center gap-1.5 text-blue-400">
            <Play className="w-3 h-3 fill-current text-blue-400" />
            <span>MISSION-CONTROL.SYS</span>
          </div>
          <span>v1.2.0</span>
        </div>
        <div className="text-[10px] font-mono text-slate-500">
          NODE: Mysuru, IN // LOCAL
        </div>
      </header>

      {/* Main OS Window Pane */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Nav Menu */}
        <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Center Workspace Panel */}
        <main className="flex-1 bg-slate-950/20 flex flex-col overflow-hidden">
          {/* Active node workspace identifier */}
          <div className="h-10 border-b border-slate-900 bg-slate-950/40 px-8 flex items-center justify-between select-none shrink-0">
            <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">
              ACTIVE DESKTOP NODE &gt; {activeTab}.log
            </span>
          </div>

          {/* Dynamic Inner Panel Viewport */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="h-full"
              >
                {activeTab === "overview" && <OverviewTab />}
                {activeTab === "projects" && <ProjectsTab />}
                {activeTab === "experience" && <ExperienceTab />}
                {activeTab === "skills" && <SkillsTab />}
                {activeTab === "certifications" && <CertificationsTab />}
                {activeTab === "resume" && <ResumeTab />}
                {activeTab === "contact" && <ContactTab />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Right Telemetry Column */}
        <RightSidebar />
      </div>

      {/* Local AI Assistant overlay chatbot */}
      <FloatingAIAssistant />
    </div>
  );
}
