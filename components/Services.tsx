
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "financial-accounting",
    title: "Financial and Accounting Solutions",
    description: "Comprehensive financial services designed to meet the diverse needs of our clients.",
    fullDescription: "Ordia Consulting Services offers a comprehensive list of financial services designed to meet the diverse needs of our clients. Our certified professionals possess a wealth of expertise in various domains of accounting and finance, ensuring that we can assist you effectively in achieving your financial goals.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Financial Statement Preparation", detail: "Accurate and compliant preparation of all necessary financial statements." },
      { title: "Budgets and Cashflow", detail: "Developing robust budgeting frameworks to manage and optimize daily liquidity." },
      { title: "Accounting Systems Setup", detail: "End-to-end setup and seamless integration of modern accounting systems." }
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
    fullDescription: "Our services steer you closer to profitability with accurate record-keeping and reporting. We handle the technical details so you can focus on growth.",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "General Ledger Maintenance", detail: "Professional maintenance of financial records on a consistent schedule." },
      { title: "Bank Reconciliation", detail: "Meticulous matching of bank statements with internal records for 100% accuracy." },
      { title: "QuickBooks Support", detail: "Expert guidance for managing accounts within the QuickBooks ecosystem." }
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
      { title: "Corporate Tax Planning", detail: "Sophisticated strategies to ensure compliance and minimize tax burden." },
      { title: "Individual Filing", detail: "Personalized tax strategy and meticulous filing for individual taxpayers." },
      { title: "Estate & Trust", detail: "Navigating the complexities of wealth transfer and tax-efficient management." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "loans-grants",
    title: "Loans, LOC, and Grants",
    description: "Sourcing business loans, lines of credit (LOC), and professional grant consulting.",
    fullDescription: "We assist businesses in securing the capital they need to grow. Whether it's a traditional bank loan, a strategic line of credit, or a competitive grant application, we provide the financial modeling and expertise required for success.",
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87faff2f9070?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Loan Sourcing", detail: "Connecting your business with competitive lending partners and SBA opportunities." },
      { title: "LOC Management", detail: "Strategic setup of Lines of Credit to ensure operational flexibility." },
      { title: "Grant Consulting", detail: "Expert assistance in identifying and applying for industry-specific grants." }
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
    description: "Strategic planning, management support, business analysis, and valuation.",
    fullDescription: "Move beyond standard accounting into strategic business advisory. We help you evaluate your market position, optimize operations, and plan for long-term scalability and exit strategies.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Strategic Planning", detail: "Comprehensive roadmaps for business expansion and operational efficiency." },
      { title: "Business Valuation", detail: "Accurate valuation for mergers, acquisitions, or internal equity planning." },
      { title: "Operations Analysis", detail: "Deep-dive analysis to identify bottlenecks and improve profitability." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: "payroll-compliance",
    title: "Payroll & 1099 Solutions",
    description: "Computerized payroll, W2's, 941 preparations, and contractual payroll.",
    fullDescription: "Ensure your team is paid on time and your compliance is bulletproof. We handle all aspects of payroll processing, tax filings, and contractor management.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-1119343170ad?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Full-Cycle Payroll", detail: "Timely processing for W2 employees and 1099 contractors." },
      { title: "Quarterly Filings", detail: "Management of 941 and state-level payroll tax requirements." },
      { title: "Year-End Reporting", detail: "Seamless preparation and distribution of W2 and 1099 forms." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
            Ordia Consulting Services delivers technical excellence across a broad spectrum of industries, providing tailored solutions that address the unique fiscal challenges of each sector.
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
