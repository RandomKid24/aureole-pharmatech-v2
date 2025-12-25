import React, { useState, useEffect } from 'react';
import { PRODUCT_STANDARDS, PRODUCT_CATALOG } from '../constants';
import { Shield, FileCheck, CheckCircle2 } from 'lucide-react';

const Products: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-[#0F172A] w-full overflow-x-hidden min-h-screen">
      
      {/* ========================================================
          HERO SECTION (Synced with Home)
         ======================================================== */}
      <section className="relative w-full flex flex-col bg-[#0F172A] overflow-hidden pt-32 md:pt-48 pb-12">
         
         {/* Background Elements */}
         <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-white/5 z-0"></div>
         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
              style={{ backgroundImage: 'radial-gradient(#FFF 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
         </div>
         <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
            <span className="text-[40vw] font-black text-white/5 leading-none">P</span>
         </div>

         <div className="container mx-auto px-6 md:px-24 relative z-10">
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
                  <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-white select-none uppercase flex flex-col">
                     <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        OUR
                     </span>
                     <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        PRODUCTS
                     </span>
                  </h1>
               </div>
               
               <div className="mt-12 md:mt-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/10 pt-12">
                  <div className={`lg:col-span-8 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl">
                       Engineered to international standards and regulatory requirements, ensuring the highest standards of <span className="text-white font-medium">quality</span> and <span className="text-aureole font-medium">regulatory compliance.</span>
                     </p>
                  </div>

                  <div className={`lg:col-span-4 flex items-center justify-end gap-12 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-4xl md:text-5xl font-black mb-1 text-white">100%</div>
                       <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Compliant & Certified</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ========================================================
          COMPLIANCE STANDARDS
         ======================================================== */}
      <section className="bg-black/40 py-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_STANDARDS.map((std, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg text-aureole group-hover:bg-aureole group-hover:text-white transition-all duration-300">
                {idx === 0 && <FileCheck size={24} />}
                {idx === 1 && <Shield size={24} />}
                {idx === 2 && <CheckCircle2 size={24} />}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">{std.title}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{std.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          PRODUCT GRID (Themed as per image)
         ======================================================== */}
      <div className="py-16 md:py-24 px-6 md:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PRODUCT_CATALOG.map((category) => (
            <div key={category.id} className="bg-[#1E293B]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col shadow-2xl">
              
              {/* Category Header */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl font-light">
                  {category.description}
                </p>
              </div>

              {/* Sub-categories Grid */}
              <div className="flex-grow space-y-10">
                {category.groups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 bg-aureole rounded-full"></div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {group.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item, iIdx) => (
                        <div 
                          key={iIdx} 
                          className="px-4 py-2 rounded-full border border-aureole/30 text-[11px] md:text-xs font-medium text-aureole hover:bg-aureole hover:text-white transition-all duration-300 cursor-default select-none hover:shadow-[0_0_15px_rgba(15,133,197,0.3)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Explore Button */}
              <div className="mt-12">
                <button className="w-full py-4 border border-aureole/40 rounded-xl text-aureole text-sm font-black uppercase tracking-[0.2em] hover:bg-aureole hover:text-white transition-all duration-500 shadow-lg shadow-black/20">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
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