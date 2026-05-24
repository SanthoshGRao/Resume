import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { aiAssistantKnowledge } from "@/data/dashboardData";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello Recruiter. I am Santhosh's proxy intelligence agent. Ask me anything about his credentials, projects, or skill paradigms." }
  ]);
  const [inputVal, setInputVal] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestions = [
    "Who is Santhosh?",
    "What projects has he built?",
    "What technologies does he know?",
    "Why should we hire him?",
    "Tell me about the AI Video Generator.",
    "Tell me about the Scam Detection System."
  ];

  const handleQuery = (query: string) => {
    const cleanQuery = query.trim().toLowerCase().replace(/[?.]/g, "");
    
    // Add user message
    const nextMessages: Message[] = [...messages, { sender: "user", text: query }];
    
    // Fetch response from local knowledge
    // Match closest key
    let response = "I don't have that query in my system specs. Try asking about his projects, skills, or why you should hire him.";
    
    const matchedKey = Object.keys(aiAssistantKnowledge).find(key => 
      cleanQuery.includes(key.toLowerCase().replace(/[?.]/g, "")) || 
      key.toLowerCase().replace(/[?.]/g, "").includes(cleanQuery)
    );

    if (matchedKey) {
      response = aiAssistantKnowledge[matchedKey];
    }

    // Add bot response with a tiny simulated latency
    setMessages(nextMessages);
    setInputVal("");

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: response }]);
    }, 300);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleQuery(inputVal);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-slate-100 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all border border-blue-500/20"
        title="AI Assistant proxy"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[460px] bg-slate-950 border border-slate-800 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden glass-panel">
          {/* Header */}
          <div className="bg-slate-900 border-b border-slate-800/60 px-4 py-3.5 flex items-center gap-2.5">
            <div className="p-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xs text-slate-200">PROXY AGENT</h3>
              <p className="text-[9px] text-green-400 font-mono mt-0.5 uppercase tracking-wide">ONLINE (KNOWLEDGE BASE ACTIVE)</p>
            </div>
          </div>

          {/* Messages viewport */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.sender === "user" 
                      ? "bg-blue-600 text-slate-100 font-medium" 
                      : "bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick suggestions chips */}
          <div className="px-4 py-2 border-t border-slate-900 bg-slate-900/10 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none select-none">
            {suggestions.map((sug, i) => (
              <button
                key={i}
                onClick={() => handleQuery(sug)}
                className="text-[9px] font-mono border border-slate-800 bg-slate-950 text-slate-400 px-2 py-1.5 rounded-full hover:border-blue-500/40 hover:text-blue-400 transition-all shrink-0"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Chat input */}
          <form onSubmit={handleFormSubmit} className="p-3 border-t border-slate-900 bg-slate-950 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask me a question..."
              className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs flex-1 outline-none text-slate-100 focus:border-blue-500/40 transition-all font-mono"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 hover:bg-blue-500 text-slate-100 rounded-lg transition-all shrink-0 border border-blue-500/20"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
