import React from "react";
import { Mail, Linkedin, Github, FileText, ArrowUp } from "lucide-react";
import { profileData } from "@/data/journeyData";

interface ContactSectionProps {
  scrollToSection: (id: string) => void;
}

export default function ContactSection({ scrollToSection }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-4xl mx-auto border-t border-slate-900/60 relative">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 07 // INBOX ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          Establish Contact
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Reach out directly to discuss full-time software engineering roles, Generative AI projects, or internships.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
        {/* Email link */}
        <a
          href={`mailto:${profileData.email}`}
          className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 hover:text-blue-400 transition-all group"
        >
          <div className="p-3 rounded-xl border border-slate-850 bg-slate-900 text-blue-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[9px] font-mono text-slate-500 font-bold block tracking-widest uppercase">EMAIL DIRECT</span>
            <span className="text-xs sm:text-sm font-mono text-slate-200 mt-1 block group-hover:text-blue-400 transition-colors">
              {profileData.email}
            </span>
          </div>
        </a>

        {/* LinkedIn link */}
        <a
          href={profileData.linkedin}
          target="_blank"
          className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 hover:text-blue-400 transition-all group"
        >
          <div className="p-3 rounded-xl border border-slate-850 bg-slate-900 text-blue-400">
            <Linkedin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[9px] font-mono text-slate-500 font-bold block tracking-widest uppercase">LINKEDIN PROFILE</span>
            <span className="text-xs sm:text-sm font-mono text-slate-200 mt-1 block group-hover:text-blue-400 transition-colors">
              linkedin.com/in/santhosh-g-rao
            </span>
          </div>
        </a>

        {/* GitHub link */}
        <a
          href={profileData.github}
          target="_blank"
          className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 hover:text-blue-400 transition-all group"
        >
          <div className="p-3 rounded-xl border border-slate-850 bg-slate-900 text-blue-400">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[9px] font-mono text-slate-500 font-bold block tracking-widest uppercase">GITHUB CODES</span>
            <span className="text-xs sm:text-sm font-mono text-slate-200 mt-1 block group-hover:text-blue-400 transition-colors">
              github.com/SanthoshGRao
            </span>
          </div>
        </a>

        {/* Download Resume link */}
        <a
          href="/Resume/Santhosh_G_Rao_Resume.pdf"
          download
          className="border border-slate-800 bg-slate-950/20 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 hover:text-blue-400 transition-all group"
        >
          <div className="p-3 rounded-xl border border-slate-850 bg-slate-900 text-blue-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[9px] font-mono text-slate-500 font-bold block tracking-widest uppercase">RESUME DOWNLOAD</span>
            <span className="text-xs sm:text-sm font-mono text-slate-200 mt-1 block group-hover:text-blue-400 transition-colors">
              Santhosh_G_Rao_Resume.pdf
            </span>
          </div>
        </a>
      </div>

      {/* Footer copyright & Scroll to top */}
      <div className="mt-20 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500 select-none">
        <span>© 2026 Santhosh G Rao. All rights reserved.</span>
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>SCROLL TO TOP</span>
        </button>
      </div>
    </section>
  );
}
