
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 relative reveal-left">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                alt="Ordia Professional Team" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 p-10 glass rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-white/50 reveal delay-500">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-5xl font-serif font-bold text-slate-950">Expert</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-blue-600">Guidance</p>
                </div>
                <div className="w-0.5 h-12 bg-slate-200"></div>
                <div>
                  <p className="text-slate-500 text-sm italic">"Your success is <br />our mission."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal-right">
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">About Us</span>
            <h2 className="text-5xl font-serif font-bold text-slate-950 mb-8 leading-tight">
              Excellence in <br />
              <span className="italic font-normal">Accounting & Advisory.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Ordia Consulting Services provides a broad range of services for business owners, executives, and independent professionals. We are affordable, experienced, and friendly.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our firm's reputation for providing quality service reflects the high standards we demand of ourselves. Our high standards, responsive service, and specialized staff spell the difference between our firm and others.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10 mt-12">
              <div className="group">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4 transition-all group-hover:bg-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-slate-950 mb-2">Responsiveness</h4>
                <p className="text-slate-500 text-sm leading-relaxed">We answer our phones and respond to emails quickly. You can rely on competent advice and fast, accurate personnel.</p>
              </div>
              <div className="group">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4 transition-all group-hover:bg-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h4 className="font-bold text-slate-950 mb-2">Quality</h4>
                <p className="text-slate-500 text-sm leading-relaxed">An accounting firm is known for the quality of its service. Our primary goal as a trusted advisor is to be available and to provide insightful advice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
