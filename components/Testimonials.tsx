
import React, { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Ordia Consulting transformed our construction WIP management. Their technical expertise provided the corrective actions we needed to remediate internal control issues we hadn't even identified.",
    author: "Sarah Jenkins",
    role: "CFO, JLN Construction Services",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The outsourced CPA strategy provided by OCS gave us the financial clarity and professional reporting needed to secure our latest round of funding. They are more than consultants; they are partners.",
    author: "David Chen",
    role: "Founder, TechFlow Systems",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Managing complex healthcare insurance cycles was a major drain on our focus. OCS optimized our cash flow and ensured 100% payroll compliance for our medical staff. Exceptional service.",
    author: "Dr. Michael Reed",
    role: "Director, City Health Clinics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Their non-profit board reporting tools are invaluable. We've seen a 30% increase in grant approval efficiency since partnering with OCS for our audit preparation.",
    author: "Elena Rodriguez",
    role: "Executive Director, Manna House",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-24 bg-[#001a33] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 reveal">
          <span className="text-blue-400 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Proven Performance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Partner <span className="italic font-normal text-blue-400">Success Stories.</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-12">
          {/* Slider Content */}
          <div className="overflow-hidden relative min-h-[400px]">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  i === currentIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : i < currentIndex 
                    ? 'opacity-0 -translate-x-full scale-95' 
                    : 'opacity-0 translate-x-full scale-95'
                }`}
                style={{ visibility: i === currentIndex ? 'visible' : 'hidden' }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-[3rem] flex flex-col items-center text-center h-full hover:bg-white/10 transition-colors group">
                  <div className="mb-10">
                    <svg className="w-12 h-12 text-blue-500 opacity-40 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v8H6c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8zm18 0v8h-4c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8z" />
                    </svg>
                  </div>
                  
                  <blockquote className="text-blue-50 text-xl md:text-3xl font-serif leading-relaxed mb-12 italic font-light">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/30 mb-4 shadow-2xl">
                      <img 
                        src={t.avatar} 
                        alt={t.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-white font-bold text-lg">{t.author}</h4>
                    <p className="text-blue-400 text-[10px] uppercase tracking-[0.25em] font-bold mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-8 w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all z-20 group"
          >
            <svg className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-8 w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all z-20 group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === currentIndex ? 'w-10 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
