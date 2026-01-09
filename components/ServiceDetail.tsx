
import React, { useEffect, useState } from 'react';
import { Service, ServiceFeature } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const AccordionItem: React.FC<{ 
  feature: ServiceFeature; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}> = ({ feature, isOpen, onClick, index }) => {
  return (
    <div className={`border-b border-slate-100 last:border-none transition-all duration-300 ${isOpen ? 'bg-[#f8f9ff]/50 rounded-2xl' : ''}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <div className="flex items-center space-x-4">
          <span className={`text-xs font-bold font-serif transition-colors ${isOpen ? 'text-[#8a7eb5]' : 'text-slate-300'}`}>
            0{index + 1}
          </span>
          <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#001242]' : 'text-slate-600 group-hover:text-[#001242]'}`}>
            {feature.title}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all ${isOpen ? 'bg-[#001242] border-[#001242] text-white rotate-180' : 'group-hover:border-[#8a7eb5] group-hover:text-[#8a7eb5]'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-16 pb-8 text-slate-500 leading-relaxed text-sm">
          {feature.detail}
        </div>
      </div>
    </div>
  );
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [showSticky, setShowSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [service]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack();
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 animate-fade-in relative">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-3 text-sm font-bold uppercase tracking-widest text-[#8a7eb5] mb-12 hover:text-[#001242] transition-colors"
        >
          <div className="w-10 h-10 border border-[#8a7eb5]/20 rounded-full flex items-center justify-center transition-all group-hover:bg-[#001242] group-hover:border-[#001242] group-hover:text-white">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
          <span>Back to Services</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-slate-50 text-[#001242] mb-8">
              <div className="w-8 h-8 text-[#8a7eb5]">{service.icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest">Specialized Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#001242] mb-10 leading-tight">
              {service.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
              {service.fullDescription}
            </p>

            <div className="space-y-16">
              <div>
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-serif font-bold text-[#001242]">Key Focus Areas</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a7eb5]">Click to expand</span>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <AccordionItem 
                      key={i} 
                      index={i}
                      feature={feature} 
                      isOpen={openIndex === i} 
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonials Section */}
              {service.testimonials && service.testimonials.length > 0 && (
                <div className="reveal active">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a7eb5] mb-8">What Our Clients Say</h3>
                  <div className="space-y-8">
                    {service.testimonials.map((testimonial, i) => (
                      <div key={i} className="relative p-10 bg-[#f8f9ff] rounded-[2.5rem] border border-slate-100">
                        <div className="absolute top-8 left-8 text-6xl font-serif text-[#8a7eb5]/10 pointer-events-none">“</div>
                        <div className="relative z-10">
                          <p className="text-xl font-serif italic text-[#001242] mb-8 leading-relaxed">
                            {testimonial.quote}
                          </p>
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-[#001242] rounded-full flex items-center justify-center text-white font-bold text-xs">
                              {testimonial.author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-[#001242]">{testimonial.author}</p>
                              <p className="text-[10px] font-bold text-[#8a7eb5] uppercase tracking-widest">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-10 bg-[#001242] rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8a7eb5]/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-125"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-serif font-bold mb-6 italic">Ready to optimize your {service.title.toLowerCase()}?</h4>
                  <p className="text-slate-400 mb-10 max-w-lg">
                    Schedule a professional consultation with our Baltimore-based team to discuss your specific requirements and strategic goals.
                  </p>
                  <a 
                    href="#contact" 
                    onClick={handleContactClick} 
                    className="inline-block px-10 py-5 bg-[#8a7eb5] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#001242] transition-all"
                  >
                    Consult our Experts
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src={`https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800`} 
                  alt={service.title} 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001242]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white font-serif font-bold text-2xl mb-2">Professional Excellence</p>
                  <p className="text-slate-300 text-sm uppercase tracking-widest font-bold">Ordia Consulting Services</p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center items-center space-x-12 px-8 py-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-center">
                  <p className="text-2xl font-serif font-bold text-[#001242]">100%</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Compliant</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-serif font-bold text-[#001242]">Confidential</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Call-to-Action */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showSticky ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
        }`}
      >
        <button 
          onClick={handleContactClick}
          className="flex items-center space-x-4 bg-[#001242] text-white px-8 py-4 rounded-full shadow-2xl border border-white/10 group active:scale-95 transition-transform"
        >
          <div className="flex flex-col items-start text-left">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#8a7eb5]">Get Started</span>
            <span className="text-sm font-bold">Book a Consultation</span>
          </div>
          <div className="w-10 h-10 bg-[#8a7eb5] rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </button>
      </div>
    </div>
  );
};
