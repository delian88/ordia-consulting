
import React from 'react';

export const Consulting: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Part-Time CFO & Controller Services</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Straightforward <span className="italic font-normal text-blue-500">Financial Guidance.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            If you’re ready to take your business to the next level through personalized, straightforward financial guidance, contact us for a free consultation. OCS provides expert CFO support for every stage of your business lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Strategic Planning", desc: "Business improvement strategies and strategic planning to maximize profits and ensure sustainable growth.", icon: "SP" },
            { title: "M&A Advisory", desc: "Expert due diligence and strategic support for mergers, acquisitions, and operations review.", icon: "MA" },
            { title: "Risk Management", detail: "Comprehensive risk management and capital raising strategies to secure your company's future.", icon: "RM" },
            { title: "Training", detail: "Professional training for your in-house accountants and bookkeepers to elevate internal performance.", icon: "TR" },
            { title: "Interim Leadership", detail: "Providing stability through Interim CFO or Controller roles during leadership transitions.", icon: "IL" },
            { title: "Cash Flow Management", detail: "Precise financial analysis and reporting to keep your business's liquidity optimized.", icon: "CF" }
          ].map((item, i) => (
            <div key={i} className="reveal bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc || item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
