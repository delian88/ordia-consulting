
import React from 'react';
import { FullLogo } from './Header';
import { CPASeal } from './About';

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
        <circle cx="50" cy="50" r="48" fill="none" stroke="#004a8d" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="45" fill="white" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#004a8d" strokeWidth="1" />
        <circle cx="50" cy="50" r="33" fill="url(#logo-grad)" />
        <path d="M50 17 A33 33 0 0 1 50 83 Z" fill="rgba(255,255,255,0.15)" />
        <circle cx="50" cy="50" r="13" fill="white" />
        <path id="top-curve" d="M22,50 a28,28 0 1,1 56,0" fill="none" />
        <path id="bottom-curve" d="M22,50 a28,28 0 1,0 56,0" fill="none" />
        <text className="font-serif" fontSize="6.5" fontWeight="900" fill="#2b4c9b" letterSpacing="0.5">
          <textPath href="#top-curve" startOffset="50%" textAnchor="middle">WORLD A.I</textPath>
        </text>
        <text className="font-serif" fontSize="7.5" fontWeight="900" fill="#2b4c9b" letterSpacing="1">
          <textPath href="#bottom-curve" startOffset="50%" textAnchor="middle" side="right">FORCE</textPath>
        </text>
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

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61586637290266', 
      icon: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />,
      hoverClass: 'hover:bg-blue-600'
    },
    { 
      name: 'Google Business', 
      href: '#', // Add specific Google Business URL if available
      icon: <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />,
      hoverClass: 'hover:bg-red-500'
    },
    { 
      name: 'Instagram', 
      href: '#', // Add Instagram profile URL
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
      hoverClass: 'hover:bg-pink-600'
    },
    { 
      name: 'YouTube', 
      href: '#', // Add YouTube channel URL
      icon: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />,
      hoverClass: 'hover:bg-red-600'
    }
  ];

  return (
    <footer className="bg-[#001a33] text-slate-400 py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 md:mb-10 scale-75 md:scale-90 -ml-6 md:-ml-4 origin-left">
              <FullLogo className="h-16 md:h-20" light />
            </div>
            
            <div className="mb-8 flex items-center space-x-6">
              <CPASeal className="h-20 w-20" />
              <div className="flex flex-col">
                <span className="text-white font-black text-lg tracking-tighter leading-none mb-1">OUTSOURCED CPA CERTIFIED</span>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none">Registered Outsourced CPA Advisor</span>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed mb-8 md:mb-10 text-white/60">
              OCS delivers personalized financial oversight that moves beyond compliance to proactive 360-degree Outsourced CPA strategy. Based in Baltimore, serving clients nationwide.
            </p>
            
            <div className="text-xs space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-400 font-bold">EM:</span>
                  <div className="space-y-1">
                    <p className="text-white font-medium">info@ordiafinances.com</p>
                    <p className="text-white font-medium">cfo@ordiafinances.com</p>
                  </div>
                </div>
                
                <div className="pt-8 mt-8 border-t border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Connect With Our Network</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.name}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 transition-all border border-white/10 ${social.hoverClass} hover:text-white hover:border-transparent hover:scale-110 active:scale-95`}
                        title={social.name}
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 md:col-span-1 gap-8 md:gap-0 lg:grid-cols-3 lg:col-span-3">
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-6 md:mb-10">Advisory</h4>
              <ul className="space-y-3 md:space-y-4 text-[13px] md:text-sm">
                <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">About Firm</a></li>
                <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">Specialties</a></li>
                <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-white font-bold hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="hidden lg:block">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Intelligence</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#consulting" onClick={(e) => handleLinkClick(e, '#consulting')} className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#resources" onClick={(e) => handleLinkClick(e, '#resources')} className="hover:text-white transition-colors">Tax Tools</a></li>
                <li><a href="#news" onClick={(e) => handleLinkClick(e, '#news')} className="hover:text-white transition-colors">News & Blog</a></li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-10">Growth</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#careers" onClick={(e) => handleLinkClick(e, '#careers')} className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#partners" onClick={(e) => handleLinkClick(e, '#partners')} className="hover:text-white transition-colors">Partnerships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Ordia Consulting Services (OCS).
            </p>
            <div className="flex items-center space-x-2 text-[9px] tracking-[0.2em] uppercase text-white/30 font-medium">
              <span>Powered by</span>
              <a href="https://azariahmg.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors font-bold underline decoration-white/20 underline-offset-4">Azariah Management Group</a>
              <span className="mx-1">,</span>
              <span>Sealed by</span>
              <a href="https://worldaiforce.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center transition-all">
                <WorldAiForceLogo className="h-8 md:h-10 hover:scale-110 transition-transform brightness-125" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6 md:space-x-10 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-white/30">
            <span className="hover:text-white cursor-default transition-colors">Integrity</span>
            <span className="hover:text-white cursor-default transition-colors">Precision</span>
            <span className="hover:text-white cursor-default transition-colors">Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
