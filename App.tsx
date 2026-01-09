
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultantChat } from './components/ConsultantChat';
import { ServiceDetail } from './components/ServiceDetail';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedService]);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (href: string) => {
    // If we are on a detail page, we need to go back to landing first
    if (selectedService) {
      setSelectedService(null);
    }

    // Small timeout to allow the landing sections to mount before scrolling
    setTimeout(() => {
      const id = href.startsWith('#') ? href.substring(1) : href;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <div className="relative bg-white selection:bg-[#8a7eb5]/30 selection:text-[#001242]">
      <Header onNavigate={handleNavigate} />
      <main>
        {selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setSelectedService(null)} 
          />
        ) : (
          <>
            <Hero />
            <About />
            <Services onSelectService={handleSelectService} />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <ConsultantChat />
    </div>
  );
};

export default App;
