import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultantChat } from './components/ConsultantChat';
import { ServiceDetail } from './components/ServiceDetail';
import { LoadingScreen } from './components/LoadingScreen';
import { Consulting } from './components/Consulting';
import { Resources } from './components/Resources';
import { Careers } from './components/Careers';
import { News } from './components/News';
import { Industries } from './components/Industries';
import { Service } from './types';

type View = 'home' | 'about' | 'services' | 'partners' | 'contact' | 'service-detail' | 'consulting' | 'resources' | 'careers' | 'news' | 'industries';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAppLoading) return;

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

    return () => observer.disconnect();
  }, [view, selectedService, isAppLoading]);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setView('service-detail');
  };

  const handleNavigate = (targetView: string) => {
    const viewMap: Record<string, View> = {
      '#home': 'home',
      '#about': 'about',
      '#services': 'services',
      '#partners': 'partners',
      '#contact': 'contact',
      '#consulting': 'consulting',
      '#resources': 'resources',
      '#careers': 'careers',
      '#news': 'news',
      '#industries': 'industries'
    };

    const nextView = viewMap[targetView] || 'home';
    setView(nextView);
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero />
            <About isStandalone={false} />
            <Partners />
            <Services isStandalone={false} onSelectService={handleSelectService} />
            <Contact isStandalone={false} />
          </>
        );
      case 'about':
        return <About isStandalone={true} />;
      case 'partners':
        return <Partners isStandalone={true} />;
      case 'services':
        return <Services isStandalone={true} onSelectService={handleSelectService} />;
      case 'industries':
        return <Industries isStandalone={true} />;
      case 'consulting':
        return <Consulting isStandalone={true} />;
      case 'resources':
        return <Resources isStandalone={true} />;
      case 'careers':
        return <Careers isStandalone={true} />;
      case 'news':
        return <News isStandalone={true} />;
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
      {isAppLoading && <LoadingScreen />}
      
      {!isAppLoading && (
        <div className="animate-fade-in">
          <Header onNavigate={handleNavigate} />
          <main className="flex-grow">
            {renderContent()}
          </main>
          <Footer onNavigate={handleNavigate} />
          <ConsultantChat />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;