
import React from 'react';
import { FullLogo } from './Header';

interface FooterProps {
  onNavigate: (href: string) => void;
}

const WorldAiForceLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`${className} inline-block align-middle`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto">
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0056b3" />
            <stop offset="50%" stopColor="#4db8ff" />
            <stop offset="100%" stopColor="#7a5fff" />
          </linearGradient>
          <linearGradient id="w-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b4c9b" />
            <stop offset="100%" stopColor="#7a5fff" />
          </linearGradient>
        </defs>
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#004a8d" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="45" fill="white" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#004a8d" strokeWidth="1" />
        
        {/* Inner Gradient Circle */}
        <circle cx="50" cy="50" r="33" fill="url(#logo-grad)" />
        <path d="M50 17 A33 33 0 0 1 50 83 Z" fill="rgba(255,255,255,0.15)" />
        
        {/* White Center Circle */}
        <circle cx="50" cy="50" r="13" fill="white" />
        
        {/* Text WORLD A.I FORCE */}
        <path id="top-curve" d="M22,50 a28,28 0 1,1 56,0" fill="none" />
        <path id="bottom-curve" d="M22,50 a28,28 0 1,0 56,0" fill="none" />
        <text className="font-serif" fontSize="6.5" fontWeight="900" fill="#2b4c9b" letterSpacing="0.5">
          <textPath href="#top-curve" startOffset="50%" textAnchor="middle">WORLD A.I</textPath>
        </text>
        <text className="font-serif" fontSize="7.5" fontWeight="900" fill="#2b4c9b" letterSpacing="1">
          <textPath href="#bottom-curve" startOffset="50%" textAnchor="middle" side="right">FORCE</textPath>
        </text>
        
        {/* Stylized W */}
        <g transform="translate(42, 45) scale(0.16)">
           <path fill="url(#w-grad)" d="M0 0 L25 60 L50 0 L75 60 L100 0 L85 0 L60 60 L35 0 L15 0 L10 15 L0 0 Z" />
        </g>
      </svg>
    </div>
  );
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-[#001a33] text-slate-400 py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 md:mb-10 scale-75 md:scale-90 -ml-6 md:-ml-4 origin-left">
              <FullLogo className="h-16 md:h-20" light />
            </div>
            <p className="max-w-xs text-sm leading-relaxed mb-8 md:mb-10 text-slate-400/80">
              OCS delivers personalized financial oversight that moves beyond compliance to proactive 360-degree strategy. Based in Baltimore, serving clients nationwide.
            </p>
            <div className="text-xs space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-400 font-bold">EM:</span>
                  <div className="space-y-1">
                    <p className="text-white/90">info@ordiafinances.com</p>
                    <p className="text-white/80">cfo@ordiafinances.com</p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61586637290266" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-white/60 hover:text-blue-400 transition-all group"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 border border-white/10">
                      <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Facebook Page</span>
                  </a>
                </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 md:col-span-1 gap-8 md:gap-0 lg:grid-cols-3 lg:col-span-3">
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-6 md:mb-10">Advisory</h4>
              <ul className="space-y-3 md:space-y-4 text-[13px] md:text-sm">
                <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-blue-400 transition-colors">About Firm</a></li>
                <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-blue-400 transition-colors">Specialties</a></li>
                <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="hidden lg:block">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Focus Areas</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tax Strategy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Fractional CFO</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Audit Support</a></li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Ordia Consulting Services (OCS).
            </p>
            <div className="flex items-center space-x-2 text-[9px] tracking-[0.2em] uppercase text-slate-600 font-medium">
              <span>Powered by</span>
              <a href="https://azariahmg.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors font-bold underline decoration-blue-500/30 underline-offset-4">Azariah Management Group</a>
              <span className="mx-1">,</span>
              <span>Sealed by</span>
              <a href="https://worldaiforce.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center transition-all">
                <WorldAiForceLogo className="h-8 md:h-10 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6 md:space-x-10 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-slate-600">
            <span className="hover:text-blue-400 cursor-default transition-colors">Integrity</span>
            <span className="hover:text-blue-400 cursor-default transition-colors">Precision</span>
            <span className="hover:text-blue-400 cursor-default transition-colors">Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
