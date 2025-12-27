import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Settings, 
  ChevronLeft, 
  Menu, 
  X, 
  Wrench, 
  Sun, 
  ClipboardList, 
  Layers, 
  PlusCircle,
  ArrowRight,
  Image as ImageIcon,
  LayoutGrid,
  ShieldCheck
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

  useEffect(() => {
    if (contentStageRef.current) {
      contentStageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedSubProduct, activeCategoryId]);

  const handleExploreCategory = (id: string) => {
    setActiveCategoryId(id);
    const cat = PRODUCT_CATALOG.find(c => c.id === id);
    if (cat && cat.groups.length > 0) {
      // Find the first item in this category that actually has a detailed entry
      const allItems = cat.groups.flatMap(g => g.items);
      const firstAvailable = allItems.find(item => !!DETAILED_PRODUCTS[item]) || allItems[0];
      setSelectedSubProduct(firstAvailable);
    }
    setViewState('explorer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setViewState('catalog');
    setIsMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCategory = PRODUCT_CATALOG.find(c => c.id === activeCategoryId);
  const activeProduct = selectedSubProduct ? DETAILED_PRODUCTS[selectedSubProduct] : null;

  const renderTable = (table: TechnicalTable) => (
    <div className="w-full mt-8 mb-12 overflow-x-auto border border-gray-100 rounded-2xl bg-white shadow-sm">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-gray-50/50">
            {table.headers.map((h, i) => (
              <th key={i} className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-100">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={`px-6 py-5 text-[12px] ${cIdx === 0 ? 'font-bold text-gray-900 border-r border-gray-50' : 'text-gray-500 font-light'}`}>
                  {cell === "✓" || cell === "Yes" ? <CheckCircle2 size={16} className="text-aureole" /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-surface w-full min-h-screen relative flex flex-col pt-20">
      
      {viewState === 'catalog' && (
        <div className="flex-grow">
          {/* Catalog Header */}
          <section className="relative w-full overflow-hidden pt-12 md:pt-24 pb-20 px-6 md:px-24">
            <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50 pointer-events-none"></div>
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
                 style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
            </div>
            <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
               <span className="text-[40vw] font-black text-gray-900/5 leading-none">P</span>
            </div>

            <div className="relative z-10">
              <div className={`flex items-center gap-3 mb-6 transition-all duration-700 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <button onClick={() => onNavigate('home')} className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-aureole transition-colors">HOME</button>
                <span className="text-aureole font-black">/</span>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-900">PRODUCTS</span>
              </div>
              <h1 className="text-[16vw] md:text-[12vw] font-black leading-[0.75] tracking-tighter text-gray-900 uppercase flex flex-col">
                 <span className="block">DATA</span>
                 <span className="block text-aureole self-end md:mr-20">CATALOG</span>
              </h1>
            </div>
          </section>

          <div className="container mx-auto px-6 md:px-24 pb-32 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-gray-200">
               {PRODUCT_CATALOG.map((cat, idx) => (
                 <div key={cat.id} onClick={() => handleExploreCategory(cat.id)} className="group p-10 border-b md:border-r border-gray-200 hover:bg-white transition-all cursor-pointer flex flex-col min-h-[400px]">
                    <span className="text-[10px] font-black text-gray-300 tracking-[0.4em] mb-12 uppercase">Series // 0{idx + 1}</span>
                    <h3 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mb-6 group-hover:text-aureole transition-colors">{cat.title}</h3>
                    <p className="text-sm text-gray-400 font-light mb-10 flex-grow leading-relaxed">{cat.description}</p>
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-300 group-hover:text-aureole transition-colors">
                      Explore Series <ArrowRight size={16} />
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}

      {viewState === 'explorer' && currentCategory && (
        <div className="flex flex-grow h-[calc(100vh-80px)] overflow-hidden">
          {/* Navigation Spine */}
          <aside className={`
            absolute lg:static inset-0 lg:inset-auto z-40 lg:z-10
            w-full lg:w-[320px] flex flex-col bg-white shrink-0 overflow-y-auto
            transition-all duration-500 border-r border-gray-100
            ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <div className="px-10 py-10 border-b border-gray-50">
               <button onClick={goBack} className="flex items-center gap-2 text-aureole text-[10px] font-black uppercase tracking-[0.2em] mb-6 hover:-translate-x-1 transition-transform">
                  <ChevronLeft size={14} strokeWidth={3} /> Back to Catalog
               </button>
               <h2 className="text-2xl font-black text-gray-900 leading-tight uppercase tracking-tighter">{currentCategory.title}</h2>
            </div>
            
            <div className="flex flex-col py-6">
              {currentCategory.groups.map(group => (
                <div key={group.title}>
                  <div className="px-10 py-4 bg-gray-50/50">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{group.title}</span>
                  </div>
                  {group.items.map((item, iIdx) => (
                    <button 
                      key={iIdx}
                      onClick={() => { setSelectedSubProduct(item); setIsMobileNavOpen(false); }}
                      className={`w-full text-left py-4 px-10 text-[11px] font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-between group ${selectedSubProduct === item ? 'text-aureole bg-blue-50/50 border-r-4 border-aureole' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50/50'}`}
                    >
                       <span className={!DETAILED_PRODUCTS[item] ? 'opacity-40 italic' : ''}>{item}</span>
                       <Sun size={12} className={`transition-transform duration-500 ${selectedSubProduct === item ? 'rotate-90 text-aureole' : 'text-gray-200 group-hover:rotate-45'}`} />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </aside>

          {/* Content Stage */}
          <main ref={contentStageRef} className="flex-grow overflow-y-auto scroll-smooth bg-[#F8F9FA] p-8 md:p-16 relative">
            <div className="lg:hidden fixed bottom-10 right-10 z-50">
               <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="w-16 h-16 bg-aureole text-white rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90">
                  {isMobileNavOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>

            {activeProduct ? (
              <div className="max-w-6xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                
                {/* Header Section */}
                <div className="mb-16">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="h-px w-12 bg-aureole"></span>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aureole">Asset Showcase</span>
                   </div>
                   <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900 mb-8 leading-[0.9]">{activeProduct.name}</h1>
                   <p className="text-lg text-gray-500 font-light leading-relaxed max-w-4xl mb-8">{activeProduct.description}</p>
                   
                   {activeProduct.compliance && activeProduct.compliance.length > 0 && (
                     <div className="flex flex-wrap gap-3">
                        {activeProduct.compliance.map((std, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm">
                            <ShieldCheck size={14} className="text-aureole" />
                            <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">{std}</span>
                          </div>
                        ))}
                     </div>
                   )}
                </div>

                {/* Media & Key Specs Showcase (Only if data exists) */}
                {(activeProduct.imageUrl || (activeProduct.specifications && activeProduct.specifications.length > 0)) && (
                  <div className="mb-16 bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 aspect-square relative rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center">
                        {activeProduct.imageUrl ? (
                          <img 
                            src={activeProduct.imageUrl} 
                            alt={activeProduct.name} 
                            className="w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-1000 hover:scale-110" 
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-4 text-gray-200">
                            <ImageIcon size={120} strokeWidth={1} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Technical Image Pending</span>
                          </div>
                        )}
                    </div>
                    
                    {activeProduct.specifications && activeProduct.specifications.length > 0 && (
                      <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-10 h-10 bg-aureole/10 rounded-xl flex items-center justify-center text-aureole">
                              <Settings size={20} />
                          </div>
                          <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Key Specifications</h3>
                        </div>
                        <div className="space-y-4">
                          {activeProduct.specifications.map((spec, sIdx) => (
                            <div key={sIdx} className="flex justify-between items-end border-b border-gray-50 pb-3 group">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-aureole transition-colors">{spec.label}</span>
                                <span className="text-sm font-bold text-gray-900 text-right">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Accessories Gallery Grid (Crucial for Table Top Instruments) */}
                {activeProduct.galleryItems && activeProduct.galleryItems.length > 0 && (
                  <div className="mb-24 animate-in fade-in duration-1000">
                    <div className="flex items-center gap-4 mb-10">
                       <LayoutGrid className="text-aureole" size={24} />
                       <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Accessory Components</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                       {activeProduct.galleryItems.map((item, gIdx) => (
                         <div key={gIdx} className="group bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                            <div className="aspect-square bg-gray-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                               <img 
                                 src={item.imageUrl} 
                                 alt={item.label} 
                                 className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" 
                               />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 block text-center leading-tight">
                              {item.label}
                            </span>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

                {/* Attributes & Add-ons Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                  {((activeProduct.regularAttributes && activeProduct.regularAttributes.length > 0) || 
                    (activeProduct.mainFeatures && activeProduct.mainFeatures.length > 0)) && (
                    <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-700">
                       <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-aureole">
                             <Layers size={24} />
                          </div>
                          <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Standard Attributes</h3>
                       </div>
                       <ul className="space-y-5">
                          {(activeProduct.regularAttributes || activeProduct.mainFeatures || []).map((attr, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                               <div className="w-2 h-2 rounded-full bg-aureole mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(15,133,197,0.4)] group-hover:scale-125 transition-transform"></div>
                               <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors leading-snug">{attr}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                  )}

                  {(activeProduct.addOnsAttributes && activeProduct.addOnsAttributes.length > 0) && (
                    <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-700">
                       <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-aureole">
                             <PlusCircle size={24} />
                          </div>
                          <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Optional Add-Ons</h3>
                       </div>
                       <ul className="space-y-5">
                          {activeProduct.addOnsAttributes.map((attr, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                               <div className="w-2 h-2 rounded-full bg-aureole mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(15,133,197,0.4)] group-hover:scale-125 transition-transform"></div>
                               <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors leading-snug">{attr}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                  )}
                </div>

                {/* Performance Data Tables */}
                {activeProduct.tables && activeProduct.tables.length > 0 && (
                  <div className="mt-32">
                    <div className="flex items-center gap-4 mb-12">
                       <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-gray-900/10">
                          <ClipboardList size={24} />
                       </div>
                       <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Performance Matrix</h3>
                    </div>
                    {activeProduct.tables.map((table, tIdx) => (
                      <div key={tIdx} className="mb-16">
                        <div className="flex flex-col mb-6">
                           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">0{tIdx + 1} // {table.title}</h4>
                           {table.footerNote && <p className="text-[10px] text-aureole font-bold uppercase tracking-wider mt-1 italic">{table.footerNote}</p>}
                        </div>
                        {renderTable(table)}
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer CTA */}
                <div className="mt-32 border-t border-gray-200 pt-16 flex flex-col md:flex-row items-center justify-between gap-12 mb-32 bg-white p-12 md:p-20 rounded-[4rem] shadow-sm">
                   <div className="max-w-xl text-center md:text-left">
                      <h3 className="text-4xl md:text-5xl font-black uppercase text-gray-900 mb-4 tracking-tighter">Precision in Every Build</h3>
                      <p className="text-gray-400 font-light text-lg">Download detailed technical sheets or request a customized quotation for your facility.</p>
                   </div>
                   <button className="px-12 py-6 bg-aureole text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-900 transition-all rounded-full shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-4 whitespace-nowrap">
                      Request Quotation <ArrowRight size={18} />
                   </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full items-center justify-center text-center opacity-10 py-32">
                 <Wrench size={100} className="text-gray-400 mb-10" strokeWidth={1} />
                 <h3 className="text-5xl font-black uppercase tracking-tighter text-gray-900">Select Precision Asset</h3>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default Products;