import React from 'react';
import { FullLogo } from './Header';

interface AboutProps {
  isStandalone?: boolean;
}

export const CPASeal: React.FC<{ className?: string }> = ({ className = "h-32 w-32" }) => {
  const points = 80;
  const innerRadius = 88;
  const outerRadius = 98;
  const centerX = 100;
  const centerY = 100;
  
  let d = "";
  for (let i = 0; i <= points; i++) {
    const angle = (i * 2 * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    d += (i === 0 ? "M " : "L ") + x + " " + y + " ";
  }
  d += "Z";

  return (
    <div className={`${className} relative group select-none animate-float`}>
      <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-xl transition-all duration-700 group-hover:scale-105">
        <defs>
          <filter id="engrave" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.8" specularExponent="15" lightingColor="#ffffff" result="specOut">
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
          </filter>
          <linearGradient id="sealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87a691" />
            <stop offset="100%" stopColor="#638c73" />
          </linearGradient>
        </defs>
        <path d={d} fill="url(#sealGrad)" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path id="curveTop" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
        <text className="font-serif uppercase" fontSize="8" fontWeight="800" fill="rgba(255,255,255,0.85)" letterSpacing="0.1em">
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle">Outsourced Certified Public</textPath>
        </text>
        <path id="curveBottom" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
        <text className="font-serif uppercase" fontSize="10" fontWeight="800" fill="rgba(255,255,255,0.85)" letterSpacing="0.2em">
          <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">Accountant</textPath>
        </text>
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fontSize="24" 
          fontWeight="900" 
          fill="rgba(255,255,255,0.95)" 
          className="font-serif" 
          style={{ filter: 'url(#engrave)', letterSpacing: '-0.02em' }}
        >
          <tspan x="50%" dy="-0.5em" fontSize="11">OUTSOURCED</tspan>
          <tspan x="50%" dy="1.1em" fontSize="34">CPA</tspan>
        </text>
      </svg>
    </div>
  );
};

export const About: React.FC<AboutProps> = ({ isStandalone = true }) => {
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
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
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium border border-white/5">{industry}</span>
                    ))}
                </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal mt-8 lg:mt-0">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-6 block border-l-2 border-blue-500 pl-4">About OCS</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-8 leading-tight">
              <span className="glass-shine">Management, Financial, and</span> <br />
              <span className="italic font-normal text-blue-500 glass-shine">Tax Consulting Services.</span>
            </h2>
            
            <div className="prose prose-slate max-w-none mb-16">
              <h3 className="text-xl font-bold text-blue-900 mb-4">What We Do</h3>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed font-light">
                Ordia Consulting Services (OCS) is a financial services firm that provides expert accounting services to clients in the DMV and all of the United States. We have a diverse team of certified and management professionals including outsourced CPAs and business consultants with advanced degrees serving clients in various regions. We specialize in accounting, bookkeeping, payroll, financial statements, outsourced compiled audits, taxation, and management consulting services. The team has over 20 years of Federal, state, local government, not-for-profit, and for-profit industry experience. Some of our team members have worked directly with these organizations and are subject matter experts in their areas of specialization.
              </p>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed font-light font-medium italic">
                Our efforts have provided our clients with tangible results in the form of corrective actions that have remediated internal control issues, improved audit opinions, enhanced management visibility over financial operations, and increased efficiency. 
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4 glass-shine">Why Choose Us</h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-serif text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  {item.title.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
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