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
    <div className={`border-b border-slate-100 last:border-none transition-all duration-300 ${isOpen ? 'bg-blue-50/50 rounded-2xl' : ''}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none group"
      >
        <div className="flex items-center space-x-4">
          <span className={`text-[10px] md:text-xs font-bold font-serif transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-300'}`}>
            0{index + 1}
          </span>
          <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-blue-900' : 'text-slate-600 group-hover:text-blue-900'}`}>
            {feature.title}
          </span>
        </div>
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all ${isOpen ? 'bg-blue-900 border-blue-900 text-white rotate-180' : 'group-hover:border-blue-600 group-hover:text-blue-600'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-10 md:px-16 pb-6 md:pb-8 text-slate-500 leading-relaxed text-sm">
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
    
    // Dynamic SEO Metadata Updates
    const originalTitle = document.title;
    const metaDesc = document.getElementById('meta-description');
    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-description');
    
    document.title = `${service.title} | Ordia Consulting Services`;
    if (metaDesc) metaDesc.setAttribute('content', service.description);
    if (ogTitle) ogTitle.setAttribute('content', service.title);
    if (ogDesc) ogDesc.setAttribute('content', service.description);

    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Revert title on unmount (App.tsx handles other resets generally)
      document.title = originalTitle;
    };
  }, [service]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack();
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const fallback = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";
    if (target.src !== fallback) {
        target.src = fallback;
    }
  };

  const currentImage = service.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-20 animate-fade-in relative">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-3 text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 mb-8 md:mb-12 hover:text-blue-900 transition-colors"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border border-blue-500/20 rounded-full flex items-center justify-center transition-all group-hover:bg-blue-900 group-hover:border-blue-900 group-hover:text-white">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
          <span>Back to Services</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-7">
            {/* Mobile-only Image Banner */}
            <div className="lg:hidden mb-10 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <img 
                src={currentImage} 
                alt={service.title} 
                className="w-full aspect-video object-cover" 
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
            </div>

            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-slate-50 text-blue-900 mb-6 md:mb-8">
              <div className="w-6 h-6 md:w-8 md:h-8 text-blue-600">{service.icon}</div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Specialized Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-blue-900 mb-8 md:mb-10 leading-tight">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 md:mb-12 font-light whitespace-pre-line">
              {service.fullDescription}
            </p>

            <div className="space-y-12 md:space-y-16">
              <div>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <AccordionItem key={i} index={i} feature={feature} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 bg-blue-900 rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-125"></div>
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-serif font-bold mb-4 md:mb-6 italic">Ready to optimize your {service.title.toLowerCase()}?</h4>
                  <p className="text-blue-100/70 mb-8 md:mb-10 max-w-lg text-sm md:text-base">
                    Schedule a professional consultation with our team to discuss your specific requirements.
                  </p>
                  <a href="#contact" onClick={handleContactClick} className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-blue-900 transition-all">
                    Consult our Experts
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
                <img 
                  src={currentImage} 
                  alt={service.title} 
                  className="w-full aspect-[4/5] object-cover" 
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button onClick={handleContactClick} className="flex items-center space-x-4 bg-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl group active:scale-95 transition-transform border border-white/10">
          <div className="flex flex-col items-start text-left">
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-blue-400">Get Started</span>
            <span className="text-xs md:text-sm font-bold">Book Consultation</span>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </button>
      </div>
    </div>
  );
};
