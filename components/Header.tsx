
import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onNavigate: (href: string) => void;
}

export const FullLogo: React.FC<{ className?: string; light?: boolean }> = ({ className = "h-14", light = false }) => {
  const primary = light ? "#ffffff" : "#001242";
  const accent = "#8a7eb5";
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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center px-8 py-3 rounded-[2.5rem] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-slate-100' : 'bg-transparent'}`}>
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('#home')}
          >
            <FullLogo className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'}`} />
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#001242] hover:text-[#8a7eb5] transition-colors link-hover"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-8 py-3.5 bg-[#001242] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#8a7eb5] transition-all shadow-md active:scale-95"
            >
              Consult Now
            </a>
          </nav>

          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 p-2 bg-slate-50 rounded-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-[#001242]"></div>
            <div className="w-6 h-0.5 bg-[#001242]"></div>
            <div className="w-6 h-0.5 bg-[#001242]"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-12 flex flex-col items-center justify-center space-y-10 animate-fade-in">
          <button 
            className="absolute top-8 right-8 text-[#001242] p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <FullLogo className="h-16 mb-10" />
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-4xl font-serif font-bold text-[#001242] hover:text-[#8a7eb5] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-12 py-5 bg-[#001242] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
};
