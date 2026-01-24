
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "construction-accounting",
    title: "Construction Accounting",
    description: "Expertise in WIP schedules, Job Take-offs, Estimating, and Job Costing.",
    fullDescription: "OCS provides deep technical expertise for the construction and engineering sectors. We understand the complexities of revenue recognition, Work in Progress (WIP) management, and the critical nature of accurate job costing to maintain profitability on high-stakes projects.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "WIP Management", detail: "Sophisticated Work in Progress schedules for accurate revenue recognition." },
      { title: "Job Costing", detail: "Detailed analysis of labor, materials, and overhead on a per-project basis." },
      { title: "Estimation Support", detail: "Technical financial assistance during the bidding and take-off process." }
    ],
    icon: null
  },
  {
    id: "healthcare-accounting",
    title: "Mental Health & Healthcare",
    description: "Specialized financial management for therapists, counselors, and clinics.",
    fullDescription: "We solve the unique fiscal challenges of the healthcare industry. From managing complex insurance reimbursement cycles to ensuring payroll compliance for medical staff, OCS provides the peace of mind practitioners need to focus on patient care.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Insurance Cash Flow", detail: "Optimizing the lifecycle of claims and reimbursements for consistent liquidity." },
      { title: "Medical Payroll", detail: "Compliance-heavy payroll management for specialized medical practices." },
      { title: "Clinic Optimization", detail: "Operational analysis to improve the financial health of your practice." }
    ],
    icon: null
  },
  {
    id: "nonprofit-accounting",
    title: "Non-Profit Accounting",
    description: "Support for boards, grant management, and mission-driven forecasting.",
    fullDescription: "Non-profits require a unique blend of transparency and strategic foresight. OCS assists boards with grant compliance, audit preparation, and developing financial models that align with the organization's mission.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Grant Management", detail: "Tracking and reporting for restricted and unrestricted funds to ensure compliance." },
      { title: "Audit Preparation", detail: "Meticulous organization of records to facilitate smooth external audits." },
      { title: "Board Reporting", detail: "Clear, insightful financial presentations for non-profit board members." }
    ],
    icon: null
  },
  {
    id: "loans-grants",
    title: "Loans, LOC, and Grants",
    description: "Sourcing business loans, lines of credit (LOC), and professional grant consulting.",
    fullDescription: "Capital is the lifeblood of business growth. We assist our clients in sourcing and securing competitive business loans, establishing strategic lines of credit, and navigating the professional grant application process.",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Loan Sourcing", detail: "Strategic matching with competitive lending partners and SBA opportunities." },
      { title: "LOC Setup", detail: "Securing Lines of Credit to provide operational flexibility and growth capital." },
      { title: "Grant Sourcing", detail: "Identifying and applying for government and private sector grants." }
    ],
    icon: null
  },
  {
    id: "business-solutions",
    title: "Business Solutions and Development",
    description: "Strategic planning, management support, and business analysis.",
    fullDescription: "OCS goes beyond numbers to provide comprehensive business development. We help you with strategic planning, management consulting, and deep-dive analysis to ensure your business structure supports your long-term vision.",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Strategic Planning", detail: "Developing clear roadmaps for business expansion and operational efficiency." },
      { title: "Management Support", detail: "Professional consulting to optimize internal processes and leadership." },
      { title: "Business Analysis", detail: "Data-driven insights into your market position and profitability." }
    ],
    icon: null
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
    icon: null
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
    icon: null
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
    icon: null
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
    icon: null
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
    icon: null
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
    icon: null
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
    icon: null
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
  isStandalone?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, isStandalone = false }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const fallback = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";
    if (target.src !== fallback) {
      target.src = fallback;
    }
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className="reveal bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="h-56 md:h-64 overflow-hidden relative bg-slate-100">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transition-transform group-hover:scale-110">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-[10px] font-bold uppercase tracking-widest text-blue-600 group-hover:text-blue-900">
                  Explore Details
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Consulting Section */}
        <div className="mt-32 pt-24 border-t border-slate-100">
           <div className="max-w-4xl mx-auto text-center mb-20 reveal">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Part-Time CFO & Controller Services</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-8 leading-tight">Straightforward <span className="italic font-normal text-blue-500">Financial Guidance.</span></h2>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
              OCS provides expert CFO support for every stage of your business lifecycle. If you’re ready to take your business to the next level through personalized guidance, contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Strategic Planning", desc: "Business improvement strategies and strategic planning to maximize profits and ensure sustainable growth.", icon: "SP" },
              { title: "M&A Advisory", desc: "Expert due diligence and strategic support for mergers, acquisitions, and operations review.", icon: "MA" },
              { title: "Risk Management", desc: "Comprehensive risk management and capital raising strategies to secure your company's future.", icon: "RM" },
              { title: "Technical Training", desc: "Professional training for your in-house accountants and bookkeepers to elevate internal performance.", icon: "TR" },
              { title: "Interim Leadership", desc: "Providing stability through Interim CFO or Controller roles during leadership transitions.", icon: "IL" },
              { title: "Cash Flow Strategy", desc: "Precise financial analysis and reporting to keep your business's liquidity optimized.", icon: "CF" }
            ].map((item, i) => (
              <div key={i} className="reveal bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
