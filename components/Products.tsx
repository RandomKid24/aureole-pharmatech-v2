import React from 'react';
import { PRODUCT_STANDARDS, PRODUCT_CATALOG, CONTACT_INFO, NAV_LINKS } from '../constants';
import { Shield, FileCheck, CheckCircle2, ChevronRight, Hexagon, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative px-6 md:px-24 py-20 bg-white border-b border-gray-100 overflow-hidden">
         {/* Decorative Background Text */}
         <div className="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-black text-gray-50 pointer-events-none select-none z-0 leading-none opacity-50 transform translate-x-1/4 -translate-y-1/4">
            PRO
         </div>
         
         <div className="relative z-10 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8 uppercase">
              Our<br/><span className="text-aureole">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-12">
              Our products are manufactured according to international standards and regulatory requirements. Ensuring the highest standards of quality and regulatory compliance.
            </p>
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
            
            {/* Background Index Number */}
            <div className="absolute top-10 left-6 md:left-24 text-9xl font-black text-gray-200/50 pointer-events-none select-none">
              0{index + 1}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Category Header */}
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

              {/* Sub-Category Grid 
                  Logic: 
                  - If 4 items (standard): 4 columns on large screens.
                  - If 5 items (Furniture): 5 columns on XL screens (all in one row), 
                    or 3 columns on LG screens (3 top, 2 bottom) to avoid a single orphan.
              */}
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

      {/* ========================================================
          FOOTER (Light Theme)
         ======================================================== */}
      <footer className="w-full py-12 bg-gray-50 border-t border-gray-200 text-gray-900">
        <div className="container mx-auto px-6 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
             <div className="text-gray-500 text-sm leading-relaxed">
               <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-2">Headquarters</h4>
               <p>{CONTACT_INFO.address}</p>
               <p>{CONTACT_INFO.phone}</p>
               <p className="text-aureole">{CONTACT_INFO.email}</p>
             </div>
             
             {/* Quick Links */}
             <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                 <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-4 text-xs">Menu</h4>
                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map(link => (
                           <li key={link.label}>
                             <a href={link.href} className="text-gray-500 hover:text-aureole transition-colors text-sm">{link.label}</a>
                           </li>
                        ))}
                    </ul>
                 </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest pt-8 border-t border-gray-200">
             <div>&copy; 2024 Aureole Pharmatech. All rights reserved.</div>
             <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-aureole">Privacy</a>
               <a href="#" className="hover:text-aureole">Terms</a>
               <a href="#" className="hover:text-aureole">Sitemap</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;