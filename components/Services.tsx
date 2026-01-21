
import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "construction-accounting",
    title: "Construction Accounting",
    description: "Manage WIP schedules and project costs from take-off to completion.",
    fullDescription: "Are you running your own construction business? OCS will run the numbers, manage your WIP schedules, manage project costs, and track all construction jobs from take-off to completion. Let OCS handle all your construction accounting work including; daily transaction classification and expense tracking, payroll, bill payment and invoicing, business tax planning and preparation, and reporting. OCS will make sure you always have a clear picture of your financial position.",
    imageUrl: "https://images.unsplash.com/photo-1541888941259-7d341935269f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Estimating & Pre-Construction", detail: "Expert assistance in job take-offs and initial cost estimations." },
      { title: "WIP Schedules", detail: "Detailed Work-In-Progress reporting to ensure project billing and costs align." },
      { title: "Job Costing", detail: "Granular tracking of labor, materials, and overhead for every project phase." },
      { title: "Change Orders", detail: "Meticulous documentation of scope changes and their financial impact." },
      { title: "Cost Savings", detail: "Billed at a fixed monthly fee, eliminating billing surprises caused by creeping hourly fees." }
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
    fullDescription: "Ordia Consulting Services (OCS) provides accounting services for Mental Health Professionals and practitioners including Therapists, and Counselors. Running and managing a mental health practice means handling complex financials while providing client care. We focus on solving the accounting challenges mental health professionals face, from bookkeeping to tax matters and payroll.",
    imageUrl: "https://images.unsplash.com/photo-1505751172107-5739a007721d?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Tax Filing Support", detail: "Simplifying confusing tax laws for healthcare professionals to ensure accuracy and maximum deductions." },
      { title: "Cash Flow & Budgeting", detail: "Managing complex revenue streams from insurance payments and client fees." },
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
    fullDescription: "Ordia Consulting Services (OCS) provides accounting services for Non-Profit entities and organizations. We assist each of our nonprofit clients' unique needs: from internal, grant, and board reporting, to forecasting, budgeting, and cash flow management, to creating financial statements and customized dashboards.",
    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Grant Management", detail: "Support for grant proposals, ad hoc reports, and grant tracking compliance." },
      { title: "Audit Preparation", detail: "Preparing organizational records for external audits to ensure maximum transparency." },
      { title: "Board Meeting Support", detail: "Attendance and training to help boards determine the effective mission accomplishment." },
      { title: "Monthly rolling forecasting", detail: "Proactive financial planning to adapt to changing non-profit funding environments." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: "small-business-accounting",
    title: "General Small Business Accounting",
    description: "Expert closing, financial statements, and ledger maintenance for growing enterprises.",
    fullDescription: "By working with Ordia Consulting Services, you get qualified and reliable accounting and bookkeeping without stressing your time or valuable resources. We provide expert services from monthly closings to comprehensive management reports.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Monthly Closings", detail: "Timely financial statement generation including balance sheets and income statements." },
      { title: "Fixed Asset Tracking", detail: "Precision tracking of depreciation and asset lifecycle management." },
      { title: "Reconciliations", detail: "Daily point-of-sale, bank, and credit card reconciliations for absolute accuracy." },
      { title: "Sales Commission Tracking", detail: "Automated tracking and reconciliation of sales representative commissions." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "quickbooks-services",
    title: "QuickBooks Services & Installation",
    description: "Installation, setup, and personal training to optimize your accounting software.",
    fullDescription: "QuickBooks can provide useful and timely information in the form of financial statements, reports and graphs. However, it can only provide this information if you purchase the right product and then install, setup and use it properly. We don't just help you use the software, we help you use it more efficiently and more effectively.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Personal Training", detail: "One-on-one or group training at your location to master the software." },
      { title: "Professional Installation", detail: "Stand-alone or network environment setup, including single- or multi-user modes." },
      { title: "Easy Step Interview & Setup", detail: "Initial setup of Preferences, Lists, Customers, Vendors, Employees, and Banking." },
      { title: "Transaction Review", detail: "Expert review of transactions, accounts, and reports to ensure reliable financial info." }
    ],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: "fractional-cfo",
    title: "Outsourced Fractional CFO",
    description: "Expert CFO support for strategic planning, profit maximization, and business development.",
    fullDescription: "If you’re ready to take your business to the next level through personalized, straightforward financial guidance, OCS provides expert part-time CFO and Controller services. We handle everything from risk management to raising capital and operations review.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Strategic Business Planning", detail: "Interim CFO support for long-term strategies and business improvement." },
      { title: "Cash Flow & Risk Management", detail: "In-depth financial analysis, reporting, and proactive risk mitigation." },
      { title: "Mergers & Acquisitions", detail: "Expert due diligence and strategic guidance during corporate transitions." },
      { title: "Capital Acquisition", detail: "Guidance on raising capital and optimizing your company's fiscal structure." }
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-6">Specialized Industry Solutions.</h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
            From Construction to Mental Health, Ordia Consulting Services delivers deep technical expertise tailored to your specific sector's challenges.
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">View Specialty Detail</span>
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
