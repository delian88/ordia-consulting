
import React from 'react';

export const Resources: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">QuickBooks Services and Installation</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Effective Software <span className="italic font-normal text-blue-500">Utilization.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            QuickBooks can only provide useful and timely information if you purchase the right product and install it properly. We don't just help you use the software; we help you use it more efficiently and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "QuickBooks Setup", desc: "Assisting new and experienced users with Easy Step Interview, Preferences, Lists, Banking, and specialized reports.", icon: "QS" },
            { title: "Personal Training", desc: "Customized one-on-one or group training at your location to master every facet of the software.", icon: "PT" },
            { title: "Software Installation", desc: "Expert setup on stand-alone computers or complex networks in single or multi-user modes.", icon: "SI" },
            { title: "Support & Troubleshooting", desc: "Ongoing assistance for setup, operation, and integration with accounting and payroll workflows.", icon: "ST" },
            { title: "QuickBooks Review", desc: "Professional expert review of transactions and reports to ensure your financial data reflects reality.", icon: "QR" }
          ].map((tool, i) => (
            <div key={i} className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{tool.title}</h3>
              <p className="text-slate-500 text-sm font-light mb-8">{tool.desc}</p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all">Request Service</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
