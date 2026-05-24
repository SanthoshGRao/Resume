import React from "react";
import { Award, CheckCircle } from "lucide-react";
import { certifications } from "@/data/journeyData";

export default function CertificationsGrid() {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-slate-900/60">
      <div className="flex flex-col gap-3 pb-8 border-b border-slate-900 mb-12">
        <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">
          [ LOG 06 // CREDENTIALS ]
        </span>
        <h2 className="font-display font-extrabold text-3xl text-slate-100 tracking-tight">
          Verified Certifications
        </h2>
        <p className="text-sm text-slate-400 max-w-xl font-sans leading-relaxed">
          Completed developer tracks, specialized analytics certificates, and Salesforce technical credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="border border-slate-805 bg-slate-950/20 p-5 rounded-xl flex items-start gap-4 hover:border-slate-700 transition-all duration-200"
          >
            <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 text-blue-400">
              <Award className="w-4.5 h-4.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9.5px] font-mono text-slate-500 font-bold">{cert.year}</span>
                <div className="flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle className="w-2.5 h-2.5" />
                  <span>VERIFIED</span>
                </div>
              </div>
              <h3 className="font-display font-extrabold text-xs sm:text-sm text-slate-200 mt-2 truncate">
                {cert.name}
              </h3>
              <p className="text-[9.5px] font-mono text-slate-450 mt-1 uppercase tracking-wide">
                ISSUER: {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
