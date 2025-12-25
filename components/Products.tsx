import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Table as TableIcon, 
  Settings, 
  ChevronLeft, 
  Monitor,
  Eye,
  ShieldCheck,
  Award,
  FileCheck,
  ArrowRight,
  Boxes,
  FlaskConical,
  Wrench,
  ChevronRight,
  Target,
  PlusCircle,
  Layout,
  Layers
} from 'lucide-react';
import { PRODUCT_CATALOG, DETAILED_PRODUCTS } from '../constants';
import { ProductDetail, TechnicalTable } from '../types';

const Products: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [viewState, setViewState] = useState<'overview' | 'category' | 'product'>('overview');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [viewMode, setViewMode] = useState<'classic' | 'industrial'>('classic');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleExploreCategory = (catId: string) => {
    setActiveCategoryId(catId);
    setViewState('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (productName: string) => {
    const detail = DETAILED_PRODUCTS[productName];
    if (detail) {
      setSelectedProduct(detail);
      setViewState('product');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToCatalog = () => {
    setViewState('overview');
    setActiveCategoryId(null);
    setSelectedProduct(null);
  };

  const handleBackToCategory = () => {
    setViewState('category');
    setSelectedProduct(null);
  };

  const activeCategory = PRODUCT_CATALOG.find(c => c.id === activeCategoryId);
  const isDark = viewMode === 'industrial' && viewState === 'product';

  const renderTable = (table: TechnicalTable, isDark: boolean) => {
    const hasDimensions = table.headers.some(h => h.includes("DIMENSION"));
    const borderColor = isDark ? 'border-gray-700/50' : 'border-gray-200';
    const bgColor = isDark ? 'bg-[#1F2937]/30' : 'bg-white';
    
    return (
      <div className={`overflow-x-auto border rounded-2xl shadow-sm ${bgColor} ${borderColor}`}>
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className={isDark ? 'bg-[#242F3F]' : 'bg-gray-50/50'}>
              {table.headers.map((h, hIdx) => {
                let colSpan = 1;
                if (h.includes("DIMENSION")) colSpan = 3;
                return (
                  <th 
                    key={hIdx} 
                    colSpan={colSpan}
                    className={`px-6 py-5 text-[10px] font-black uppercase tracking-widest border-b ${
                      isDark ? 'text-gray-400 border-gray-700/50' : 'text-gray-500 border-gray-100'
                    } ${colSpan > 1 ? 'text-center' : ''}`}
                  >
                    {h}
                  </th>
                );
              })}
            </tr>
            {hasDimensions && (
              <tr className={isDark ? 'bg-[#242F3F]' : 'bg-gray-50/30'}>
                {table.headers.map((h, hIdx) => {
                  if (h === "MODEL" || h === "ZONE" || h === "CAPACITY (L)" || h === "NO OF TRAYS" || h === "TRAYS" || h === "POWER SUPPLY") {
                    return <th key={hIdx} className={`px-6 py-2 border-b ${isDark ? 'border-gray-700/50' : 'border-gray-100'}`}></th>;
                  }
                  if (h.includes("DIMENSION")) {
                    return (
                      <React.Fragment key={hIdx}>
                        <th className={`px-6 py-2 text-[9px] font-bold uppercase tracking-widest border-b ${isDark ? 'text-gray-500 border-gray-700/50' : 'text-gray-400 border-gray-100'}`}>Width</th>
                        <th className={`px-6 py-2 text-[9px] font-bold uppercase tracking-widest border-b ${isDark ? 'text-gray-500 border-gray-700/50' : 'text-gray-400 border-gray-100'}`}>Depth</th>
                        <th className={`px-6 py-2 text-[9px] font-bold uppercase tracking-widest border-b ${isDark ? 'text-gray-500 border-gray-700/50' : 'text-gray-400 border-gray-100'}`}>Height</th>
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </tr>
            )}
          </thead>
          <tbody className={`divide-y ${isDark ? 'divide-gray-700/30' : 'divide-gray-100'}`}>
            {table.rows.map((row, rIdx) => (
              <tr key={rIdx} className={`transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className={`px-6 py-5 text-xs font-medium ${
                    cIdx === 0 && cell !== "" 
                      ? (isDark ? 'text-white font-bold' : 'text-gray-900 font-bold') 
                      : (isDark ? 'text-gray-400' : 'text-gray-500')
                  }`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={`w-full min-h-screen transition-colors duration-700 ${isDark ? 'bg-[#0F172A] text-white' : 'bg-surface text-gray-900'}`}>
      
      {/* BACKGROUND ELEMENTS (Shared Style) */}
      {!isDark && viewState === 'overview' && (
        <>
          <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50 pointer-events-none"></div>
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
               style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
          </div>
          <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
             <span className="text-[40vw] font-black text-gray-900/5 leading-none uppercase">P</span>
          </div>
        </>
      )}

      <main className="relative z-10 transition-all duration-700">
        
        {/* ========================================================
            STATE: OVERVIEW (BIG HERO + VENTURES STYLE LIST)
           ======================================================== */}
        {viewState === 'overview' && (
          <>
            <section className="relative w-full min-h-screen flex flex-col pt-32 md:pt-48 pb-20">
              <div className="container mx-auto px-6 md:px-24 flex-grow flex flex-col justify-start">
                <div className="flex flex-col items-start w-full">
                  <div className={`mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="flex items-center gap-4">
                        <span className="w-12 h-px bg-aureole"></span>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                           Engineering Precision
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
                           Discover our comprehensive ecosystem of pharmaceutical equipment, engineered for <span className="text-gray-900 font-medium">precision</span>, <span className="text-gray-900 font-medium">reliability</span>, and <span className="text-gray-900 font-medium">unyielding compliance.</span>
                        </p>
                     </div>
                     <div className="hidden lg:block lg:col-span-1"></div>
                     <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="text-right">
                          <div className="text-4xl md:text-6xl font-black mb-1 text-gray-900">03</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Main Categories</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Catalog List (Ventures Inspired) */}
            <section className="bg-white py-32 px-6 md:px-24 rounded-t-[4rem] relative z-20 -mt-10">
               <div className="max-w-7xl mx-auto">
                  <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-gray-100 pb-12">
                     <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-gray-900 leading-[0.85]">
                       The <span className="text-aureole">Catalog</span>
                     </h2>
                     <p className="text-gray-400 font-medium max-w-sm text-right">
                        Explore our categorized instrumentation from large-scale walk-ins to laboratory table-top solutions.
                     </p>
                  </header>

                  <div className="space-y-6">
                    {PRODUCT_CATALOG.map((cat, index) => (
                      <div 
                        key={index} 
                        onClick={() => handleExploreCategory(cat.id)}
                        className="group relative bg-surface p-12 rounded-[2.5rem] border border-transparent hover:border-aureole hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                      >
                         <div className="absolute top-0 right-0 w-32 h-full bg-aureole translate-x-full group-hover:translate-x-0 transition-transform duration-700 opacity-[0.03]"></div>
                         <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            <div className="text-5xl md:text-7xl font-black text-gray-200 group-hover:text-aureole transition-colors duration-500 min-w-[160px] select-none">
                               0{index + 1}
                            </div>
                            <div className="flex-grow">
                               <div className="flex items-center gap-3 mb-2">
                                  {index === 0 ? <FlaskConical size={20} className="text-aureole" /> : index === 1 ? <Boxes size={20} className="text-aureole" /> : <Wrench size={20} className="text-aureole" />}
                                  <span className="text-[10px] font-black uppercase tracking-widest text-aureole">Engineering Unit</span>
                               </div>
                               <h3 className="text-2xl md:text-4xl font-black uppercase text-gray-900 mb-4 group-hover:text-aureole transition-colors">{cat.title}</h3>
                               <p className="text-gray-500 leading-relaxed text-lg font-light max-w-3xl">{cat.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                               <div className="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-aureole group-hover:border-aureole transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-aureole/30">
                                  <ArrowRight className="text-gray-300 group-hover:text-white" size={32} />
                               </div>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
            </section>
          </>
        )}

        {/* ========================================================
            STATE: CATEGORY & PRODUCT (INTERNAL PAGES)
           ======================================================== */}
        {(viewState === 'category' || viewState === 'product') && (
          <div className="container mx-auto px-6 md:px-24 pt-32 pb-24">
            
            {/* Nav Path */}
            <div className="mb-12 flex items-center flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <button onClick={handleBackToCatalog} className="hover:text-aureole transition-colors">Catalog</button>
              <ChevronRight size={14} className="opacity-30" />
              <button onClick={handleBackToCategory} className={`hover:text-aureole transition-colors ${viewState === 'category' ? 'text-aureole' : ''}`}>
                {activeCategory?.title}
              </button>
              {viewState === 'product' && (
                <>
                  <ChevronRight size={14} className="opacity-30" />
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedProduct?.name}</span>
                </>
              )}
            </div>

            {/* CATEGORY VIEW */}
            {viewState === 'category' && activeCategory && (
              <div className="space-y-24 animate-in fade-in slide-in-from-right-10 duration-700">
                <header className="max-w-4xl border-b border-gray-100 pb-12">
                   <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-[0.85]">
                     {activeCategory.title}
                   </h1>
                   <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
                     Select an instrument from the <span className="font-medium text-gray-900">{activeCategory.title.toLowerCase()}</span> series to view technical specifications.
                   </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                  {activeCategory.groups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-10">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-aureole/5 flex items-center justify-center text-aureole">
                           <Target size={24} />
                         </div>
                         <h3 className="text-xs font-black uppercase tracking-[0.4em] text-aureole">{group.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                         {group.items.map((item, iIdx) => (
                           <button 
                             key={iIdx}
                             onClick={() => handleProductSelect(item)}
                             className="w-full text-left flex items-center justify-between p-10 bg-white border border-gray-50 rounded-[2rem] hover:border-aureole hover:shadow-2xl hover:shadow-aureole/10 transition-all duration-300 group/item"
                           >
                             <div className="flex items-center gap-6">
                                <span className="text-gray-200 font-black text-xl select-none group-hover/item:text-aureole transition-colors">{iIdx + 1 < 10 ? `0${iIdx + 1}` : iIdx + 1}</span>
                                <span className="text-lg font-bold text-gray-700 group-hover/item:text-gray-900 transition-all">
                                  {item}
                                </span>
                             </div>
                             <ArrowRight size={20} className="text-gray-200 group-hover/item:text-aureole group-hover/item:translate-x-2 transition-all" />
                           </button>
                         ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCT VIEW */}
            {viewState === 'product' && selectedProduct && (
              <div className="space-y-16 animate-in zoom-in-95 fade-in duration-700">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                  <header className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-5 py-2 bg-aureole/10 text-aureole text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                        {selectedProduct.category}
                      </span>
                    </div>
                    <h1 className={`text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {selectedProduct.name}
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-3xl font-light ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {selectedProduct.description}
                    </p>
                  </header>

                  <button 
                    onClick={() => setViewMode(viewMode === 'classic' ? 'industrial' : 'classic')}
                    className={`group flex items-center gap-3 px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-2xl ${
                      isDark 
                        ? 'bg-white text-gray-900 hover:bg-aureole hover:text-white shadow-white/5' 
                        : 'bg-gray-900 text-white hover:bg-aureole shadow-gray-900/10'
                    }`}
                  >
                    {isDark ? <Eye size={16} /> : <Monitor size={16} />}
                    {isDark ? 'Classic Design' : 'Technical Dashboard'}
                  </button>
                </div>

                {/* Hero Product Visual & Pillar Specs */}
                <div className={`rounded-[3.5rem] border transition-all duration-700 overflow-hidden ${
                  isDark ? 'bg-[#1E293B]/60 border-gray-700/30 shadow-[0_50px_100px_rgba(0,0,0,0.5)]' : 'bg-white border-gray-100 shadow-xl'
                }`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className={`lg:col-span-5 p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r ${isDark ? 'border-gray-700/30 bg-[#334155]/20' : 'border-gray-50 bg-gray-50/20'}`}>
                      <img 
                        src={selectedProduct.imageUrl || "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1000&auto=format&fit=crop"} 
                        alt={selectedProduct.name} 
                        className="w-full max-w-sm h-auto object-contain mix-blend-multiply opacity-95 scale-110 hover:scale-125 transition-transform duration-[3s]" 
                      />
                    </div>
                    
                    <div className="lg:col-span-7 p-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-aureole mb-10 flex items-center gap-3">
                          <Layers size={18} /> Core Pillars
                        </h3>
                        <ul className="space-y-6">
                          {selectedProduct.mainFeatures.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <span className="w-2.5 h-2.5 rounded-full bg-aureole mt-1.5 shrink-0 shadow-lg shadow-aureole/30"></span>
                              <span className={`text-sm leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-aureole mb-10 flex items-center gap-3">
                          <Settings size={18} /> High Level Specs
                        </h3>
                        <div className="space-y-4">
                          {selectedProduct.specifications.map((spec, idx) => (
                            <div key={idx} className={`flex justify-between items-center py-3 border-b ${isDark ? 'border-gray-700/50' : 'border-gray-50'}`}>
                              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{spec.label}</span>
                              <span className={`text-xs font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ATTRIBUTES SECTION (IMPORTANT) */}
                {(selectedProduct.regularAttributes?.length || selectedProduct.addOnsAttributes?.length) && (
                  <div className="space-y-12 pt-8">
                    <div className="flex items-center gap-6">
                      <h3 className={`text-3xl font-black uppercase tracking-tight flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <Layout size={32} className="text-aureole" /> Configuration <span className="text-aureole">Suite</span>
                      </h3>
                      <div className="flex-grow h-px bg-gray-200 opacity-20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      {/* Regular Attributes Card */}
                      <div className={`p-12 rounded-[3rem] border transition-all group ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:shadow-2xl'}`}>
                        <div className="flex items-center gap-4 mb-10">
                           <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-aureole group-hover:text-white transition-colors">
                              <CheckCircle2 size={24} />
                           </div>
                           <h4 className={`text-sm font-black uppercase tracking-[0.3em] ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>Standard Attributes</h4>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                          {selectedProduct.regularAttributes?.map((attr, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-aureole/40 mt-1.5 shrink-0"></div>
                              <span className={`text-xs font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{attr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Add-ons Attributes Card */}
                      <div className={`p-12 rounded-[3rem] border transition-all group ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:shadow-2xl'}`}>
                        <div className="flex items-center gap-4 mb-10">
                           <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-aureole group-hover:text-white transition-colors">
                              <PlusCircle size={24} />
                           </div>
                           <h4 className={`text-sm font-black uppercase tracking-[0.3em] ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>Optional Modules</h4>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                          {selectedProduct.addOnsAttributes?.map((attr, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-aureole/40 mt-1.5 shrink-0"></div>
                              <span className={`text-xs font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{attr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* DATA MATRIX */}
                <div className="space-y-12 pt-8">
                  <div className="flex items-center gap-6">
                    <h3 className={`text-3xl font-black uppercase tracking-tight flex items-center gap-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <TableIcon size={32} className="text-aureole" /> Technical Data Matrix
                    </h3>
                    <div className="flex-grow h-px bg-gray-200 opacity-20"></div>
                  </div>
                  
                  <div className="space-y-16">
                    {selectedProduct.tables?.map((table, tIdx) => (
                      <div key={tIdx} className="animate-in slide-in-from-bottom-6 duration-700">
                        {renderTable(table, isDark)}
                        {table.footerNote && (
                          <p className={`mt-6 text-[11px] italic font-bold uppercase tracking-widest text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            {table.footerNote}
                          </p>
                        )}
                      </div>
                    ))}
                    <div className="text-center">
                       <p className={`text-[10px] font-medium uppercase tracking-[0.3em] ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                          * V** = variant based upon construction & body. Custom dimensions available.
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;