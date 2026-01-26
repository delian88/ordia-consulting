
import React from 'react';
import { FullLogo } from './Header';

// Added missing CPASeal component to resolve import error in Footer.tsx
export const CPASeal: React.FC<{ className?: string }> = ({ className = "h-16" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" className="h-full w-auto">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#2563eb" strokeWidth="2" />
        <circle cx="50" cy="50" r="42" fill="#f8fafc" stroke="#2563eb" strokeWidth="0.5" />
        <text x="50" y="40" fontSize="8" fontWeight="900" fill="#003366" textAnchor="middle" fontFamily="Inter, sans-serif">OUTSOURCED</text>
        <text x="50" y="58" fontSize="20" fontWeight="900" fill="#2563eb" textAnchor="middle" fontFamily="Inter, sans-serif">CPA</text>
        <text x="50" y="72" fontSize="8" fontWeight="bold" fill="#003366" textAnchor="middle" fontFamily="Inter, sans-serif">STRATEGY</text>
        <path d="M20 50 Q 50 80 80 50" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
};

interface AboutProps {
  isStandalone?: boolean;
  onNavigate?: (href: string) => void;
}

export const About: React.FC<AboutProps> = ({ isStandalone = true, onNavigate }) => {
  const performanceIndustries = [
    "Governmental Agencies", "Non-Profit Organizations", "Mental Health Clinics",
    "Construction/Engineering", "Mortgage Banking", "Information Technology",
    "Finance", "Accounting", "Education", "Transportation", "Food Service",
    "Insurance", "Energy & Power"
  ];

  const whyChooseUs = [
    {
      title: "Professionalism",
      desc: "By combining our expertise and experience, each client receives close personal and professional attention. Our high standards, dedicated service, and specialized staff spell the difference of our outstanding performance in offering financial statements audits, compliance audits, performance audits, taxation, and targeted management consulting services."
    },
    {
      title: "Peace of Mind",
      desc: "At OCS, we take all the stress out of doing your own accounting and taxes so you can focus on what you do best growing your business."
    },
    {
      title: "Responsive to Clients",
      desc: "Ordia Consulting is highly responsive to our clients and customers. Organizations who choose our firm rely on competent and insightful advice to enable our clients in all business sectors make reliable and informed financial decisions."
    },
    {
      title: "Proven Expertise and Excellence",
      desc: "OCS brings many years’ financial services experience, our goal is to provide the highest quality of service to our clients and customers."
    },
    {
      title: "Quality Financial Services",
      desc: "At OCS we are known for the quality of our service. We want to be your trusted advisor and be available to provide insightful advice to enable our clients to make informed financial decisions."
    },
    {
      title: "Experienced Outsourced CFO",
      desc: "OCS ensures timely, accurate and clear reports to help you make meaningful decisions. We don’t just give you data; you’ll receive analysis and friendly expert advice to help you make the right decisions for your business."
    }
  ];

  return (
    <section id="about" className={`py-20 md:py-32 ${isStandalone ? 'lg:pt-48 min-h-screen' : 'bg-white'} relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-16">
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32">
            <div className="relative p-8 md:p-12 lg:p-16 bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] flex flex-col items-center justify-center border border-slate-100 shadow-inner group mb-8 lg:mb-12">
              <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                <FullLogo className="h-32 md:h-48 drop-shadow-sm" />
              </div>
            </div>
            
            <div className="p-8 bg-blue-900 rounded-[2rem] text-white">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-6">Performance Industries</h4>
                <div className="flex flex-wrap gap-2">
                    {performanceIndustries.map((industry, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium border border-white/5 whitespace-nowrap">{industry}</span>
                    ))}
                </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal mt-8 lg:mt-0">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-6 block border-l-2 border-blue-500 pl-4 uppercase">About us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4 leading-tight">
              OCS - Management, Financial, and <br />
              <span className="italic font-normal text-blue-500">Tax Consulting Services.</span>
            </h2>
            
            <div className="prose prose-slate max-w-none mb-10">
              <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-4">What We Do</h3>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed font-light">
                Ordia Consulting Services (OCS) is a financial services firm that provides expert accounting services to clients in the DMV and all of the United States. We have a diverse team of certified and management professionals including outsourced CPAs and business consultants with advanced degrees serving clients in various regions.
              </p>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed font-light">
                We specialize in accounting, bookkeeping, payroll, financial statements, outsourced compiled audits, taxation, and management consulting services. The team has over 20 years of Federal, state, local government, not-for-profit, and for-profit industry experience. Some of our team members have worked directly with these organizations and are subject matter experts in their areas of specialization. 
              </p>
              
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                <p className="text-blue-900 font-serif text-lg italic mb-0">
                  "Ordia Consulting Services (OCS) highly values family, integrity, and honesty. We work closely with our clients, treating them like family and working with them as trusted advisors to provide insightful advice to enable our clients to make informed financial decisions."
                </p>
              </div>

              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed font-light">
                Our efforts have provided our clients with tangible results in the form of corrective actions that have remediated internal control issues, improved audit opinions, enhanced management visibility over financial operations, and increased efficiency. For accounting and bookkeeping services, we find simple solutions to complex accounting issues. For taxes, we work to reduce your tax liability successfully and legally.
              </p>
              
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed font-light">
                We go beyond tax compliance and proactively recommend advanced tax-saving strategies to minimize your after-tax income. Our team provides high-quality and efficient services to our clients. Our membership in various professional accounting associations is proof that we are committed to providing quality services to our clients. Our internal quality control system is in accordance with GAAP requirements, which emphasizes the importance of ethics and integrity in every decision. Our firm provides outstanding service to our clients because of our dedication to the underlying principles of professionalism, responsiveness, and quality.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4 glass-shine">Why Choose Us</h3>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">Ordia Consulting Services (OCS) ensures</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-serif text-xl font-bold mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                  {item.title.charAt(0)}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
