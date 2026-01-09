
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden mesh-gradient pt-24 pb-12">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8a7eb5]/10 border border-[#8a7eb5]/20 text-[#8a7eb5] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 reveal active">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a7eb5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8a7eb5]"></span>
              </span>
              <span>Ordia Consulting Services | Expert Advisory</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] reveal active">
              Navigating Your <br />
              <span className="italic font-normal text-[#8a7eb5]">Financial Future.</span>
            </h1>
            
            <p className="text-slate-400 text-lg lg:text-xl mb-12 max-w-xl leading-relaxed reveal active delay-200">
              Professional accounting, tax, and consulting services for business owners, executives, and independent professionals. Based in Baltimore, serving clients with precision.
            </p>
            
            <div className="flex flex-wrap gap-5 reveal active delay-300">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-[#8a7eb5] hover:bg-[#7a6ea5] text-white rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-[#8a7eb5]/20"
              >
                Schedule Consultation
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 border border-white/20 hover:border-white/40 text-white rounded-full font-bold text-sm uppercase tracking-widest transition-all"
              >
                Our Services
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 reveal active delay-500">
              <div>
                <p className="text-3xl font-serif font-bold text-white mb-1">Expert</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Tax Planning</p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <p className="text-3xl font-serif font-bold text-white mb-1">Trusted</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Advisory</p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <p className="text-3xl font-serif font-bold text-white mb-1">Baltimore</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Service Hub</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 reveal-right active delay-300">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#8a7eb5]/20 to-transparent blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165833767-027ffea70288?auto=format&fit=crop&q=80&w=1200" 
                alt="Ordia Consulting Workspace" 
                className="rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-8 -left-8 p-8 dark-glass rounded-2xl shadow-2xl reveal delay-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8a7eb5] rounded-full flex items-center justify-center text-white font-bold">
                    SA
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Professional Quality</p>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Trusted Financial Advice</p>
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
