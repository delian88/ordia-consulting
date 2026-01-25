
import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Resources', href: '#resources' },
  { label: 'News', href: '#news' },
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
        <g transform="translate(10, 20)">
          <circle cx="75" cy="75" r="70" fill={accent} />
          <path 
            d="M-5 90 Q 75 75 145 15" 
            stroke="white" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round" 
          />
          <rect x="45" y="85" width="15" height="45" fill={primary} rx="2" />
          <rect x="75" y="65" width="15" height="65" fill={primary} rx="2" />
          <rect x="105" y="45" width="15" height="85" fill={primary} rx="2" />
        </g>
        <text x="180" y="145" fontSize="145" fontWeight="900" fill={primary} fontFamily="Inter, sans-serif" letterSpacing="-2">CS</text>
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-3' : 'py-5 md:py-7'}`}>
      <div className="container mx-auto px-2 md:px-4">
        <div className={`flex justify-between items-center px-4 md:px-6 py-2 md:py-3 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border border-slate-100' : 'bg-white/30 backdrop-blur-md'}`}>
          <div 
            className="flex items-center cursor-pointer group shrink-0"
            onClick={() => onNavigate('#home')}
          >
            <FullLogo className={`transition-all duration-500 ${isScrolled ? 'h-9 md:h-11' : 'h-13 md:h-16'}`} />
          </div>

          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] text-[#003366] hover:text-[#2563eb] transition-colors link-hover whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="px-6 xl:px-8 py-3 bg-[#003366] text-white rounded-full text-[10px] xl:text-[11px] font-bold uppercase tracking-widest hover:bg-[#2563eb] transition-all shadow-lg active:scale-95 whitespace-nowrap"
            >
              Consult Now
            </button>
          </nav>

          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1 p-2 bg-slate-50 rounded-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-[#003366]"></div>
            <div className="w-6 h-0.5 bg-[#003366]"></div>
            <div className="w-6 h-0.5 bg-[#003366]"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-6 md:p-12 flex flex-col items-center justify-center space-y-4 animate-fade-in overflow-y-auto">
          <button 
            className="absolute top-6 right-6 text-[#003366] p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <FullLogo className="h-12 md:h-20 mb-4" />
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-xl md:text-3xl font-serif font-bold text-[#003366] hover:text-[#2563eb] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button 
            onClick={(e) => handleLinkClick(e, '#booking')}
            className="mt-8 px-10 py-4 bg-[#003366] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
};
