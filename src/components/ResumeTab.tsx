import React from "react";
import { motion } from "framer-motion";
import { Download, FileCode, Linkedin, Github, ExternalLink } from "lucide-react";
import { profileData } from "@/data/dashboardData";

export default function ResumeTab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto flex flex-col gap-6 py-2 h-full"
    >
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
          RESUME MANAGEMENT SYSTEM
        </h2>
        <span className="text-[10px] font-mono text-slate-500">
          NODE: RESUME-CENTER
        </span>
      </div>

      {/* Action panel buttons */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <a
          href="/Santhosh_G_Rao_Resume.pdf"
          download
          className="flex items-center justify-center gap-2 border border-accent/40 bg-accent/10 text-accent py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide hover:bg-accent/20 transition-all select-none"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </a>
        <a
          href="/Santhosh_G_Rao_ATS_Optimized.html"
          target="_blank"
          className="flex items-center justify-center gap-2 border border-border bg-panel/40 text-slate-300 py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide hover:bg-panel/60 hover:border-border-hover transition-all select-none"
        >
          <FileCode className="w-4 h-4" />
          <span>View ATS Resume</span>
        </a>
        <a
          href={profileData.linkedin}
          target="_blank"
          className="flex items-center justify-center gap-2 border border-border bg-panel/40 text-slate-300 py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide hover:bg-panel/60 hover:border-border-hover transition-all select-none"
        >
          <Linkedin className="w-4 h-4" />
          <span>Open LinkedIn</span>
        </a>
        <a
          href={profileData.github}
          target="_blank"
          className="flex items-center justify-center gap-2 border border-border bg-panel/40 text-slate-300 py-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide hover:bg-panel/60 hover:border-border-hover transition-all select-none"
        >
          <Github className="w-4 h-4" />
          <span>Open GitHub</span>
        </a>
      </motion.div>

      {/* PDF frame container */}
      <motion.div 
        variants={itemVariants} 
        className="flex-1 min-h-[500px] border border-border rounded-xl overflow-hidden bg-slate-950 flex flex-col"
      >
        <div className="bg-[#0a0a0c]/60 border-b border-border px-4 py-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Active Viewport: Santhosh_G_Rao_Resume.pdf</span>
          <a href="/Santhosh_G_Rao_Resume.pdf" target="_blank" className="flex items-center gap-1 hover:text-accent transition-all">
            <span>Open in Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        {/* PDF embedding via iframe */}
        <iframe 
          src="/Santhosh_G_Rao_Resume.pdf#toolbar=0&navpanes=0" 
          className="w-full flex-1 border-none bg-slate-950"
          title="Santhosh G Rao Resume PDF"
        />
      </motion.div>
    </motion.div>
  );
}
