import React, { useEffect } from 'react';

interface NaicsCodesProps {
  onBack: () => void;
}

export const NaicsCodes: React.FC<NaicsCodesProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "NAICS Codes Directory | Ordia Consulting Services";
  }, []);

  const naicsData = [
    { code: "541211", label: "Offices of Certified Public Accountants" },
    { code: "541219", label: "Other Accounting Services" },
    { code: "541611", label: "Administrative and General Management Consulting Service" },
    { code: "561611", label: "Investigation Services" },
    { code: "54541", label: "Litigation Support Services" },
    { code: "54121", label: "Accounting, Tax Preparation, Bookkeeping, and Payroll Services" },
    { code: "541618", label: "Other Management Consulting Services" },
    { code: "522320", label: "Processing financial transactions" },
    { code: "921190", label: "General Accounting offices, government" }
  ];

  const pscData = [
    { code: "B547", label: "Special Studies/Analysis: Accounting/Financial Management" },
    { code: "R704", label: "Support – Management: Auditing" },
    { code: "R710", label: "Support – Management: Financial" }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-12 hover:text-blue-900 transition-colors"
          >
            <div className="w-10 h-10 border border-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:border-blue-900 group-hover:text-white transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
            <span>Back to Resources</span>
          </button>

          <div className="mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Regulatory Directory</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">
              NAICS & <span className="italic font-normal text-blue-500">Service Codes.</span>
            </h1>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Ordia Consulting Services (OCS) operates under specific North American Industry Classification System (NAICS) codes to ensure accurate reporting and compliance across federal and state mandates.
            </p>
          </div>

          <div className="space-y-16">
            {/* NAICS Section */}
            <section className="reveal active">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-slate-200 flex-grow"></div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-blue-900">NAICS Codes</h2>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>
              
              <div className="grid gap-4">
                {naicsData.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <span className="text-lg font-black text-blue-600 tracking-wider mb-2 md:mb-0 group-hover:scale-110 transition-transform origin-left">{item.code}</span>
                    <span className="text-blue-900 font-medium md:text-right">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PSC Section */}
            <section className="reveal active">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-slate-200 flex-grow"></div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-blue-900">Product Service Codes</h2>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>
              
              <div className="grid gap-4">
                {pscData.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <span className="text-lg font-black text-blue-600 tracking-wider mb-2 md:mb-0 group-hover:scale-110 transition-transform origin-left">{item.code}</span>
                    <span className="text-blue-900 font-medium md:text-right italic">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-20 p-10 bg-blue-900 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
             <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Need technical procurement support?</h3>
             <p className="text-blue-100/70 mb-8 relative z-10 max-w-lg mx-auto">Our specialists can assist you with government contracting requirements and technical industry compliance.</p>
             <button 
                onClick={() => window.location.hash = '#contact'}
                className="px-10 py-4 bg-white text-blue-900 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all relative z-10"
             >
               Contact Our Compliance Team
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};