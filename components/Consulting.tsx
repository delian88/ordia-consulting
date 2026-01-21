
import React from 'react';

export const Consulting: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Executive Advisory</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Strategic Intelligence for <span className="italic font-normal text-blue-500">Corporate Evolution.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">Beyond accounting, we provide the architectural blueprints for your business's future wealth and operational stability.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Mergers & Acquisitions", desc: "Due diligence and integration strategies for seamless expansion.", icon: "M" },
            { title: "Capital Structuring", desc: "Optimizing your debt and equity mix for maximum liquidity.", icon: "C" },
            { title: "Operational Audit", desc: "Internal control evaluations to eliminate waste and fraud.", icon: "O" },
            { title: "Governance Design", desc: "Developing policies that ensure board-level accountability.", icon: "G" },
            { title: "Risk Forecasting", desc: "Sophisticated modeling to anticipate market shifts.", icon: "R" },
            { title: "Business Valuation", desc: "Precise assessment of enterprise value for exit planning.", icon: "V" }
          ].map((item, i) => (
            <div key={i} className="reveal bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
