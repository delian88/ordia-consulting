
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

// Double the partners to create a seamless infinite scroll effect
const scrollPartners = [...partners, ...partners, ...partners];

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

        {/* Infinite Scroll Container */}
        <div className="relative mt-12 overflow-hidden">
          {/* Fades for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-20 pointer-events-none"></div>

          <div className="flex items-center animate-marquee whitespace-nowrap group">
            <div className="flex items-center py-4">
              {scrollPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center px-12 md:px-20 bg-transparent transition-all duration-500 group-item"
                >
                  <div className="mb-4 opacity-40 grayscale group-hover:grayscale-0 hover:opacity-100 transition-all duration-700 transform hover:scale-110">
                    {partner.logo}
                  </div>
                  <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
