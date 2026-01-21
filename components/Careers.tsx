
import React from 'react';

export const Careers: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Human Resources & Staff Augmentation</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Gain a <span className="italic font-normal text-blue-500">Larger Talent Pool.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">OCS helps you streamline the time spent on administration through developing and implementing an efficient human resources system. We provide professional accounting staffing services on a full-time, part-time, or project-specific basis.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="reveal-left">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Gain When You Procure Our Services</h2>
            <div className="space-y-8">
              {[
                { t: "Lower Labor Costs", d: "Reduced overhead through streamlined Outsourced CPA administration." },
                { t: "Internal Staff Development", d: "Professional accounting staffing that elevates your internal team's efficiency." },
                { t: "Increased Efficiency", d: "A larger talent pool focused on strategic business operations." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">0{i+1}</div>
                  <div>
                    <h4 className="text-blue-900 font-bold mb-1">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right bg-slate-900 p-12 rounded-[3rem] text-white">
            <h3 className="text-2xl font-serif font-bold mb-8">Current Opportunities</h3>
            <div className="space-y-6">
              {["Staff Accountant (Outsourced CPA Track)", "Benefit Specialist", "Recruitment Consultant"].map((job, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-pointer flex justify-between items-center group">
                  <div>
                    <p className="font-bold text-blue-400 mb-1">{job}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">Global / Remote Hybrid</p>
                  </div>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              ))}
            </div>
            <p className="mt-10 text-white/40 text-xs text-center">Inquire at careers@ordiafinances.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
