import React from 'react';

export const Consulting: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Business Solutions and Development</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Expertise to <span className="italic font-normal text-blue-500">Help Grow Your Business.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            At Ordia Consulting Services, we believe you need specialized accounting expertise to help grow your business. Look to our team of accountants and professionals for simple solutions to complex challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { title: "Business Planning", desc: "Strategic planning, resource planning, and professional business plan preparation to define your long-term success.", icon: "BP" },
            { title: "Business Management", desc: "Expert support for financial operations management to ensure your daily business runs with precision.", icon: "BM" },
            { title: "Business Analysis", desc: "Business improvement, rate, and cost studies to identify efficiencies and drive profitability.", icon: "BA" },
            { title: "Business Valuation", desc: "Professional enterprise valuation and advising to support strategic transitions, sales, or tax planning.", icon: "BV" }
          ].map((item, i) => (
            <div key={i} className="reveal bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};