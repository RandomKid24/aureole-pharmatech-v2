import React, { useState, useEffect } from 'react';
import { Shield, FileCheck, CheckCircle2, ChevronRight, Hexagon, X, ArrowRight, Table as TableIcon, Mail, Info, PlusCircle, Search, FileText } from 'lucide-react';
import { PRODUCT_STANDARDS, PRODUCT_CATALOG, DETAILED_PRODUCTS } from '../constants';
import { ProductDetail } from '../types';

const Products: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openDetail = (productName: string) => {
    const detail = DETAILED_PRODUCTS[productName];
    if (detail) {
      setSelectedProduct(detail);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDetail = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-surface w-full overflow-x-hidden">
      
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
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
                     <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        PRODUCTS
                     </span>
                  </h1>
               </div>
               
               <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
                  <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-3xl">
                       Engineered to international standards, ensuring the highest <span className="text-gray-900 font-medium">quality</span> and <span className="text-gray-900 font-medium">regulatory compliance.</span>
                     </p>
                     
                     {/* Guidance for non-technical users */}
                     <div className="mt-8 flex items-center gap-4 text-xs font-bold text-aureole uppercase tracking-widest bg-aureole/5 px-6 py-4 rounded-xl border border-aureole/10 inline-flex">
                        <Info size={16} />
                        Click any model below to view full technical datasheets
                     </div>
                  </div>

                  <div className="hidden lg:block lg:col-span-1"></div>

                  <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-4xl md:text-6xl font-black mb-1 text-gray-900">100%</div>
                       <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Compliant & Certified</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className={`absolute bottom-10 left-6 md:left-24 flex items-center gap-6 transition-opacity duration-1000 delay-1000 z-30 origin-left -rotate-90 md:rotate-0 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-aureole whitespace-nowrap">Explore Engineering</span>
            <div className="w-24 h-px bg-aureole/20 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-1/2 bg-aureole animate-[marquee_2s_linear_infinite]"></div>
            </div>
         </div>
      </section>

      {/* Compliance Bar */}
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

      {/* Product Catalog Groups */}
      <div className="bg-surface">
        {PRODUCT_CATALOG.map((category, index) => (
          <section key={category.id} className="py-24 px-6 md:px-24 border-b border-gray-200 last:border-0 relative overflow-hidden">
            <div className="absolute top-10 left-6 md:left-24 text-[12vw] font-black text-gray-100 pointer-events-none select-none opacity-50">
              0{index + 1}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row gap-12 mb-16 pt-12">
                <div className="md:w-1/3">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase leading-none">
                    {category.title}
                  </h2>
                  <div className="h-1.5 w-24 bg-aureole mt-6 transition-all duration-700"></div>
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
                  <div key={gIdx} className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-aureole/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full rounded-2xl group/card relative overflow-hidden">
                    
                    {/* Visual hint that this card contains deep info */}
                    <div className="absolute top-4 right-4 text-gray-100 group-hover/card:text-aureole/20 transition-colors duration-500">
                      <FileText size={40} strokeWidth={1} />
                    </div>

                    <div className="mb-6 flex items-center gap-3 text-aureole relative z-10">
                      <Hexagon size={22} fill="currentColor" className="opacity-20 transition-transform duration-700 group-hover/card:rotate-90" />
                      <h3 className="font-bold uppercase tracking-widest text-xs text-gray-900 group-hover/card:text-aureole transition-colors">{group.title}</h3>
                    </div>
                    
                    <ul className="space-y-4 flex-grow relative z-10">
                      {group.items.map((item, iIdx) => {
                        const hasDetail = !!DETAILED_PRODUCTS[item];
                        return (
                          <li key={iIdx} className="group/item">
                            <button 
                              onClick={() => openDetail(item)}
                              className={`w-full group text-sm flex items-center justify-between p-3 -m-3 rounded-xl transition-all duration-300 ${hasDetail ? 'hover:bg-gray-50' : 'cursor-default'}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${hasDetail ? 'bg-aureole group-hover/item:scale-150' : 'bg-gray-200'}`}></span>
                                <span className={`text-left leading-snug transition-all ${hasDetail ? 'text-gray-700 font-medium group-hover/item:text-aureole' : 'text-gray-400'}`}>
                                  {item}
                                </span>
                              </div>
                              
                              {hasDetail && (
                                <div className="opacity-0 group-hover/item:opacity-100 transition-all transform translate-x-2 group-hover/item:translate-x-0">
                                  <div className="text-[9px] font-black text-aureole uppercase tracking-widest flex items-center gap-1">
                                    Specs <ChevronRight size={10} />
                                  </div>
                                </div>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    
                    <div className="pt-8 mt-8 border-t border-gray-50 flex items-center justify-between relative z-10">
                       <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                          {group.items.length} Models
                       </span>
                       <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-aureole hover:text-gray-900 transition-all duration-300 group/btn">
                          Explore Series
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ========================================================
          TECHNICAL DATA OVERLAY
         ======================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-12 lg:p-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-500" 
            onClick={closeDetail}
          ></div>
          
          <div className="relative w-full max-w-7xl h-[90vh] md:h-full bg-white md:rounded-3xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-20 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
            
            <div className="flex items-center justify-between p-6 md:p-10 border-b border-gray-100 bg-white md:rounded-t-3xl sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="px-2 py-0.5 bg-aureole/10 rounded text-[9px] font-black text-aureole uppercase tracking-widest">Technical Data</div>
                  <span className="text-gray-300 text-[10px]">•</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">2024 Build</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">{selectedProduct.name}</h2>
              </div>
              <button 
                onClick={closeDetail}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-90 shadow-sm"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto scrollbar-hide p-6 md:p-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                  
                  <div className="lg:col-span-4 space-y-12">
                     <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Info size={14} className="text-aureole" />
                           Product Description
                        </h4>
                        <p className="text-gray-600 leading-relaxed font-light text-sm">{selectedProduct.description}</p>
                     </div>

                     <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Performance Ranges</h4>
                        <div className="space-y-4">
                           {selectedProduct.specifications.map((spec, sIdx) => (
                              <div key={sIdx} className="flex justify-between items-start border-b border-gray-50 pb-2 gap-4 group">
                                 <span className="text-xs text-gray-400 uppercase tracking-wider shrink-0 mt-1 transition-colors group-hover:text-gray-900">{spec.label}</span>
                                 <span className="text-sm font-bold text-gray-900 text-right">{spec.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {selectedProduct.regularAttributes && (
                       <div>
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Core Design Attributes</h4>
                          <ul className="grid grid-cols-1 gap-3">
                             {selectedProduct.regularAttributes.map((attr, aIdx) => (
                                <li key={aIdx} className="flex items-center gap-3 text-sm text-gray-600 p-3 bg-white border border-gray-50 rounded-lg shadow-sm">
                                   <div className="w-1.5 h-1.5 rounded-full bg-aureole"></div>
                                   {attr}
                                </li>
                             ))}
                          </ul>
                       </div>
                     )}

                     <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Compliance Mastery</h4>
                        <div className="flex flex-wrap gap-2">
                           {selectedProduct.compliance.map((c, cIdx) => (
                              <span key={cIdx} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                                 {c}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-8 space-y-16">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                           <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                              <Hexagon size={14} className="text-aureole" />
                              Key Features
                           </h4>
                           <div className="space-y-3">
                              {selectedProduct.mainFeatures.map((f, fIdx) => (
                                 <div key={fIdx} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-aureole/30 transition-all duration-300">
                                    <div className="p-1 bg-aureole/5 rounded text-aureole">
                                      <CheckCircle2 size={18} />
                                    </div>
                                    <span className="text-sm text-gray-700 leading-snug">{f}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {selectedProduct.addOnsAttributes && (
                          <div>
                             <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                                <PlusCircle size={14} className="text-aureole" />
                                Add-on Enhancements
                             </h4>
                             <div className="space-y-3">
                                {selectedProduct.addOnsAttributes.map((attr, aIdx) => (
                                   <div key={aIdx} className="flex items-start gap-4 p-5 bg-aureole/5 rounded-2xl border border-aureole/10 hover:bg-white hover:border-aureole/30 transition-all duration-300">
                                      <div className="w-2 h-2 rounded-full bg-aureole mt-1.5 flex-shrink-0"></div>
                                      <span className="text-sm text-gray-700 leading-snug font-medium">{attr}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                        )}
                     </div>

                     {selectedProduct.tables?.map((table, tIdx) => (
                        <div key={tIdx} className="animate-in slide-in-from-bottom-4 duration-1000">
                           <div className="flex items-center justify-between mb-8">
                             <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <TableIcon size={14} className="text-aureole" />
                                {table.title}
                             </h4>
                             <div className="text-[9px] font-black text-aureole uppercase tracking-widest px-3 py-1 border border-aureole/20 rounded">
                               Verified Specifications
                             </div>
                           </div>
                           <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-xl bg-white">
                              <table className="w-full text-left border-collapse min-w-[800px]">
                                 <thead>
                                    <tr className="bg-gray-50/50">
                                       {table.headers.map((h, hIdx) => (
                                          <th key={hIdx} className="px-8 py-6 text-[10px] font-black text-gray-900 uppercase tracking-widest border-b border-gray-100">
                                             {h}
                                          </th>
                                       ))}
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {table.rows.map((row, rIdx) => (
                                       <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors">
                                          {row.map((cell, cIdx) => (
                                             <td key={cIdx} className="px-8 py-5 text-xs font-semibold text-gray-600 border-b border-gray-50 last:border-b-0">
                                                {cell}
                                             </td>
                                          ))}
                                       </tr>
                                    ))}
                                 </tbody>
                              </table>
                           </div>
                           <div className="mt-6 flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                             <Info size={16} className="text-gray-400" />
                             <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                                Note: Custom sizing (V**) is available upon request to meet your facility's unique spatial constraints.
                             </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="p-6 md:p-10 bg-gray-50 border-t border-gray-100 md:rounded-b-3xl flex flex-col md:flex-row items-center justify-between gap-8 sticky bottom-0 z-20">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-aureole border border-gray-100">
                     <Mail size={28} />
                  </div>
                  <div className="text-left">
                     <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Direct Engineering Contact</p>
                     <p className="text-lg font-black text-gray-900 leading-none">enquiry@aureolepharmatech.com</p>
                  </div>
               </div>
               
               <div className="flex gap-4 w-full md:w-auto">
                 <button 
                   onClick={() => window.print()} 
                   className="hidden md:flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-full font-black text-[10px] uppercase tracking-widest text-gray-900 hover:bg-gray-100 transition-all active:scale-95"
                 >
                   Print Sheet
                 </button>
                 <a 
                   href={`mailto:enquiry@aureolepharmatech.com?subject=Technical Inquiry: ${selectedProduct.name}`}
                   className="flex-grow md:flex-none px-12 py-5 bg-aureole text-white rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-sky-600 transition-all shadow-2xl shadow-aureole/30 group/ctabtn active:scale-95"
                 >
                   Request Official Quote
                   <ArrowRight size={20} className="group-hover/ctabtn:translate-x-1 transition-transform" />
                 </a>
               </div>
            </div>

          </div>
        </div>
      )}

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