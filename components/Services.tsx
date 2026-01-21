
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "financial-accounting",
    title: "Financial and Accounting Solutions",
    description: "Comprehensive list of financial services designed to meet the diverse needs of our clients.",
    fullDescription: "Ordia Consulting Services offers a comprehensive list of financial services designed to meet the diverse needs of our clients. Our certified professionals possess a wealth of expertise in various domains of accounting and finance, ensuring that we can assist you effectively in achieving your financial goals. You can count on us to help you achieve financial success! We provide our clients and customers with the following financial and accounting services.",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Financial Statement Preparation", detail: "Accurate and compliant preparation of all necessary financial statements for internal and external reporting." },
      { title: "Budgets and Cashflow Solutions", detail: "Developing robust budgeting frameworks to manage and optimize your company's daily liquidity." },
      { title: "Accounting Systems, Setup and Integration", detail: "End-to-end setup and seamless integration of modern accounting systems tailored to your business workflow." },
      { title: "Cash flow budgeting and forecasting Analysis", detail: "In-depth analysis and forecasting to predict future cash positions and ensure financial stability." },
      { title: "Personal financial statements", detail: "Detailed reporting of individual financial positions for high-net-worth planning and wealth management." },
      { title: "Financial Projections and Forecasts", detail: "Forward-looking financial models to guide long-term strategic growth and investment decisions." },
      { title: "Regulatory Reporting Services", detail: "Ensuring all industry-specific and government regulatory requirements are satisfied with precision." },
      { title: "Treasury and Risk Management Support", detail: "Strategic oversight and support for corporate treasury functions and financial risk mitigation." }
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
    fullDescription: "Ordia Consulting Services provides quality bookkeeping services. From start-ups to established enterprises, businesses rely on accurate and insightful financial information to maintain profitability and capitalize on new opportunities. OCS's accounting and bookkeeping services steer you closer to these goals with accurate record-keeping and reporting as well as support on financial issues such as initial accounting system setup, and cost minimization. Our services include:",
    imageUrl: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Bookkeeping (Monthly, quarterly, or annual)", detail: "Professional maintenance of your financial records on a schedule that fits your business needs." },
      { title: "General Ledger and Trial Balance Summary", detail: "Ensuring your core financial records are balanced and accurately reflect every transaction." },
      { title: "Bank Transactions and Reconciliation", detail: "Meticulous matching of bank statements with internal records to ensure 100% accuracy." },
      { title: "QuickBooks Support", detail: "Expert guidance and technical support for managing your accounts within the QuickBooks ecosystem." },
      { title: "Fiscal Reporting and Services", detail: "Detailed reporting to provide management with actionable insights into fiscal performance." },
      { title: "Fund Accounting and Management", detail: "Specialized accounting services for organizations managing complex or restricted funds." },
      { title: "Bookkeeping Write-up and Notes", detail: "Professional documentation and clarification of ledger entries for complete transparency." }
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
    fullDescription: "At OCS, we guide our clients through a full range of tax planning and preparation decisions with strategies that minimize your tax liabilities, maximize your cash flow and keep you on track to your financial goals. Our expertise, experience, analysis and thorough research allow us to optimize financial opportunities to be found in existing as well as recently altered tax laws. We are knowledgeable and up to date on the tax laws and can make sense of your receipts, bills and notices. Our area of expertise includes,",
    imageUrl: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Corporate tax planning and preparation", detail: "Developing sophisticated corporate tax strategies to ensure compliance and minimize burden." },
      { title: "Individual Tax planning and preparation", detail: "Personalized tax strategy and meticulous filing for individual taxpayers." },
      { title: "Tax management Services and Support", detail: "Ongoing management of tax-related documentation and proactive advisory." },
      { title: "Estate and Trust Planning and Advising", detail: "Navigating the complexities of wealth transfer and trust taxation." },
      { title: "Litigation Support and Forensic Accounting", detail: "Expert financial investigation and support for legal and regulatory disputes." },
      { title: "New Tax Laws, Certifications, and Training", detail: "Keeping you informed of regulatory changes and providing necessary professional training." }
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
    description: "Reduce administrative time with computerized payroll systems.",
    fullDescription: "Ordia Consulting Services’ payroll services can help you reduce the time spent on administration through developing and implementing a computerized payroll system that will facilitate processing, timely payment and preparation of tax returns. We provide the following services on our payroll system:",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Payroll processing and W2’s", detail: "End-to-end payroll management including the accurate generation of year-end W2 forms." },
      { title: "941 Tax form preparations", detail: "Reliable preparation and filing of quarterly federal employer tax returns." },
      { title: "PTO Tracking and Timesheets", detail: "Integrated tracking of paid time off and digital timesheet management for your workforce." },
      { title: "1099 Contractual payroll", detail: "Seamless payment and tax reporting for independent contractors and service providers." }
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
    description: "Assuring solidity of records and working to produce growth strategies.",
    fullDescription: "At Ordia Consulting Services, we focus on building close client relationships that add long-term value. This includes assuring the solidity of financial records, evaluating financial procedures and working to produce strategies that help our clients face the myriad challenges of business planning and execution. Our assurance services will improve information quality or its context, meaning more success for your business.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Assurance and Advisory Services", detail: "High-level review and advisory to provide stakeholder confidence in your financial data." },
      { title: "Outsourced Audits, Reviews, and Compilation", detail: "Professional verification of accounts through outsourced audits and detailed reviews." },
      { title: "New Business selection and restructuring", detail: "Strategic guidance on selecting business entities and optimizing corporate structures." },
      { title: "Mergers and Acquisitions", detail: "Due diligence and financial advisory for successful corporate transitions." },
      { title: "Business succession and Migrations", detail: "Planning for the future handover of business leadership or migration to new systems." }
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
    description: "Gain lower labor costs and a larger talent pool with our efficient systems.",
    fullDescription: "Ordia Consulting Services’ our HR services, can help you streamline the time spent on administration through developing and implementing an efficient human resources system. We provide professional accounting staffing services on a full-time or part-time basis, as well as on a project-specific basis. You will gain when you procure these services from us with lower labor costs, larger talent pool, Internal staff development and increased efficiency. We provide the following services and more:",
    imageUrl: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Staffing Solutions and Augmentation support", detail: "Professional Outsourced CPA-track staffing to fill critical roles in your organization." },
      { title: "Employee Benefits, 401k, and Pension", detail: "Comprehensive management and advisory for employee retirement and benefit plans." },
      { title: "New Business Start-ups", detail: "Tailored HR systems and advisory for early-stage companies and entrepreneurs." },
      { title: "Organizational Policies and Procedures", detail: "Developing the framework for your team's success through clear policies." },
      { title: "Provide Outsourced CFO Services", detail: "Strategic financial leadership to guide your business growth without the full-time cost." }
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
    description: "Strategic guidance on obtaining appropriate operations loans and credit.",
    fullDescription: "From start-ups to existing business, at OCS, we provide our clients with access to apply for business loans and lines of credit (LOC) to support their financial needs, business operations, and payroll. We provide consultation, guidance and advice on obtaining appropriate operations loans.",
    imageUrl: "https://images.unsplash.com/photo-1554224156-5654388654a9?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Loan Sourcing", detail: "Advising on the best debt instruments to support your specific growth phase." },
      { title: "Lines of Credit (LOC) Advisory", detail: "Help securing flexible credit lines to manage working capital and payroll." },
      { title: "Grant Sourcing and Consulting", detail: "Professional guidance through the landscape of available business and operational grants." }
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
    description: "Specialized accounting expertise to help grow your business.",
    fullDescription: "At Ordia Consulting Services, we believe you need specialized accounting expertise to help grow your business. Look to our team of accountants and professionals for simple solutions to complex challenges. We provide specialized Outsourced CPA expertise to help grow your business.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Planning", detail: "Business plan preparation, strategic, and resource planning for long-term vision." },
      { title: "Business Management", detail: "Ongoing financial operations management and professional advisory support." },
      { title: "Business Analysis", detail: "Business improvement, rate, and cost studies to find hidden efficiencies." },
      { title: "Business Valuation and Advising", detail: "Precise evaluation of company worth for mergers, sales, or tax planning." }
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
