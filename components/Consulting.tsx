
import React from 'react';

export const Consulting: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Business Solutions & Development</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Complex Challenges. <span className="italic font-normal text-blue-500">Simple Solutions.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">At Ordia Consulting Services, we believe you need specialized accounting expertise to help grow your business. Look to our team of accountants and professionals for simple solutions to complex challenges.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { title: "Business Planning", desc: "Expertise in business plan preparation, strategic, and resource planning for long-term trajectory.", icon: "BP" },
            { title: "Business Management", detail: "Handling financial operations management and providing deep support for daily activities.", icon: "BM" },
            { title: "Business Analysis", detail: "Improvement studies, rate analysis, and detailed cost evaluations to optimize ROI.", icon: "BA" },
            { title: "Business Valuation", detail: "Precise assessment of enterprise value for advisory, sales, or mergers.", icon: "BV" }
          ].map((item, i) => (
            <div key={i} className="reveal bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc || (item as any).detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
