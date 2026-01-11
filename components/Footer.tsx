
import React from 'react';
import { FullLogo } from './Header';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-[#001242] text-slate-400 py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8a7eb5]/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
              <FullLogo className="h-16" light />
            </div>
            <p className="max-w-xs text-sm leading-relaxed mb-8 text-slate-400">
              Transforming financial complexity into operational clarity. Providing 360-degree consulting for the modern era.
            </p>
            <div className="text-xs space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#8a7eb5]">L:</span>
                  <p>Overton Avenue, Baltimore MD 21236</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#8a7eb5]">P:</span>
                  <p>+1-443.974.8346</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#8a7eb5]">E:</span>
                  <p>ordiafinance@gmail.com</p>
                </div>
                <p className="text-[#8a7eb5] font-bold mt-4 pt-4 border-t border-white/5 inline-block">www.ordiafinances.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-[#8a7eb5] transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#8a7eb5] transition-colors">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-[#8a7eb5] transition-colors">Services</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#8a7eb5] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Specialties</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Corp Tax Planning</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Treasury Support</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">HR Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[10px] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Ordia Consulting Services.
            </p>
            <p className="text-[10px] tracking-widest uppercase text-slate-500 font-medium mt-1">
              Powered by <span className="text-[#8a7eb5]">Azariah Management Group</span>
            </p>
          </div>
          <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-600">
            <span className="hover:text-[#8a7eb5] cursor-default transition-colors">Professionalism</span>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            <span className="hover:text-[#8a7eb5] cursor-default transition-colors">Responsiveness</span>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            <span className="hover:text-[#8a7eb5] cursor-default transition-colors">Quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
