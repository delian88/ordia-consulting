
import React from 'react';

export const Resources: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Knowledge Center</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Empowering Your <span className="italic font-normal text-blue-500">Financial IQ.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">Premium tools and tactical guides designed to help you navigate the complexity of the tax code and corporate law.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Tax Calendar 2025</h3>
            <p className="text-slate-500 text-sm font-light mb-8">Never miss a filing deadline. Sync our interactive 2025 tax calendar with your business schedule.</p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all">Download PDF</button>
          </div>

          <div className="reveal bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">Audit Readiness Checklist</h3>
            <p className="text-slate-500 text-sm font-light mb-8">A comprehensive guide to ensuring your records are bulletproof for any state or federal audit.</p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all">Access Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};
