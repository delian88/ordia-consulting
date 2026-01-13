
import React from 'react';
import { FullLogo } from './Header';

interface AboutProps {
  isStandalone?: boolean;
}

export const About: React.FC<AboutProps> = ({ isStandalone = true }) => {
  return (
    <section id="about" className={`py-20 md:py-32 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-slate-50/30'} bg-white relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="relative p-8 md:p-12 lg:p-20 bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] flex flex-col items-center justify-center border border-slate-100 shadow-inner group">
              {/* Subtle Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/30 opacity-50"></div>
              
              {/* Main Visual: Full Corporate Logo */}
              <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                <FullLogo className="h-32 md:h-48 lg:h-72 drop-shadow-sm" />
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 hidden sm:block group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-2xl md:text-4xl font-serif font-bold text-blue-900 mb-1">360°</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Engagement</p>
              </div>

              <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-6 block">Our Financial Vision</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">
              Proactive Counsel <br />
              <span className="italic font-normal text-blue-500">For Growth.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg mb-6 leading-relaxed font-light">
              Ordia Consulting Services (OCS) is not just an accounting firm; we are a strategic partner dedicated to your long-term wealth creation. We leverage a modern, 360-degree model to ensure every facet of your fiscal health is optimized.
            </p>
            <p className="text-slate-500 text-base md:text-lg mb-10 leading-relaxed font-light">
              From Baltimore to the rest of the nation, our team brings deep technical expertise in complex tax structures, audit assurance, and operational consulting.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              <div className="group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 md:mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">Maximize Returns</h4>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">Our 360° tax planning identifies high-impact opportunities that standard accounting often overlooks.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 md:mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                </div>
                <h4 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">Holistic Oversight</h4>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">We manage the full spectrum of your financial life, from bookkeeping to advanced capital structuring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
