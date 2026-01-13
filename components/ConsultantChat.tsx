
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/gemini';
import { Message } from '../types';

export const ConsultantChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Ordia Consulting. I'm here to help navigate your financial growth. Are you looking to optimize an existing business, or are you in the early stages of a new venture?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    const response = await geminiService.chat(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-blue-900 transition-all hover:scale-110 active:scale-95 border-2 md:border-4 border-white"
      >
        {isOpen ? <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[500px] md:h-[550px] bg-white rounded-[2rem] shadow-2xl flex flex-col border border-slate-100 overflow-hidden animate-fade-in-up origin-bottom-right">
          <div className="bg-blue-900 p-4 md:p-6 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 text-blue-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
              </div>
              <div><p className="font-serif font-bold text-base md:text-lg leading-none mb-1">Ordia Advisor</p><p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Online</p></div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <div ref={scrollRef} className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 md:space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none font-light'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="flex justify-start"><div className="bg-white p-3 rounded-2xl flex space-x-1"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div></div></div>}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 md:p-6 bg-white border-t border-slate-50">
            <div className="relative">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type a message..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none pr-12" />
              <button type="submit" disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-900 disabled:opacity-30 p-2"><svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
