
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">O</div>
              <span className="text-white font-bold text-lg tracking-tight">ORDIA CONSULTING SERVICES</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Professional accounting, tax, and consulting services for business owners, executives, and independent professionals.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#links" className="hover:text-white transition-colors">Financial Links</a></li>
              <li><a href="#portal" className="hover:text-white transition-colors">Client Portal</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            © {new Date().getFullYear()} Ordia Consulting Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-slate-600">
            <span>Professionalism</span>
            <span>•</span>
            <span>Responsiveness</span>
            <span>•</span>
            <span>Quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
