
import React, { useState, useEffect, useCallback } from 'react';
import { FullLogo } from './Header';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  tagline: string;
  overlayType: 'billboard' | 'glass' | 'wall';
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    title: "Global Financial Strategy",
    subtitle: "Navigating complexity with 360° precision.",
    tagline: "Corporate Headquarters",
    overlayType: 'wall'
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000",
    title: "Accounting Reimagined",
    subtitle: "Precision tech for modern business leaders.",
    tagline: "Executive Suite Branding",
    overlayType: 'glass'
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    title: "Tax Strategy Excellence",
    subtitle: "Proactive counsel for the next generation.",
    tagline: "Metropolitan Digital Signage",
    overlayType: 'billboard'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
            </div>

            {/* Mock-up Branding Layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
               {slide.overlayType === 'billboard' && (
                 <div className="relative w-full h-full">
                    {/* Simulated Billboard on the architectural background */}
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[500px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transform rotate-2 shadow-2xl flex flex-col items-center justify-center p-8 opacity-90">
                       <FullLogo className="h-32 mb-6" light />
                       <div className="h-px w-32 bg-[#8a7eb5] mb-6"></div>
                       <p className="text-white text-center font-bold uppercase tracking-[0.3em] text-[10px]">Baltimore | Maryland</p>
                    </div>
                 </div>
               )}

               {slide.overlayType === 'glass' && (
                 <div className="relative w-full h-full">
                    {/* Glass Branding Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                       <FullLogo className="h-[40vh] md:h-[60vh]" light />
                    </div>
                 </div>
               )}

               {slide.overlayType === 'wall' && (
                 <div className="relative w-full h-full">
                    {/* Wall Mounted Plaque Effect */}
                    <div className="absolute top-[30%] left-[5%] p-10 bg-slate-900/60 backdrop-blur-xl border-l-4 border-[#8a7eb5] shadow-2xl">
                       <FullLogo className="h-20" light />
                    </div>
                 </div>
               )}
            </div>

            {/* Main Content Overlay */}
            <div className="container mx-auto px-6 relative h-full flex flex-col justify-center">
              <div className="max-w-4xl">
                <div className={`transition-all duration-1000 delay-300 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="inline-block text-[#8a7eb5] font-bold uppercase tracking-[0.4em] text-[11px] mb-8 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    {slide.tagline}
                  </span>
                  <h1 className="text-6xl md:text-[6.5rem] font-serif font-bold text-white mb-10 leading-[1] drop-shadow-2xl">
                    {slide.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {i === 1 ? <span className="italic font-normal text-[#8a7eb5]">{word} </span> : word + ' '}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl font-light leading-relaxed drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <a
                      href="#contact"
                      className="px-12 py-5 bg-[#8a7eb5] text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#001242] hover:-translate-y-1 shadow-2xl active:scale-95"
                    >
                      Establish Partnership
                    </a>
                    <a
                      href="#services"
                      className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#001242] group"
                    >
                      View Expertise
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 flex items-center space-x-6 z-30">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#8a7eb5] hover:border-[#8a7eb5] transition-all group"
        >
          <svg className="w-5 h-5 rotate-180 transition-transform group-active:scale-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <div className="flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-[#8a7eb5]' : 'w-4 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#8a7eb5] hover:border-[#8a7eb5] transition-all group"
        >
          <svg className="w-5 h-5 transition-transform group-active:scale-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Side Indicator */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:flex flex-col space-y-8 z-30">
        <div className="h-px w-8 bg-white/20"></div>
        <p className="text-[10px] text-white font-bold uppercase tracking-[0.5em] origin-left -rotate-90 translate-y-20 whitespace-nowrap opacity-40">
          Professional Advisory Firm
        </p>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#8a7eb5] z-40 transition-all duration-[7000ms] ease-linear" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
    </section>
  );
};
