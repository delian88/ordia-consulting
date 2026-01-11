
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="relative">
              <div className="absolute -inset-6 bg-slate-50 rounded-[4rem] -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Executive Consultation" 
                className="rounded-[3rem] shadow-xl w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 glass p-10 rounded-[2.5rem] shadow-2xl border border-white hidden md:block">
                <p className="text-4xl font-serif font-bold text-[#001242] mb-1">Baltimore</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a7eb5]">Headquarters</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <span className="text-[#8a7eb5] font-bold uppercase tracking-[0.25em] text-[10px] mb-6 block">Our Approach</span>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-[#001242] mb-10 leading-tight">
              A Relationship Built <br />
              <span className="italic font-normal text-[#8a7eb5]">On Results.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
              Ordia Consulting Services (OCS) is a premier advisory firm providing 360-degree financial oversight. We serve as the strategic backbone for business owners, executives, and independent professionals.
            </p>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light">
              Our mission is simple: to transform financial complexity into operational clarity. Whether you are a new startup or an established corporation, our Baltimore-based team delivers the precision you deserve.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#8a7eb5] mb-6 group-hover:bg-[#001242] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h4 className="text-lg font-bold text-[#001242] mb-3">Professional Quality</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Our firm provides the highest level of assurance through meticulous internal checks and expert verification.</p>
              </div>
              <div className="group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#8a7eb5] mb-6 group-hover:bg-[#001242] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-[#001242] mb-3">Rapid Response</h4>
                <p className="text-xs text-slate-400 leading-relaxed">In a fast-moving market, our agility ensures that your business stays ahead of regulatory and fiscal shifts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
