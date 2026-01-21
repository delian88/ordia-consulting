
import React from 'react';

export const Resources: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Tax Preparation Services</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Strategies That <span className="italic font-normal text-blue-500">Maximize Cash Flow.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">At OCS, we guide our clients through a full range of tax planning and preparation decisions with strategies that minimize your tax liabilities, maximize your cash flow and keep you on track to your financial goals. Our expertise allows us to optimize financial opportunities in existing and altered tax laws.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Corporate Tax Planning", desc: "Navigating complex corporate laws to find opportunities and optimize filings for established enterprises.", icon: "CT" },
            { title: "Individual Tax Planning", desc: "Personalized advice to make sense of your receipts, bills, and notices while minimizing personal burden.", icon: "IT" },
            { title: "Litigation & Forensic", desc: "Expert analysis and thorough research for litigation support and forensic accounting in legal disputes.", icon: "FA" }
          ].map((tool, i) => (
            <div key={i} className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{tool.title}</h3>
              <p className="text-slate-500 text-sm font-light mb-8">{tool.desc}</p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all">Download Advisory</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
