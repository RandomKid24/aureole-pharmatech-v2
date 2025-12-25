import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StickyScroll from './components/StickyScroll';
import InfiniteMarquee from './components/InfiniteMarquee';
import Manifesto from './components/Manifesto';
import MagneticCTA from './components/MagneticCTA';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Software from './components/Software';
import Careers from './components/Careers';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'services' | 'software' | 'careers'>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navigate = (page: 'home' | 'about' | 'products' | 'services' | 'software' | 'careers') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-sans text-gray-900 bg-surface selection:bg-aureole selection:text-white min-h-screen flex flex-col" id="home">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <InfiniteMarquee />
            <StickyScroll />
            <Manifesto />
            <MagneticCTA />
          </>
        )}
        
        {currentPage === 'about' && (
          <About />
        )}

        {currentPage === 'products' && (
          <Products />
        )}

        {currentPage === 'services' && (
          <Services />
        )}

        {currentPage === 'software' && (
          <Software />
        )}

        {currentPage === 'careers' && (
          <Careers />
        )}
      </main>

      <Footer onNavigate={navigate} />

      {/* ========================================================
          BACK TO TOP BUTTON
         ======================================================== */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-aureole text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(15,133,197,0.4)] hover:shadow-[0_15px_40px_rgba(15,133,197,0.6)] transition-all duration-500 transform border-2 border-white/20 active:scale-90 group ${
          showBackToTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
      </button>
    </div>
  );
};

export default App;