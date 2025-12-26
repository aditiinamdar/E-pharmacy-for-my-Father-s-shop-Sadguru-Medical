import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MessageCircle, X, Send, Bot, AlertTriangle, ShieldAlert } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { 
      role: "bot", 
      text: "Hello! I am your AI Pharmacy Assistant. How can I help with your medication today?",
      isSystem: true 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMsg = { role: "user", text: message };
    setChat(p => [...p, userMsg]);
    setMessage("");
    setIsTyping(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chatbot/chat", { message });
      setChat(p => [...p, { role: "bot", text: res.data.reply }]);
    } catch {
      setChat(p => [...p, { role: "bot", text: "Service temporarily unavailable.", isError: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-9999 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[380px] h-[500px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-4xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 origin-bottom-right">
          
          {/* Header with Safety Status */}
          <div className="p-5 bg-emerald-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <span className="font-bold tracking-tight text-sm block leading-none">Pharmacy Assistant</span>
                <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <ShieldAlert size={10} /> AI Informational Tool
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Warning Banner: Important for Legal Compliance */}
          <div className="bg-amber-50 border-b border-amber-100 px-4 py-2 flex items-start gap-2">
            <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[10px] text-amber-800 leading-tight">
              <strong>Medical Disclaimer:</strong> Information provided is for educational purposes only and not a substitute for professional medical advice.
            </p>
          </div>
          
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {chat.map((c, i) => (
              <div key={i} className={`flex ${c.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                  c.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                } ${c.isError ? 'bg-red-50 text-red-600 border-red-100' : ''}`}>
                  {c.text}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex justify-start animate-pulse">
                 <div className="bg-white border border-slate-100 px-4 py-2 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                   Analyzing database...
                 </div>
               </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Footer Input & Permanent Small Warning */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2 mb-3">
              <input 
                value={message} 
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about medications..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
              <button 
                onClick={sendMessage} 
                disabled={isTyping}
                className="p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-center text-[9px] text-slate-400 font-medium leading-none">
              In case of emergency, please call your local emergency services immediately.
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group relative"
      >
        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20 group-hover:hidden"></div>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}