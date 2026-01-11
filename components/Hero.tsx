
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center bg-white pt-32 pb-20 overflow-hidden">
      {/* Refined Plain White & Light Blue mixture */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#f0f7ff]/50 rounded-full blur-[120px] -mr-[20vw] -mt-[20vw] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#eef2ff]/40 rounded-full blur-[100px] -ml-[10vw] -mb-[10vw] pointer-events-none"></div>
      
      {/* Animated Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001242 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 reveal active">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[#8a7eb5] text-[10px] font-bold uppercase tracking-[0.25em] mb-12">
              <span className="w-2 h-2 bg-[#8a7eb5] rounded-full animate-ping"></span>
              <span>Advanced Financial Tech & Advisory</span>
            </div>
            
            <h1 className="text-6xl lg:text-[5.5rem] font-serif font-bold text-[#001242] mb-10 leading-[1.05]">
              Modern Solutions for <br />
              <span className="italic font-normal text-[#8a7eb5]">Global Leaders.</span>
            </h1>
            
            <p className="text-slate-500 text-lg lg:text-xl mb-14 max-w-xl leading-relaxed font-light">
              We merge traditional accounting excellence with cutting-edge financial technology to deliver 360-degree consulting that drives real bottom-line impact.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-20">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-[#001242] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#8a7eb5] hover:-translate-y-1 shadow-2xl shadow-blue-900/10 active:scale-95"
              >
                Secure Consultation
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 bg-white border border-slate-200 text-[#001242] rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:border-[#8a7eb5] hover:text-[#8a7eb5] group"
              >
                Explore Services
                <svg className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Partner Strip */}
            <div className="flex items-center space-x-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Industry Expertise</p>
               <div className="h-6 w-px bg-slate-200"></div>
               <span className="text-sm font-bold text-slate-500">Tech Ventures</span>
               <span className="text-sm font-bold text-slate-500">Legal Firms</span>
               <span className="text-sm font-bold text-slate-500">Global Supply</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative z-10 reveal active delay-300">
              {/* Main Professional Image - Focus on Professional Tech Look */}
              <div className="relative animate-float shadow-3xl">
                <div className="absolute -inset-10 bg-blue-50/40 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Tech Professional" 
                  className="rounded-[4rem] shadow-2xl border border-white w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* White Professional Image Overlay */}
              <div className="absolute -bottom-12 -left-12 w-3/5 z-20 animate-float [animation-delay:1.5s]">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" 
                  alt="Business Strategy Team" 
                  className="rounded-[3rem] shadow-2xl border-4 border-white aspect-square object-cover"
                />
              </div>

              {/* Dynamic Floating Badges */}
              <div className="absolute -top-10 -right-10 p-8 glass rounded-[3rem] shadow-2xl z-30 border border-white animate-float [animation-delay:0.7s]">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-tr from-[#001242] to-[#8a7eb5] rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">Trust Score</p>
                    <p className="text-lg font-serif font-bold text-[#001242]">A+ Rated 2024</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-16 p-6 bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl z-20 border border-slate-100 hidden xl:block animate-float [animation-delay:2.2s]">
                 <div className="flex flex-col items-center text-center">
                    <p className="text-2xl font-bold text-[#001242]">15+</p>
                    <p className="text-[8px] uppercase tracking-widest font-bold text-slate-400">Exp Years</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
