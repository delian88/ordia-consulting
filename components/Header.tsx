
import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Partners', href: '#partners' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onNavigate: (href: string) => void;
}

export const FullLogo: React.FC<{ className?: string; light?: boolean }> = ({ className = "h-14", light = false }) => {
  const primary = light ? "#ffffff" : "#003366";
  const accent = "#2563eb";
  return (
    <div className={className}>
      <svg viewBox="0 0 520 220" className="h-full w-auto" preserveAspectRatio="xMinYMid meet">
        {/* Circle Icon Section */}
        <g transform="translate(10, 20)">
          <circle cx="75" cy="75" r="70" fill={accent} />
          {/* The Swoosh */}
          <path 
            d="M-5 90 Q 75 75 145 15" 
            stroke="white" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round" 
          />
          {/* The Graph Bars */}
          <rect x="45" y="85" width="15" height="45" fill={primary} rx="2" />
          <rect x="75" y="65" width="15" height="65" fill={primary} rx="2" />
          <rect x="105" y="45" width="15" height="85" fill={primary} rx="2" />
        </g>
        
        {/* "CS" Large Text */}
        <text x="180" y="145" fontSize="145" fontWeight="900" fill={primary} fontFamily="Inter, sans-serif" letterSpacing="-2">CS</text>
        
        {/* Bottom Full Name Text */}
        <text x="35" y="205" fontSize="36" fontWeight="800" fill={primary} fontFamily="Inter, sans-serif">Ordia Consulting Services</text>
      </svg>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 md:py-4' : 'py-6 md:py-8'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex justify-between items-center px-6 md:px-10 py-3 md:py-4 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border border-slate-100' : 'bg-white/30 backdrop-blur-md'}`}>
          <div 
            className="flex items-center cursor-pointer group shrink-0"
            onClick={() => onNavigate('#home')}
          >
            <FullLogo className={`transition-all duration-500 ${isScrolled ? 'h-11 md:h-13' : 'h-15 md:h-20'}`} />
          </div>

          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-9">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.12em] text-[#003366] hover:text-[#2563eb] transition-colors link-hover whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-7 xl:px-9 py-3.5 bg-[#003366] text-white rounded-full text-[11px] xl:text-[12px] font-bold uppercase tracking-widest hover:bg-[#2563eb] transition-all shadow-lg active:scale-95 whitespace-nowrap"
            >
              Consult Now
            </a>
          </nav>

          <button 
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center space-y-1.5 p-2 bg-slate-50 rounded-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-[#003366]"></div>
            <div className="w-6 h-0.5 bg-[#003366]"></div>
            <div className="w-6 h-0.5 bg-[#003366]"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-6 md:p-12 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-[#003366] p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <FullLogo className="h-16 md:h-24 mb-4" />
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-3xl md:text-5xl font-serif font-bold text-[#003366] hover:text-[#2563eb] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-10 py-4 bg-[#003366] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
};
