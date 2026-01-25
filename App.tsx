
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultantChat } from './components/ConsultantChat';
import { ServiceDetail } from './components/ServiceDetail';
import { LoadingScreen } from './components/LoadingScreen';
import { Resources } from './components/Resources';
import { News, NewsPost } from './components/News';
import { NewsDetail } from './components/NewsDetail';
import { Industries } from './components/Industries';
import { VideoIntro } from './components/VideoIntro';
import { Booking } from './components/Booking';
import { Testimonials } from './components/Testimonials';
import { Service } from './types';

type View = 'home' | 'about' | 'services' | 'contact' | 'service-detail' | 'resources' | 'news' | 'news-detail' | 'industries' | 'booking';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsPost | null>(null);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAppLoading) return;

    if (!['service-detail', 'news-detail'].includes(view)) {
      document.title = "Ordia Consulting Services | Professional Financial Solutions";
      const metaDesc = document.getElementById('meta-description');
      const ogTitle = document.getElementById('og-title');
      const ogDesc = document.getElementById('og-description');
      
      if (metaDesc) metaDesc.setAttribute('content', "Ordia Consulting Services (OCS) provides expert Outsourced CPA, tax planning, and management consulting solutions.");
      if (ogTitle) ogTitle.setAttribute('content', "Ordia Consulting Services");
      if (ogDesc) ogDesc.setAttribute('content', "Professional Financial Solutions & Technical CPA Strategy.");
    }

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
  }, [view, isAppLoading]);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setView('service-detail');
  };

  const handleSelectNews = (post: NewsPost) => {
    setSelectedNews(post);
    setView('news-detail');
  };

  const handleNavigate = (targetView: string) => {
    const viewMap: Record<string, View> = {
      '#home': 'home',
      '#about': 'about',
      '#services': 'services',
      '#contact': 'contact',
      '#resources': 'resources',
      '#news': 'news',
      '#industries': 'industries',
      '#booking': 'booking'
    };

    const nextView = viewMap[targetView] || 'home';
    setView(nextView);
    setSelectedService(null);
    setSelectedNews(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <About isStandalone={false} onNavigate={handleNavigate} />
            <VideoIntro onNavigate={handleNavigate} />
            <Industries isStandalone={false} onNavigate={handleNavigate} />
            <Services isStandalone={false} onSelectService={handleSelectService} onNavigate={handleNavigate} />
            <Testimonials />
            <Contact isStandalone={false} />
          </>
        );
      case 'about':
        return <About isStandalone={true} />;
      case 'services':
        return <Services isStandalone={true} onSelectService={handleSelectService} onNavigate={handleNavigate} />;
      case 'industries':
        return <Industries isStandalone={true} onNavigate={handleNavigate} />;
      case 'resources':
        return <Resources isStandalone={true} onNavigate={handleNavigate} />;
      case 'news':
        return <News isStandalone={true} onSelectPost={handleSelectNews} />;
      case 'news-detail':
        return selectedNews ? (
          <NewsDetail post={selectedNews} onBack={() => setView('news')} />
        ) : <News isStandalone={true} onSelectPost={handleSelectNews} />;
      case 'contact':
        return <Contact isStandalone={true} />;
      case 'booking':
        return <Booking />;
      case 'service-detail':
        return selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setView('services')} 
          />
        ) : <Hero onNavigate={handleNavigate} />;
      default:
        return <Hero onNavigate={handleNavigate} />;
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
