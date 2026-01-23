import React from 'react';

const industryList = [
  { name: "Governmental Agencies", icon: "🏛️" },
  { name: "Non-Profit Organizations", icon: "🤝" },
  { name: "Mental Health Clinics", icon: "🧠" },
  { name: "Construction & Engineering", icon: "🏗️" },
  { name: "Mortgage Banking", icon: "🏦" },
  { name: "Information Technology", icon: "💻" },
  { name: "Finance & Investment", icon: "📈" },
  { name: "Professional Accounting", icon: "📊" },
  { name: "Higher Education", icon: "🎓" },
  { name: "Transportation & Logistics", icon: "🚛" },
  { name: "Food Service & Hospitality", icon: "🍽️" },
  { name: "Insurance Providers", icon: "🛡️" },
  { name: "Energy & Power", icon: "⚡" }
];

export const Industries: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Performance Industries</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">Sector-Specific <span className="italic font-normal text-blue-500">Expertise.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            Ordia Consulting Services delivers technical excellence across a broad spectrum of industries, providing tailored solutions that address the unique fiscal challenges of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industryList.map((industry, i) => (
            <div 
              key={i} 
              className="reveal bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              <div className="mt-4 w-12 h-0.5 bg-blue-100 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 reveal bg-blue-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_70%)]"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-serif font-bold mb-6">Don't see your industry?</h2>
             <p className="text-blue-100/70 mb-10 max-w-2xl mx-auto">Our financial models are adaptable. We've successfully applied our Outsourced CPA frameworks to emerging markets and complex niche businesses globally.</p>
             <a href="#contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-blue-900 transition-all">
                Inquire About Your Sector
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};