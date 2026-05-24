import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "@/data/dashboardData";

export default function CertificationsTab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
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
      className="max-w-3xl mx-auto flex flex-col gap-6 py-2"
    >
      <div className="flex items-center justify-between border-b border-slate-900 pb-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
          CERTIFICATION REPOSITORY
        </h2>
        <span className="text-[10px] font-mono text-slate-500">
          NODE: CERT-DB
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            variants={itemVariants}
            key={i}
            className="border border-slate-800 bg-slate-900/10 p-5 rounded-xl flex items-start gap-4 hover:border-slate-700 transition-all duration-200"
          >
            <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-950 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] font-mono text-slate-500 font-bold">{cert.year}</span>
                <div className="flex items-center gap-1 text-[8.5px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>VERIFIED</span>
                </div>
              </div>
              <h3 className="font-display font-extrabold text-sm text-slate-100 tracking-tight leading-snug mt-2 truncate">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1 uppercase tracking-wide">
                ISSUER: {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
