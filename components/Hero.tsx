import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
      
      <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-start max-w-[95vw]">
          
          <div className={`mb-4 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-[#F8F9FA]/50 backdrop-blur-sm pr-4 relative z-10">
                Est. 1996 • Global Leader
             </span>
          </div>

          <h1 className="text-[13vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full uppercase relative z-10 mix-blend-darken">
             <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
               PRECISION
             </span>
             <span className={`block text-aureole transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
               MATTERS
             </span>
          </h1>

          <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-gray-200/60 pt-8 md:pt-12 bg-[#F8F9FA]/80 backdrop-blur-sm pl-0">
             
             <div className={`max-w-2xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                   We engineer the environmental conditions that allow science to thrive. 
                   <strong className="text-gray-900 font-medium"> World-class stability chambers</strong> and 
                   <strong className="text-gray-900 font-medium"> laboratory instruments</strong> for the pharmaceutical industry.
                </p>
             </div>

             <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 text-right leading-tight">
                     Discover<br/>Aureole
                  </span>
                </div>
                <a 
                   href="#products"
                   className="group relative inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-gray-100 bg-white hover:border-aureole hover:bg-aureole transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(15,133,197,0.3)] hover:-translate-y-2 active:scale-90"
                >
                   <ArrowRight className="w-6 h-6 md:w-10 md:h-10 text-gray-900 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </a>
             </div>

          </div>

        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-1000 z-30 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
         <span className="text-[9px] uppercase tracking-[0.3em] font-black text-aureole">Scroll</span>
         <div className="w-px h-16 bg-aureole/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-aureole animate-drop"></div>
         </div>
      </div>

    </section>
  );
};

export default Hero;