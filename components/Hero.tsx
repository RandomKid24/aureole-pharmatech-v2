import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
      
      {/* ========================================================
          BACKGROUND ELEMENTS (Space Filling)
         ======================================================== */}
      {/* Vertical Spine */}
      <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Large Watermark */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
         <span className="text-[40vw] font-black text-gray-900/5 leading-none">A</span>
      </div>

      <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
        
        <div className="flex flex-col items-start w-full">
          
          {/* Top Label with Animation */}
          <div className={`mb-6 md:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-aureole"></span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                   Innovation Excellence • Since 1996
                </span>
             </div>
          </div>

          {/* Main Headline - Massive Scale */}
          <div className="relative w-full">
            <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
               <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                 PRECISION
               </span>
               <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                 MATTERS
               </span>
            </h1>
          </div>

          {/* Bottom Content Area - Distributed space */}
          <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
             
             {/* Description - Spanning left-center */}
             <div className={`lg:col-span-6 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-2xl">
                   Engineering environmental conditions that empower scientific discovery through <span className="text-gray-900 font-medium">uncompromising quality</span> and <span className="text-gray-900 font-medium">regulatory mastery.</span>
                </p>
                
                <div className="flex gap-12 mt-10">
                   <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900">28+</span>
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Years Industry Leadership</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900">500+</span>
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Global Clients</span>
                   </div>
                </div>
             </div>

             {/* Spacer for layout rhythm */}
             <div className="hidden lg:block lg:col-span-2"></div>

             {/* Action / CTA - Pushed to the right */}
             <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-8 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Explore Our Capability</span>
                  <p className="text-xs text-gray-400 leading-tight">View our 2024 Stability Series<br/>and Lab Instrumentation.</p>
                </div>
                
                <a 
                   href="#products"
                   className="group relative inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gray-100 bg-white hover:border-aureole hover:bg-aureole transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(15,133,197,0.3)] hover:-translate-y-3 active:scale-95"
                >
                   <div className="absolute inset-0 rounded-full border border-aureole opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                   <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-900 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </a>
             </div>

          </div>

        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className={`absolute bottom-10 left-6 md:left-24 flex items-center gap-6 transition-opacity duration-1000 delay-1000 z-30 origin-left -rotate-90 md:rotate-0 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
         <span className="text-[9px] uppercase tracking-[0.5em] font-black text-aureole whitespace-nowrap">Scroll Discovery</span>
         <div className="w-24 h-px bg-aureole/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-aureole animate-[marquee_2s_linear_infinite]"></div>
         </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />

    </section>
  );
};

export default Hero;