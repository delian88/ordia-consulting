
import React from 'react';

interface Partner {
  name: string;
  logo: React.ReactNode;
  description: string;
  href: string;
}

const partners: Partner[] = [
  {
    name: "Azariah Management Group",
    description: "Operational Excellence & Management",
    href: "https://azariahmg.com/",
    logo: (
      <div className="flex flex-col items-center">
        <span className="text-xl md:text-2xl font-serif font-black text-blue-900 tracking-tighter">AZARIAH</span>
        <span className="text-[8px] font-bold tracking-[0.3em] text-blue-500 uppercase">Management Group</span>
      </div>
    )
  },
  {
    name: "Susan L. Allien CPA PA",
    description: "Expert Tax & Forensic Advisory",
    href: "https://susanallencpa.com/",
    logo: (
      <div className="flex items-center space-x-3">
        <div className="w-px h-12 bg-blue-900/10"></div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-serif font-bold text-slate-800 leading-none tracking-tight">Susan L. Allien</span>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">CPA</span>
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
            <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">PA</span>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "BmK360CPA, PC",
    description: "Advanced CPA & Strategic Accounting",
    href: "https://bmk360cpa.com/",
    logo: (
      <div className="flex items-center space-x-3">
        <div className="flex flex-col items-end">
          <span className="text-2xl font-black text-[#5e846e] leading-none tracking-tighter">BMK</span>
          <span className="text-[8px] font-bold text-slate-400 tracking-[0.2em] uppercase">Professional Corp.</span>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-1">
             <span className="text-lg font-serif italic font-bold text-blue-900">360°</span>
             <span className="text-xl font-bold text-slate-800">CPA</span>
          </div>
          <span className="text-[7px] font-black text-[#5e846e] uppercase tracking-[0.3em] -mt-1">PC Certified</span>
        </div>
      </div>
    )
  },
  {
    name: "World A.I Force",
    description: "Technology & AI Integration",
    href: "https://worldaiforce.com/",
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">W</div>
        <div className="flex flex-col">
          <span className="text-sm font-black text-slate-800 leading-none">WORLD A.I</span>
          <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">FORCE</span>
        </div>
      </div>
    )
  }
];

// Double the partners to create a seamless infinite scroll effect
const scrollPartners = [...partners, ...partners, ...partners, ...partners];

interface PartnersProps {
  isStandalone?: boolean;
}

export const Partners: React.FC<PartnersProps> = ({ isStandalone = false }) => {
  return (
    <section id="partners" className={`py-24 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-slate-50/50'} border-y border-slate-100 relative overflow-hidden`}>
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

        {isStandalone ? (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-20 reveal">
            {partners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
              >
                <div className="mb-8">{partner.logo}</div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">{partner.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{partner.description}</p>
                <div className="flex items-center text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                  <span>Visit Website</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* Infinite Scroll Container for Home view */
          <div className="relative mt-12 overflow-hidden">
            {/* Fades for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-20 pointer-events-none"></div>

            <div className="flex items-center animate-marquee whitespace-nowrap group">
              <div className="flex items-center py-4">
                {scrollPartners.map((partner, index) => (
                  <a 
                    key={index} 
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center px-12 md:px-24 bg-transparent transition-all duration-500 no-underline"
                  >
                    <div className="mb-4 opacity-60 grayscale group-hover:grayscale-0 hover:opacity-100 transition-all duration-700 transform hover:scale-110">
                      {partner.logo}
                    </div>
                    <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                      Visit Website
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
