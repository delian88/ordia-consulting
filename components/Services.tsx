
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
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
  {
    id: "hr-staffing",
    title: "HR & Staffing",
    description: "Strategic human resource planning and recruitment support to optimize teams.",
    fullDescription: "Your people are your greatest asset. We provide expert HR consulting to help you find, hire, and retain the best talent while ensuring you remain compliant with labor laws and best practices in workforce management.",
    features: [
      { title: "Talent Acquisition", detail: "Strategic sourcing and vetting of high-quality candidates to fill critical roles within your organization." },
      { title: "Employee Handbooks", detail: "Development of comprehensive policy documents that define company culture and protect your legal interests." },
      { title: "Conflict Resolution", detail: "Professional mediation services to resolve workplace disputes and maintain a positive, productive environment." },
      { title: "Benefit Strategy", detail: "Designing competitive compensation and benefits packages that attract top-tier talent while managing costs." }
    ],
    testimonials: [
      {
        quote: "They didn't just find us a candidate; they found us a culture fit. Exceptional vetting process.",
        author: "Sarah Jenkins",
        role: "Operations Director, BlueOak Logistics"
      }
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
    fullDescription: "In an uncertain economy, managing liquidity and mitigating risk is paramount. Our treasury support services help you optimize cash positions and implement hedging strategies to protect your bottom line from market volatility.",
    features: [
      { title: "Liquidity Optimization", detail: "Maximizing the availability of funds through efficient cash management and investment of short-term surpluses." },
      { title: "Risk Assessments", detail: "Identifying potential financial, operational, and strategic threats to develop proactive mitigation plans." },
      { title: "Foreign Exchange Management", detail: "Strategies to protect your business from currency fluctuations in international transactions." },
      { title: "Hedging Strategies", detail: "Utilizing financial instruments to offset potential losses from market volatility in interest rates or commodities." }
    ],
    testimonials: [
      {
        quote: "Their risk assessment prevented a major liquidity trap during the Q3 market shift.",
        author: "David Chen",
        role: "CFO, Meridian Capital"
      }
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
    fullDescription: "Stay ahead of regulatory changes with our specialized reporting service. We ensure your filings are accurate, transparent, and submitted on time to avoid penalties and maintain your reputation with governing bodies.",
    features: [
      { title: "SEC Compliance", detail: "Ensuring all public filings meet the rigorous standards of the Securities and Exchange Commission." },
      { title: "State Tax Filings", detail: "Managing complex multi-state tax obligations to ensure accuracy and timely submission across all jurisdictions." },
      { title: "Internal Controls", detail: "Establishing systems and processes that ensure the integrity of financial and accounting information." },
      { title: "Disclosure Prep", detail: "Drafting clear, compliant, and transparent financial disclosures for shareholders and regulators." }
    ],
    testimonials: [
      {
        quote: "Compliance is a headache we no longer have to worry about. Their filings are spotless.",
        author: "Elena Rodriguez",
        role: "General Counsel, VitaLife Health"
      }
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
    fullDescription: "Take the stress out of pay day. We handle everything from wage calculation to 1099 issuance, ensuring every member of your team is paid correctly and your tax obligations are satisfied without exception.",
    features: [
      { title: "Wage Garnishment", detail: "Professional management of court-ordered wage deductions with strict adherence to legal compliance." },
      { title: "Direct Deposit Setup", detail: "Implementing secure, automated payment systems to improve employee satisfaction and reduce administrative overhead." },
      { title: "W2/1099 Issuance", detail: "Accurate preparation and distribution of year-end tax documents for both employees and contractors." },
      { title: "Payroll Tax Filing", detail: "Managing federal and state payroll tax deposits and returns to ensure continuous compliance." }
    ],
    testimonials: [
      {
        quote: "Transitioning our 1099 fleet to Ordia's management was the best operational move of the year.",
        author: "Robert Vance",
        role: "Founder, Vance Courier Group"
      }
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
    description: "Meticulous daily record-keeping and bank reconciliations for a healthy paper trail.",
    fullDescription: "Solid bookkeeping is the foundation of a successful business. Our team provides meticulous maintenance of your daily ledgers, ensuring your records are audit-ready and providing you with a clear daily picture of your finances.",
    features: [
      { title: "Daily Transaction Entry", detail: "Real-time recording of all business income and expenses to maintain an up-to-the-minute view of your finances." },
      { title: "Bank Reconciliation", detail: "Matching internal records with bank statements to identify discrepancies and ensure the accuracy of your books." },
      { title: "Accounts Payable/Receivable", detail: "Managing the lifecycle of invoices and bills to optimize your working capital and vendor relationships." },
      { title: "Trial Balance Prep", detail: "Regular checks of the ledger's integrity to ensure that debits and credits remain in perfect balance." }
    ],
    testimonials: [
      {
        quote: "Our books have never been cleaner. It makes the end-of-year tax season a breeze.",
        author: "Julian Smith",
        role: "Owner, Harbor View Café"
      }
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
    fullDescription: "Growth requires capital. We guide you through the complex landscape of business funding, helping you prepare documentation for loans, identify grant opportunities, and negotiate lines of credit that fit your scale.",
    features: [
      { title: "Loan Package Preparation", detail: "Assembling the detailed financial data and narratives required by lenders to approve commercial loan applications." },
      { title: "Grant Identification", detail: "Researching federal, state, and private grant opportunities that align with your business goals and industry." },
      { title: "LOC Negotiation", detail: "Advising on the terms and structures of business lines of credit to ensure flexible and affordable access to capital." },
      { title: "SBA Advisory", detail: "Specialized guidance through the Small Business Administration's various loan programs and requirements." }
    ],
    testimonials: [
      {
        quote: "Their guidance through the SBA loan application was invaluable. We secured funding in record time.",
        author: "Karen Wu",
        role: "Managing Partner, Wu & Associates"
      }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "corp-taxes",
    title: "Corp Business Taxes",
    description: "Strategic corporate tax planning designed to minimize liability and maximize returns.",
    fullDescription: "Navigate the complexity of the corporate tax code with ease. We implement proactive tax strategies that minimize your liabilities while ensuring full compliance with the ever-changing IRS regulations.",
    features: [
      { title: "Strategic Tax Planning", detail: "Proactive, year-round strategies designed to optimize your tax position and leverage all available credits and deductions." },
      { title: "IRS Representation", detail: "Professional advocacy and communication with tax authorities in the event of audits or inquiries." },
      { title: "Nexus Studies", detail: "Determining your tax obligations in different jurisdictions to ensure multi-state compliance." },
      { title: "Quarterly Estimated Taxes", detail: "Accurate calculation and filing of periodic tax payments to avoid year-end surprises and penalties." }
    ],
    testimonials: [
      {
        quote: "The tax strategy they developed saved our corporation over six figures in the first year alone.",
        author: "Thomas H.",
        role: "President, Global Logics Inc."
      }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description: "Independent verification services that provide confidence in your financial reports.",
    fullDescription: "Transparency builds trust. Our audit and assurance services provide stakeholders with independent verification of your financial reporting, ensuring accuracy and highlighting areas for process improvement.",
    features: [
      { title: "Financial Statement Audits", detail: "Rigorous independent examination of your records to provide the highest level of assurance to stakeholders." },
      { title: "Internal Control Reviews", detail: "Evaluating the effectiveness of your internal systems to prevent errors and mitigate risks." },
      { title: "Risk Assessment", detail: "Strategic identification of financial reporting risks and the development of controls to address them." },
      { title: "Fraud Prevention", detail: "Designing and implementing robust internal checks to detect and discourage financial irregularities." }
    ],
    testimonials: [
      {
        quote: "Ordia's independent audit provided the exact assurance our investors were looking for.",
        author: "Linda Patterson",
        role: "Board Member, GreenLeaf Org"
      }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "start-ups",
    title: "New Business Start-ups",
    description: "Full-cycle consulting for new ventures from registration to system implementation.",
    fullDescription: "Launch with confidence. We help new entrepreneurs navigate the critical first steps of business ownership, from selecting the right legal entity to setting up scalable accounting systems.",
    features: [
      { title: "Entity Selection", detail: "Advising on the legal structure (LLC, S-Corp, etc.) that best suits your liability and tax objectives." },
      { title: "Tax ID Setup", detail: "Assisting with the acquisition of EIN and other necessary tax registrations at the state and local levels." },
      { title: "Accounting System Design", detail: "Implementing modern, cloud-based accounting platforms customized for your business workflow." },
      { title: "Business Plan Review", detail: "Critiquing financial projections and strategic goals to ensure your venture is built on a solid foundation." }
    ],
    testimonials: [
      {
        quote: "They made the terrifying process of starting a business feel structured and achievable.",
        author: "James Miller",
        role: "Founder, Zenith Creative"
      }
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
    description: "Development of robust internal controls and governance frameworks.",
    fullDescription: "Sustainable growth requires strong governance. We develop customized internal policies and controls that protect your organization from fraud, mismanagement, and operational inefficiency.",
    features: [
      { title: "Internal Control Design", detail: "Architecting the checks and balances that safeguard your assets and ensure the integrity of your reporting." },
      { title: "Corporate Governance", detail: "Developing frameworks for decision-making and accountability that align with best practices and legal standards." },
      { title: "Ethics Training", detail: "Implementation of organizational codes of conduct and training programs to foster a culture of integrity." },
      { title: "SOP Development", detail: "Documenting Standard Operating Procedures to ensure consistency, efficiency, and scalability in your operations." }
    ],
    testimonials: [
      {
        quote: "The internal controls they implemented stopped a major leak in our procurement process.",
        author: "Sofia G.",
        role: "VP Operations, Urban Build Co."
      }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-[#f4f7ff] to-white relative overflow-hidden">
      {/* Decorative Blueprint elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001242 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8a7eb5]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#001242]/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <div className="max-w-2xl">
            <span className="text-[#8a7eb5] font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Comprehensive Portfolio</span>
            <h2 className="text-5xl font-serif font-bold text-[#001242] mb-6">Our Expertise</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Ordia Consulting Services provides 11 key specialized areas designed to support the financial health and operational growth of your organization.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#contact" className="group flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-[#001242]">
              <span>Get Started</span>
              <div className="w-12 h-12 border border-[#8a7eb5]/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#001242] group-hover:text-white group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className="reveal bg-white/70 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,18,66,0.02)] border border-[#8a7eb5]/10 group hover:shadow-2xl hover:shadow-[#8a7eb5]/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#f8f9ff] text-[#001242] rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-[#8a7eb5] group-hover:text-white group-hover:rotate-6 border border-slate-100 shadow-sm">
                <div className="w-7 h-7">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#001242] mb-4 leading-tight">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a7eb5] group-hover:text-[#001242] transition-colors">View Details</span>
                <svg className="w-4 h-4 text-[#8a7eb5] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
