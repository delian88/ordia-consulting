
import React from 'react';

interface Partner {
  name: string;
  logo: React.ReactNode;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Azariah Management Group",
    description: "Operational Excellence & Management",
    logo: (
      <div className="flex flex-col items-center">
        <span className="text-xl md:text-2xl font-serif font-black text-blue-900 tracking-tighter">AZARIAH</span>
        <span className="text-[8px] font-bold tracking-[0.3em] text-blue-500 uppercase">Management Group</span>
      </div>
    )
  },
  {
    name: "World A.I Force",
    description: "Technology & AI Integration",
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">W</div>
        <div className="flex flex-col">
          <span className="text-sm font-black text-slate-800 leading-none">WORLD A.I</span>
          <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">FORCE</span>
        </div>
      </div>
    )
  },
  {
    name: "Nexus Capital",
    description: "Strategic Investment Partners",
    logo: (
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="font-bold text-lg tracking-tight text-slate-700">NEXUS</span>
      </div>
    )
  },
  {
    name: "Sterling Legal",
    description: "Corporate Compliance & Counsel",
    logo: (
      <div className="flex items-center space-x-1">
        <div className="w-1 h-8 bg-slate-300"></div>
        <div className="flex flex-col">
          <span className="font-serif font-bold text-slate-800 leading-none">STERLING</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Counsel & Law</span>
        </div>
      </div>
    )
  },
  {
    name: "Beacon Enterprise",
    description: "Global Logistics & Trade",
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
        <span className="font-bold text-slate-800 text-lg uppercase tracking-widest">BEACON</span>
      </div>
    )
  }
];

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl text-center lg:text-left reveal-left">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Strategic Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Trusted by Industry Leaders.</h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              We collaborate with premier organizations to ensure our clients receive the most comprehensive, high-impact financial oversight possible.
            </p>
          </div>
          <div className="flex items-center space-x-8 reveal-right">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-900">50+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Enterprises</span>
             </div>
             <div className="w-px h-12 bg-slate-200"></div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-900">12+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Partnerships</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="reveal flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                {partner.logo}
              </div>
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
