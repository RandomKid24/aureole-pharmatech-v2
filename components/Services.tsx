import React, { useState, useEffect } from 'react';
import { SERVICE_INTRO, SERVICE_FEATURES, SERVICE_LOCATIONS } from '../constants';
import { Award, Headphones, Factory, Layers, Lightbulb, Globe, Users, Leaf, ArrowRight, MapPin } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Award, Headphones, Factory, Layers, Lightbulb, Globe, Users, Leaf
};

const Services: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-surface w-full overflow-x-hidden">
      
      {/* ========================================================
          HERO SECTION (Synced with Home)
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
         
         {/* Background Elements */}
         <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>
         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
              style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
         </div>
         <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
            <span className="text-[40vw] font-black text-gray-900/5 leading-none">S</span>
         </div>

         <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
            <div className="flex flex-col items-start w-full">
               
               <div className={`mb-6 md:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-4">
                     <span className="w-12 h-px bg-aureole"></span>
                     <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                        Global Support Network
                     </span>
                  </div>
               </div>
               
               <div className="relative w-full">
                  <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                     <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        GLOBAL
                     </span>
                     <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        SERVICES
                     </span>
                  </h1>
               </div>
               
               <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
                  <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-3xl">
                       {SERVICE_INTRO.subtitle} Our commitment to <span className="text-gray-900 font-medium">customer excellence</span> ensures your operations remain uninterrupted.
                     </p>
                  </div>

                  <div className="hidden lg:block lg:col-span-1"></div>

                  <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-4xl md:text-6xl font-black mb-1 text-gray-900">24/7</div>
                       <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Uninterrupted Support</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Brand Indicator */}
         <div className={`absolute bottom-10 left-6 md:left-24 flex items-center gap-6 transition-opacity duration-1000 delay-1000 z-30 origin-left -rotate-90 md:rotate-0 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-aureole whitespace-nowrap">Global Assistance</span>
            <div className="w-24 h-px bg-aureole/20 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-1/2 bg-aureole animate-[marquee_2s_linear_infinite]"></div>
            </div>
         </div>
      </section>

      {/* ========================================================
          CORE CAPABILITIES MATRIX
         ======================================================== */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-10 md:mb-16 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div>
               <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                 Core <span className="text-aureole">Capabilities</span>
               </h2>
             </div>
             <div className="hidden md:block text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Excellence in every detail</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 bg-white shadow-sm overflow-hidden">
            {SERVICE_FEATURES.map((feature, idx) => {
               const Icon = iconMap[feature.icon] || Award;
               return (
                 <div key={idx} className="group relative p-8 md:p-10 border-r border-b border-gray-200 hover:bg-surface transition-colors duration-500 min-h-[auto] md:min-h-[340px] flex flex-col justify-between overflow-hidden">
                    {/* Hover Top Border Accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-aureole transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                    
                    <div className="relative z-10 flex justify-between items-start mb-6">
                       <div className="p-3 bg-gray-50 text-aureole rounded-sm group-hover:bg-aureole group-hover:text-white transition-colors duration-500">
                          <Icon size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
                       </div>
                       <span className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 select-none">
                          0{idx + 1}
                       </span>
                    </div>

                    <div className="relative z-10">
                       <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-tight mb-3 group-hover:text-aureole transition-colors duration-500">
                          {feature.title}
                       </h3>
                       <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-500">
                          {feature.description}
                       </p>
                    </div>

                    <div className="mt-8 md:mt-0 flex md:absolute md:bottom-6 md:right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
                       <ArrowRight className="text-aureole md:w-6 md:h-6" />
                    </div>
                 </div>
               )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE LOCATIONS
         ======================================================== */}
      <section className="bg-black text-white py-16 md:py-24 px-5 md:px-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0F85C5_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
               <div className="w-full">
                  <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] tracking-widest uppercase text-aureole mb-4 font-bold">
                     Network
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                     Service <span className="text-aureole">Centers</span>
                  </h2>
               </div>
               <p className="text-gray-400 max-w-md border-l-2 border-aureole pl-5 md:pl-6 leading-relaxed text-sm md:text-base">
                  Strategically located across key industrial hubs to ensure rapid response and localized support for all our clients.
               </p>
            </div>

            {/* Grid optimized for 2 columns on mobile to improve scannability */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
               {SERVICE_LOCATIONS.map((loc, idx) => (
                  <div key={idx} className="group cursor-default flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 hover:border-aureole/30 hover:bg-white/10 transition-all duration-300">
                     <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-aureole transition-colors duration-300">
                        <MapPin size={16} className="text-gray-400 md:w-[18px] md:h-[18px] group-hover:text-white transition-colors duration-300" />
                     </div>
                     <div className="min-w-0">
                        <h3 className="text-xs md:text-lg font-bold text-white tracking-tight truncate">
                            {loc.city}
                        </h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </div>
  );
};

export default Services;