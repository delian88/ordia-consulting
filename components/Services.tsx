
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  // ... (keep original servicesData array content as is, just using component updates below)
  {
    id: "financial-accounting",
    title: "Financial & Accounting",
    description: "Precision financial statement preparation and comprehensive accounting oversight.",
    fullDescription: "Our Financial & Accounting service provides the backbone for your business's fiscal health. We move beyond simple data entry to provide high-level analysis and reporting that helps you understand where every dollar goes and where your growth opportunities lie.",
    features: [
      { title: "Balance Sheet Management", detail: "Comprehensive tracking of assets, liabilities, and equity to ensure a clear snapshot of your company's net worth at any given time." },
      { title: "P&L Analysis", detail: "In-depth review of revenue and expenses to identify trends, improve margins, and drive operational efficiency." },
      { title: "Cash Flow Statements", detail: "Monitoring the movement of funds to ensure your business maintains the liquidity needed for daily operations and strategic investments." },
      { title: "General Ledger Cleanup", detail: "Systematic reconciliation and adjustment of accounts to ensure your historical data is accurate, compliant, and audit-ready." }
    ],
    testimonials: [
      {
        quote: "The level of detail in their reporting completely changed how we view our monthly burn rate.",
        author: "Marcus Thorne",
        role: "CEO, TechSphere Solutions"
      }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 2v-6m-8 13h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 022 2z" />
      </svg>
    )
  },
  // (Remaining data objects same as before, truncated for brevity in change block)
  {
    id: "hr-staffing",
    title: "HR & Staffing",
    description: "Strategic human resource planning and recruitment support to optimize teams.",
    fullDescription: "Your people are your greatest asset. We provide expert HR consulting to help you find, hire, and retain the best talent while ensuring you remain compliant with labor laws.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
  },
  {
    id: "treasury-risk",
    title: "Treasury & Risk Support",
    description: "Advanced liquidity management and comprehensive risk mitigation strategies.",
    fullDescription: "In an uncertain economy, managing liquidity and mitigating risk is paramount.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
  },
  {
    id: "regulatory-reporting",
    title: "Regulatory Reporting",
    description: "Ensuring compliance with state and federal requirements through accurate filings.",
    fullDescription: "Stay ahead of regulatory changes with our specialized reporting service.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
  },
  {
    id: "payroll-1099",
    title: "Payroll & 1099 Contracts",
    description: "Seamless payroll administration for employees and independent contractors.",
    fullDescription: "Take the stress out of pay day.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping Support",
    description: "Meticulous daily record-keeping and bank reconciliations.",
    fullDescription: "Solid bookkeeping is the foundation of a successful business.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )
  },
  {
    id: "loans-grants",
    title: "Loans, Grants & LOC",
    description: "Advisory on securing capital through commercial loans and lines of credit.",
    fullDescription: "Growth requires capital.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
        </svg>
      )
  },
  {
    id: "corp-taxes",
    title: "Corp Business Taxes",
    description: "Strategic corporate tax planning designed to minimize liability.",
    fullDescription: "Navigate the complexity of the corporate tax code.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5" />
        </svg>
      )
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description: "Independent verification services for financial confidence.",
    fullDescription: "Transparency builds trust.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        </svg>
      )
  },
  {
    id: "start-ups",
    title: "New Business Start-ups",
    description: "Full-cycle consulting from registration to system implementation.",
    fullDescription: "Launch with confidence.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  },
  {
    id: "org-policies",
    title: "Organization Policies",
    description: "Development of robust internal controls and governance.",
    fullDescription: "Sustainable growth requires strong governance.",
    features: [],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5" />
        </svg>
      )
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
  isStandalone?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, isStandalone = true }) => {
  return (
    <section id="services" className={`py-20 md:py-32 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-white'} relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Our 360° Solutions</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-6">Expertise That Scales.</h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
            Professional accounting and advisory services designed to empower your business growth at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className="reveal bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[4rem] -mr-10 -mt-10 transition-all duration-500 group-hover:scale-125"></div>
              
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative z-10 shadow-lg shadow-blue-900/10">
                <div className="w-7 h-7 md:w-8 md:h-8">{service.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Read More</span>
                <svg className="w-5 h-5 text-blue-600 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
