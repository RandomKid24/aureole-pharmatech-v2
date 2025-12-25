import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Settings, 
  ChevronLeft, 
  ArrowRight, 
  ClipboardList,
  Target,
  Plus,
  Search,
  Info,
  Layers,
  ShieldCheck,
  Maximize2,
  Activity,
  Box,
  Cpu,
  Menu,
  X
} from 'lucide-react';
import { PRODUCT_CATALOG, DETAILED_PRODUCTS } from '../constants';
import { TechnicalTable } from '../types';

interface ProductsProps {
  onNavigate: (page: any) => void;
}

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);
  const [viewState, setViewState] = useState<'catalog' | 'explorer'>('catalog');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [selectedSubProduct, setSelectedSubProduct] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const contentStageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scroll to top when the selected sub-product changes
  useEffect(() => {
    if (contentStageRef.current) {
      contentStageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedSubProduct, activeCategoryId]);

  const handleExploreCategory = (id: string) => {
    setActiveCategoryId(id);
    setViewState('explorer');
    setSelectedSubProduct(null); // Default to category overview
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setViewState('catalog');
    setIsMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetToCategory = () => {
    setSelectedSubProduct(null);
    if (contentStageRef.current) {
      contentStageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentCategory = PRODUCT_CATALOG.find(c => c.id === activeCategoryId);
  const activeProduct = selectedSubProduct ? DETAILED_PRODUCTS[selectedSubProduct] : null;

  const renderTable = (table: TechnicalTable) => (
    <div className="w-full mt-6 md:mt-8 mb-10 overflow-x-auto scrollbar-hide border border-aureole/30 shadow-sm">
      <table className="w-full text-left border-collapse min-w-[700px] md:min-w-[900px]">
        <thead>
          <tr className="bg-aureole text-white">
            {table.headers.map((h, i) => (
              <th key={i} className="px-4 md:px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-aureole/10">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-aureole/5 transition-colors group">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={`px-4 md:px-5 py-4 text-[11px] font-semibold ${cIdx === 0 ? 'text-gray-900 bg-aureole/5 border-r border-aureole/10' : 'text-gray-600'}`}>
                  {cell === "✓" ? <CheckCircle2 size={16} className="text-aureole" /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.footerNote && (
        <div className="p-4 md:p-5 bg-white border-t border-aureole/20">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
            <span className="text-aureole mr-2 md:mr-4 font-black">REMARK:</span> {table.footerNote}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-surface w-full min-h-screen text-gray-900 selection:bg-aureole selection:text-white relative flex flex-col">
      
      {/* ARCHITECTURAL SPINE & GRID */}
      <div className="fixed top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50 pointer-events-none"></div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* ========================================================
            VIEW: CATALOG GRID
           ======================================================== */}
        {viewState === 'catalog' && (
          <div className="flex-grow">
            <section className="relative w-full min-h-screen flex flex-col overflow-hidden pt-32 md:pt-48 pb-20">
              <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
                 <span className="text-[40vw] font-black text-gray-900/5 leading-none">P</span>
              </div>

              <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
                <div className="flex flex-col items-start w-full">
                  
                  {/* Breadcrumbs */}
                  <div className={`flex items-center gap-3 mb-6 transition-all duration-700 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <button onClick={() => onNavigate('home')} className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-aureole transition-colors">HOME</button>
                    <span className="text-aureole font-black">/</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-900">PRODUCTS</span>
                  </div>

                  <div className={`mb-6 md:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="flex items-center gap-4">
                        <span className="w-12 h-px bg-aureole"></span>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                           Technical Asset Database • Precision v2.5
                        </span>
                     </div>
                  </div>

                  <div className="relative w-full">
                    <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                       <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                         DATA
                       </span>
                       <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                         CATALOG
                       </span>
                    </h1>
                  </div>

                  <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
                     <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="text-lg md:text-2xl text-gray-500 font-light leading-snug max-w-3xl">
                           Access our <span className="text-gray-900 font-medium">integrated technical ecosystem</span>. Every component is engineered for regulatory compliance and unmatched stability in critical pharmaceutical environments.
                        </p>
                     </div>
                     <div className="hidden lg:block lg:col-span-1"></div>
                     <div className={`lg:col-span-4 flex items-center justify-center lg:justify-end gap-12 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="text-right">
                           <span className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">150+</span>
                           <span className="text-[9px] uppercase tracking-widest text-gray-400 font-black block mt-1">Validated Assets</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="container mx-auto px-6 md:px-24 pb-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-aureole/20">
                 {PRODUCT_CATALOG.map((cat, idx) => (
                   <div 
                      key={cat.id} 
                      onClick={() => handleExploreCategory(cat.id)}
                      className="group p-8 md:p-14 border-b border-aureole/10 sm:border-r last:sm:border-r-0 lg:border-r lg:last:border-r-0 hover:bg-white transition-all duration-700 cursor-pointer flex flex-col min-h-[380px] md:min-h-[450px]"
                    >
                      <div className="flex justify-between items-start mb-10 md:mb-12">
                        <span className="text-[10px] font-black text-gray-300 tracking-[0.4em]">SERIES // 0{idx + 1}</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-aureole group-hover:text-white group-hover:border-aureole transition-all duration-500">
                          <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-all duration-500" />
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-[0.8] mb-6 group-hover:text-aureole transition-colors">{cat.title}</h3>
                      <p className="text-[12px] md:text-[13px] text-gray-400 font-light leading-relaxed mb-8 flex-grow max-w-xs">{cat.description}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        {cat.groups.slice(0, 3).map((g, gi) => (
                           <span key={gi} className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] bg-gray-50 px-2 py-1 text-gray-400 group-hover:bg-aureole/5 group-hover:text-aureole transition-all">{g.title}</span>
                        ))}
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW: TECHNICAL EXPLORER
           ======================================================== */}
        {viewState === 'explorer' && currentCategory && (
          <div className="flex flex-col h-screen overflow-hidden animate-in fade-in duration-500">
            
            <header className="h-16 md:h-20 border-b border-aureole/10 bg-white flex items-center px-4 md:px-12 shrink-0 z-40">
               <button onClick={goBack} className="p-3 md:p-4 mr-4 md:mr-8 border-r border-gray-100 hover:text-aureole transition-colors group">
                  <ChevronLeft size={20} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
               </button>
               <div className="flex-grow">
                  <h2 className="text-lg md:text-2xl font-black uppercase tracking-tighter text-gray-900 truncate pr-4">
                     {currentCategory.title}
                  </h2>
               </div>
               
               <button 
                 onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                 className="lg:hidden p-2 bg-gray-900 text-white rounded-none hover:bg-aureole transition-colors"
               >
                 {isMobileNavOpen ? <X size={18} /> : <Menu size={18} />}
               </button>

               <div className="hidden xl:flex items-center gap-8">
                  <div className="text-right">
                     <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Asset Ref.</span>
                     <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight truncate max-w-[150px] inline-block">{selectedSubProduct || 'CAT_OVERVIEW'}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div className="flex items-center gap-3">
                    <Activity className="text-aureole animate-pulse" size={16} />
                    <span className="text-[9px] font-black bg-gray-900 text-white px-3 py-1.5 uppercase tracking-widest">Validated</span>
                  </div>
               </div>
            </header>

            <div className="flex flex-grow overflow-hidden bg-white relative">
              
              <aside className={`
                absolute lg:static inset-0 lg:inset-auto z-30 lg:z-10
                w-full lg:w-72 xl:w-80 flex flex-col border-r border-aureole/10 bg-gray-50 shrink-0 overflow-y-auto scrollbar-hide
                transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              `}>
                <div className="p-4 bg-white border-b border-aureole/10 sticky top-0 z-10">
                   <div className="relative group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-aureole transition-colors" size={14} />
                      <input 
                        type="text" 
                        placeholder="FILTER ASSETS..." 
                        className="w-full bg-surface py-2.5 pl-10 text-[9px] font-black uppercase tracking-widest border border-transparent focus:border-aureole outline-none transition-all placeholder:text-gray-300" 
                      />
                   </div>
                </div>
                
                {currentCategory.groups.map((group, gIdx) => (
                  <div key={gIdx} className="border-b border-gray-100 last:border-b-0">
                     <h4 className="px-6 py-4 text-[8px] font-black text-gray-400 uppercase tracking-[0.4em] bg-gray-50/80 border-b border-gray-100 flex items-center gap-2">
                       <Box size={12} /> {group.title}
                     </h4>
                     <div className="flex flex-col">
                        {group.items.map((item, iIdx) => (
                          <button 
                            key={iIdx}
                            onClick={() => {
                              setSelectedSubProduct(item);
                              setIsMobileNavOpen(false);
                            }}
                            className={`w-full text-left py-4 px-6 text-[11px] font-black uppercase tracking-tight transition-all border-l-4 relative group/item ${selectedSubProduct === item ? 'bg-white text-aureole border-aureole' : 'text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-900'}`}
                          >
                             <div className="flex items-center justify-between">
                                <span className={`transition-all duration-300 ${selectedSubProduct === item ? 'translate-x-1' : ''}`}>{item}</span>
                                <ArrowRight size={12} className={`transition-all duration-500 ${selectedSubProduct === item ? 'opacity-100 translate-x-0 text-aureole' : 'opacity-0 -translate-x-3'}`} />
                             </div>
                          </button>
                        ))}
                     </div>
                  </div>
                ))}
              </aside>

              <main ref={contentStageRef} className="flex-grow overflow-y-auto bg-white scroll-smooth relative">
                <div className="p-6 md:p-12 lg:p-16 max-w-[1400px]">
                  
                  {/* EXPLORER BREADCRUMBS - FULLY FUNCTIONAL */}
                  <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-12 border-b border-gray-100 pb-6">
                    <button onClick={() => onNavigate('home')} className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-aureole transition-colors">HOME</button>
                    <span className="text-aureole font-black">/</span>
                    <button onClick={goBack} className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-aureole transition-colors">PRODUCTS</button>
                    <span className="text-aureole font-black">/</span>
                    <button onClick={resetToCategory} className={`text-[9px] font-black uppercase tracking-[0.4em] transition-colors ${!selectedSubProduct ? 'text-gray-900 cursor-default' : 'text-gray-400 hover:text-aureole'}`}>
                      {currentCategory.title}
                    </button>
                    {selectedSubProduct && (
                      <>
                        <span className="text-aureole font-black">/</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-900 truncate max-w-[150px]">{selectedSubProduct}</span>
                      </>
                    )}
                  </div>

                  {activeProduct ? (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                      <div className="flex flex-col xl:flex-row gap-10 lg:gap-16 mb-16 md:mb-24 border-b border-aureole/20 pb-12 md:pb-16 items-start">
                         <div className="flex-grow w-full">
                            <div className="flex items-center gap-2 text-aureole mb-4 md:mb-6">
                               <Layers size={16} />
                               <span className="text-[9px] font-black uppercase tracking-[0.5em]">Identity Profile v2</span>
                            </div>
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-gray-900 leading-[0.75] mb-8 md:mb-10">
                              {activeProduct.name}
                            </h3>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 font-light leading-snug mb-10 md:mb-14 border-l-4 border-aureole/10 pl-6 italic">
                               {activeProduct.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-14">
                               <div>
                                  <h5 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-3">
                                     <Target className="text-aureole" size={16} /> CAPABILITIES
                                  </h5>
                                  <ul className="space-y-4">
                                     {activeProduct.mainFeatures.map((f, i) => (
                                       <li key={i} className="flex items-start gap-3 group">
                                          <div className="w-1.5 h-1.5 rounded-full bg-aureole mt-1.5 shrink-0"></div>
                                          <span className="text-[11px] md:text-[12px] font-bold text-gray-800 uppercase tracking-tight leading-tight">{f}</span>
                                       </li>
                                     ))}
                                  </ul>
                               </div>
                               <div>
                                  <h5 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-3">
                                     <ShieldCheck className="text-aureole" size={16} /> STANDARDS
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                     {activeProduct.compliance.map((c, i) => (
                                       <span key={i} className="text-[9px] md:text-[10px] font-black border border-aureole/30 px-3 py-2 text-aureole hover:bg-aureole hover:text-white transition-all text-center">{c}</span>
                                     ))}
                                  </div>
                               </div>
                            </div>
                         </div>

                         <div className="w-full xl:w-[380px] shrink-0 sticky top-0 z-0">
                            <div className="aspect-[4/5] bg-surface border border-aureole/10 flex items-center justify-center p-8 overflow-hidden group shadow-sm">
                               <img 
                                 src={activeProduct.imageUrl || "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1000&auto=format&fit=crop"} 
                                 alt={activeProduct.name}
                                 className="max-h-full w-auto object-contain transition-transform duration-[2s] group-hover:scale-105"
                               />
                            </div>
                            <div className="mt-6 flex items-center gap-4 text-gray-300">
                               <div className="h-px flex-grow bg-aureole/10"></div>
                               <span className="text-[8px] font-black uppercase tracking-[0.5em] whitespace-nowrap">ASSET DATA</span>
                               <div className="h-px flex-grow bg-aureole/10"></div>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24 items-start">
                         <div className="lg:col-span-1">
                            <h5 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6 border-b border-aureole/10 pb-4 flex items-center gap-3">
                               <Settings size={16} className="text-aureole" /> CONFIGURATION
                            </h5>
                            <div className="space-y-0.5">
                               {activeProduct.specifications.map((s, i) => (
                                 <div key={i} className="py-3 border-b border-gray-100 flex flex-col gap-0.5 hover:bg-aureole/5 px-2 transition-colors group">
                                    <span className="text-[8px] font-black uppercase text-gray-400 tracking-widest group-hover:text-aureole transition-colors">{s.label}</span>
                                    <span className="text-[11px] font-bold text-gray-900 uppercase tracking-tight">{s.value}</span>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="lg:col-span-1 bg-gray-50/50 p-6 md:p-8 border border-gray-200">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 md:mb-8 flex items-center gap-3">
                               <div className="w-4 h-px bg-gray-300"></div> STANDARD ATTR.
                            </h5>
                            {activeProduct.regularAttributes && activeProduct.regularAttributes.length > 0 ? (
                              <div className="space-y-4">
                                 {activeProduct.regularAttributes.map((attr, idx) => (
                                   <div key={idx} className="flex items-center gap-3 group">
                                      <div className="w-6 h-px bg-gray-200 group-hover:bg-aureole transition-all duration-300"></div>
                                      <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest leading-tight">{attr}</span>
                                   </div>
                                 ))}
                              </div>
                            ) : (
                              <div className="py-8 flex flex-col items-center justify-center text-center opacity-20">
                                 <Info size={24} className="mb-2" />
                                 <p className="text-[8px] font-black uppercase tracking-widest">Included Baseline</p>
                              </div>
                            )}
                         </div>

                         <div className="lg:col-span-1 bg-aureole/5 p-6 md:p-8 border border-aureole/10">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-aureole mb-6 md:mb-8 flex items-center gap-3">
                               <Plus size={16} strokeWidth={3} /> ADD-ONS
                            </h5>
                            {activeProduct.addOnsAttributes && activeProduct.addOnsAttributes.length > 0 ? (
                              <div className="grid grid-cols-1 gap-2.5">
                                 {activeProduct.addOnsAttributes.map((attr, idx) => (
                                   <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-aureole/5 hover:border-aureole hover:shadow-md transition-all group">
                                      <Plus size={10} strokeWidth={4} className="text-aureole" />
                                      <span className="text-[10px] font-black text-gray-900 uppercase tracking-tight">{attr}</span>
                                   </div>
                                 ))}
                              </div>
                            ) : (
                              <div className="py-8 flex flex-col items-center justify-center text-center opacity-40">
                                 <Plus size={24} className="mb-2 text-aureole" />
                                 <p className="text-[8px] font-black uppercase tracking-widest text-aureole">Custom Modules Ready</p>
                              </div>
                            )}
                         </div>
                      </div>

                      {activeProduct.tables && activeProduct.tables.length > 0 && (
                        <div className="pt-16 md:pt-20 border-t-2 border-aureole mt-16 md:mt-24">
                           <div className="mb-10 md:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                              <div>
                                 <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-gray-900 leading-none">DATA<br/><span className="text-aureole">MATRIX</span></h2>
                                 <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mt-6 max-w-sm leading-relaxed">
                                    Full capacity sizing and technical validation logs.
                                 </p>
                              </div>
                              <div className="hidden xl:block">
                                 <ClipboardList size={140} strokeWidth={0.5} className="text-aureole/10" />
                              </div>
                           </div>

                           {activeProduct.tables.map((table, tIdx) => (
                             <div key={tIdx} className="mb-12 md:mb-20">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                   <span className="bg-aureole text-white px-4 py-2 text-[10px] font-black tracking-[0.3em]">SEC_0{tIdx + 1}</span>
                                   <h4 className="text-lg md:text-2xl font-black uppercase tracking-tight text-gray-900">{table.title}</h4>
                                </div>
                                {renderTable(table)}
                             </div>
                           ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="animate-in fade-in duration-1000 py-10">
                       <div className="flex flex-col gap-10">
                          <div>
                             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-aureole mb-4 block">Series Overview</span>
                             <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-gray-900 leading-[0.8] mb-10 max-w-4xl">
                                {currentCategory.title}
                             </h3>
                             <p className="text-xl md:text-3xl text-gray-400 font-light leading-snug max-w-4xl border-l-4 border-aureole/20 pl-8">
                                {currentCategory.description}
                             </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                             <div className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-8 flex items-center gap-4">
                                   <Box size={20} className="text-aureole" /> Available Sub-Groups
                                </h4>
                                <div className="grid grid-cols-1 gap-4">
                                   {currentCategory.groups.map((group, idx) => (
                                      <div key={idx} className="flex flex-col gap-1 border-b border-gray-200 pb-4 last:border-0">
                                         <span className="text-[9px] font-black text-aureole uppercase tracking-[0.2em]">{group.title}</span>
                                         <span className="text-sm font-bold text-gray-500 uppercase tracking-tight">
                                            {group.items.length} Engineering Assets
                                         </span>
                                      </div>
                                   ))}
                                </div>
                             </div>
                             <div className="flex flex-col justify-center items-center text-center p-12">
                                <div className="w-24 h-24 rounded-full bg-aureole/5 flex items-center justify-center mb-8">
                                   <Maximize2 size={40} className="text-aureole animate-pulse" />
                                </div>
                                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-300 max-w-xs leading-relaxed">
                                   Select a technical specification from the sidebar to view detailed validation data.
                                </p>
                             </div>
                          </div>
                       </div>
                    </div>
                  )}
                </div>
              </main>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;