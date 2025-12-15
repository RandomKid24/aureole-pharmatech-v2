import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
      
      {/* ========================================================
          ANIMATED BACKGROUND
         ======================================================== */}
      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
          100% { transform: translate(0, 0); }
        }
        .animate-drift {
          animation: drift 20s infinite ease-in-out;
        }
      `}</style>

      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* Dynamic Gradient Blobs */}
        <div className="absolute -top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-aureole/5 rounded-full blur-[100px] animate-drift"></div>
        <div className="absolute top-[20%] -left-[10%] w-[30vw] h-[30vw] bg-blue-300/10 rounded-full blur-[80px] animate-drift" style={{ animationDelay: '5s', animationDirection: 'reverse' }}></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-aureole/5 rounded-full blur-[120px] animate-drift" style={{ animationDelay: '10s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* =======================
            MAIN TYPOGRAPHY
           ======================= */}
        <div className="flex flex-col items-start max-w-[95vw]">
          
          {/* Top Label */}
          <div className={`mb-4 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-white/50 backdrop-blur-sm pr-2">
                Est. 1996 • Global Leader
             </span>
          </div>

          {/* Massive Text Block */}
          <h1 className="text-[13vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full mix-blend-multiply">
             <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
               PRECISION
             </span>
             <span className={`block text-aureole transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
               MATTERS
             </span>
          </h1>

          {/* Description & CTA */}
          <div className="mt-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-gray-200/60 pt-12">
             
             <div className={`max-w-2xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                   We engineer the environmental conditions that allow science to thrive. 
                   <strong className="text-gray-900 font-medium"> World-class stability chambers</strong> and 
                   <strong className="text-gray-900 font-medium"> laboratory instruments</strong> for the pharmaceutical industry.
                </p>
             </div>

             <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 text-right">
                     Discover<br/>Collection
                  </span>
                </div>
                <a 
                   href="#products"
                   className="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-200 bg-white hover:border-aureole hover:bg-aureole transition-all duration-300 shadow-sm"
                >
                   <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-gray-900 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </a>
             </div>

          </div>

        </div>
      </div>

      {/* =======================
          SCROLL INDICATOR
         ======================= */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
         <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
         <div className="w-px h-16 bg-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-aureole animate-[drop_2s_infinite]"></div>
         </div>
      </div>

    </section>
  );
};

export default Hero;