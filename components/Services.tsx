
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "financial-accounting",
    title: "Financial and Accounting Solutions",
    description: "Comprehensive list of financial services designed to meet diverse needs.",
    fullDescription: "Ordia Consulting Services offers a comprehensive list of financial services designed to meet the diverse needs of our clients. Our certified professionals possess a wealth of expertise in various domains of accounting and finance, ensuring that we can assist you effectively in achieving your financial goals. You can count on us to help you achieve financial success!",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Financial Statement Preparation", detail: "Accurate preparation of all necessary financial statements for compliance and analysis." },
      { title: "Budgets and Cashflow Solutions", detail: "Developing robust budgets and managing liquidity effectively." },
      { title: "Accounting Systems & Integration", detail: "Setup and integration of modern accounting systems tailored to your workflow." },
      { title: "Cash flow Budgeting and Forecasting", detail: "In-depth analysis and forecasting to predict future financial health." },
      { title: "Personal Financial Statements", detail: "Detailed statements for individual wealth and asset management." },
      { title: "Financial Projections and Forecasts", detail: "Forward-looking models to guide long-term strategic decisions." },
      { title: "Regulatory Reporting Services", detail: "Ensuring all industry-specific regulatory requirements are satisfied." },
      { title: "Treasury and Risk Management", detail: "Strategic support for managing corporate treasury and mitigating fiscal risk." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 2v-6m-8 13h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 022 2z" />
      </svg>
    )
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping Services and Support",
    description: "Quality bookkeeping services for start-ups and established enterprises.",
    fullDescription: "Businesses rely on accurate and insightful financial information to maintain profitability and capitalize on new opportunities. OCS's accounting and bookkeeping services steer you closer to these goals with accurate record-keeping and reporting as well as support on financial issues such as initial accounting system setup and cost minimization.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Bookkeeping Maintenance", detail: "Monthly, quarterly, or annual support to keep your records current." },
      { title: "General Ledger & Trial Balance", detail: "Comprehensive summary and maintenance of your primary financial books." },
      { title: "Bank Transactions & Reconciliation", detail: "Ensuring every bank movement is accounted for and matched correctly." },
      { title: "QuickBooks Support", detail: "Expert help and troubleshooting for your QuickBooks environment." },
      { title: "Fiscal Reporting and Services", detail: "Regular reporting to provide insight into your operational performance." },
      { title: "Fund Accounting and Management", detail: "Specialized ledger management for funds and restricted resources." },
      { title: "Bookkeeping Write-up and Notes", detail: "Detailed documentation and clarification for all bookkeeping entries." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
  },
  {
    id: "tax-prep",
    title: "Tax Preparation Services",
    description: "Full range of tax planning and preparation decisions to minimize liability.",
    fullDescription: "At OCS, we guide our clients through a full range of tax planning and preparation decisions with strategies that minimize your tax liabilities, maximize your cash flow and keep you on track to your financial goals. Our expertise, experience, analysis and thorough research allow us to optimize financial opportunities to be found in existing as well as recently altered tax laws.",
    imageUrl: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Corporate Tax Planning", detail: "Strategies designed for businesses to optimize their tax position." },
      { title: "Individual Tax Planning", detail: "Personalized tax strategy and preparation for individual clients." },
      { title: "Tax Management Support", detail: "Ongoing services to manage notices, receipts, and tax notices." },
      { title: "Estate and Trust Planning", detail: "Advising on the complex requirements of estates and trusts." },
      { title: "Litigation & Forensic Accounting", detail: "Specialized accounting support for legal cases and forensic investigations." },
      { title: "New Tax Laws & Training", detail: "Staying up to date with certifications and regulatory alterations." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
  },
  {
    id: "payroll-1099",
    title: "Payroll & 1099 Contract solutions",
    description: "Reduce administrative time through implemented computerized payroll systems.",
    fullDescription: "Ordia Consulting Services’ payroll services can help you reduce the time spent on administration through developing and implementing a computerized payroll system that will facilitate processing, timely payment and preparation of tax returns.",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Payroll Processing and W2’s", detail: "Full cycle payroll processing ensuring all W2s are generated correctly." },
      { title: "941 Tax form preparations", detail: "Timely and accurate filing of federal quarterly tax returns." },
      { title: "PTO Tracking and Timesheets", detail: "Integration of employee time tracking and paid time off management." },
      { title: "1099 Contractual Payroll", detail: "Specialized processing for contractors and independent service providers." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
  },
  {
    id: "outsourced-audits",
    title: "Outsourced Audits & Assurance Support",
    description: "Assuring solidity of records and evaluating financial procedures.",
    fullDescription: "At Ordia Consulting Services, we focus on building close client relationships that add long-term value. This includes assuring the solidity of financial records, evaluating financial procedures and working to produce strategies that help our clients face challenges of business execution. Our assurance services will improve information quality, meaning more success for your business.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Assurance and Advisory Services", detail: "High-level objective analysis to control costs and increase efficiency." },
      { title: "Outsourced Audits & Reviews", detail: "Formal audits and reviews to verify the context and quality of your data." },
      { title: "Business Restructuring", detail: "Assistance in selection and restructuring for operational excellence." },
      { title: "Mergers and Acquisitions", detail: "Comprehensive support for the valuation and execution of corporate merges." },
      { title: "Succession and Migrations", detail: "Strategic planning for business handovers and system migrations." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
  },
  {
    id: "hr-staffing",
    title: "Human Resources & Staff Augmentation",
    description: "Gain lower labor costs and larger talent pools through efficient systems.",
    fullDescription: "Ordia Consulting Services’ HR services help you streamline the time spent on administration through developing and implementing an efficient human resources system. We provide professional accounting staffing services on a full-time, part-time, or project-specific basis.",
    imageUrl: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Staffing Solutions & Augmentation", detail: "Accessing high-tier talent to support your internal accounting needs." },
      { title: "Employee Benefits & 401k", detail: "Management of benefits, 401k, and pension systems for your team." },
      { title: "New Business Start-ups", detail: "Strategic HR advice for early-stage organizational growth." },
      { title: "Organizational Policies", detail: "Developing clear procedures and policies for staff governance." },
      { title: "Outsourced CFO Services", detail: "Providing high-level strategic financial leadership on an outsourced basis." }
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
    description: "Access and consultation for business loans and lines of credit.",
    fullDescription: "From start-ups to existing business, at OCS, we provide our clients with access to apply for business loans and lines of credit (LOC) to support their financial needs, business operations, and payroll. We provide consultation, guidance and advice on obtaining appropriate operations loans.",
    imageUrl: "https://images.unsplash.com/photo-1554224156-5654388654a9?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Loans Sourcing", detail: "Guidance and advice on obtaining capital for growth or operations." },
      { title: "Lines of Credit (LOC)", detail: "Support in applying for and managing business lines of credit." },
      { title: "Grant Advisory", detail: "Professional guidance on finding and applying for appropriate grants." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" />
        </svg>
      )
  },
  {
    id: "business-solutions",
    title: "Business Solutions and Development",
    description: "Specialized Outsourced CPA expertise to help grow your business.",
    fullDescription: "At Ordia Consulting Services, we believe you need specialized accounting expertise to help grow your business. Look to our team of accountants and professionals for simple solutions to complex challenges.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Planning", detail: "Strategic planning, business plan preparation, and resource planning." },
      { title: "Business Management", detail: "Comprehensive support for financial operations management." },
      { title: "Business Analysis", detail: "Improvement studies, rate analysis, and detailed cost evaluations." },
      { title: "Business Valuation", detail: "Professional advising on the fair market value of your enterprise." }
    ],
    icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-6">Strategic Solutions.</h2>
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
