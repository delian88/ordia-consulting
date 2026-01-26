import React from 'react';

interface Partner {
  name: string;
  description?: string;
  href: string;
  isLogoOnly?: boolean;
}

const partners: Partner[] = [
  { name: "BMK360CPA", href: "https://www.bmk360cpa.com/", description: "360° Strategic Accounting" },
  { name: "SOA Financial Services", href: "https://www.soafinancial.com/", description: "Comprehensive Financial Advisory" },
  { name: "Bryan N Allen CPA", href: "https://www.bnallencpa.com/", description: "Certified Public Accounting" },
  { name: "Stephen James and Associates", href: "#", description: "Management Consultants" },
  { name: "Platinum Constructions", href: "#", description: "Construction & Consulting" },
  { name: "Marriott Vacation Club", href: "#", description: "Hospitality Industry" },
  { name: "Sysco Food Distributions", href: "#", description: "Supply Chain & Logistics" },
  { name: "Washington Gas Light", href: "#", description: "Energy & Infrastructure" },
  { name: "NHS Baltimore Services", href: "#", description: "Community Health Services" },
  { name: "Manna House, Inc", href: "#", description: "Non-Profit Sector" },
  { name: "Edo and Esan Community Association", href: "#", description: "Community Association" },
  { name: "Esan Community Association", href: "#", description: "Association Accounting" },
  { name: "United Club of Nigeria", href: "#", description: "Organization Advisory" },
  { name: "JLN Construction Services", href: "#", description: "Project Accounting" },
  { name: "Avalon Consulting Services", href: "#", description: "Strategic Management" },
  { name: "Ajam Construction Services", href: "#", description: "Construction Compliance" },
  { name: "Reid and Joseph Construction Associates", href: "#", description: "Structural Advisory" },
  { name: "Cape of Good Health Services", href: "#", description: "Healthcare Compliance" },
  { name: "FMW MedSpa Mental Health", href: "#", description: "Mental Health Accounting" },
  { name: "Propsper Health and Behavioral Services", href: "#", description: "Behavioral Health" },
  { name: "Village Behavioral Health Services", href: "#", description: "Behavioral Health Advisory" },
  { name: "Noble Health and Behavioral Cares Services", href: "#", description: "Care & Health Services" },
  { name: "Azariah Management Group", href: "https://azariahmg.com/", description: "Digital Transformation" },
  { name: "World Ai Force", href: "https://worldaiforce.com/", description: "AI & Innovation" }
];

// Double the partners to create a seamless infinite scroll effect
const scrollPartners = [...partners, ...partners];

interface PartnersProps {
  isStandalone?: boolean;
}

export const Partners: React.FC<PartnersProps> = ({ isStandalone = false }) => {
  return (
    <section id="partners" className={`py-24 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-slate-50/50'} border-y border-slate-100 relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl text-center lg:text-left reveal-left">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Strategic Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Partners & Past Clients.</h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              We collaborate with premier organizations and industry leaders across the United States to ensure our clients receive the most comprehensive Outsourced CPA oversight.
            </p>
          </div>
          <div className="flex items-center space-x-8 reveal-right">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-900">{partners.length}+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Partners</span>
             </div>
             <div className="w-px h-12 bg-slate-200"></div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-900">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years Experience</span>
             </div>
          </div>
        </div>

        {isStandalone ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 reveal">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-blue-900 font-bold text-sm md:text-base mb-1 group-hover:text-blue-600 transition-colors">{partner.name}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">{partner.description}</span>
                  {partner.href !== "#" && (
                    <a href={partner.href} target="_blank" rel="noopener noreferrer" className="mt-4 text-[9px] font-bold text-blue-400 flex items-center group-hover:text-blue-900 transition-colors">
                      VISIT WEBSITE <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12">
            <div className="flex flex-col items-center mb-8 reveal">
              <span className="bg-blue-900 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-lg border-2 border-white/10">
                Industry & Partnership Network
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-blue-900 to-transparent mt-2"></div>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex items-center animate-marquee whitespace-nowrap group">
                <div className="flex items-center py-4">
                  {scrollPartners.map((partner, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center px-12 md:px-24 transition-all duration-500"
                    >
                      <span className="text-xl md:text-2xl font-serif font-bold text-slate-400 hover:text-blue-900 transition-colors cursor-default whitespace-nowrap uppercase tracking-tighter">
                          {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
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
          animation: marquee 120s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};