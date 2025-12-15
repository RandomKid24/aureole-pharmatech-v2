import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'services' | 'software' | 'careers'>('home');

  return (
    <div className="font-sans text-gray-900 bg-surface selection:bg-aureole selection:text-white" id="home">
      <Navbar onNavigate={(page: string) => setCurrentPage(page as any)} currentPage={currentPage} />
      
      <main>
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
    </div>
  );
};

export default App;