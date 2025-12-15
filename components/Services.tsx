import React from 'react';
import { SERVICE_INTRO, SERVICE_FEATURES, SERVICE_LOCATIONS, CONTACT_INFO, NAV_LINKS } from '../constants';
import { Award, Headphones, Factory, Layers, Lightbulb, Globe, Users, Leaf, ArrowRight, MapPin } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Award, Headphones, Factory, Layers, Lightbulb, Globe, Users, Leaf
};

const Services: React.FC = () => {
  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative min-h-[70vh] w-full flex flex-col md:flex-row border-b border-gray-100">
         {/* Left: Text Content */}
         <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-24 py-20 relative overflow-hidden md:border-r border-gray-100">
            {/* Decorative Background Text */}
            <div className="absolute top-0 left-0 text-[12rem] md:text-[16rem] font-black text-gray-50 leading-none select-none -z-10 translate-x-[-20%] translate-y-[-20%]">
               SVC
            </div>
            
            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-12 bg-aureole"></div>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Global Support</span>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-8 leading-[0.9]">
                  Support &<br/><span className="text-aureole">Excellence</span>
               </h1>
               
               <p className="text-xl text-gray-600 leading-relaxed max-w-md border-l-4 border-aureole pl-6">
                 {SERVICE_INTRO.subtitle}
               </p>
            </div>
         </div>

         {/* Right: Image with Overlay */}
         <div className="w-full md:w-1/2 min-h-[50vh] relative bg-gray-900 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1581093588401-fbb073652748?q=80&w=2000&auto=format&fit=crop" 
              alt="Lab Technician" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Blue Brand Overlay */}
            <div className="absolute inset-0 bg-aureole/20 mix-blend-overlay pointer-events-none"></div>
            
            {/* Bottom Overlay Text */}
            <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-black/90 to-transparent">
               <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm uppercase tracking-widest text-gray-300">Operational Reliability</div>
               </div>
            </div>
         </div>
      </section>

      {/* ========================================================
          CORE CAPABILITIES MATRIX
         ======================================================== */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-16 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
             <div>
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                 Core <span className="text-aureole">Capabilities</span>
               </h2>
             </div>
             <div className="text-right hidden md:block">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Scroll to explore</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 bg-white shadow-sm">
            {SERVICE_FEATURES.map((feature, idx) => {
               const Icon = iconMap[feature.icon] || Award;
               return (
                 <div key={idx} className="group relative p-10 border-r border-b border-gray-200 hover:bg-surface transition-colors duration-500 min-h-[340px] flex flex-col justify-between overflow-hidden">
                    
                    {/* Hover Top Border Accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-aureole transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

                    {/* Header: Icon & Number */}
                    <div className="relative z-10 flex justify-between items-start">
                       <div className="p-3 bg-gray-50 text-aureole rounded-sm group-hover:bg-aureole group-hover:text-white transition-colors duration-500">
                          <Icon size={28} strokeWidth={1.5} />
                       </div>
                       <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 select-none">
                          0{idx + 1}
                       </span>
                    </div>

                    {/* Content: Title & Desc */}
                    <div className="relative z-10 mt-8">
                       <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4 group-hover:text-aureole transition-colors duration-500">
                          {feature.title}
                       </h3>
                       <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-500 line-clamp-4 group-hover:line-clamp-none">
                          {feature.description}
                       </p>
                    </div>

                    {/* Interactive Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                       <ArrowRight className="text-aureole" />
                    </div>
                 </div>
               )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE LOCATIONS (Black Background)
         ======================================================== */}
      <section className="bg-black text-white py-24 px-6 md:px-24">
         <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
               <div>
                  <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs tracking-widest uppercase text-aureole mb-4 font-bold">
                     Network
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                     Service <span className="text-aureole">Centers</span>
                  </h2>
               </div>
               <p className="text-gray-400 max-w-md border-l-2 border-aureole pl-6 leading-relaxed">
                  Strategically located across key industrial hubs to ensure rapid response and localized support for all our clients.
               </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
               {SERVICE_LOCATIONS.map((loc, idx) => (
                  <div key={idx} className="group cursor-default flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                     <div className="p-2 rounded-full bg-white/10 group-hover:bg-aureole transition-colors duration-300">
                        <MapPin size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                            {loc.city}
                        </h3>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>

      {/* ========================================================
          FOOTER (Light Theme - Matched to Landing Page)
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

export default Services;