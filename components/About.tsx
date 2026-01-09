
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Section: Story & Branding */}
        <div className="grid lg:grid-cols-12 gap-20 items-center mb-32">
          <div className="lg:col-span-6 relative reveal-left">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#f8f9ff] to-[#f0f2ff] aspect-[4/5] flex items-center justify-center border border-slate-100 p-12 lg:p-20">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001242 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              
              {/* Large Branded Logo */}
              <div className="w-full h-full max-w-[300px] max-h-[300px] relative">
                <div className="absolute inset-0 bg-[#8a7eb5]/5 rounded-full blur-3xl animate-pulse"></div>
                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 filter drop-shadow-xl transition-transform duration-700 hover:scale-110">
                  <circle cx="35" cy="45" r="30" fill="#8a7eb5" opacity="0.9" />
                  <path d="M10 50 Q 40 40 70 20" stroke="white" strokeWidth="4" fill="none" />
                  <rect x="25" y="55" width="8" height="25" fill="#001242" />
                  <rect x="40" y="45" width="8" height="35" fill="#001242" />
                  <rect x="55" y="35" width="8" height="45" fill="#001242" />
                  <text x="65" y="70" fontSize="40" fontWeight="bold" fill="#001242" fontFamily="sans-serif">CS</text>
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 p-10 glass rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-white/50 reveal delay-500">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-5xl font-serif font-bold text-[#001242]">15+</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#8a7eb5]">Years Excellence</p>
                </div>
                <div className="w-0.5 h-12 bg-slate-200"></div>
                <div>
                  <p className="text-slate-500 text-sm italic">"Precision in every <br />calculation."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal-right">
            <span className="text-[#8a7eb5] font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Our Story</span>
            <h2 className="text-5xl font-serif font-bold text-[#001242] mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic font-normal">Financial Integrity.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Based in Baltimore, Ordia Consulting Services was founded on the principle that high-level financial expertise should be accessible, transparent, and personally tailored. We don't just process numbers; we build the financial infrastructure that allows businesses to thrive.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Our reputation for excellence is built on three pillars: Professionalism, Responsiveness, and Quality. Every client, from start-ups to established corporations, receives our full attention and expert guidance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-[#8a7eb5] transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#8a7eb5] group-hover:bg-[#8a7eb5] group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#001242]">Our Mission</h4>
                  <p className="text-sm text-slate-500">To provide insightful financial leadership that empowers our clients to make informed, strategic decisions.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-[#8a7eb5] transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#8a7eb5] group-hover:bg-[#8a7eb5] group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#001242]">Our Vision</h4>
                  <p className="text-sm text-slate-500">To be the most trusted financial partner in the Maryland region, known for innovation and integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 reveal">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-[#001242] mb-4">Responsiveness</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We understand that timing is critical in finance. Our team is committed to rapid turnaround times and direct accessibility for all our partners.
            </p>
          </div>
          <div className="text-center p-8 border-x border-slate-100">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-[#001242] mb-4">Quality Standards</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              An accounting firm is known for the quality of its service. We demand the highest levels of accuracy and thoroughness from our entire staff.
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-[#001242] mb-4">Expertise</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              By combining our expertise, experience, and the energy of our staff, each client receives close personal and professional attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
