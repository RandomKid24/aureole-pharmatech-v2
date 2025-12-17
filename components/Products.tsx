import React, { useState, useEffect } from 'react';
import { PRODUCT_STANDARDS, PRODUCT_CATALOG } from '../constants';
import { Shield, FileCheck, CheckCircle2, ChevronRight, Hexagon } from 'lucide-react';

const Products: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-start max-w-full md:max-w-[95vw]">
               
               <div className={`mb-4 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-[#F8F9FA]/50 backdrop-blur-sm pr-2">
                     Catalog 2024
                  </span>
               </div>
               
               <h1 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full uppercase">
                  <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                     Our
                  </span>
                  <span className={`block text-aureole transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                     Products
                  </span>
               </h1>
               
               <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-gray-200 pt-8 md:pt-12 bg-[#F8F9FA]/80 backdrop-blur-sm pl-0">
                  <div className={`max-w-2xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                       Engineered to international standards and regulatory requirements. Ensuring the highest standards of quality and regulatory compliance.
                     </p>
                  </div>

                  <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">100%</div>
                       <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Compliant</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* ========================================================
          STANDARDS SECTION
         ======================================================== */}
      <section className="bg-black text-white py-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_STANDARDS.map((std, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-aureole transition-colors duration-300">
                {idx === 0 && <FileCheck size={32} />}
                {idx === 1 && <Shield size={32} />}
                {idx === 2 && <CheckCircle2 size={32} />}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-1 text-white">{std.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{std.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          PRODUCT CATEGORIES
         ======================================================== */}
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
                  <div className="h-1 w-24 bg-aureole mt-6"></div>
                </div>
                <div className="md:w-2/3">
                   <p className="text-gray-600 leading-relaxed text-lg">
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
                  <div key={gIdx} className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full rounded-sm">
                    <div className="mb-6 flex items-center gap-3 text-aureole">
                      <Hexagon size={20} fill="currentColor" className="opacity-20" />
                      <h3 className="font-bold uppercase tracking-widest text-sm text-gray-900">{group.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 flex-grow">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 bg-gray-300 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 mt-6 border-t border-gray-50">
                       <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aureole hover:text-gray-900 transition-colors">
                          View Specs <ChevronRight size={14} />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Products;