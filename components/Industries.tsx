
import React from 'react';

const industryList = [
  { name: "Governmental Agencies", icon: "🏛️", detail: "Assisting local and state entities with compliance, fund accounting, and audit prep." },
  { name: "Non-Profit Organizations", icon: "🤝", detail: "Mission-driven forecasting, grant management, and board-level financial transparency." },
  { name: "Mental Health Clinics", icon: "🧠", detail: "Solving complex insurance cash flow, payroll compliance, and practice optimization." },
  { name: "Construction & Engineering", icon: "🏗️", detail: "Specialized WIP schedules, job costing, take-offs, and estimating support." },
  { name: "Mortgage Banking", icon: "🏦", detail: "Technical accounting for lending institutions with focus on liquidity and regulation." },
  { name: "Information Technology", icon: "💻", detail: "Supporting high-growth tech firms with R&D credits and fractional CFO strategy." },
  { name: "Finance & Investment", icon: "📈", detail: "Professional advisory for asset managers and private equity portfolio companies." },
  { name: "Professional Accounting", icon: "📊", detail: "Collaborative Outsourced CPA solutions for fellow professional services firms." },
  { name: "Higher Education", icon: "🎓", detail: "Financial modeling and grant tracking for academic institutions and universities." },
  { name: "Transportation & Logistics", icon: "🚛", detail: "Supply chain financial management and operational efficiency analysis." },
  { name: "Food Service & Hospitality", icon: "🍽️", detail: "Inventory control, payroll, and margin analysis for restaurants and hotels." },
  { name: "Insurance Providers", icon: "🛡️", detail: "Regulatory reporting and complex financial statement preparation for the sector." },
  { name: "Energy & Power", icon: "⚡", detail: "Strategic financial planning for utilities and renewable energy enterprises." }
];

const partners = [
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

const scrollPartners = [...partners, ...partners];

export const Industries: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Global Industry Performance</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Industry <span className="italic font-normal text-blue-500">Experience.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            Ordia Consulting Services delivers technical excellence across a broad spectrum of industries, providing tailored solutions that address the unique fiscal challenges of each sector.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-32">
          {industryList.map((industry, i) => (
            <div 
              key={i} 
              className="reveal bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group flex flex-col items-center text-center h-full"
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors mb-4">
                {industry.name}
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                {industry.detail}
              </p>
              <div className="mt-auto w-12 h-0.5 bg-blue-100 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Partnership Integration (Marquee & Grid) */}
        <div className="pt-24 border-t border-slate-100">
          <div className="max-w-xl mx-auto text-center mb-16 reveal">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Strategic Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Trusted by Leaders.</h2>
            <p className="text-slate-500 text-sm font-light">
              We collaborate with premier organizations to ensure our clients receive the most comprehensive, high-impact Outsourced CPA oversight possible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 reveal">
            {partners.slice(0, 9).map((partner, index) => (
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

          <div className="relative overflow-hidden pt-10 border-t border-slate-50">
            <div className="flex items-center animate-marquee whitespace-nowrap group">
              <div className="flex items-center py-8">
                {scrollPartners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center px-12 md:px-24 transition-all duration-500"
                  >
                    <span className="text-xl md:text-2xl font-serif font-bold text-slate-300 hover:text-blue-900 transition-colors cursor-default whitespace-nowrap uppercase tracking-tighter">
                        {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 reveal bg-blue-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_70%)]"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-serif font-bold mb-6">Explore Our Industry Portfolio</h2>
             <p className="text-blue-100/70 mb-10 max-w-2xl mx-auto">Our financial models are adaptable and performance-driven. We've successfully applied our Outsourced CPA frameworks to emerging markets and complex niche businesses globally.</p>
             <a href="#contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-blue-900 transition-all">
                Inquire About Your Sector
             </a>
           </div>
        </div>
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
    </div>
  );
};
