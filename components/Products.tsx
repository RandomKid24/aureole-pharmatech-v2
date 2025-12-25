import React, { useState, useEffect } from 'react';
import { PRODUCT_STANDARDS, PRODUCT_CATALOG } from '../constants';
import { Shield, FileCheck, CheckCircle2, ChevronRight, Hexagon } from 'lucide-react';

const Products: React.FC = () => {
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
            <span className="text-[40vw] font-black text-gray-900/5 leading-none">P</span>
         </div>

         <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
            <div className="flex flex-col items-start w-full">
               
               <div className={`mb-6 md:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-4">
                     <span className="w-12 h-px bg-aureole"></span>
                     <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                        Full Catalog • 2024 Edition
                     </span>
                  </div>
               </div>
               
               <div className="relative w-full">
                  <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                     <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        OUR
                     </span>
                     <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        PRODUCTS
                     </span>
                  </h1>
               </div>
               
               <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
                  <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-3xl">
                       Engineered to international standards and regulatory requirements, ensuring the highest standards of <span className="text-gray-900 font-medium">quality</span> and <span className="text-gray-900 font-medium">regulatory compliance.</span>
                     </p>
                  </div>

                  <div className="hidden lg:block lg:col-span-1"></div>

                  <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-4xl md:text-6xl font-black mb-1 text-gray-900">100%</div>
                       <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Compliant & Certified</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Brand Indicator */}
         <div className={`absolute bottom-10 left-6 md:left-24 flex items-center gap-6 transition-opacity duration-1000 delay-1000 z-30 origin-left -rotate-90 md:rotate-0 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-aureole whitespace-nowrap">Explore Engineering</span>
            <div className="w-24 h-px bg-aureole/20 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-1/2 bg-aureole animate-[marquee_2s_linear_infinite]"></div>
            </div>
         </div>
      </section>

      <section className="bg-black text-white py-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_STANDARDS.map((std, idx) => (
            <div key={idx} className="flex items-start gap-6 group cursor-default">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-aureole transition-all duration-500 transform group-hover:-translate-y-1">
                {idx === 0 && <FileCheck size={32} />}
                {idx === 1 && <Shield size={32} />}
                {idx === 2 && <CheckCircle2 size={32} />}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-1 text-white group-hover:text-aureole transition-colors">{std.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{std.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-surface">
        {PRODUCT_CATALOG.map((category, index) => (
          <section key={category.id} className="py-24 px-6 md:px-24 border-b border-gray-200 last:border-0 relative">
            <div className="absolute top-10 left-6 md:left-24 text-9xl font-black text-gray-200/50 pointer-events-none select-none">
              0{index + 1}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row gap-12 mb-16 pt-12">
                <div className="md:w-1/3">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase leading-none">
                    {category.title}
                  </h2>
                  <div className="h-1.5 w-24 bg-aureole mt-6 transition-all duration-700 group-hover:w-32"></div>
                </div>
                <div className="md:w-2/3">
                   <p className="text-gray-600 leading-relaxed text-lg font-light">
                     {category.description}
                   </p>
                </div>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                category.groups.length === 5 
                  ? 'lg:grid-cols-3 xl:grid-cols-5' 
                  : 'lg:grid-cols-4'
              }`}>
                {category.groups.map((group, gIdx) => (
                  <div key={gIdx} className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-aureole/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full rounded-xl group/card">
                    <div className="mb-6 flex items-center gap-3 text-aureole">
                      <Hexagon size={22} fill="currentColor" className="opacity-20 transition-transform duration-700 group-hover/card:rotate-90" />
                      <h3 className="font-bold uppercase tracking-widest text-xs text-gray-900 group-hover/card:text-aureole transition-colors">{group.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 flex-grow">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-sm text-gray-500 flex items-start gap-2 leading-relaxed transition-colors group-hover/card:text-gray-700">
                          <span className="mt-2 w-1.5 h-1.5 bg-gray-200 rounded-full flex-shrink-0 transition-all group-hover/card:bg-aureole group-hover/card:scale-125"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 mt-6 border-t border-gray-100">
                       <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-aureole hover:text-gray-900 transition-all duration-300 group/btn">
                          View Specifications 
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </div>
  );
};

export default Products;