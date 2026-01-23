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
      { title: "Estate and Trust Planning", detail: "Navigating the complexities of wealth transfer and trust taxation." },
      { title: "Litigation Support", detail: "Expert financial investigation and support for legal and regulatory disputes." }
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
    fullDescription: "Ordia Consulting Services’ payroll services can help you reduce the time spent on administration through developing and implementing a computerized payroll system that will facilitate processing and preparation of tax returns.",
    imageUrl: "https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Payroll processing and W2’s", detail: "Comprehensive management of payroll cycles including the accurate generation of year-end W2 forms." },
      { title: "941 Tax form preparations", detail: "Professional preparation and timely filing of quarterly federal employer tax returns." },
      { title: "PTO Tracking", detail: "Digital tracking of paid time off and employee timesheets integrated into the payroll workflow." },
      { title: "1099 Contractual payroll", detail: "Specialized processing and reporting for independent contractors and contractual agreements." }
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
    fullDescription: "We focus on building close client relationships that add long-term value. This includes assuring the solidity of financial records, evaluating financial procedures and working to produce strategies that help our clients face business challenges.",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Assurance & Advisory", detail: "High-level review and advisory to provide stakeholder confidence in your financial data." },
      { title: "Outsourced Audits", detail: "Professional verification of accounts through outsourced audits, reviews, and formal compilations." },
      { title: "Business Restructuring", detail: "Strategic guidance on selecting business entities and optimizing corporate structures for efficiency." },
      { title: "Mergers and Acquisitions", detail: "Expert due diligence and financial advisory for successful corporate transitions." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: "hr-staffing",
    title: "Human Resources & Staffing",
    description: "Gain lower labor costs and a larger talent pool with our efficient systems.",
    fullDescription: "Ordia Consulting Services’ HR services can help you streamline the time spent on administration through developing and implementing an efficient human resources system. We provide professional accounting staffing services.",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Staffing Solutions", detail: "Professional accounting staffing to fill critical technical roles in your organization efficiently." },
      { title: "Employee Benefits", detail: "Comprehensive management and advisory for employee retirement and sophisticated benefit plans." },
      { title: "Policy Development", detail: "Developing the regulatory framework for your team's success through clear and compliant policies." },
      { title: "Outsourced CFO Services", detail: "High-level strategic financial leadership to guide your business growth and resource allocation." }
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
    fullDescription: "From start-ups to existing business, at OCS, we provide our clients with access to apply for business loans and lines of credit (LOC) to support their financial needs, business operations, and payroll.",
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87f9ac756a72?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Loan Sourcing", detail: "Strategic consultation on obtaining appropriate operations loans to support expansion and liquidity needs." },
      { title: "Lines of Credit (LOC)", detail: "Expert guidance on securing lines of credit to support daily business operations and payroll stability." },
      { title: "Grant Consulting", detail: "Professional advisory on identifying and applying for appropriate grants to fuel business development." }
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
    fullDescription: "At Ordia Consulting Services, we believe you need specialized accounting expertise to help grow your business. Look to our team of accountants and professionals for simple solutions to complex challenges.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Business Planning", detail: "Strategic planning, resource planning, and professional business plan preparation for long-term growth." },
      { title: "Business Management", detail: "Comprehensive support for financial operations management to ensure operational stability." },
      { title: "Business Analysis", detail: "Data-driven business improvement, rate, and cost studies to optimize your bottom line." },
      { title: "Business Valuation", detail: "Expert enterprise evaluation and strategic advisory for sales, mergers, or tax purposes." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: "construction-accounting",
    title: "Construction Accounting",
    description: "Manage WIP schedules and project costs from take-off to completion.",
    fullDescription: "OCS will run the numbers, manage your WIP schedules, manage project costs, and track all construction jobs from take-off to completion. Let OCS handle all your construction accounting work including; daily transaction classification and expense tracking, payroll, bill payment and invoicing, and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Estimating & Take-offs", detail: "Expert assistance in job take-offs and initial cost estimations." },
      { title: "WIP Schedules", detail: "Detailed Work-In-Progress reporting to ensure project billing and costs align." },
      { title: "Job Costing", detail: "Granular tracking of labor, materials, and overhead for every project phase." },
      { title: "Fixed Monthly Fees", detail: "Cost savings billed at a fixed monthly fee, eliminating billing surprises caused by creeping hourly fees." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "mental-health-accounting",
    title: "Mental Health & Healthcare",
    description: "Specialized accounting for Therapists, Counselors, and Mental Health practitioners.",
    fullDescription: "Running and managing a mental health practice means handling complex financials while providing client care. We focus on solving the accounting challenges mental health professionals face, from bookkeeping to tax matters and payroll.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Tax Filing Support", detail: "Simplifying confusing tax laws for healthcare professionals to ensure accuracy and maximum deductions." },
      { title: "Cash Flow & Insurance", detail: "Managing complex revenue streams from insurance payments and client fees." },
      { title: "Payroll Processing", detail: "Handling payroll for employees or contractors to reduce error risks and stay compliant." },
      { title: "Real-Time Insights", detail: "Cloud-based solutions giving you access to real-time financial data for informed operations." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: "non-profit-accounting",
    title: "Non-Profit Accounting",
    description: "Timely, accurate information for data-driven fiscal decision-making in mission-led organizations.",
    fullDescription: "Ordia Consulting Services provides accounting services for Non-Profit entities and organizations. We assist each of our nonprofit clients' unique needs: from internal, grant, and board reporting, to forecasting and budgeting.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Grant Management", detail: "Support for grant proposals, ad hoc reports, and grant tracking compliance." },
      { title: "Audit Preparation", detail: "Preparing organizational records for external audits to ensure maximum transparency." },
      { title: "Board Meeting Support", detail: "Attendance and training to help boards determine the effective mission accomplishment." },
      { title: "Monthly Forecasting", detail: "Proactive financial planning to adapt to changing non-profit funding environments." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: "quickbooks-services",
    title: "QuickBooks Services & Installation",
    description: "Installation, setup, and personal training to optimize your accounting software.",
    fullDescription: "QuickBooks can provide useful information if used properly. We don't just help you use the software; we help you use it more efficiently and more effectively through professional setup and training.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Personal Training", detail: "One-on-one or group training at your location to master the software." },
      { title: "Professional Installation", detail: "Stand-alone or network environment setup, including single- or multi-user modes." },
      { title: "Custom Setup", detail: "Initial setup of Preferences, Lists, Customers, Vendors, Employees, and Banking." },
      { title: "Transaction Review", detail: "Expert review of transactions, accounts, and reports to ensure reliable financial info." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

interface ServicesProps {
  onSelectService: (service: Service) => void;
  isStandalone?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, isStandalone = true }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Guaranteed high-uptime landscape office photo as fallback
    const fallback = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";
    if (target.src !== fallback) {
        target.src = fallback;
    }
  };

  return (
    <section id="services" className={`py-20 md:py-32 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-white'} relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-6">Comprehensive Financial Solutions.</h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
            From specialized industries to core business accounting, Ordia Consulting Services delivers technical excellence across every fiscal dimension.
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
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
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