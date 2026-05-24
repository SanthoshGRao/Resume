import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send } from "lucide-react";
import { terminalCommands } from "@/data/dashboardData";

interface TerminalLog {
  type: "input" | "output" | "system";
  text: string;
}

export default function ContactTab() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLog[]>([
    { type: "system", text: "Mission Control Command Module Activated." },
    { type: "system", text: "Type 'help' to review directory commands." },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = inputVal.trim().toLowerCase();
    if (!cleanInput) return;

    const newLogs: TerminalLog[] = [
      { type: "input", text: `> ${inputVal}` }
    ];

    if (cleanInput === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (cleanInput === "help") {
      newLogs.push({ type: "output", text: terminalCommands.help });
    } else if (cleanInput === "contact") {
      newLogs.push({ type: "output", text: terminalCommands.contact });
    } else if (cleanInput === "email") {
      newLogs.push({ type: "output", text: `Email address: ${terminalCommands.email}` });
    } else if (cleanInput === "location") {
      newLogs.push({ type: "output", text: `Coordinates: ${terminalCommands.location}` });
    } else if (cleanInput === "linkedin") {
      newLogs.push({ type: "output", text: `Redirecting to: ${terminalCommands.linkedin}` });
      window.open(terminalCommands.linkedin, "_blank");
    } else if (cleanInput === "github") {
      newLogs.push({ type: "output", text: `Redirecting to: ${terminalCommands.github}` });
      window.open(terminalCommands.github, "_blank");
    } else {
      // Treat custom inputs (e.g., "Let's discuss opportunities") as custom recruiter messages
      newLogs.push({ 
        type: "system", 
        text: `[SYS LOG] Message Received: "${inputVal}"` 
      });
      newLogs.push({ 
        type: "output", 
        text: `Success: Message logged. Action complete.\nNotification routed to ${terminalCommands.email}.\nThank you for reaching out, Recruiter!` 
      });
    }

    setHistory((prev) => [...prev, ...newLogs]);
    setInputVal("");
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 py-2 h-full">
      <div className="flex items-center justify-between border-b border-border pb-3 select-none">
        <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
          SECURE COMM TERMINAL
        </h2>
        <span className="text-[10px] font-mono text-slate-500">
          STATUS: ENCRYPTED (SSL)
        </span>
      </div>

      {/* Terminal Viewport */}
      <div 
        onClick={focusInput}
        className="flex-1 min-h-[380px] bg-panel/30 border border-border rounded-xl p-5 font-mono text-xs flex flex-col gap-3 overflow-y-auto cursor-text shadow-inner"
      >
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
          {history.map((log, i) => (
            <div 
              key={i} 
              className={`whitespace-pre-wrap leading-relaxed ${
                log.type === "input" 
                  ? "text-accent font-semibold" 
                  : log.type === "system" 
                  ? "text-slate-500 italic" 
                  : "text-slate-300"
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 border-t border-border pt-3 mt-auto">
          <Terminal className="w-4 h-4 text-accent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="enter command (e.g. 'help', 'contact', 'email' or write a message)"
            className="bg-transparent border-none outline-none text-slate-100 flex-1 font-mono text-xs placeholder:text-slate-700"
            autoFocus
          />
          <button 
            type="submit" 
            className="p-1 text-slate-500 hover:text-accent hover:bg-panel rounded transition-all shrink-0"
            title="Submit Command"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
