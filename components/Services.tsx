
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "financial-accounting",
    title: "Financial & Accounting Solutions",
    description: "Precision financial statement preparation and comprehensive accounting oversight.",
    fullDescription: "Our certified professionals possess a wealth of expertise in various domains of accounting and finance. We help you achieve success through rigorous analysis and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Financial Statement Preparation", detail: "Accurate and compliant reporting of your company's fiscal position." },
      { title: "Budgets and Cashflow", detail: "Comprehensive solutions for managing daily liquidity and long-term targets." },
      { title: "Accounting Systems", detail: "Professional setup and integration of modern cloud-based systems." },
      { title: "Regulatory Reporting", detail: "Ensuring all state and federal reporting requirements are met with precision." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 2v-6m-8 13h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 022 2z" />
      </svg>
    )
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping Services & Support",
    description: "Meticulous record-keeping to maintain profitability and capitalize on opportunities.",
    fullDescription: "OCS's bookkeeping services steer you closer to your goals with accurate reporting and support on initial system setup and cost minimization.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Bank Reconciliation", detail: "Daily tracking and matching of bank transactions to internal records." },
      { title: "General Ledger", detail: "Detailed trial balance summaries and maintenance of your primary records." },
      { title: "QuickBooks Support", detail: "Expert guidance on the industry's leading bookkeeping platform." },
      { title: "Fund Accounting", detail: "Specialized management for complex fund structures and restricted assets." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )
  },
  {
    id: "tax-prep",
    title: "Tax Preparation Services",
    description: "Decisive planning that minimizes liability and maximizes cash flow.",
    fullDescription: "Our expertise, experience, analysis and thorough research allow us to optimize financial opportunities found in existing and altered tax laws.",
    imageUrl: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Corporate Tax Planning", detail: "Strategic decisions to optimize corporate fiscal structures." },
      { title: "Individual Tax Planning", detail: "Helping high-net-worth individuals navigate complex personal filings." },
      { title: "Estate & Trust Planning", detail: "Advising on wealth preservation and legacy management." },
      { title: "Forensic Accounting", detail: "Litigation support and detailed financial investigation services." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5" />
        </svg>
      )
  },
  {
    id: "payroll-1099",
    title: "Payroll & 1099 Contract Solutions",
    description: "Reduce administrative time through computerized implementation and processing.",
    fullDescription: "Our payroll services facilitate timely payment, preparation of tax returns, and comprehensive tracking for your entire team.",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "W2 & 941 Processing", detail: "Precise tax form preparation and payroll disbursement." },
      { title: "PTO Tracking", detail: "Computerized monitoring of time-off and employee timesheets." },
      { title: "1099 Contractual Payroll", detail: "Managing payments and compliance for independent contractors." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
  },
  {
    id: "outsourced-audits",
    title: "Outsourced Audits & Assurance",
    description: "Assuring the solidity of financial records and evaluating procedures.",
    fullDescription: "At OCS, we build close client relationships that add value through objective analysis, cost control, and implementation of new technologies.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Reviews & Compilations", detail: "Assurance services that improve information quality for your business." },
      { title: "Mergers & Acquisitions", detail: "Due diligence and strategic support for corporate transitions." },
      { title: "Business Restructuring", detail: "Objective analysis to increase efficiency and implement new standards." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
        </svg>
      )
  },
  {
    id: "hr-staffing",
    title: "Human Resources & Staff Augmentation",
    description: "Streamline administration and gain access to a larger talent pool.",
    fullDescription: "We provide professional accounting staffing on a full-time, part-time, or project basis. Gain lower labor costs and increased efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Professional Staffing", detail: "Augmentation support with high-quality Outsourced CPA candidates." },
      { title: "Employee Benefits", detail: "Management of 401k, pensions, and comprehensive benefits systems." },
      { title: "Outsourced CFO Services", detail: "Strategic high-level financial leadership for growing firms." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
  },
  {
    id: "loans-grants",
    title: "Loans, LOC, and Grants",
    description: "Guidance and advice on obtaining appropriate operations loans and credit.",
    fullDescription: "We provide our clients with access to apply for business loans and lines of credit (LOC) to support operations and payroll.",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Capital Sourcing", detail: "Identifying appropriate operations loans for start-ups and existing firms." },
      { title: "LOC Support", detail: "Access to lines of credit to support financial needs and payroll." },
      { title: "Strategic Guidance", detail: "Professional advice on the application process for grants and loans." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
        </svg>
      )
  },
  {
    id: "business-solutions",
    title: "Business Solutions & Development",
    description: "Specialized accounting expertise to help grow your business.",
    fullDescription: "Look to our team for simple solutions to complex challenges. We believe in strategic planning as the core of growth.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Planning", detail: "Strategic and resource planning including business plan preparation." },
      { title: "Management Support", detail: "Financial operations management and daily development advice." },
      { title: "Business Analysis", detail: "Improvement studies, rate analysis, and cost evaluations." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">360° Financial Solutions</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-6">Expertise That Scales.</h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
            Ordia Consulting Services offers a comprehensive list of financial services designed to meet the diverse needs of our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className="reveal bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className="relative h-56 md:h-64 overflow-hidden bg-slate-100">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute -bottom-7 left-8 w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-white transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-7 h-7">{service.icon}</div>
                </div>
              </div>
              <div className="p-8 pt-12 flex-grow">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-50 flex justify-between items-center relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Explore Detail</span>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
