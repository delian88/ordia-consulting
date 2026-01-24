
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "construction-accounting",
    title: "Construction Accounting",
    description: "Expertise in WIP schedules, Job Take-offs, Estimating, and Job Costing.",
    fullDescription: "OCS provides deep technical expertise for the construction and engineering sectors. We understand the complexities of revenue recognition, Work in Progress (WIP) management, and the critical nature of accurate job costing to maintain profitability on high-stakes projects.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "WIP Management", detail: "Sophisticated Work in Progress schedules for accurate revenue recognition." },
      { title: "Job Costing", detail: "Detailed analysis of labor, materials, and overhead on a per-project basis." },
      { title: "Estimation Support", detail: "Technical financial assistance during the bidding and take-off process." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "healthcare-accounting",
    title: "Mental Health & Healthcare",
    description: "Specialized financial management for therapists, counselors, and clinics.",
    fullDescription: "We solve the unique fiscal challenges of the healthcare industry. From managing complex insurance reimbursement cycles to ensuring payroll compliance for medical staff, OCS provides the peace of mind practitioners need to focus on patient care.",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Insurance Cash Flow", detail: "Optimizing the lifecycle of claims and reimbursements for consistent liquidity." },
      { title: "Medical Payroll", detail: "Compliance-heavy payroll management for specialized medical practices." },
      { title: "Clinic Optimization", detail: "Operational analysis to improve the financial health of your practice." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: "nonprofit-accounting",
    title: "Non-Profit Accounting",
    description: "Support for boards, grant management, and mission-driven forecasting.",
    fullDescription: "Non-profits require a unique blend of transparency and strategic foresight. OCS assists boards with grant compliance, audit preparation, and developing financial models that align with the organization's mission.",
    imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Grant Management", detail: "Tracking and reporting for restricted and unrestricted funds to ensure compliance." },
      { title: "Audit Preparation", detail: "Meticulous organization of records to facilitate smooth external audits." },
      { title: "Board Reporting", detail: "Clear, insightful financial presentations for non-profit board members." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "loans-grants",
    title: "Loans, LOC, and Grants",
    description: "Sourcing business loans, lines of credit (LOC), and professional grant consulting.",
    fullDescription: "Capital is the lifeblood of business growth. We assist our clients in sourcing and securing competitive business loans, establishing strategic lines of credit, and navigating the professional grant application process.",
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87faff2f9070?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Loan Sourcing", detail: "Strategic matching with competitive lending partners and SBA opportunities." },
      { title: "LOC Setup", detail: "Securing Lines of Credit to provide operational flexibility and growth capital." },
      { title: "Grant Sourcing", detail: "Identifying and applying for government and private sector grants." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "business-solutions",
    title: "Business Solutions and Development",
    description: "Strategic planning, management support, and business analysis.",
    fullDescription: "OCS goes beyond numbers to provide comprehensive business development. We help you with strategic planning, management consulting, and deep-dive analysis to ensure your business structure supports your long-term vision.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Strategic Planning", detail: "Developing clear roadmaps for business expansion and operational efficiency." },
      { title: "Management Support", detail: "Professional consulting to optimize internal processes and leadership." },
      { title: "Business Analysis", detail: "Data-driven insights into your market position and profitability." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: "financial-accounting",
    title: "Financial and Accounting Solutions",
    description: "Technical financial statement preparation and regulatory reporting.",
    fullDescription: "Ordia Consulting Services offers a comprehensive list of financial services designed to meet the diverse needs of our clients. Our certified professionals possess a wealth of expertise in various domains of accounting and finance.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Financial Statements", detail: "Accurate preparation of balance sheets, P&L, and cash flow statements." },
      { title: "Budgets & Cashflow", detail: "Developing robust frameworks to manage and optimize daily liquidity." },
      { title: "Regulatory Reporting", detail: "Ensuring 100% compliance with industry-specific and government regulations." }
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
    fullDescription: "Our services steer you closer to profitability with accurate record-keeping and reporting. We handle the technical details of ledger maintenance so you can focus on growth.",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "General Ledger", detail: "Professional maintenance of financial records on a consistent schedule." },
      { title: "Bank Reconciliation", detail: "Meticulous matching of bank statements with internal records." },
      { title: "Support Services", detail: "Ongoing technical support to keep your bookkeeping workflows seamless." }
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
    description: "Minimize tax liabilities and maximize cash flow with strategic planning.",
    fullDescription: "At OCS, we guide our clients through a full range of tax planning and preparation decisions with strategies that keep you on track to your financial goals.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Corporate Tax", detail: "Sophisticated strategies to ensure compliance and minimize tax burden." },
      { title: "Individual Planning", detail: "Personalized strategy and meticulous filing for individual taxpayers." },
      { title: "Estate & Trust", detail: "Navigating the complexities of wealth transfer and tax-efficient management." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "payroll-solutions",
    title: "Payroll & 1099 Solutions",
    description: "Computerized payroll, W2's, 941 preparations, and contractual payroll.",
    fullDescription: "Ensure your team is paid on time and your compliance is bulletproof. We handle all aspects of payroll processing, quarterly tax filings, and contractor management.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-1119343170ad?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Full-Cycle Payroll", detail: "Timely and accurate processing for employees and contractors." },
      { title: "W2 & 1099", detail: "Seamless end-of-year reporting and form distribution." },
      { title: "Quarterly 941s", detail: "Handling all necessary government payroll tax preparations." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "audit-assurance",
    title: "Outsourced Audits & Assurance",
    description: "Objective analysis, outsourced audits, and internal control reviews.",
    fullDescription: "Our efforts provide clients with tangible results through corrective actions that remediate internal control issues and enhance management visibility.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Outsourced Audits", detail: "Providing objective, high-quality audit services for third-party requirements." },
      { title: "Internal Controls", detail: "Deep-dive assessment of financial processes to mitigate organizational risk." },
      { title: "Restructuring", detail: "Strategic financial analysis during business restructuring or M&A." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "hr-staffing",
    title: "HR & Staffing Solutions",
    description: "Professional staffing, policy development, and Outsourced CFO leadership.",
    fullDescription: "OCS helps streamline the time spent on administration through efficient human resources systems and staffing augmentation for your accounting department.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Staff Augmentation", detail: "Providing expert accounting professionals on demand." },
      { title: "HR Systems", detail: "Developing organizational policies that improve efficiency." },
      { title: "Outsourced CFO", detail: "High-level strategic leadership for growing enterprises." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: "quickbooks-specialist",
    title: "QuickBooks Specialist",
    description: "Training, professional installation, and transaction review.",
    fullDescription: "QuickBooks only works if it's setup right. We don't just help you use software; we help you use it more efficiently to drive your business.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "System Setup", detail: "Expert installation on stand-alone or complex multi-user networks." },
      { title: "User Training", detail: "Customized one-on-one sessions for your specific business workflow." },
      { title: "Expert Review", detail: "Regular review of transactions to ensure data integrity." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
  isStandalone?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, isStandalone = false }) => {
  return (
    <section id="services" className={`py-24 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-white'} relative overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block border-l-2 border-blue-500 pl-4">Our Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-8 leading-tight">Comprehensive <br /><span className="italic font-normal text-blue-500">Financial Solutions.</span></h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            Ordia Consulting Services delivers technical excellence across specialized industries, providing tailored solutions that address your unique fiscal challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className="reveal bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-blue-600 group-hover:text-blue-900">
                Explore Details
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
