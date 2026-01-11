
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

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section - Full Logo Display */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onNavigate('#home')}
          >
            <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#001242" strokeWidth="2" opacity="0.1" />
                <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="#8a7eb5" opacity="0.1" />
                <path d="M30 40 L50 20 L70 40" fill="none" stroke="#8a7eb5" strokeWidth="3" />
                <rect x="35" y="45" width="8" height="30" fill="#001242" rx="1" />
                <rect x="46" y="40" width="8" height="35" fill="#8a7eb5" rx="1" />
                <rect x="57" y="35" width="8" height="40" fill="#001242" rx="1" />
                <text x="50" y="75" fontSize="14" fontWeight="bold" fill="#001242" textAnchor="middle" fontFamily="serif">OCS</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-[#001242] leading-none">ORDIA</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8a7eb5] mt-1">Consulting Services</span>
            </div>
          </div>

          {/* Desktop Navigation */}
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
              className="px-7 py-3 bg-[#001242] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#8a7eb5] transition-all shadow-lg shadow-blue-900/10 active:scale-95"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-[#001242]"></div>
            <div className="w-6 h-0.5 bg-[#001242]"></div>
            <div className="w-4 h-0.5 bg-[#001242] self-end"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-12 flex flex-col items-center justify-center space-y-10 animate-fade-in">
          <button 
            className="absolute top-8 right-8 text-[#001242]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
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
