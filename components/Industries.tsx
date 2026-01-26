
import React from 'react';
import { Partners } from './Partners';
import { Testimonials } from './Testimonials';

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

export const Industries: React.FC<{ isStandalone?: boolean; onNavigate?: (href: string) => void }> = ({ isStandalone = false, onNavigate }) => {
  const displayIndustries = isStandalone ? industryList : industryList.slice(0, 4);

  return (
    <div className={`pt-24 bg-white ${isStandalone ? 'min-h-screen pt-40' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Global Industry Performance</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Industry <span className="italic font-normal text-blue-500">Experience.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            Ordia Consulting Services delivers technical excellence across a broad spectrum of industries, providing tailored solutions that address the unique fiscal challenges of each sector.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {displayIndustries.map((industry, i) => (
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

        {!isStandalone && onNavigate && (
          <div className="text-center mb-32 reveal">
            <button 
              onClick={() => onNavigate('#industries')}
              className="inline-flex items-center px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all active:scale-95 group"
            >
              Learn More Industry Insights
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}

        <div className="reveal bg-blue-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden mb-24">
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
      
      {/* 
          Integrated Testimonials and Partners Section 
          We render these only in isStandalone mode to avoid double-rendering on the Home Page 
          while ensuring the Industry page is fully featured.
      */}
      {isStandalone && (
        <div className="animate-fade-in">
          <Testimonials />
          <Partners isStandalone={true} />
        </div>
      )}
    </div>
  );
};
