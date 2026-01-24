
import React from 'react';

export const Resources: React.FC<{ isStandalone?: boolean; onNavigate?: (href: string) => void }> = ({ isStandalone = false, onNavigate }) => {
  const handleAction = () => {
    if (onNavigate) {
      onNavigate('#contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div className={`pt-32 pb-20 bg-slate-50 ${isStandalone ? 'min-h-screen pt-40' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Professional Financial Toolkit</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Strategic <span className="italic font-normal text-blue-500">Business Assets.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            Access essential financial tools, regulatory directories, and software support systems designed to optimize your organization's technical performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* External Linked Resources */}
          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border-t-4 border-blue-600 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">TT</div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Strategic Tax Tools</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Access comprehensive tax planning calculators, federal rate updates, and state-specific compliance tools via our partner network.</p>
            <a 
              href="https://www.soafinancial.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg"
            >
              Access Tax Tools
            </a>
          </div>

          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border-t-4 border-blue-900 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 mb-8 font-bold">NC</div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">NAICS Code Directory</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Ensure your business classification is accurate for government contracting and tax purposes with the official NAICS directory.</p>
            <a 
              href="https://www.bmk360cpa.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg"
            >
              Search NAICS Codes
            </a>
          </div>

          {/* Actionable QuickBooks Resources */}
          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">QS</div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">QuickBooks Setup</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Assisting users with installation, preferences, fund accounting, and specialized reporting for technical transparency.</p>
            <button 
              onClick={handleAction}
              className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95"
            >
              Request Professional Setup
            </button>
          </div>

          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">PT</div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Personal Training</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Customized one-on-one or group training sessions designed to help your team master every facet of the software.</p>
            <button 
              onClick={handleAction}
              className="px-8 py-3 bg-slate-100 text-blue-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-100 transition-all"
            >
              Book Training Session
            </button>
          </div>

          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">ST</div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Troubleshooting</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Ongoing assistance for complex setup, technical operations, and third-party software integration challenges.</p>
            <button 
              onClick={handleAction}
              className="px-8 py-3 bg-slate-100 text-blue-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-100 transition-all"
            >
              Get Technical Support
            </button>
          </div>

          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 font-bold">QR</div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Expert Review</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Regular professional reviews of transactions and reports to ensure your financial data reflects current reality.</p>
            <button 
              onClick={handleAction}
              className="px-8 py-3 bg-slate-100 text-blue-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-100 transition-all"
            >
              Schedule Expert Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
