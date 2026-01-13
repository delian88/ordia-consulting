
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "financial-accounting",
    title: "Financial & Accounting",
    description: "Precision financial statement preparation and comprehensive accounting oversight.",
    fullDescription: "Our Financial & Accounting service provides the backbone for your business's fiscal health. We move beyond simple data entry to provide high-level analysis and reporting that helps you understand where every dollar goes and where your growth opportunities lie.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Balance Sheet Management", detail: "Comprehensive tracking of assets, liabilities, and equity to ensure a clear snapshot of your company's net worth at any given time." },
      { title: "P&L Analysis", detail: "In-depth review of revenue and expenses to identify trends, improve margins, and drive operational efficiency." },
      { title: "Cash Flow Statements", detail: "Monitoring the movement of funds to ensure your business maintains the liquidity needed for daily operations and strategic investments." },
      { title: "General Ledger Cleanup", detail: "Systematic reconciliation and adjustment of accounts to ensure your historical data is accurate, compliant, and audit-ready." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 2v-6m-8 13h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 022 2z" />
      </svg>
    )
  },
  {
    id: "hr-staffing",
    title: "HR & Staffing",
    description: "Strategic human resource planning and recruitment support to optimize teams.",
    fullDescription: "Your people are your greatest asset. We provide expert HR consulting to help you find, hire, and retain the best talent while ensuring you remain compliant with labor laws.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Recruitment Strategy", detail: "Building a pipeline of high-quality candidates tailored to your company culture." },
      { title: "Compliance Audit", detail: "Ensuring all hiring and management practices align with current state and federal labor laws." }
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Liquidity Management", detail: "Ensuring you have the cash on hand to meet obligations and seize opportunities." },
      { title: "Risk Mitigation", detail: "Identifying potential financial threats and implementing safeguards." }
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "SEC & State Filings", detail: "Accurate preparation of all required financial reports for governing bodies." },
      { title: "Reporting Integrity", detail: "Implementing controls that ensure data accuracy for every submission." }
    ],
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
    fullDescription: "Take the stress out of pay day with automated systems and meticulous oversight.",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-1330084bc6f9?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Automated Disbursement", detail: "Scheduled, reliable payments for your entire workforce." },
      { title: "Tax Withholding", detail: "Precise calculation and filing of all payroll-related taxes." }
    ],
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
    fullDescription: "Solid bookkeeping is the foundation of a successful business. We keep your ledgers clean.",
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Daily Reconciliation", detail: "Matching bank statements to your internal records every day." },
      { title: "Accounts Payable", detail: "Managing vendor relationships and ensuring timely payments." }
    ],
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
    fullDescription: "Growth requires capital. We help you find the best terms for your expansion.",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Capital Sourcing", detail: "Identifying grants and loan programs suited for your industry." },
      { title: "Application Support", detail: "Preparing professional packages for financial institutions." }
    ],
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
    fullDescription: "Navigate the complexity of the corporate tax code with strategic planning.",
    imageUrl: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Tax Minimization", detail: "Utilizing all legal credits and deductions to lower your effective rate." },
      { title: "Strategic Planning", detail: "Multi-year tax strategies for sustainable wealth preservation." }
    ],
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
    fullDescription: "Transparency builds trust with investors and governing bodies alike.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Verification", detail: "Independent audit of your financial records to confirm accuracy." },
      { title: "Assurance", detail: "Professional confidence that your systems are reliable and valid." }
    ],
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
    fullDescription: "Launch with confidence. We handle the paperwork so you can handle the vision.",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Entity Formation", detail: "Guidance on choosing the right legal structure for your goals." },
      { title: "Initial Setup", detail: "Setting up your accounting systems from day one for success." }
    ],
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
    fullDescription: "Sustainable growth requires strong governance and clear operational policies.",
    imageUrl: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Governance Structure", detail: "Designing frameworks for decision making and accountability." },
      { title: "Policy Manuals", detail: "Clear documentation of internal procedures and standards." }
    ],
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
              className="reveal bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col"
            >
              {/* Card Image Header */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-7 left-8 w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-white transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-7 h-7">{service.icon}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 pt-12 flex-grow">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-50 flex justify-between items-center relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Read More</span>
                  <svg className="w-5 h-5 text-blue-600 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
