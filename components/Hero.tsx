
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center bg-white pt-32 pb-20 overflow-hidden">
      {/* Refined Plain White & Light Blue palette Mixture */}
      <div className="absolute top-0 right-0 w-[65vw] h-[65vw] bg-[#f0f7ff]/40 rounded-full blur-[120px] -mr-[25vw] -mt-[25vw] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-[#eef2ff]/30 rounded-full blur-[100px] -ml-[15vw] -mb-[15vw] pointer-events-none"></div>
      
      {/* Subtle Dot Pattern Effect */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001242 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 reveal active">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[#8a7eb5] text-[10px] font-bold uppercase tracking-[0.25em] mb-12">
              <span className="w-2 h-2 bg-[#8a7eb5] rounded-full animate-pulse"></span>
              <span>The 360° Approach to Financial Excellence</span>
            </div>
            
            <h1 className="text-6xl lg:text-[5.5rem] font-serif font-bold text-[#001242] mb-10 leading-[1.05]">
              Accounting & Tax <br />
              <span className="italic font-normal text-[#8a7eb5]">Beyond Compliance.</span>
            </h1>
            
            <p className="text-slate-500 text-lg lg:text-xl mb-14 max-w-xl leading-relaxed font-light">
              Ordia Consulting Services provides the proactive, tech-forward advisory business owners need to optimize their wealth and scale with absolute clarity.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-20">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-[#001242] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#8a7eb5] hover:-translate-y-1 shadow-2xl shadow-blue-900/10 active:scale-95"
              >
                Inquire Today
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 bg-white border border-slate-200 text-[#001242] rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:border-[#8a7eb5] hover:text-[#8a7eb5] group"
              >
                Our Specialties
                <svg className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Credibility Strip */}
            <div className="flex items-center space-x-10 opacity-60">
               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trusted By Executives In</p>
               <div className="h-6 w-px bg-slate-200"></div>
               <span className="text-xs font-bold text-slate-500">Real Estate</span>
               <span className="text-xs font-bold text-slate-500">Tech SaaS</span>
               <span className="text-xs font-bold text-slate-500">Healthcare</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative z-10 reveal active delay-300">
              {/* Main Image Layer */}
              <div className="relative animate-float shadow-3xl">
                <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?auto=format&fit=crop&q=80&w=1200" 
                  alt="Financial Specialist" 
                  className="rounded-[4rem] shadow-2xl border border-white w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* Secondary Layer - Tech Team Focus */}
              <div className="absolute -bottom-12 -left-12 w-3/5 z-20 animate-float [animation-delay:1.5s]">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                  alt="Advisory Team Session" 
                  className="rounded-[3rem] shadow-2xl border-4 border-white aspect-square object-cover"
                />
              </div>

              {/* Floating Trust Indicator */}
              <div className="absolute -top-10 -right-8 p-8 glass rounded-[3rem] shadow-2xl z-30 border border-white animate-float [animation-delay:0.8s]">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-tr from-[#001242] to-[#8a7eb5] rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">Firm Grade</p>
                    <p className="text-lg font-serif font-bold text-[#001242]">A+ Advisory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
