
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "financial-accounting",
    title: "Financial and Accounting Solutions",
    description: "Comprehensive financial services designed to meet the diverse needs of our clients.",
    fullDescription: "Ordia Consulting Services offers a comprehensive list of financial services designed to meet the diverse needs of our clients. Our certified professionals possess a wealth of expertise in various domains of accounting and finance, ensuring that we can assist you effectively in achieving your financial goals. You can count on us to help you achieve financial success!",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Financial Statement Preparation", detail: "Accurate and compliant preparation of all necessary financial statements for internal and external reporting." },
      { title: "Budgets and Cashflow Solutions", detail: "Developing robust budgeting frameworks to manage and optimize your company's daily liquidity." },
      { title: "Accounting Systems Setup", detail: "End-to-end setup and seamless integration of modern accounting systems tailored to your business workflow." },
      { title: "Projections and Forecasts", detail: "Forward-looking financial models to guide long-term strategic growth and investment decisions." },
      { title: "Regulatory Reporting", detail: "Ensuring all industry-specific and government regulatory requirements are satisfied with precision." }
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
    fullDescription: "Ordia Consulting Services provides quality bookkeeping services. From start-ups to established enterprises, businesses rely on accurate and insightful financial information to maintain profitability and capitalize on new opportunities. Our services steer you closer to these goals with accurate record-keeping and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "General Ledger Maintenance", detail: "Professional maintenance of your financial records on a monthly, quarterly, or annual schedule." },
      { title: "Bank Reconciliation", detail: "Meticulous matching of bank statements with internal records to ensure 100% accuracy." },
      { title: "QuickBooks Support", detail: "Expert guidance and technical support for managing your accounts within the QuickBooks ecosystem." },
      { title: "Fund Accounting", detail: "Specialized accounting services for organizations managing complex or restricted funds." }
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
    fullDescription: "At OCS, we guide our clients through a full range of tax planning and preparation decisions with strategies that minimize your tax liabilities, maximize your cash flow and keep you on track to your financial goals.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Corporate Tax Planning", detail: "Developing sophisticated corporate tax strategies to ensure compliance and minimize burden." },
      { title: "Individual Tax Planning", detail: "Personalized tax strategy and meticulous filing for individual taxpayers." },
      { title: "Estate and Trust Planning", detail: "Navigating the complexities of wealth transfer and tax-efficient estate management." }
    ],
    // Fix: Added missing icon property
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
  isStandalone?: boolean;
}

// Fix: Exported the Services component as required by App.tsx
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
