
import React, { useState } from 'react';

export const VideoIntro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-intro" className="py-24 bg-[#001a33] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full -mr-32"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-400/5 blur-[100px] rounded-full -ml-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 reveal-left">
            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block border-l-2 border-blue-500 pl-4">The Ordia Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Strategic Oversight <br />
              <span className="italic font-normal text-blue-400">Captured in Motion.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
              At OCS, we believe financial excellence is more than just numbers—it's a 360-degree approach to growth. Watch how we bridge the gap between technical accounting and executive strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <button 
                onClick={() => {
                  const contact = document.getElementById('contact');
                  contact?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-900 transition-all shadow-xl active:scale-95"
               >
                 Start Your Journey
               </button>
            </div>
          </div>

          <div className="lg:col-span-7 reveal-right">
            <div className="relative group">
              {/* Video Container */}
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                {!isPlaying ? (
                  <div className="absolute inset-0 z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                      alt="Ordia Video Intro" 
                      className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-white hover:text-blue-900 shadow-2xl group/play"
                      >
                        <svg className="w-8 h-8 md:w-10 md:h-10 ml-1 transition-transform group-hover/play:scale-110" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <video 
                    autoPlay 
                    controls 
                    className="w-full h-full object-cover"
                    src="https://player.vimeo.com/external/370331493.hd.mp4?s=3324022830386121852bd770026e6c8f615e478e&profile_id=174"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {/* Visual Accent */}
                <div className="absolute -bottom-1 -left-1 -right-1 h-24 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-blue-600 p-6 rounded-3xl shadow-2xl border-4 border-[#001a33] hidden md:block animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Certified Advisory</p>
                    <p className="text-sm font-bold text-white">Trusted Nationwide</p>
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
