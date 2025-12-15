import React, { useRef, useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';

// ====================================================================
// STICKY PRODUCT SCROLL
// This component renders the Products defined in 'constants.ts'.
// It uses a sticky positioning trick to hold text while images scroll.
// ====================================================================

const StickyScroll: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate active section based on scroll position
      const scrollY = -top;
      const step = Math.round(scrollY / viewportHeight);
      
      if (step >= 0 && step < PRODUCTS.length) {
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-black text-white" id="solutions">
      <div className="flex flex-col md:flex-row">
        
        {/* ========================================================
            LEFT COLUMN: STICKY TEXT INFO
           ======================================================== */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex flex-col justify-center px-8 md:px-24 bg-black z-20">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs tracking-widest uppercase text-aureole">
              Product Innovation 0{activeStep + 1}
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none transition-all duration-500">
              {PRODUCTS[activeStep].title}
            </h2>
            
            <h3 className="text-2xl text-gray-400 font-light tracking-tight">
              {PRODUCTS[activeStep].subtitle}
            </h3>

            <p className="text-lg text-gray-400 max-w-sm leading-relaxed border-l-2 border-aureole pl-6">
              {PRODUCTS[activeStep].description}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {PRODUCTS[activeStep].stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: SCROLLING IMAGES
           ======================================================== */}
        <div className="w-full md:w-1/2 relative z-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="h-screen w-full sticky top-0 md:static flex items-center justify-center overflow-hidden bg-gray-900 border-b border-gray-800 md:border-none">
              <img 
                src={product.imageUrl} 
                alt={product.title}
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Overlay gradient for mobile readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden flex items-end p-8">
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StickyScroll;