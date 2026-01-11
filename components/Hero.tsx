
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center soft-mesh pt-32 pb-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[100px] -mr-48 opacity-50"></div>
      <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-indigo-50/40 rounded-full blur-[80px] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 reveal active">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[#8a7eb5] text-[10px] font-bold uppercase tracking-[0.25em] mb-10">
              <span className="w-2 h-2 bg-[#8a7eb5] rounded-full animate-pulse"></span>
              <span>Premier Advisory Firm • Baltimore, MD</span>
            </div>
            
            <h1 className="text-6xl lg:text-[5.5rem] font-serif font-bold text-[#001242] mb-8 leading-[1.05]">
              Navigating Your <br />
              <span className="italic font-normal text-[#8a7eb5]">Financial Future.</span>
            </h1>
            
            <p className="text-slate-600 text-lg lg:text-xl mb-12 max-w-lg leading-relaxed font-light">
              We provide 360-degree financial solutions that scale with your ambitions. Specialized expertise in accounting, tax, and growth consulting.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-[#001242] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#8a7eb5] hover:-translate-y-1 shadow-xl shadow-blue-900/10 active:scale-95"
              >
                Start Your Journey
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 bg-white border border-slate-200 text-[#001242] rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:border-[#8a7eb5] hover:text-[#8a7eb5]"
              >
                View Services
              </a>
            </div>

            <div className="mt-20 flex items-center space-x-12">
              <div>
                <p className="text-4xl font-serif font-bold text-[#001242]">15+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Years Practice</p>
              </div>
              <div className="w-px h-12 bg-slate-100"></div>
              <div>
                <p className="text-4xl font-serif font-bold text-[#001242]">360°</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Solutions</p>
              </div>
              <div className="w-px h-12 bg-slate-100"></div>
              <div>
                <p className="text-4xl font-serif font-bold text-[#001242]">100%</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative z-10 reveal active delay-300">
              {/* Overlapping Professional Imagery */}
              <div className="relative animate-float">
                <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Financial Advisor" 
                  className="rounded-[3rem] shadow-2xl border border-white w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* Smaller Tech-focused Professional Image Overlay */}
              <div className="absolute -bottom-10 -left-12 w-2/3 z-20 animate-float [animation-delay:2s]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" 
                  alt="Tech Strategy Team" 
                  className="rounded-[2.5rem] shadow-2xl border-4 border-white aspect-square object-cover"
                />
              </div>

              {/* Success Metric Badge */}
              <div className="absolute -top-8 -right-8 p-6 glass rounded-[2.5rem] shadow-xl z-20 border border-white animate-float [animation-delay:1s]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8a7eb5] rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">Firm Ranking</p>
                    <p className="text-sm font-bold text-[#001242]">Top 1% National</p>
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
