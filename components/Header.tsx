
import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Links', href: '#links' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-4' 
          : 'top-0'
      }`}
    >
      <div className={`container mx-auto px-6 transition-all duration-500 ${
        isScrolled ? 'max-w-6xl' : 'max-w-full'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-500 px-6 py-4 rounded-2xl ${
          isScrolled 
            ? 'glass shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-200/50' 
            : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-serif font-bold text-xl">O</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                ORDIA
              </span>
              <span className={`text-[9px] tracking-[0.2em] font-bold uppercase transition-colors ${isScrolled ? 'text-blue-600' : 'text-blue-300'}`}>
                Consulting Services
              </span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-widest link-underline transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-900/10' 
                  : 'bg-white text-slate-900 hover:bg-blue-50'
              }`}
            >
              Consultation
            </a>
          </nav>

          <button 
            className="xl:hidden flex flex-col items-end"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
            <div className={`w-4 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
            <div className={`w-5 h-0.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden glass fixed inset-0 z-50 p-8 flex flex-col justify-center items-center space-y-6 animate-fade-in">
          <button 
            className="absolute top-8 right-8 text-slate-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-2xl font-serif font-bold text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};
