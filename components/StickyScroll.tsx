import React, { useRef, useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

// ====================================================================
// STICKY PRODUCT SCROLL
// Overhauled to match the "Precision Matters" Hero aesthetic.
// Light theme, bold typography, clean lines.
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
      // Threshold adjustment for smoother switching
      const step = Math.round(scrollY / viewportHeight);
      
      if (step >= 0 && step < PRODUCTS.length) {
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white" id="solutions">
      <div className="flex flex-col md:flex-row">
        
        {/* ========================================================
            LEFT COLUMN: STICKY TEXT INFO
           ======================================================== */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex flex-col justify-center px-6 md:px-24 border-r border-gray-100 z-20 bg-white overflow-hidden">
          <div className="relative">
             
             {/* Background Number (Hero Style Match) */}
             <div className="absolute -top-24 md:-top-40 -left-6 md:-left-16 text-[10rem] md:text-[16rem] font-black text-gray-50 select-none -z-10 leading-none transition-all duration-700 ease-out">
                0{activeStep + 1}
             </div>

            <div className="space-y-6 md:space-y-10 relative z-10">
               {/* Label */}
               <div className="flex items-center gap-4">
                 <span className="h-px w-8 bg-aureole"></span>
                 <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole">
                   Innovation Series
                 </span>
               </div>
            
              {/* Massive Title */}
              <div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-gray-900 uppercase">
                  {PRODUCTS[activeStep].title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h2>
              </div>
              
              {/* Description Group */}
              <div className="pl-0 md:pl-2">
                <h3 className="text-xl md:text-2xl text-aureole font-medium tracking-tight mb-4">
                  {PRODUCTS[activeStep].subtitle}
                </h3>

                <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-light">
                  {PRODUCTS[activeStep].description}
                </p>
              </div>

              {/* Stats - Clean Minimalist Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100 mt-8">
                {PRODUCTS[activeStep].stats.map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight group-hover:text-aureole transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-2 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4">
                 <a href="#products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-aureole transition-colors group">
                    Explore Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: SCROLLING IMAGES
           ======================================================== */}
        <div className="w-full md:w-1/2 relative z-10 bg-white">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className="h-screen w-full flex items-center justify-center p-8 md:p-20 border-b border-gray-50 last:border-0 sticky md:static top-0 bg-white">
              <div className={`relative w-full aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeStep === index ? 'opacity-100 scale-100 grayscale-0' : 'opacity-30 scale-95 grayscale'}`}>
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-110"
                />
                
                {/* Clean Frame Border */}
                <div className="absolute inset-0 border-[1px] border-black/10 pointer-events-none z-20"></div>
                
                {/* Label Tag on Image */}
                <div className="absolute bottom-0 left-0 bg-white px-6 py-4 z-20 border-t border-r border-gray-100">
                   <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">0{index + 1} / Model X</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StickyScroll;