import React from 'react';

interface Partner {
  name: string;
  description?: string;
  href: string;
  isLogoOnly?: boolean;
}

const partners: Partner[] = [
  { name: "Azariah Management Group", href: "https://azariahmg.com/", description: "Digital Transformation & Management" },
  { name: "World Ai Force", href: "https://worldaiforce.com/", description: "AI Solutions & Technical Innovation" },
  { name: "BMK360CPA", href: "https://www.bmk360cpa.com/", description: "360° Outsourced CPA Strategic Accounting" },
  { name: "SOA Financial Services", href: "https://www.soafinancial.com/", description: "Comprehensive Financial Advisory" },
  { name: "Bryan N Allen CPA", href: "https://www.bnallencpa.com/", description: "Certified Public Accounting Partner" },
  { name: "Stephen James and Associates", href: "#", description: "Management Consultants" },
  { name: "Platinum Constructions", href: "#", description: "Construction and Consulting Services" },
  { name: "Marriott Vacation Club", href: "#", description: "Global Hospitality Partner" },
  { name: "Sysco Food Distributions", href: "#", description: "Supply Chain & Logistics" },
  { name: "Washington Gas Light", href: "#", description: "Energy & Infrastructure" },
  { name: "NHS Baltimore Services", href: "#", description: "Healthcare & Community Services" },
  { name: "Manna House, Inc", href: "#", description: "Non-Profit Sector" },
  { name: "Edo and Esan Community", href: "#", description: "Community Association Partner" },
  { name: "Esan Community Association", href: "#", description: "Association Accounting" },
  { name: "United Club of Nigeria", href: "#", description: "Organization Advisory" },
  { name: "JLN Construction Services", href: "#", description: "Project Accounting Partner" },
  { name: "Avalon Consulting Services", href: "#", description: "Strategic Management" },
  { name: "Ajam Construction Services", href: "#", description: "Construction Compliance" },
  { name: "Reid and Joseph Construction", href: "#", description: "Structural Advisory" },
  { name: "Cape of Good Health Services", href: "#", description: "Healthcare Compliance" },
  { name: "FMW MedSpa Mental Health", href: "#", description: "Mental Health Accounting" },
  { name: "Propsper Health and Behavioral", href: "#", description: "Behavioral Health Services" },
  { name: "Village Behavioral Health", href: "#", description: "Non-Profit Health Advisory" },
  { name: "Noble Health Behavioral Cares", href: "#", description: "Professional Care Accounting" }
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Trusted by Industry Leaders.</h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              We collaborate with premier organizations to ensure our clients receive the most comprehensive, high-impact Outsourced CPA oversight possible.
            </p>
          </div>
          <div className="flex items-center space-x-8 reveal-right">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-900">100+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Past Clients</span>
             </div>
             <div className="w-px h-12 bg-slate-200"></div>
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-900">24+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Strategic Partners</span>
             </div>
          </div>
        </div>

        {isStandalone ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 reveal">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-blue-600 font-bold text-sm md:text-base mb-1">{partner.name}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">{partner.description}</span>
                  {partner.href !== "#" && (
                    <a href={partner.href} target="_blank" rel="noopener noreferrer" className="mt-4 text-[9px] font-bold text-blue-400 flex items-center group-hover:text-blue-900 transition-colors">
                      VISIT PARTNER <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative mt-12 overflow-hidden">
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};