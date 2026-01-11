
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

type View = 'home' | 'about' | 'services' | 'contact' | 'service-detail';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    // Re-initialize intersection observer for animations whenever the view changes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
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

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => observer.disconnect();
  }, [view, selectedService]);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setView('service-detail');
  };

  const handleNavigate = (targetView: string) => {
    const viewMap: Record<string, View> = {
      '#home': 'home',
      '#about': 'about',
      '#services': 'services',
      '#contact': 'contact'
    };

    const nextView = viewMap[targetView] || 'home';
    setView(nextView);
    setSelectedService(null);
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero />
            <About isStandalone={false} />
            <Services isStandalone={false} onSelectService={handleSelectService} />
            <Contact isStandalone={false} />
          </>
        );
      case 'about':
        return <About isStandalone={true} />;
      case 'services':
        return <Services isStandalone={true} onSelectService={handleSelectService} />;
      case 'contact':
        return <Contact isStandalone={true} />;
      case 'service-detail':
        return selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setView('services')} 
          />
        ) : <Hero />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative bg-white selection:bg-[#8a7eb5]/30 selection:text-[#001242] flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow animate-fade-in">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <ConsultantChat />
    </div>
  );
};

export default App;
