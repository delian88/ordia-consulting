
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8a7eb5]/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10 scale-90 -ml-4 origin-left">
              <FullLogo className="h-20" light />
            </div>
            <p className="max-w-xs text-sm leading-relaxed mb-10 text-slate-400/80">
              OCS delivers personalized financial oversight that moves beyond compliance to proactive 360-degree strategy. Based in Baltimore, serving clients nationwide.
            </p>
            <div className="text-xs space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-[#8a7eb5] font-bold">HQ:</span>
                  <p>Overton Avenue, Baltimore MD 21236</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-[#8a7eb5] font-bold">PH:</span>
                  <p>+1-443.974.8346</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-[#8a7eb5] font-bold">EM:</span>
                  <div className="space-y-1">
                    <p className="text-white/90">info@ordiafinances.com</p>
                    <p className="text-white/80">cfo@ordiafinances.com</p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <p className="text-white font-bold mb-4 text-sm">Connect with OCS</p>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61586637290266" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-white/60 hover:text-[#8a7eb5] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 border border-white/10">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">Official Facebook</span>
                  </a>
                </div>
                <p className="text-white font-bold mt-6 pt-6 border-t border-white/5 inline-block text-sm">www.ordiafinances.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Advisory</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-[#8a7eb5] transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#8a7eb5] transition-colors">About Firm</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-[#8a7eb5] transition-colors">Specialties</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#8a7eb5] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Focus Areas</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Tax Strategy</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Fractional CFO</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Audit Support</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">New Start-ups</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#8a7eb5] transition-colors">Client Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">
              © {new Date().getFullYear()} Ordia Consulting Services (OCS).
            </p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-slate-600 font-medium">
              A Strategic Asset of <span className="text-[#8a7eb5]">Azariah Management Group</span>
            </p>
          </div>
          <div className="flex items-center space-x-10 text-[9px] uppercase tracking-[0.3em] font-bold text-slate-600">
            <span className="hover:text-[#8a7eb5] cursor-default transition-colors">Integrity</span>
            <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
            <span className="hover:text-[#8a7eb5] cursor-default transition-colors">Precision</span>
            <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
            <span className="hover:text-[#8a7eb5] cursor-default transition-colors">Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
