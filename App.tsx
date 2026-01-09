
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
  }, [selectedService]); // Re-observe when view changes

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  const handleBackToHome = () => {
    setSelectedService(null);
  };

  return (
    <div className="relative bg-white selection:bg-[#8a7eb5]/30 selection:text-[#001242]">
      <Header />
      <main>
        {selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={handleBackToHome} 
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
      <Footer />
      <ConsultantChat />
    </div>
  );
};

export default App;
