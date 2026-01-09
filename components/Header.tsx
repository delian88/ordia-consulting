
import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
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

  // Force scroll to top and reset view when clicking logo or home
  const handleLogoClick = () => {
    window.location.href = '#home';
    if (window.location.hash === '#home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If you were on a detail page, the App state needs to handle resetting selectedService.
    // In this simple setup, App will reset if we reload or if we add a reset trigger.
    // For now, simple href is fine as App component will re-render if state changes.
  };

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
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleLogoClick}>
            {/* SVG Logo Reconstruction matching user image */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="35" cy="45" r="30" fill="#8a7eb5" opacity="0.8" />
                <path d="M10 50 Q 40 40 70 20" stroke="white" strokeWidth="4" fill="none" />
                <rect x="25" y="55" width="8" height="25" fill="#001242" />
                <rect x="40" y="45" width="8" height="35" fill="#001242" />
                <rect x="55" y="35" width="8" height="45" fill="#001242" />
                <text x="65" y="70" fontSize="40" fontWeight="bold" fill="#001242" fontFamily="sans-serif">CS</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                ORDIA
              </span>
              <span className={`text-[9px] tracking-[0.2em] font-bold uppercase transition-colors ${isScrolled ? 'text-[#8a7eb5]' : 'text-[#8a7eb5]'}`}>
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
                  isScrolled ? 'text-slate-600 hover:text-[#8a7eb5]' : 'text-slate-200 hover:text-[#8a7eb5]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                isScrolled 
                  ? 'bg-[#001242] text-white hover:bg-[#8a7eb5] shadow-lg shadow-slate-900/10' 
                  : 'bg-white text-[#001242] hover:bg-slate-50'
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
            className="bg-[#001242] text-white px-8 py-4 rounded-full font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};
