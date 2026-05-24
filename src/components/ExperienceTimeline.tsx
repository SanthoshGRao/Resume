import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckSquare, Target } from "lucide-react";
import { experience } from "@/data/journeyData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 max-w-4xl mx-auto border-t border-slate-900/60">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 04 // EXPERIENCE ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          Professional Records
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Industrial software development logs detailing tasks, sprints, and code deliverables.
        </p>
      </div>

      <div className="border border-slate-800 bg-slate-950/20 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 hover:border-slate-700/80 transition-all duration-300">
        {/* Experience Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-900">
          <div className="flex items-center gap-3.5">
            <div className="p-2 rounded-lg border border-slate-805 bg-slate-900 text-blue-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-slate-100">
                {experience.role}
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                {experience.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900/40 border border-slate-850 text-[10px] font-mono text-slate-400 sm:self-start">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Technologies used */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
          <span className="font-mono">TECH INTEGRATIONS:</span>
          {experience.technologies.map((tech, i) => (
            <span key={i} className="bg-slate-900 border border-slate-850 text-slate-400 font-mono text-[9px] px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Responsibilities */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-slate-500">
            <CheckSquare className="w-3.5 h-3.5" />
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase">EXECUTION LOGS (RESPONSIBILITIES)</span>
          </div>
          <ul className="flex flex-col gap-3 pl-2 mt-1">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans flex items-start gap-2.5">
                <span className="text-blue-500 font-mono font-bold mt-0.5">›</span>
                <span className="text-justify">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-2 border-t border-slate-900 pt-5">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Target className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-500">PERFORMANCE METRICS (ACHIEVEMENTS)</span>
          </div>
          <ul className="flex flex-col gap-3 pl-2 mt-1">
            {experience.achievements.map((ach, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono font-bold mt-0.5">✔</span>
                <span className="text-justify">{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
