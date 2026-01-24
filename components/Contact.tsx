
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface ContactProps {
  isStandalone?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isStandalone = true }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    service: 'Tax Services',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', service: 'Tax Services', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586637290266', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
    { name: 'Google', href: '#', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> }, // Standard placeholder
    { name: 'Instagram', href: '#', icon: <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /> },
    { name: 'YouTube', href: '#', icon: <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /> }
  ];

  return (
    <section id="contact" className={`py-20 md:py-32 ${isStandalone ? 'lg:pt-48 min-h-screen' : ''} bg-white relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Standard Contact Form */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 reveal-left">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block border-l-2 border-blue-500 pl-4">Direct Engagement</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-8 leading-tight">Elevate Your <br />Financial Strategy.</h2>
              <p className="text-blue-900/60 text-base md:text-lg mb-10 md:12 leading-relaxed font-light">
                Connect with our advisory team to discover how a 360-degree approach to accounting and tax can transform your business trajectory.
              </p>

              <div className="space-y-8 md:space-y-10 text-blue-900 mb-16">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-900 group-hover:text-white border border-blue-100 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-blue-400 mb-1">Direct Line</p>
                    <p className="text-lg md:text-xl font-bold">+1-443.974.8346</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-900 group-hover:text-white border border-blue-100 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-blue-400 mb-1">Advisory Email</p>
                    <p className="text-lg md:text-xl font-bold">info@ordiafinances.com</p>
                  </div>
                </div>
              </div>

              {/* Added Social Section to Contact Side */}
              <div className="pt-10 border-t border-slate-100">
                <p className="text-[10px] uppercase tracking-widest font-bold text-blue-900 mb-6">Follow Our Global Insights</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.href} 
                      className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm"
                      title={social.name}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-right">
              <div className="bg-slate-50/50 p-6 md:p-10 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-xl relative border border-slate-100">
                {submitted && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl animate-fade-in text-green-700">
                    <p className="font-bold">Transmission Successful</p>
                  </div>
                )}
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-blue-900 ml-1">Full Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-blue-900 placeholder:text-slate-300 focus:border-blue-500 outline-none transition-all shadow-sm"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-blue-900 ml-1">Work Email</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-blue-900 placeholder:text-slate-300 focus:border-blue-500 outline-none transition-all shadow-sm"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-blue-900 ml-1">Project Details</label>
                    <textarea 
                      rows={4} name="message" value={formData.message} onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-blue-900 placeholder:text-slate-300 focus:border-blue-500 outline-none transition-all resize-none shadow-sm"
                      placeholder="How can our Outsourced CPA team help?"
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white hover:bg-blue-900 font-bold py-5 rounded-full shadow-lg transition-all duration-300 uppercase tracking-widest text-xs active:scale-95">
                    {isSubmitting ? 'Transmitting...' : 'Schedule Free Consultation'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Career & HR Section Integrated Below */}
        <div className="max-w-6xl mx-auto pt-32 border-t border-slate-100">
           <div className="max-w-4xl mx-auto text-center mb-20 reveal">
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Human Resources & Staff Augmentation</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-8 leading-tight">Gain a <span className="italic font-normal text-blue-500">Competitive Edge.</span></h2>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
              OCS streamlines your administration through efficient HR systems and staffing augmentation. We provide professional accounting professionals on a full-time, part-time, or project-specific basis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-left">
              <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">Efficiency for Your Workforce</h3>
              <div className="space-y-8">
                {[
                  { t: "Lower Labor Costs", d: "Reduced overhead through streamlined administration and efficient staffing models tailored to your business." },
                  { t: "Larger Talent Pool", d: "Access to a broad spectrum of technical accounting expertise and verified CPA-track professionals." },
                  { t: "Internal Development", d: "Augmenting your current team with expert knowledge that fosters growth and long-term efficiency." }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">0{i+1}</div>
                    <div>
                      <h4 className="text-blue-900 font-bold mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right bg-slate-900 p-12 rounded-[3rem] text-white">
              <h3 className="text-2xl font-serif font-bold mb-8">HR & Staffing Specializations</h3>
              <div className="space-y-4">
                {[
                  "Staffing Solutions & Augmentation support",
                  "Employee Benefits, 401k, and Pension",
                  "New Business Start-up HR Support",
                  "Organizational Policies and Procedures",
                  "Outsourced CFO Leadership Placement"
                ].map((job, i) => (
                  <div key={i} className="p-4 border border-white/10 rounded-2xl flex items-center group">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                    <p className="font-bold text-sm text-blue-400">{job}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white/60 text-xs mb-4">Interested in joining our talent network or procuring staffing support?</p>
                <p className="text-white font-bold text-sm">hr@ordiafinances.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
